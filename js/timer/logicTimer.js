import state from "./state.js"
import * as el from "./elements.js"
import * as act from "./actions.js"
import { blast } from "./sound.js"

//countdown logic
export function countdown(){
    
    document.querySelector('body').classList.remove('bg-red')
    
    clearTimeout(state.countdownId)

    if(state.running === false){
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--
    
    if(seconds < 0) {
        seconds = 59
        minutes--
    }

    if(minutes < 0) {
        blast.play()
        document.querySelector('body').classList.add('bg-red')
        act.reset()
        
        return 

    }
    
    updateDisplay(minutes,seconds)

    state.countdownId = setTimeout(() => countdown(),1000)

}

//application time link
export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")
}