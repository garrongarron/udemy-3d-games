const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap //|| THREE.PCFShadowMap || THREE.PCFSoftShadowMap || THREE.VSMShadowMap ; 
export default renderer