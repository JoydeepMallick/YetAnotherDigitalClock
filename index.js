

function updateClock(){
    let currentTime = new Date();
    let currentHours = currentTime.getHours().toString().padStart(2, '0');
    //AM PM concept
    let meridiem = currentHours >= 12 ? "PM" : "AM";
    currentHours = currentHours > 12 ? currentHours % 12 : currentHours;
    
    let currentMinutes = currentTime.getMinutes().toString().padStart(2, '0');
    let currentSeconds = currentTime.getSeconds().toString().padStart(2, '0');

    // grab current clock value
    let clockvalue = document.getElementById('clockvalue');
    //update clock value to current time
    clockvalue.innerHTML = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + meridiem;
}

//just calling this function once to update the clock value
updateClock();

//we need to call this function every second to update the clock value
setInterval(updateClock, 1000)