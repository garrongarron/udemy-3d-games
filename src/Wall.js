import texture from "./Texture.js";

const geometry = new THREE.BoxGeometry(6, 3, .3);
// const geometry = new THREE.BoxGeometry(100, 1, 100);
const material = new THREE.MeshPhongMaterial();
const wall = new THREE.Mesh(geometry, material);
wall.castShadow = true; //default is false
wall.position.y = 1.5 //up

const wallGroup = new THREE.Group();

texture.wall.then(map => {
    wall.material.map = map
    wall.material.map.wrapS = THREE.RepeatWrapping;
    wall.material.map.wrapT = THREE.RepeatWrapping;
    wall.material.map.repeat.set(2, 2)
    wall.material.needsUpdate = true
    for (let index = 0; index < 10; index++) {
        let tmp = wall.clone()
        wallGroup.add(tmp)
        tmp.position.z = index * 4 + 2
    }
})

export default wallGroup