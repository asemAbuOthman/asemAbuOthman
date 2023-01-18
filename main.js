
let msg = new SpeechSynthesisUtterance();
let voices = speechSynthesis.getVoices();
msg.voice = voices[9];
var  names= 'h1,h2,h3,h4,h5,h6,p,a,input,img,form,li,a';
let tags = document.querySelectorAll(names); 
tags.forEach((tag) => {
    tag.addEventListener('click', (e) => {
        
        msg.text = e.target.innerText;
        // tag.style.backgroundColor = "blue";
        speechSynthesis.speak(msg);
        
        let interval = setInterval(() => {
            if(!speechSynthesis.speaking){
                tag.style.removeProperty('background-color');
                clearInterval(interval);
            }
        }, 100);
        
    });
});


