import area from './Area.js';
import box from './Box.js'
import camera from './Camera.js';
import CharacterController from './character-controller/CharacterController.js';
import Xbot from './character/Xbot.js';
import coin from './Coints.js';
import machine from './LoopMachine.js';
import plane from './Plane.js';
import renderer from './Renderer.js';
import scene from './Scene.js';
import sky from './Sky.js';
import soundHandler from './sound/SoundHandler.js';
import texture from './Texture.js';

texture.sky.then(map => {
    sky.material.map = map
    sky.material.map.wrapS = THREE.RepeatWrapping;
    sky.material.map.wrapT = THREE.RepeatWrapping;
    sky.material.map.repeat.set(70, 50)
    sky.material.needsUpdate = true
})
texture.ground.then(map => {
    plane.material.map = map
    plane.material.map.wrapS = THREE.RepeatWrapping;
    plane.material.map.wrapT = THREE.RepeatWrapping;
    plane.material.map.repeat.set(10, 10)
    plane.material.needsUpdate = true
    plane.rotation.x += Math.PI * .5
})

let characterController = null
machine.addCallback(() => {
    if (characterController) characterController.run()
    box.rotation.y += 0.01
    renderer.render(scene, camera);
})
Xbot.then(mesh => {
    scene.add(mesh)
    mesh.modes = Xbot.modes
    characterController = new CharacterController(mesh)
    characterController.start()
    //
    characterController.collisionWith(box)
    box.coins = 0
    characterController.onTriggerEnter(box, () => {
        box.material.color = new THREE.Color(0xff00000)//RED
        box.coins++
        coin.add()//display coin increment
        if (box.coins > 2) {
            characterController.collisionWithUndo(box)
            setTimeout(() => {
                document.body.querySelector('h1').innerText = 'Well done!'
                soundHandler.play('win')
            }, 500)
            let flag = false
            setInterval(() => {
                document.body.querySelector('h1').innerText = (flag)?'Shift to run!':'Tab to switch camera!'
                flag = !flag
            }, 5000)
        }
        soundHandler.play('coin')
    })
    characterController.onTriggerExit(box, () => {
        box.material.color = new THREE.Color(0xffff00)//YELLOW  
    })
    characterController.collisionWith(area)
    characterController.onTriggerEnter(area, () => {
        if (box.coins != 0) return characterController.collisionWithUndo(area)
        document.body.querySelector('h1').innerText = 'Press space key to jump'
        setTimeout(() => {
            document.body.querySelector('h1').innerText = ''
        }, 3000);
    })
})