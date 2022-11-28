// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [document.getElementById("vl0"),document.getElementById("vl1"),document.getElementById("vl2"), document.getElementById("vl3"), document.getElementById("vl4"),document.getElementById("vl5")];

function init() {
//	for (let i = 0; i < 6; i++){
//		volLevels[i] = "vl"[i];
//	}
}

function volUp() {
    for(var i = 0; i < volLevels.length; i++){
        let curVol= document.getElementById("vl"+i);
        if (!curVol.classList.contains("hidden")){
            curVol.classList.toggle("hidden");
            break;
        }
    }
}


function volDown() {
    for(var i = 5; i < volLevels.length; i--){
        let curVol= document.getElementById("vl"+i);
        if (curVol.classList.contains("hidden")){
            curVol.classList.toggle("hidden");
            break;
        }
    }
}

let interval;
let timer;
function playing(){
    if (!interval){
        interval = setInterval(function()
            {document.getElementById("player-time").value++;
            if (document.getElementById("player-time").value == "180"){
                nextSong();
            }
        }, 1000);
        timer = setInterval(function(){document.getElementById("time-elapsed").innerHTML = secondsToMs(document.getElementById("player-time").value)}, 1000);
    }
}
function pausing(){
    clearInterval(interval);
    clearInterval(timer);
    interval = null;
    timer = null;
}


function switchPlay(){
    let play = document.getElementById("play");
    let pause = document.getElementById("pause");
    if (play && pause){
        play.classList.toggle("hidden");
        pause.classList.toggle("hidden");
    }
    if(play.classList.contains("hidden")){
        playing();
    }
    else{
        pausing();
    }
}

function nextSong() {
	// Your code goes here
    var x = 0;
    for (var i = 0; i < tracklist.length; i++){
        if (tracklist[i] == document.getElementById("player-song-name").innerHTML){
            if (i == tracklist.length - 1){
                x = 0;
            }
            else{
                x = i + 1;
            } 
        }
    }
    document.getElementById("player-song-name").innerHTML = tracklist[x];
    document.getElementById("player-time").value = 0;
    document.getElementById("time-elapsed").innerHTML = "0:00";
}

function prevSong() {
    var x = 0;
    for (var i = tracklist.length - 1; i >= 0; i--){
        if (tracklist[i] == document.getElementById("player-song-name").innerHTML){
            if (i == 0){
                x = tracklist.length - 1;
            }
            else{
                x = i - 1;
            } 
        }
    }
    document.getElementById("player-song-name").innerHTML = tracklist[x];
    document.getElementById("player-time").value = 0;
    document.getElementById("time-elapsed").innerHTML = "0:00";

}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();