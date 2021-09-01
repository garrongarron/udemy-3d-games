const geometry = new THREE.PlaneGeometry( 100, 100 );
const material = new THREE.MeshStandardMaterial( {color: 0xffff00, side: THREE.BackSide} );
const plane = new THREE.Mesh( geometry, material );
plane.receiveShadow = true; //default

export default plane