const QuerySearch = window.location.search;
const searchParam = new URLSearchParams(QuerySearch);

const dd = document.getElementById('days')
const dh = document.getElementById('hours')
const dm = document.getElementById('minutes')
const ds = document.getElementById('seconds')
const countdownContainer = document.getElementById('countdown'); 

const CurrentYear = new Date().getFullYear();
const NewYear = new Date(`Jan 1, ${CurrentYear + 1} 00:00:00`);
//const NewYear = new Date(`Sep 9, ${CurrentYear} 08:57:50`);

function CheckCond(){
    if(dd.innerText == 0){
        dd.style.display = "none"
    }
    if(dd.innerText == 0 && dh.innerText == 0){
        dh.style.display = "none"
    }
    if(dd.innerText == 0 && dh.innerText == 0 && dm.innerText == 0){
        dm.style.display = "none"
        ds.style.color = "#eb4034"
    }
    if(dd.innerText == 0 && dh.innerText == 0 && dm.innerText == 0 && ds.innerText < 10){
        ds.style.color = "#ff8800"
    }
    if(dd.innerText == 0 && dh.innerText == 0 && dm.innerText == 0 && ds.innerText == 0){
        ds.style.display = "none"

        countdownContainer.innerHTML = '<p id="happyNewYear">Happy New Year!</p>';
        countdownContainer.style.background = "rgba(0, 0, 0, 0.5)";

        document.getElementById("happyNewYear").style.fontSize = "70px";

        clearInterval(c);
    }
}

var c = setInterval(() => {
    var now = new Date();
    var distance = NewYear - now;

    var d = Math.floor(distance / 1000 / 60 / 60 / 24);
    var h = Math.floor(distance / 1000 / 60 / 60) % 24;
    var m = Math.floor(distance / 1000 / 60) % 60;
    var s = Math.floor(distance / 1000) % 60;

    dd.innerText = d;
    dh.innerText = h < 10 ? "0" + h : h;
    dm.innerText = m < 10 ? "0" + m : m;
    ds.innerText = s < 10 ? "0" + s : s;

    CheckCond()
}, 1000)

document.addEventListener('DOMContentLoaded', (e) => {
    if(searchParam.get('bgstyle') == "production"){
        document.body.style.background = "rgb(0, 255, 0)";
        document.getElementById('countdown').style.background = "none";
        document.getElementById('hashtag').style.display = "none";
        document.getElementById('copyr').style.display = "none";
    }
    document.getElementById('hashtag').innerText = "#EMR" + new Date().getFullYear().toString();
    document.getElementById('copyr').innerHTML = "&copy; Entertainmasters 2020 - " + new Date().getFullYear().toString() + ", All Rights Reserved."
})