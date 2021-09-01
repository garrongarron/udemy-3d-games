const geometry = new THREE.BoxGeometry(6, .2, 4);
const material = new THREE.MeshPhongMaterial({ color: 0xffff00 });
const area = new THREE.Mesh(geometry, material);
area.position.y = .1 //up
area.position.z = 4  //up
area.material.transparent = true
area.material.opacity = 0//.5

export default area