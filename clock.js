const deg=6;
const hr=document.querySelector('#hr');
const mn=document.querySelector('#mn');
const sc=document.querySelector('#sc');


setInterval(() => {
    var day=new Date();
    let hh=day.getHours()*30;
    let mm=day.getMinutes()*deg;
    let ss=day.getSeconds()*deg;
    var month = day.toLocaleString('default', { month: 'long' })
    var dayy = day.toLocaleString('default', { weekday: 'long' })
    hr.style.transform=`rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform=`rotateZ(${mm}deg)`;
    sc.style.transform=`rotateZ(${ss}deg)`;
    document.getElementById('dh').innerText=day.getHours();
    document.getElementById('dm').innerText=day.getMinutes();
    document.getElementById('ds').innerText=day.getSeconds();
    document.getElementById('ddd').innerText=dayy;
    document.getElementById('ddm').innerText=month;
    document.getElementById('ddy').innerText=day.getFullYear();
    console.log(day)
    console.log(hh)
    console.log(mm)
    console.log(ss)
}, 1000);
