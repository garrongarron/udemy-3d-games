import camera from "../Camera.js"

class CameraController {
    setPlayer(player) {
        this.player = player
        this.player.camera = this
        this.target = new THREE.Vector3()
        this.types = {
            battle: this.battle.bind(this),//far
            dialog: this.dialog.bind(this),//near
        }
        this.type = this.types.battle
        this.flag = false
    }
    swticher(data) {
        if (data[0] == 9 && data[1]) {//tab
            this.flag = !this.flag
            this.type = (!this.flag) ? this.types.battle : this.types.dialog
        }
    }
    run() {
        if(this.player.obtacle) return
        this.type()
    }
    battle() {
        camera.position.x = this.player.mesh.position.x - 0
        camera.position.z = this.player.mesh.position.z - 4
        camera.position.y = this.player.mesh.position.y + 4
        this.target.set(this.player.mesh.position.x, this.player.mesh.position.y + 1, this.player.mesh.position.z)
        camera.lookAt(this.target)
    }
    dialog() {
        camera.position.x = this.player.mesh.position.x -1
        camera.position.z = this.player.mesh.position.z - 1.5
        camera.position.y = this.player.mesh.position.y + 1.8
        this.target.set(this.player.mesh.position.x -1, this.player.mesh.position.y + 1.5, this.player.mesh.position.z)
        camera.lookAt(this.target)
    }
    start() {
        this.player.eventBus.subscribe('keyListener', this.swticher.bind(this))
    }
    stop() {
        this.player.eventBus.unSubscribe('keyListener', this.swticher.bind(this))
    }
}
export default CameraController