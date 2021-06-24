TIMER FUNCTIONALITY

- Display field shows work and rest periods
        - button displays "pause" once timer starts and "resume once paused
        - implement pause functionality
- time is blinking while on pause
        - hide setting if session has started
        - app shows "stop" button once timer has started
        - clicking pause button resets timer
- displaying "start" once session is completed

IMPLEMENT TIMER SETTINGS

- set state for target parameter
- set prep time
- set workout time
- set rest time
- set cycles
- set tabatas

=====================
- isPrep = timePassed <= prep
- isWorkout = timePassed % (work + rest) <= 20 
- isRest = timePassed % (work + rest) > 20
- tabataCompleted = timePassed === (work + rest) * cycles

useEffect(() => {
        let timePassed = initTime - timeRemaining
        setIsWorkout()
},[timeRemaining])

- [tabatasRemaining, setTabatasRemaining] = useState(tabatas)

function minutes takes params time, initTime, prepTime, workout time, rest time, cycles, tabatas

20 sec workout
10 sec rest
8

const minutes = () => {
        let timePassed = initTime - timeRemaining 
        let accumBlockTime = 
        const displayedTime = timePassed
                //show preptime
        if(timePassed <= prepTime>)

        return displayedTime
}

