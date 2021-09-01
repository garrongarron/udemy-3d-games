const geometry = new THREE.SphereGeometry( 50, 30, 30 );
const material = new THREE.MeshBasicMaterial( { color: 0x87ceeb ,  side: THREE.BackSide} );
const sky = new THREE.Mesh( geometry, material );

export default sky