 if (window.location.origin === "https://www.youtube.com" || window.location.origin === "http://www.youtube.com") {
     var yolo = document.getElementsByClassName("video-stream");
     console.log(yolo)
     var node = document.createElement("li"); // Create a <li> node
     var textnode = document.createTextNode("Water");
     const player = document.getElementById('player');  //this gets rerendered and destroyed for some reason
     node.appendChild(textnode);
     node.style.height = 3000;
     node.style.width = 3000;
     node.style.backgroundColor = "#BA4747"
     player.appendChild(node);

 }

 document.documentElement.style.height = '100%';
 document.body.style.height = '100%';
 document.documentElement.style.width = '100%';
 document.body.style.width = '100%';

 var div = document.createElement('div');
 var btnForm = document.createElement('form');
 var btn = document.createElement('input');

 //append all elements
 document.body.appendChild(div);
 div.appendChild(btnForm);
 btnForm.appendChild(btn);
 //set attributes for div
 div.id = 'myDivId';
 div.style.position = 'fixed';
 div.style.top = '50%';
 div.style.left = '50%';
 div.style.width = '100%';
 div.style.height = '100%';
 div.style.backgroundColor = 'red';

 //set attributes for btnForm
 btnForm.action = '';

 //set attributes for btn
 //"btn.removeAttribute( 'style' );
 btn.type = 'button';
 btn.value = 'hello';
 btn.style.position = 'absolute';
 btn.style.top = '50%';
 btn.style.left = '50%';