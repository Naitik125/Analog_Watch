setInterval(() => {
    let d=new Date()
    let h=d.getHours()
    let m=d.getMinutes()
    let s=d.getSeconds()

    let hrot=30*h +m/2
    let mrot=6*m
    let srot=6*s

    hours.style.transform=`rotate(${hrot}deg)`;
    minutes.style.transform=`rotate(${mrot}deg)`;
    seconds.style.transform=`rotate(${srot}deg)`;
    
}, 1000);