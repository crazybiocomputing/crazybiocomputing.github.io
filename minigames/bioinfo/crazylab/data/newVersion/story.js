// Story
// Jean-Christophe Taveau
// Crazybiocomputing
// Mar 2015

'use strict';

var game;
var player;
var active_scene;
var media_path = './media/';

function initStory(first) {
  var height = Math.floor(document.body.clientWidth / 16.0 * 9.0);
  document.getElementById('the_game').style.height =  height + 'px';
/***
  var els = document.getElementsByClassName('system_item');
  for (var i=0; i < els.length; i++) {
    console.log(i+' '+els[i]);
    els[i].style.height =  height*0.1 + 'px';
  }
***/

  game = new Game(inventory);
  console.log(coffeeRoom);
  active_scene = new Scene(coffeeRoom);

  document.getElementById('scene').innerHTML=active_scene.svg;

  // Update display
  //document.getElementById('spot_student').style.display = 'none';
  //document.getElementById('svg_student').style.display = 'none';
  document.getElementById('dialog').style.display = 'none';
  document.getElementById('player').style.display = 'none';

  var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

  player = new Player();


  console.log('create...'+dialog.length);
  for (var d in dialog) {
    console.log('create...');
    var chat = new Dialog(dialog[d]);
    dialog[d.ID]= chat;
    console.log(chat);
    console.log(dialog[d.ID]);
  }
}




/*********************
 * @class Event
 * Trick in https://css-tricks.com/restart-css-animation/
 *********************/

 function lightSpots() {
   var spots = document.getElementsByClassName('svg_spot');

   for (var i=0; i<spots.length;i++) {
     var spot = spots[i];
     spot.classList.add('animated');
     var newone = spot.cloneNode(true);
     spot.parentNode.replaceChild(newone, spot);
  }
 }


 function sendMessage(id) {
   console.log('sendMessage '+ id);
   document.getElementById('popup').style.display = 'none';
   document.getElementById('popup').setAttribute("data-id",id);

   // Get Actor of the active scene
   var actor = active_scene.actors[id];
   console.log(actor);

   // Create GUI of this popup (background media, buttons, etc.)
   actor.updateDisplay();

   // Display popup
   document.getElementById('popup').style.display = 'block';
 }

 function useInventory(id) {
   console.log('sendInventory '+ id);
   document.getElementById('popup').style.display = 'none';
   document.getElementById('popup').setAttribute("data-id",id);

   // Get Actor of the active scene
   var actor = player.inventory[id];
   console.log(actor);

   // Create GUI of this popup (background media, buttons, etc.)
   actor.updateDisplay();

   // Display popup
   document.getElementById('popup').style.display = 'block';
 }


 function closePopup() {
   document.getElementById('popup').style.display = 'none';
 }

 function explore() {
   console.log('run explore()');
   var description ='';
   var id =document.getElementById('popup').getAttribute("data-id");
   var actor = active_scene.actors[id];
   var action = actor.states[actor.status].getAction('explore');
   description = action.html;

   document.getElementById('popup_header').innerHTML = description;
   document.getElementById('popup_header').style.display = 'block';
 }


 function grab() {
   console.log('run grab()');

   var id =document.getElementById('popup').getAttribute("data-id");
   var actor = active_scene.actors[id];
   var action = actor.states[actor.status].getAction('grab');
   action.run();
   /**
   player.addItem(active_scene.actors[id] );
   console.log('player.inventory = ' + player.inventory );

   active_scene.actors[id].updateStatus('grab');
   console.log('status '+active_scene.actors[id].status );
   **/
   active_scene.actors[id].updateDisplay();
   player.updateInventory();

 }

 function use() {
   console.log('run use()');
 }

 function talk() {
   console.log('run talk()');
   var id =document.getElementById('popup').getAttribute("data-id");
   active_scene.actors[id].updateStatus('talk');
   active_scene.actors[id].updateDialog();
 }

 function dragAndDrop(id) {
   console.log('run dragAndDrop('+id+')');
 }


/***
 function checkAnswer(options) {
   var node = {};
   node.answers = [];
   node.ID = '_';

   switch (options.type) {
   case 'back':
     node.ID = path[path.length - 2].ID;
     break;
   case 'button':
     node.ID = dialog[options.ID].goto['button'];
     break;
   case 'select':
     answer = document.getElementById(options.element).value;
     node.ID = dialog[options.ID].goto[answer];
     node.answers.push(answer);
     break;
   case 'submit':
     var w = dialog[options.ID].widgets;
     var total = 0;
     for (var i=0; i < w.length; i++) {
       var answer = getAnswer(w[i]);
       if (answer[0] == 1) {
         node.answers.push(answer[1]);
       }
       total +=answer[0];
     }
     console.log('answer '+total);
     if (dialog[options.ID].goto[total] != undefined) {
       node.ID = dialog[options.ID].goto[total];
     }
     else {
       node.ID = dialog[options.ID].goto['0'];
       node.answers.push('wrong');
     }
     break;
   case 'value':
     answer = document.getElementById(options.element).value;
     node.ID = dialog[options.ID].goto[answer];
     node.answers.push(answer);
     console.log(answer + ' ' + next_node);
     break;
   default:
     alert('Wrong path');
   }

   if (node.ID != '_') {
     path.push(node );
   }

   updateDisplay(node.ID);

 }

 function getAnswer(widget) {
   var answer=0;
   var value;

   switch (widget.type) {
   case 'numeric':
     value = parseFloat(document.getElementById(widget.id).value);
     answer = ( value == widget.answer) ? 1 : 0;
     break;
   case 'select':
     value = document.getElementById(widget.id).value;
     answer = ( value === widget.answer) ? 1 : 0;
     break;
   case 'text':
     value = document.getElementById(widget.id).value;
     answer = ( value === widget.answer) ? 1 : 0;
     console.log(value + ' '+widget.answer+' '+answer);
     break;
   default:
     // Do nothing
   }

   return [answer,value];
 }

 function updateDisplay(ID) {
   // Background
   var background = '';
   if (scenes[ID].background != undefined && scenes[ID].background.length > 1) {
     background = createBackground(scenes[ID]);
   }
   document.getElementById('scene').innerHTML=background;

 }
****/
