function main()
{
    time();
    date();
}

function time()
{
   // var currentTime = new Date(new Date().toLocaleString("en-US",{timeZone:'Europe/London'}));
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    
    hours = updateTime(currentHours);
    minutes = updateTime(currentMinutes);
    seconds = updateTime(currentSeconds);
    var currentTimeString = hoursType(hours) + ":" + minutes + ":" + seconds + " "+timeOfDay(hours);
    document.getElementById("clock").firstChild.nodeValue =currentTimeString;
   
}

function date()
{

    var currentDate = new Date();
    var currentDateString = currentDate.toDateString();
    document.getElementById("calender").firstChild.nodeValue = currentDateString;


}

function updateTime(t)
{
    if (t<10)
    {
        return "0" + t;
    }
    else
    {
        return t;
    }
}



function timeOfDay(hour)
{
    if (hour < 12) {
        return "AM";
    }

    else 
    {
        return "PM";
    }
}


function hoursType(hour)
{
    if (hour > 12)
    {
        return "0" + (hour - 12);
    }
    else
    {
        return hour;
    }
}



