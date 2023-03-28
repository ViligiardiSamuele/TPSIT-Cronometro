/*
    disabilitare i bottoni tramite la classe "disabled"
    button.classList.add("disabled")    <<< Aggiungi classe 
    button.classList.remove("disabled") <<< Rimuovi classe
*/
let spnTime = document.getElementById("time")
let btnStart = document.getElementById("start")
let btnStop = document.getElementById("stop")
let btnReset = document.getElementById("reset")

let csec = 0
let ss = 0
let interval

//incrementa di 1ms
function time() {
    csec += 1
    if(csec == 100){
        ss +=1 
        csec = 0
    }
    if (ss >= 60) ss = 0
    //Aggiunge '0' davanti se il valore è minore di 10
    if(ss < 10 && csec < 10)
        spnTime.innerHTML = '0' + ss + ":0" + csec
    else if(ss > 10 && csec < 10)
        spnTime.innerHTML = ss + ":0" + csec
    else if(ss < 10 && csec > 10)
        spnTime.innerHTML = '0' + ss + ":" + csec
    else
        spnTime.innerHTML = ss + ":" + csec
}

function start() {
    interval = setInterval(time,10)
    btnStart.classList.add("disabled")
    btnStop.classList.remove("disabled")
    btnReset.classList.remove("disabled")
}

function stop() {
    clearInterval(interval)
    btnStart.classList.remove("disabled")
    btnStop.classList.add("disabled")
    btnReset.classList.remove("disabled")
}

function reset() {
    stop()
    csec = 0
    ss = 0
    spnTime.innerHTML = "00:00"
    btnReset.classList.add("disabled")
}