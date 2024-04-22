
                

const glass=document.querySelector('#glass');

glass.addEventListener('click',()=>{
    window.location.href="SEARCH.html";
})




const prevBtn = document.querySelector('.backward-button');
const playBtn = document.querySelector('.play-button');
const nextBtn = document.querySelector('.forward-button');
const songName = document.querySelector('.title');
const artist= document.querySelector('.artist');

const cov=document.querySelector('.cover1');
const nextsong=document.querySelector('.nextsongtitle');
const nextartist=document.querySelector('.nextsongartist');





const cover = document.querySelector('.cover');





for(const song of songs) {
    song.ele.addEventListener('ended', ()=> {
      updateSong('next');
      playPauseSong();
      
    })
  }



  const playPauseSong = ()=> {
    if(currentSong.paused){
      currentSong.play();
     
    }
    else {
      currentSong.pause();
     
    }
  }


  let current = 0;
  let currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
  artist.textContent=songs[current].artist;
  let cover1=songs[current].cover;
  var cover2= document.querySelector(".cover");
  

 
 
 


  
 
 


  playBtn.addEventListener('click',()=> {
    playPauseSong();
  })
  

  nextBtn.addEventListener('click', () => {
    
    
    updateSong('next');
    playPauseSong();
    cover2.src=songs[current].cover;

    if(current!=4){

 
    cov.src=songs[current+1].cover;
    nextsong.textContent = songs[current+1].audioName;
    nextartist.textContent=songs[current+1].artist;
    }
    else{
      cov.src=songs[0].cover;
        nextsong.textContent = songs[0].audioName;
        nextartist.textContent=songs[0].artist;
    }

    
    
   
    
    
    
  });
  
  prevBtn.addEventListener('click', () => {
    updateSong('prev');
    playPauseSong();
    cover2.src=songs[current].cover;
    cov.src=songs[current-1].cover;
    nextsong.textContent = songs[current].audioName;
    nextartist.textContent=songs[current].artist;

  });

  const updateSong = (action)=> {
    currentSong.pause();
    currentSong.currentTime = 0;
  
    if(action === 'next'){

    
      current++;
      
      if(current > songs.length -1) {
        
        
        current = 0; }
      
      
    }
    if(action === 'prev'){
      current--;
      if(current < 0) current = songs.length - 1;
    }
    currentSong = songs[current].ele;
    songName.textContent = songs[current].audioName;
    artist.textContent= songs[current].artist;
    
  }
        


























function play(){
var audio=document.getElementById("audio");
if (audio.paused){
    audio.play()
}
else{
     audio.pause()
}
}
       

function repeat(){
    var audio=document.getElementById("audio")
    audio.repeat();
    }
function rewind(){
    var audio=document.getElementById("audio")
    audio.currentTime -=5
        }

function forward(){
    var audio=document.getElementById("audio")
    audio.currentTime +=5
        }

function suffle(){
    var audio=document.getElementById("audio")
    audio.repeat();
        }

