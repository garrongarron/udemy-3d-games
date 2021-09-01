class LoopMachine {
    constructor() {
        this.flag = false
        this.callbacks = []
    }
    addCallback(callback){
        this.callbacks.push(callback)
    }
    removeCallback(callback){
        this.callbacks = this.callbacks.filter(cb => cb!= callback)
    }
    run() {
        if (!this.flag) return
        this.callbacks.forEach(cb => cb())
        requestAnimationFrame(this.run.bind(this))
    }
    start() {
        if (this.flag) return
        this.flag = true 
        this.run()
    }
    stop() {
        this.flag = false
    }
}

const machine = new LoopMachine()

export default machine