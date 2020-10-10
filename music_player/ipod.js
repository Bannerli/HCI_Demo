// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];

function init() {
	// Your code goes here
  var i;
  for (i=0;i<6;i++){
    volLevels[i]=document.getElementById('vl'+i);
  }
//fills three volumes)
  for(i=0;i<3;i++){
    document.getElementById('vl'+i).classList.replace("volume1","volume2");
  }
  document.getElementById("player-song-info").innerHTML=tracklist[6];
};


function volUp() {
	// Your code goes here
  var i;
  for (i=0;i<6;i++){
    if (document.getElementById('vl'+i).classList.contains('volume1'))
    {document.getElementById('vl'+i).classList.replace("volume1","volume2");
    break;
  }
  }
}

function volDown() {
	// Your code goes here
  var i;
	for (i=5; i>=0; i--) {
		if (document.getElementById('vl' + i).classList.contains("volume2"))
			{document.getElementById('vl' + i).classList.replace("volume2", "volume1");
			break;
		}
	}
}

function switchPlay() {
	// Your code goes here
  //toggles the play button between play and pause
	if (document.getElementById('play').innerHTML == 'play_arrow') {
		document.getElementById('play').innerHTML = 'pause';
	} else {
		document.getElementById('play').innerHTML = 'play_arrow';
	}

	//moves slider and updates time
	var thumb = setInterval(moveSlider, 1000);
	function moveSlider() {
		var val = document.getElementById('brand').value;
		var t = secondsToMs(val);
		if (document.getElementById('play').innerHTML == 'play_arrow') {
			clearInterval(thumb);}
		 else {
			document.getElementById('brand').stepUp(1);
			document.getElementById('start').innerHTML = t;
			if (val == 180) {
				nextSong();
			}
		}
	}
}


function nextSong() {
	// Your code goes here
  document.getElementById("start").innerHTML="0:00";
  document.getElementById("brand").value=0;
  var track=document.getElementById("player-song-info").innerHTML;
  var i=tracklist.indexOf(track);

  //change song name
  if (i==(tracklist.length-1)){
    document.getElementById("player-song-info").innerHTML=tracklist[0];}
  else{
    document.getElementById("player-song-info").innerHTML=tracklist[i+1];
  }

}

function prevSong() {
	// Your code goes here
  document.getElementById("start").innerHTML="0:00";
  document.getElementById("brand").value=0;
  var track=document.getElementById("player-song-info").innerHTML
  var i=tracklist.indexOf(track);
  var t=tracklist.length;

  //change song name
  if (i==0){
    document.getElementById("player-song-info").innerHTML=tracklist[t-1];}
    else{
    document.getElementById("player-song-info").innerHTML=tracklist[i-1];

  }
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();
