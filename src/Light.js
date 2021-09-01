import scene from "./Scene.js";

const light = new THREE.AmbientLight(0x404040);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
light.add(directionalLight)
directionalLight.position.set(0, 5, -5)
directionalLight.castShadow = true; // default false
directionalLight.shadow.mapSize.width = 512 * 8; // default
directionalLight.shadow.mapSize.height = 512 * 8; // default
directionalLight.shadow.camera.near = 0.5; // default
directionalLight.shadow.camera.far = 500; // default
let size = 15 // default 5 
directionalLight.shadow.camera.top = size;
directionalLight.shadow.camera.bottom = -size*4;
directionalLight.shadow.camera.left = -size*4;
directionalLight.shadow.camera.right = size;
directionalLight.target.position.set(0, 0, 0)
// const helper = new THREE.DirectionalLightHelper(directionalLight, 1);
// scene.add(helper);
// const helper2 = new THREE.CameraHelper(directionalLight.shadow.camera);
// scene.add(helper2);
export default light
export { directionalLight }