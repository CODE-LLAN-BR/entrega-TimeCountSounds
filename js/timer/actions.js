import state from "./state.js"
import * as el from './elements.js'
import * as timer from './logicTimer.js'
import * as sound from './sound.js'

let min = 0

export function toggleRunning(){
    


    el.html.classList.toggle('running')
    
    if(el.html.classList == 'running'){
        state.running = true
        sound.toggleClick.play()

    }else{
        state.running = false
        sound.toggleClick.play()
        
    }
    timer.countdown()

}

export function reset() {
     

     state.running = false
     el.html.classList.remove('running')
     timer.updateDisplay()
     sound.resetClick.play()

     

}

export function addFive() {
    state.running = false
    el.html.classList.remove('running')
    
    if(min >= 60){
        return
    }

    min += 5
    el.minutes.textContent = String(min).padStart(2, '0')
    el.seconds.textContent = String(0).padStart(2, '0')
    
    document.querySelector('body').classList.remove('bg-red')
    
}

export function subFive() {
    state.running = false
    el.html.classList.remove('running')
    
    if(min <= 0 ){
        el.seconds
        return
    }

    min -= 5
    minutes.textContent = String(min).padStart(2, '0')
    el.seconds.textContent = String(0).padStart(2, '0')
    
    document.querySelector('body').classList.remove('bg-red')

}

export function forestFun(){
    el.forest.classList.toggle('vibrate')
    
    if(el.forest.classList.contains('vibrate')){
        sound.bgForest.play()
    }else{
        sound.bgForest.pause()
    }
    
}

export function rainFun(){
    el.rain.classList.toggle('vibrate')

    if(el.rain.classList.contains('vibrate')){
        sound.bgRain.play()
    }else{
        sound.bgRain.pause()
    }

}

export function subwayFun(){
    el.subway.classList.toggle('vibrate')

    if(el.subway.classList.contains('vibrate')){
        sound.bgSubway.play()
    }else{
        sound.bgSubway.pause()
    }

}

export function fireFun(){ 
    el.firePlace.classList.toggle('vibrate')


    if(el.firePlace.classList.contains('vibrate')){
        sound.bgFirePlace.play()
    }else{
        sound.bgFirePlace.pause()
    }

}


