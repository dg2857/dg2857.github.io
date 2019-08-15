let myImage=document.querySelector('img');
confirm('This page uses cookies in order to track your browsing history and sell your private info to the highest bidder. If you do not consent to cookies, kindly unplug your computer.')
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/IMG_5086.jpg'){
        myImage.setAttribute('src','images/IMG_5075.jpg');
    }else{
        myImage.setAttribute('src','images/IMG_5086.jpg');
    }
}

let myButton = document.querySelector('button')
myButton.onclick=function(){
  setUserName()
}
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeadCurr=myHeading.textContent
    myHeading.textContent = 'Do you like to sieze the means of production, ' + myName+'?';
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Do you like to sieze the means of production, ' + myName+'?';
  }
