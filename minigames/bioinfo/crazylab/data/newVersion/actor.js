/*
 *  crazybioGE: CrazyBioComputing Game Engine
 *  Copyright (C) 2015  Jean-Christophe Taveau.
 *
 *  This file is part of crazybioGE
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with crazybioGE.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */

/*
 * Constructor
 */

'use strict';

/*********************
 * @class Actor
 *
 *********************/
function Actor(json_actor,type) {
  this.ID        = json_actor.ID || '__unknown__';
  this.type      = type;
  this.status    = 'init';
  this.display   = 'visible';
  this.cg        = {'x':0.0,'y':0.0};
  this.geometry  = [0,0,0];
  this.targets   = json_actor.targets || [];
  this.inventory = json_actor.inventory || [];

  //HACK: console.log('new Actor '+this.ID +' '+json_actor.states.length);

  this.states  =  {};
  for (var i=0; i <json_actor.states.length; i++) {
    var state = new State(json_actor.states[i]);
    this.states[state.ID] = state;
    state.setActor(this);
  }

  console.log('Actor created... '+this.ID);

}

Actor.prototype.computeCG = function (ev) {
  // Compute center of gravity
  // Convert polygon into absolute coords
  if (this.geometry.length == 3) {
    this.cg.x = this.geometry[0];
    this.cg.y = this.geometry[1];
  }
  else if  (this.geometry.length == 4) {
    this.cg.x = this.geometry[0] + this.geometry[2]/2.0;
    this.cg.y = this.geometry[1] + this.geometry[3]/2.0;
  }
  else if (this.geometry[0] == 'M') {
    this.geometry = this.geometry.slice(1,this.geometry.length);
    for (var i = 0; i < this.geometry.length; i+=2) {
      this.cg.x += this.geometry[i];
      this.cg.y += this.geometry[i+1];
    }
    this.cg.x /= this.geometry.length/2.0;
    this.cg.y /= this.geometry.length/2.0;
  }
  else if (this.geometry[0] == 'm') {
    this.geometry = this.geometry.slice(1,this.geometry.length);
    var x=this.geometry[0];
    var y=this.geometry[1];
    this.cg.x = x;
    this.cg.y = y;
    for (var i = 2; i < this.geometry.length; i+=2) {
      x += this.geometry[i];
      y += this.geometry[i+1];
      this.geometry[i]   = x;
      this.geometry[i+1] = y;
      this.cg.x += x;
      this.cg.y += y;
    }
    this.cg.x /= this.geometry.length/2.0;
    this.cg.y /= this.geometry.length/2.0;
  }
}

Actor.prototype.setGeometry = function (json_geometry) {
  this.display   = json_geometry.display || 'visible';
  this.geometry  = json_geometry.geometry || [0,0,0];
  // Compute center of gravity
  this.computeCG();
  console.log('addState '+this);
}

Actor.prototype.setStatus = function (new_status) {
  this.status = new_status;
}

Actor.prototype.update = function (ev) {
  console.log(this.status);

  // Find the button index corresponding to the event `ev'
  var button_index = -1;
  var actions = this.states[this.status].actions;
  var i = 0;
  while (i < actions.length) {
    if (actions[i].event === ev) {
      button_index = i;
    }
    i++;
  }

  switch (ev) {
    case 'grab':
      this.status = actions[button_index].trigger;
      console.log(this.status);
      break;
    case 'explore':
      // Do nothing
      break;
    case 'talk':
      this.dialog = actions[button_index].dialog;
      break;
    default:
      // Do nothing
  }
}

Actor.prototype.updateDialog = function () {
  // Close popup
  document.getElementById('popup').style.display = 'none';

  // Open Dialog boxes of character and player
  document.getElementById('dialog').style.display = 'block';
  document.getElementById('player').style.display = 'block';
  var a_dialog = dialogs[this.dialog];

}

Actor.prototype.updateDisplay = function () {

/*****
  function displaySVG() {
    // SVG
    popupBody.innerHTML='<object id="popup_svg" type="image/svg+xml"></object>';
    //popup.innerHTML='<object id="popup_svg" type="image/svg+xml" data="'+states.graphics.media+'"></object>';

    // Update background media by setting visibility of each element in the svg file.
    var a = document.getElementById('popup_svg');
    // console.log(a);
    a.data = media_path + states.graphics.media;
    a.addEventListener("load",function() {

      var svgDoc = this.contentDocument; //get the inner DOM of popup_svg.svg
      console.log(states.elements);
      for (var i=0; i<states.graphics.elements.length;i++) {
        console.log(states.graphics.elements[i]+'==?'+states.graphics.visibility+' '+ states.graphics.elements[i].indexOf(states.graphics.visibility));
        if (states.graphics.visibility.indexOf(states.graphics.elements[i]) == -1) {
          svgDoc.getElementById(states.graphics.elements[i]).style.opacity = 0;
        }
        else {
          svgDoc.getElementById(states.graphics.elements[i]).style.opacity = 1;
        }
      }

    },false);
    a.style.display='block';
    // actions in popup_footer
    document.getElementById('close').style.display = 'inline';
  }

  // Display media

  // Close Dialog boxes
  document.getElementById('dialog').style.display = 'none';
  document.getElementById('player').style.display = 'none';

  // Reset popup
  document.getElementById('popup').style.display = 'none';
  document.getElementById('popup_header').style.display = 'none';
  document.getElementById('popup_body').style.display = 'none';
  document.getElementById('popup_footer').style.display = 'none';

  // reset toolbar
  var all_actions = ['explore','grab','use','talk','close'];
  for (var i=0; i<all_actions.length; i++) {
    document.getElementById(all_actions[i]).style.display = 'none';
  }

  var states = this.states[this.status];
  console.log('props of states ' +states.hasGraphics() +' '+states.hasButtons() );

  if (states.hasDescription() ) {
    document.getElementById('popup_header').innerHTML = states.description;
    document.getElementById('popup_header').style.display = 'block';
  }

  if (states.hasGraphics() ) {
    console.log(this.states);
    document.getElementById('popup_body').style.display = 'block';
    document.getElementById('popup_footer').style.display = 'block';

    var popupBody = document.getElementById('popup_body');

    // Choose states in function of conditions
    // if player not hasItem('coin') then choose states['coin_with_carpet'] else choosestates('no_coin_on_carpet')

    var extension = states.graphics.media.substring(states.graphics.media.lastIndexOf(".")+1, states.graphics.media.length);
    switch (extension) {
      case 'svg':
        displaySVG();
        break;
      case 'mp4':
      case 'ogg':
        // Video mp4 ogg
        popupBody.innerHTML = '<video width="100%" autoplay><source src="'+ (media_path + states.graphics.media)+'" type="video/mp4"><source src="'+(media_path + states.graphics.media)+'" type="video/ogg"></video>';
        document.getElementById('close').style.display = 'inline';
        break;
      default:
        // TODO

    }
  }



  for (var i=0; i < states.actions.length; i++) {
    console.log('button '+states.actions[i].event);
    document.getElementById(states.actions[i].event).style.display = 'inline';
    switch (states.actions[i].event) {
     case 'explore':
       document.getElementById(states.actions[i].event).addEventListener("click", explore, false );
       break;
     case 'grab':
       document.getElementById(states.actions[i].event).addEventListener("click", grab, false );
       break;
     case 'use':
       document.getElementById(states.actions[i].event).addEventListener("click", use, false );
       break;
     case 'talk':
       document.getElementById(states.actions[i].event).addEventListener("click", talk, false );
       break;
     }
  }
**/

  document.getElementById('popup').innerHTML = this.states[this.status].html;


  document.getElementById('popup').style.display = 'block';
  document.getElementById('popup').innerHTML = this.states[this.status].GUI.html;

  this.states[this.status].updateGUI();


}

Actor.prototype.getAllStates = function () {
  var str='';
  console.log(this.ID);
  for (var j=0; j<this.states.length; j++) {
    if (j!=0) {
      str += ',';
    }
    str += this.ID + '::' + this.states[j].ID;
  }
  return str;
}
