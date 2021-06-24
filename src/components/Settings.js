import React, {useEffect} from "react"
import '../App.css'

const Settings = (props) => {

    const isPaused = !props.timeIsRunning && props.time !== props.initTime
    //const hasStarted = props.time !== props.initTime
    const hide = "hide"
    const visible = props.hasStarted ? "show" : "hide"
    console.log("settings component:" + props.timeIsRunning)

    

    

    return(
        <div id="settings">
            <div className={`setters ${props.hasStarted && "hide"}`}>
                <div className="param" onClick={() => props.setTargetParam("prepare")}><span>prepare</span><span>{props.prepTime}</span></div>
                <div className="param" onClick={() => props.setTargetParam("work")}><span>work</span><span>{props.workoutTime}</span></div>
                <div className="param" onClick={() => props.setTargetParam("rest")}><span>rest</span><span>{props.restTime}</span></div>
                <div className="param"  onClick={() => props.setTargetParam("cycles")}><span>cycles</span><span>{props.cycles}</span></div>
                <div className="param"  onClick={() => props.setTargetParam("tabatas")}><span>tabatas</span><span>{props.tabatas}</span></div>
                <div className="param btns">
                        <div className="modify" id="minus" onClick={props.decrease}>-</div>
                        <div className="modify" id="plus" onClick={props.increase}>+</div>
                </div>
              </div>
              <div className={`param ${visible}`} id="stop" onClick={props.stopTimer}>stop</div>
              <div className="param" id="start" onClick={props.startTimer}>
                  {!props.timeIsRunning && !props.paused ? 
                  "start" :
                  !props.timeIsRunning && props.time !== props.initTime ?
                  "resume":
                  "pause"}
              </div>   
        </div>
    )
}

export default Settings