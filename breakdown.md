TIMER FUNCTIONALITY

- Display field shows work and rest periods
        - button displays "pause" once timer starts and "resume once paused
        - implement pause functionality
- time is blinking while on pause
        - hide setting if session has started
        - app shows "stop" button once timer has started
        - clicking pause button resets timer
- displaying "start" once session is completed
- reset App when stop is clicked

IMPLEMENT TIMER SETTINGS

- set state for target parameter
- set prep time
- set workout time
- set rest time
- set cycles
- set tabatas

modify parameter with minus and plus

=====================



[state, setState] = useState({
                        prepare: 10,
                        work: 20,
                        rest: 10
})

- tabataSettings als prop für Display-Komponente
- tabataState 
- Business-Logik => aus tabata-Settings die Gesamtlaufzeit ermitteln (unit testen)
- state aus Tabata-Settings
alternativ: abgelaufene Zeit aus Setting und Gesamtlaufzeit.

