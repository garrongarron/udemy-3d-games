import { directionalLight } from "../Light.js"
import scene from "../Scene.js"

class ShadowController {
    setPlayer(player) {
        this.player = player
        scene.add(directionalLight.target)
    }
    run() {
        directionalLight.position.set(
            this.player.mesh.position.x + 5,
            this.player.mesh.position.y + 5,
            this.player.mesh.position.z - 2
        )
        directionalLight.target.position.set(
            this.player.mesh.position.x,
            this.player.mesh.position.y,
            this.player.mesh.position.z
        )
        // directionalLight.target.updateMatrixWorld() 
    }
}
export default ShadowController