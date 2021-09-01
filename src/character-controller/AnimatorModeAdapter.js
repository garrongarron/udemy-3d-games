import Animator from "../Animator.js"

class AnimatorModeAdapter {
    constructor(mesh, modes) {
        this.modes = modes
        this.mode = 'normal'
        this.animator = new Animator(mesh)
    }
    setMode(mode) {
        this.mode = mode
    }
    run(animationName) {
        if (!this.modes[this.mode]) return
        if (!this.modes[this.mode][animationName]) return
        let animationId = this.modes[this.mode][animationName][0]
        let timeScale = this.modes[this.mode][animationName][1]
        let cycleFlag = this.modes[this.mode][animationName][2]
        this.animator.action(animationId, timeScale, cycleFlag)
    }
    start() {
        this.animator.start()
    }
    stop() {
        this.animator.stop()
    }
}

export default AnimatorModeAdapter