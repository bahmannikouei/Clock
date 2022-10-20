function runTimer(){
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var pmam = "AM";
    if(h > 12){
        pmam = "PM";
        h = h - 12;
    }
    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }
    if(s < 10){
        s = "0" + s;
    }

    document.getElementById('hour').textContent = h;
    document.getElementById('min').textContent = m;
    document.getElementById('sec').textContent = s;
    document.getElementById('pmam').textContent = pmam;

    setTimeout(runTimer,1000);
}

runTimer()