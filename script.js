'use strict';
// Native links, details and media controls keep the page usable without JavaScript.
document.querySelectorAll('video').forEach(video=>{
 video.addEventListener('play',()=>document.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause();}));
});
