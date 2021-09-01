import area from './Area.js';
import box from './Box.js'
import camera from './Camera.js';
import coin from './Coints.js';
import eventBus from './EventBus.js';
import keyListener from './KeyListener.js';
import light from './Light.js';
import machine from './LoopMachine.js';
import plane from './Plane.js';
import renderer from './Renderer.js';
import resize from './Resize.js';
import scene from './Scene.js';
import sky from './Sky.js';
import soundHandler from './sound/SoundHandler.js';
import wall from './Wall.js';
import './Bootstrap.js'

scene.add(box)
camera.position.set(0, 1.8, -3)
camera.lookAt(box.position)
scene.add(light)
scene.add(plane)
scene.add(sky)
scene.add(wall)
scene.add(area)
// scene.fog = new THREE.Fog(0xcce0ff, 5, 30);
scene.fog = new THREE.FogExp2(0xcce0ff, 0.05);
keyListener.setCaster((data) => {
    eventBus.dispatch('keyListener', data)
})
document.querySelector('button').addEventListener('click',()=>{
    document.body.querySelector('h1').innerText = 'Press "W A S D"'
    document.body.querySelector('button').remove()
    //
    keyListener.start()
    machine.start()
    resize.start(renderer)
    coin.start()
    soundHandler.setAsLoop('environment')
    soundHandler.setVolume('environment', .3)
    soundHandler.play('environment')
})
