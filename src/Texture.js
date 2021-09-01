
const texture = {}

texture.ground = new Promise((res,rej)=>{
    const loader = new THREE.TextureLoader()
    loader.load( 'img/ground.jpg', (texture)=>{
        res(texture)
    });
})

texture.sky = new Promise((res,rej)=>{
    const loader = new THREE.TextureLoader()
    loader.load( 'img/sky2.jpg', (texture)=>{
        res(texture)
    });
})

texture.wall = new Promise((res,rej)=>{
    const loader = new THREE.TextureLoader()
    loader.load( 'img/sky2.jpg', (texture)=>{
        res(texture)
    });
})

export default texture
