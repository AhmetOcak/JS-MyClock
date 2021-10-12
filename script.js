
function setClock() {
    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    document.getElementById("hour").textContent = hour;
    document.getElementById("minute").textContent = minute;
    document.getElementById("seconds").textContent = seconds;

    if(seconds < 10){
        document.getElementById("seconds").textContent = 0;
        document.getElementById("seconds").textContent += seconds;
    }
    if(minute < 10){
        document.getElementById("minute").textContent = 0;
        document.getElementById("minute").textContent += minute;
    }
    if(hour < 10){
        document.getElementById("hour").textContent = 0;
        document.getElementById("hour").textContent += hour;
    }
}

setInterval(setClock, 1000);
