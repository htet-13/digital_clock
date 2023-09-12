
function updateTime(){
    let date = new Date();

    // nc = not calculated
    let nc_hr = date.getHours();
    let nc_min = date.getMinutes();
    let nc_sec = date.getSeconds();
    let nc_yr = date.getFullYear(); 


    let hr;
    let min = nc_min < 10 ? "0" + nc_min : nc_min;
    let sec = nc_sec < 10 ? "0" + nc_sec : nc_sec;
    let ampm = nc_hr >= 12 ? 'PM' : 'AM';

    let currentDate;


    //Month
    let month_arr = [
        "January",
        "February",
        "March",
        "April", 
        "May", 
        "June", 
        "July",
        "August",
        "September",
        "October",
        "November",
        "December" 
    ]
    let month = month_arr[date.getMonth()];

    //Day of the date
    let day_arr = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY"
    ]
    let day_date = day_arr[date.getDay()];


    //Hour
    if(nc_hr > 12){
        let realHr = nc_hr - 12;
        hr = "0" + realHr;
    }
    else if(nc_hr === 0){
        hr = 12;
    }
    else if(nc_hr <12){
        hr = "0" + nc_hr;
    }

    //Date
    if(date.getDate() < 10){
        currentDate = '0' + date.getDate();
    }
    else{
        currentDate = date.getDate();
    }

    let HMS = document.querySelector('.hms');
    HMS.innerHTML = `<p>${hr} : ${min} : ${sec}<span>${ampm}</span></p>`;

    document.querySelector('.dmy').innerHTML = `<p>${day_date}, ${month} ${currentDate}, ${nc_yr}</p>`;
}

setInterval(updateTime,1000);