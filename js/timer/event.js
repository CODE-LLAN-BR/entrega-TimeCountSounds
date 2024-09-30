import * as el from "./elements.js"
import * as actions from './actions.js'

//click events


export function timerCommands(){

    el.controls.addEventListener('click',(event)=>{
        
        const action = event.target.dataset.action
        if(typeof actions[action] !== "function"){     
        
            return
        }

        actions[action]()
    })
}


export function soundExplorer(){
    
    el.explorer.addEventListener('click',(event)=>{

        const action = event.target.dataset.action
          if(typeof actions[action] !== "function") {

                return
          } 

          actions[action]()
    })

    
}
