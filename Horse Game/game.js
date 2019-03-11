// Hamza Mehmood
// 15418599
// BSC Software Enginnering
//Year 1

var horses = []; // an array to store all horses elements
var interval = []; // an array to store an interval for each horse
var moveDelay = []; // an array for storing interval delays
var randomNumber = [],randomNumberdown=[],randomNumberleft=[],randomNumberup=[],randomNumberend=[]; // an array for storing random speed for intervals
var message;// Variable name for storing lap number, the user will enter
var n=1;
var win; // Store the index of the horses user choose
var yourwin,yourloss; // Variables to store how much you win and lose
var stoph1=1,stoph2=1,stoph3=1,stoph4=1; // Varibale names for storing how many times horse has completed the track seperetaly



function result(index){ // Method to show results
var displayresult=document.getElementById('results');
var ele = displayresult.getElementsByTagName('td')[n];
ele.className= ('horse'+(index+1));


      if(n==1)
      {
        if(index==win){
           yourwin=yourwin+100;
           document.getElementById("funds").innerHTML= "  "+yourwin;
      }
      else {
        yourloss=100-yourloss;
        document.getElementById("funds").innerHTML= "  "+yourloss;
      }
          }

    n=n+2; //Gets the next horse for results

    if(n==7){
      var run= document.getElementById('start');
      run.disabled= false;  // Enable the run button

    }
}

function moveEnd(index) {
  var h=horses[index];
  var positionLeft1=h.offsetLeft;

  var  increasem=positionLeft1+1;
    h.style.left = increasem+ 'px';
    h.className= 'horse runRight';


     if (increasem >= window.innerWidth/100*28) {

     if(index==0){
        if(stoph1>=message){
          clearInterval(interval[index]);
       h.className= 'horse standRight';
        result(index);
      }
    else{
      stoph1++;

      clearInterval(interval[index]);

      interval[index] = setInterval(moveRight, moveDelay[index], index);

}
     }


    if(index==1){
    if(stoph2>=message){
      clearInterval(interval[index]);

    h.className= 'horse standRight';
    result(index);
  }
  else {
    stoph2++;

    clearInterval(interval[index]);

    interval[index] = setInterval(moveRight, moveDelay[index], index);
  }
}


  if(index==2){
  if(stoph3>=message){
    clearInterval(interval[index]);
    h.className= 'horse standRight';
   result(index);
  }
  else{
    stoph3++;

    clearInterval(interval[index]);

    interval[index] = setInterval(moveRight, moveDelay[index], index);
  }
}


  if(index==3){
  if(stoph4>=message){
    clearInterval(interval[index]);

    h.className= 'horse standRight';
   result(index);
  }
  else{
    stoph4++;

    clearInterval(interval[index]);

    interval[index] = setInterval(moveRight, moveDelay[index], index);
  }
       }
}
}
function moveUp(index) {  // Method to run horses in upwards direction
  var h=horses[index];
  var positionTop1=h.offsetTop;

  var  increasek=positionTop1-1;
    h.style.top = increasek+ 'px';
    h.className= 'horse runUp';

     if(index==0){
     if (increasek <= window.innerHeight/100*5) {
        clearInterval(interval[index]);
       h.className= 'horse runRight';
       interval[index] = setInterval(moveEnd, moveDelay[index], index);
     }
}

if(index==1){
if (increasek <= window.innerHeight/100*10) {
    clearInterval(interval[index]);
    h.className= 'horse runRight';
  interval[index] = setInterval(moveEnd, moveDelay[index], index);
}
}
if(index==2){
if (increasek <= window.innerHeight/100*15) {
    clearInterval(interval[index]);
    h.className= 'horse runRight';
  interval[index] = setInterval(moveEnd, moveDelay[index], index);
}
}
if(index==3){
if (increasek <= window.innerHeight/100*19) {
    clearInterval(interval[index]);
    h.className= 'horse runRight';
  interval[index] = setInterval(moveEnd, moveDelay[index], index);
       }
   }
}

function moveLeft(index) {     // Method to run horses in left directions
  var h=horses[index];
  var positionLeft1=h.offsetLeft;

randomNumberup[0] = Math.ceil(Math.random() * 10);
randomNumberup[1] = Math.ceil(Math.random() * 8);
randomNumberup[2]= Math.ceil(Math.random() * 10);
randomNumberup[3] = Math.ceil(Math.random() * 7);
    for(var m=0;m<=3;m++){
    moveDelay[m] = randomNumberup[m];
}
  var  increaseg=positionLeft1-1;
    h.style.left = increaseg+ 'px';
    h.className= 'horse runLeft';

     if(index==0){
     if (increaseg <= window.innerWidth/100*5) {
        clearInterval(interval[index]);
       h.className= 'horse runUp';
       interval[index] = setInterval(moveUp, moveDelay[index], index);
     }
}
if(index==1){
if (increaseg <= window.innerWidth/100*8) {
    clearInterval(interval[index]);
    h.className= 'horse runUp';
  interval[index] = setInterval(moveUp, moveDelay[index], index);
}
}
if(index==2){
if (increaseg <= window.innerWidth/100*11) {
    clearInterval(interval[index]);
    h.className= 'horse runUp';
   interval[index] = setInterval(moveUp, moveDelay[index], index);
}
}
if(index==3){
if (increaseg <= window.innerWidth/100*15) {
    clearInterval(interval[index]);
    h.className= 'horse runUp';
   interval[index] = setInterval(moveUp, moveDelay[index], index);
       }
   }
}

function moveDown(index) {     // Method to run horses in downwards direction
  var h=horses[index];
  var positionTop1=h.offsetTop;
randomNumberleft[0] = Math.ceil(Math.random() * 8);
randomNumberleft[1] = Math.ceil(Math.random() * 6);
randomNumberdown[2]= Math.ceil(Math.random() * 7);
randomNumberleft[3] = Math.ceil(Math.random() * 9);

    for(var y=0;y<=3;y++){
    moveDelay[y] = randomNumberleft[y];
}
  var  increasel=positionTop1+1;
    h.style.top = increasel+ 'px';
    h.className= 'horse runDown';
     if(index==0){
     if (increasel >= window.innerHeight/100*84) {
        clearInterval(interval[index]);
       h.className= 'horse runLeft';
       interval[index] = setInterval(moveLeft, moveDelay[index], index);
     }
}
if(index==1){
if (increasel >= window.innerHeight/100*80) {
    clearInterval(interval[index]);
    h.className= 'horse runLeft';
  interval[index] = setInterval(moveLeft, moveDelay[index], index);
}
}
if(index==2){
if (increasel >= window.innerHeight/100*75) {
    clearInterval(interval[index]);
    h.className= 'horse runLeft';
   interval[index] = setInterval(moveLeft, moveDelay[2], index);
}
}
if(index==3){
if (increasel >= window.innerHeight/100*70) {
    clearInterval(interval[index]);
    h.className= 'horse runLeft';
  interval[index] = setInterval(moveLeft, moveDelay[index], index);
       }
   }
}

function moveRight(index) {    // Method to run horses in right direction
  var h=horses[index];
  var positionLeft1=h.offsetLeft;

randomNumberdown[0] = Math.ceil(Math.random() * 9);
randomNumberdown[1] = Math.ceil(Math.random() * 8);
randomNumberdown[2]= Math.ceil(Math.random() * 6);
randomNumberdown[3] = Math.ceil(Math.random() * 7);

    for(var x=0;x<=3;x++){
    moveDelay[x] = randomNumberdown[x];
}
  var  increasei=positionLeft1+1;
   	h.style.left = increasei+ 'px';
   	h.className= 'horse runRight';
    if(index==0){
    if (increasei >= window.innerWidth/100*89) {
        clearInterval(interval[index]);
        h.className= 'horse runDown';
       interval[index] = setInterval(moveDown, moveDelay[index], index);
    }
  }
    if(index==1){
    if (increasei >= window.innerWidth/100*85) {
        clearInterval(interval[index]);
        h.className= 'horse runDown';
       interval[index] = setInterval(moveDown, moveDelay[index], index);
    }
  }
    if(index==2){
    if (increasei >= window.innerWidth/100*82) {
        clearInterval(interval[index]);
        h.className= 'horse runDown';

       interval[index] = setInterval(moveDown, moveDelay[index], index);
    }
  }
    if(index==3){
    if (increasei >= window.innerWidth/100*79) {
        clearInterval(interval[index]);
        h.className= 'horse runDown';
       interval[index] = setInterval(moveDown, moveDelay[index], index);
    }
}

}

function start() {

   var run= document.getElementById('start');
      run.disabled= true;                   // Disable the run button


      for(i=0;i<=3;i++){                  // Clear all previous intervals
    clearInterval(interval[i]);
    clearInterval(moveDelay[i]);
  }

    message = parseInt(document.getElementById('laps').value);       // Store the number of laps user enters
    yourwin = parseInt(document.getElementById('amount').value);     // Store the amount user enters for bet
     yourloss=yourwin;


    var sel=document.getElementById('bethorse');

    if(sel.value== "horse1"){
         win=0;
      console.log("White");
    }
    if(sel.value== "horse2"){
      win=1;

      console.log("Blue");
    }

    if(sel.value== "horse3"){
      win=2;

      console.log("Green");
    }
    if(sel.value== "horse4"){
      win = 3;
      console.log("Brown");
    }

    interval[0] = setInterval(moveRight, moveDelay[0], 0);
    interval[1] = setInterval(moveRight, moveDelay[1], 1);
    interval[2] = setInterval(moveRight, moveDelay[2], 2);
    interval[3] = setInterval(moveRight, moveDelay[3], 3);

}

function myLoadEvent() {

    var run= document.getElementById('start');

       randomNumber[0] = Math.ceil(Math.random() * 5);     // Creating random number and storing in the variables
       randomNumber[1] = Math.ceil(Math.random() * 8);
       randomNumber[2]= Math.ceil(Math.random() * 10);
       randomNumber[3] = Math.ceil(Math.random() * 11);


           for(var i=0;i<=3;i++){
           moveDelay[i] = randomNumber[i];
       }

    horses[0]= document.getElementById('horse1');
    horses[1]= document.getElementById('horse2');
    horses[2]= document.getElementById('horse3');
    horses[3]= document.getElementById('horse4');


    run.addEventListener('click', start);
  }


document.addEventListener('DOMContentLoaded', myLoadEvent);


//Hamza Mehmood
//15418599
//BSC Software Enginnering
//Year 1
