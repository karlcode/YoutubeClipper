

 document.documentElement.style.height = '100%';
 document.body.style.height = '100%';
 document.documentElement.style.width = '100%';
 document.body.style.width = '100%';

 var div = document.createElement('div');
 var btnForm = document.createElement('form');
 var btn = document.createElement('input');

 //append all elements
var app = document.getElementsByTagName('ytd-app')[0]
console.log(app.getElementsByClassName('style-scope ytd-app')[11]) //find its content child
 if (document.readyState === 'complete') {
var info = document.getElementById('columns')

info.appendChild(div);
div.appendChild(btnForm);
btnForm.appendChild(btn);
//set attributes for div
div.id = 'myDivId';
div.style.position = 'fixed';
div.style.top = '50%';
div.style.left = '50%';
div.style.width = '100%';
div.style.height = '100%';
div.style.backgroundColor = 'aqua';
div.style.zIndex = '999999'

//set attributes for btnForm
btnForm.action = '';

//set attributes for btn
//"btn.removeAttribute( 'style' );
btn.type = 'button';
btn.value = 'hello';
btn.style.position = 'absolute';
btn.style.top = '50%';
btn.style.left = '50%';

 }

 if (document.readyState === 'loading') {
     document.addEventListener('DOMContentLoaded', afterDOMLoaded);
 } else {
     afterDOMLoaded();
 }

 function afterDOMLoaded() {
    console.log(app.getElementsByClassName('style-scope ytd-app')[11]) //find its content child
 }
