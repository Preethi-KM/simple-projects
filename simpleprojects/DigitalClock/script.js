function updateClock(){
    const now=new Date();//This going to represents the current date and time 
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();

    let period='AM';
    if(hours>=12){
        period='PM';
        if (hours>12){
            hours=hours-12;

        }
    }
    if (hours==0){
        hours=12;
    }



    let h = hours < 10 ? '0' + hours : hours;
    let  m = minutes < 10 ? '0' + minutes : minutes;
    let  s = seconds < 10 ? '0' + seconds : seconds;

    


    const textString=`${h}:${m}:${s} its ${period}    `;

    document.getElementById("clock").textContent=textString;
}


    
setInterval(updateClock,1000 );
updateClock();
  



