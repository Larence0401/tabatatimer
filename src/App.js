import './App.css';
import React, {useState, useEffect} from "react"
import Display from "./components/Display"
import Settings from "./components/Settings"

function App() {
     
     
     
     const [initTime, setInitTime] = useState(250)
     const [timeRemaining, setTimeRemaining] = useState(initTime)
     const [timeIsRunning, settimeIsRunning] = useState(false)
     const [counterPaused, setCounterPaused] = useState(false)
     const [sessionStopped, setSessionStopped] = useState(false)
     const [tabatas, setTabatas] = useState(4)
     const [cycles, setCycles] = useState(8)
     const [prepTime, setPrepTime] = useState(10)
     const [workoutTime, setWorkoutTime] = useState(20)
     const [restTime, setRestTime] = useState(10)
     const [targetParam, setTargetParam] = useState(tabatas)
     const [hasStarted, setHasStarted] = useState(false)

     const startTime = tabatas * cycles * (workoutTime + restTime) + prepTime

  
     

    useEffect(() => {
      settimeIsRunning(false)
      //setTimeRemaining(initTime)
      setCounterPaused(false)
      setTabatas(1)
      setCycles(8)
      setPrepTime(10)
      setWorkoutTime(20)
    },[sessionStopped])

     const startTimer = () => {
          if(!hasStarted) {
            setTimeRemaining(startTime)
          }
           setHasStarted(true)
           settimeIsRunning(x => !x)   
           if(timeRemaining < initTime) {
                setCounterPaused(x => !x)
           }
     }

     const stopTimer = () => {
          setSessionStopped(true)
          clearTimeout(timer)
          setHasStarted(false)
          setTabatas(1)
          setCycles(8)
          setWorkoutTime(20)
          setRestTime(10)
          setPrepTime(10)
          settimeIsRunning(false)
          setCounterPaused(false)
          
     }


     const setParam = param => {
        setTargetParam(param)
        console.log(param)
     }

     const calculateTotalTime = () => {
        setInitTime(prepTime + (tabatas * cycles * (workoutTime + restTime)))
        console.log(prepTime + (tabatas * cycles * (workoutTime + restTime)))
     }

     const increase = () => {
          switch(targetParam) {
            case 'prepare': setPrepTime(t => t + 1)
            console.log(prepTime)
            break
            case 'work': setWorkoutTime(t => t + 1)
            console.log(workoutTime)
            break
            case 'rest': setRestTime(t => t + 1)
            break
            case 'cycles': setCycles(c => c + 1)
            break
            case 'tabatas': setTabatas(t => t + 1)
            break
            default: setPrepTime(t => t + 1)
          }   
           calculateTotalTime()       
     }

     const decrease = () => {
      switch(targetParam) {
            case 'prepare': setPrepTime(t => t - 1)
            console.log(prepTime)
            break
            case 'work': setWorkoutTime(t => t - 1)
            console.log(workoutTime)
            break
            case 'rest': setRestTime(t => t - 1)
            break
            case 'cycles': setCycles(t => t - 1)
            break
            case 'tabatas': setTabatas(t => t - 1)
            break
      }           
      calculateTotalTime()
 }


     let timer = ""

     useEffect(() => {
      
           timer = setTimeout(() => {
            if(timeIsRunning) {
                  setTimeRemaining(prevTime => prevTime - 1)
                  console.log("cycles: " + cycles) }
              }, 1000);
       
  },[timeRemaining, timeIsRunning])

  return (
    <div id="container">
        <Display 
          time={timeRemaining}
          timeIsRunning={timeIsRunning} 
          initTime={initTime}   
          tabatas={tabatas}  
          cycles={cycles}
          work={workoutTime}
          rest={restTime}
          prep={prepTime}
          paused={counterPaused}
          hasStarted={hasStarted}
        />
        <Settings 
            startTimer={startTimer} 
            stopTimer={stopTimer}
            timeIsRunning={timeIsRunning}
            time={timeRemaining}
            initTime={initTime}
            paused={counterPaused}
            increase={increase}
            decrease={decrease}
            setTargetParam={setParam}
            prepTime={prepTime}
            workoutTime={workoutTime}
            restTime={restTime}
            cycles={cycles}
            tabatas={tabatas}
            hasStarted={hasStarted}
            />
    </div>
  )
}

export default App
