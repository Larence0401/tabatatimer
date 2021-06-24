import React, { useEffect, useState } from "react"
import '../App.css'

const Display = ({time,timeIsRunning,initTime, sessionStopped, tabatas, cycles, paused, work, rest, prep, hasStarted}) => {

let completed = false

const [stage,setStage] = useState("prep")
const [stageTime, setStageTime] = useState(0)
const startTime = tabatas * cycles * (work + rest) + prep
let timePassed = startTime - time



    const determineStage = () => {
        let stage = ""
        let modulus = ((work + rest + timePassed) % (work + rest)) - prep
        if(timePassed < 10) {
                setStage("prep")
        } else if( modulus <= 20 && modulus >= 0) {
                setStage("workout")
        } else if(modulus < 0) {
                setStage("rest")
        } else if(timePassed === (work + rest) * cycles) {
                setStage("completed")
        }
        return stage
    }

    const timer = () => {
            if(stage === "prep") {
                    setStageTime(prep - timePassed)
            } else if(stage === "workout") {
                    setStageTime(work - (work + rest + timePassed - prep) % (work + rest))
            } else if(stage === "rest") {
                setStageTime(rest-((work + rest + timePassed - prep) % (work + rest) - work))
            } 
    }

    const displayStage = () => {
        if(!hasStarted) {
            return "tabata"
        } else if(stage === "prep") {
            return "prepare"
        } else if(stage === "workout") {
            return "work"
        } else if(stage === "rest") {
            return "rest"
        }
    }

    const displayCycles = () => {
        console.log("time: " + time + ", tabatas: " + tabatas + ", work+rest: " + (work+rest))
        return(
        !hasStarted ?
        cycles :
        Math.ceil(  (time - prep + rest) / (tabatas *(work + rest))  ) > cycles ?
        cycles:
        Math.ceil(  (time - prep + rest) / (tabatas *(work + rest))  ))
        //Math.ceil(  ((tabatas * cycles * (work + rest)) - (time - prep + rest)) / (work + rest)  ))
    }

    const displayTabatas = () => {
        //return Math.floor((time - prep) / ((work + rest)*cycles)) + 1
        return 4
    }
    
    const displayedTime = !hasStarted ? startTime : stageTime
    const displayedCycles = cycles
    const displayedTabatas = tabatas
    const minutes = Math.floor(displayedTime / 60)
    const seconds = (displayedTime - 60*minutes) > 9 ? 
                        displayedTime - 60*minutes :
                        "0" + (displayedTime - 60*minutes)
    const isPaused = () => !timeIsRunning && hasStarted
    let blinking = "blinking"

    useEffect(() => {
        determineStage()
        timer()
        isPaused()
    },[time,sessionStopped,stage,paused,hasStarted])


    return(
        <>
            <div id="tabata" className={displayStage()}>
              <div className="label">{displayStage()}</div>
              <div id="tabata-length" className={isPaused() && blinking}>{minutes}:{seconds}</div>
            </div>
            <div id="cycles">
                <div className="big-number">{displayCycles()}</div>
                <div className="label">cycles</div>
            </div>
            <div id="tabatas">
                <div className="big-number">{displayedTabatas}</div>
                <div className="label">tabatas</div>
            </div>
        </>
    )
}

export default Display