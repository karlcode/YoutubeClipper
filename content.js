// The window object is loaded first before the document(html, js) is 
//window.top refers to the highest level window i.e container
//may be performance problems since each one is an environment for documents i.e increased memory and cpu usage

 
 window.onload = function () { //window.onload loads after components loaded images, css, scripts. 
    const youtubeContent = document.getElementsByClassName('style-scope ytd-app').item(11);  // Rewrite the select 
    console.log(youtubeContent);

    youtubeContent.querySelector() //querySelector targets by CSS values
 };