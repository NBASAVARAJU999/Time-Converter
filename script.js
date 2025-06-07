let bgContainer = document.getElementById("bgContainer");
let hoursInputEL = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertButton = document.getElementById("convertBtn");
let errorMsg = document.getElementById("errorMsg");
let timeInSeconds = document.getElementById("timeInSeconds");

convertButton.addEventListener('click', function() {
    let hoursValue = hoursInputEL.value;
    let minutesValue = minutesInputEl.value;
    if (hoursValue === "") {
        errorMsg.textContent = "Please enter valid number of hours";
    } else if (minutesValue === "") {
        errorMsg.textContent = "please enter valid number of minutes";
    } else {
        let hoursInSeconds = 60 * 60 * parseInt(hoursValue);
        let minutesInSeconds = 60 * parseInt(minutesValue);
        let allInSeconds = hoursInSeconds + minutesInSeconds;
        timeInSeconds.textContent = allInSeconds + "s";
        timeInSeconds.classList.add("time-in-seconds")
    }
});