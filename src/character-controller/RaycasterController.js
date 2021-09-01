import wallGroup from "../Wall.js";

class RaycasterController {
    setPlayer(player) {
        this.player = player
        this.player.obtacle = false
        this.v2 = new THREE.Vector2();
    }
    run() {
        this.v2.set(-this.player.x, this.player.y).normalize()
        var direction = new THREE.Vector3(this.v2.x, 0, this.v2.y)
        const raycaster1 = new THREE.Raycaster(this.player.mesh.position, direction, 0, .6);
        this.player.obtacle = false
        const intersects = raycaster1.intersectObjects(wallGroup.children);
        if (intersects.length) { // > than 0
            this.player.obtacle = true
        }
    }
}

export default RaycasterController