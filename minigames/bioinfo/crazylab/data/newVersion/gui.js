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
 *  along with mowgli.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */


'use strict';

/*********************
 * @class GUI
 *
 *********************/
function GUI(json_gui) {
  this.graphics    = json_gui.graphics;
  this.buttons     = [];
  this.title       = '';


  if (this.graphics != null) {
    console.log(this.graphics);
    this.graphics.type = this.graphics.media.substring(this.graphics.media.lastIndexOf(".")+1, this.graphics.media.length);
  }

  this.setButtons(json_gui.actions);

  this.create();
}

GUI.GRAPHICS_PROPS = 2;
GUI.BUTTONS_PROPS  = 4;
GUI.TITLE_PROPS    = 8;

/**
 * Set description
 **/
GUI.prototype.setTitle = function(text) {
  this.title = text;
}

/**
 * 'graphics' contains: media and actions
**/
GUI.prototype.setButtons = function(actions) {
//  console.log(this.title +' -->new Action ' + actions);

  if (actions != null) {
    for (var i=0; i < actions.length; i++) {
      if (actions[i].event === 'click') {
        this.title = actions[i].html;
      }
      else {
        this.buttons.push(actions[i].event);
      }
      console.log(actions[i].event);
    }
    this.buttons.sort();
    console.log(this.buttons);
  }


  this.properties = 0;
  this.properties += (this.graphics != null)   ? GUI.GRAPHICS_PROPS : 0;
  this.properties += (this.buttons.length !=0) ? GUI.BUTTONS_PROPS : 0;
  this.properties += (this.title.length !=0)   ? GUI.TITLE_PROPS : 0;

}

GUI.prototype.create = function() {

  function displaySVG() {
    // SVG
    var str='';

    // actions in popup_footer
    document.getElementById('close').style.display = 'inline';
  }

  // Pre-calculate GUI for popup div...
   this.html='';
   if (this.hasTitle() ) {
     this.html += '<div id="popup_header">';
     this.html += this.title;
     this.html += '</div>';
   }

   this.html += '<div id="popup_footer">';

   if (this.hasGraphics() ) {
     // Close button
     this.html += '<ul><li><a id="close" href="javascript:void(0)" onclick="closePopup();"><img src="media/close.svg"></img></a></li>';
   }

   if (this.hasButtons() ) {
     // Other buttons: magnifier, hand, and chat
     for (var i=0; i < this.buttons.length;i++) {
       switch (this.buttons[i]) {
         case 'explore':
           this.html += '<li><a id="explore" href="javascript:void(0)" onclick="explore();"><img src="media/magnifier.svg"></img></a></li>';
           break;
         case 'grab':
           this.html += '<li><a id="grab" href="javascript:void(0)" onclick="grab();"><img src="media/hand.svg"></img></a></li>';
           break;
         case 'talk':
           this.html += '<li><a id="talk" href="javascript:void(0)" onclick="talk();"><img src="media/talk.svg"></img></a></li>';
           break;
         case 'use':
           this.html += '<li><a id="use" href="javascript:void(0)" onclick="use();"><img src="media/gears.svg"></img></a></li>';
           break;
       }
     }
   }
   this.html += '</ul></div>';

   if (this.hasGraphics() ) {
     this.html += '<div id="popup_body">';
     switch (this.graphics.type) {
       case 'svg':
         this.html += '<object id="popup_svg" type="image/svg+xml"></object>';
         break;
       case 'mp4':
       case 'ogg':
         // Video mp4 ogg
         this.html += '<video width="100%" autoplay>';
         this.html += '<source src="' + (media_path + this.graphics.media) + '" type="video/mp4">';
         this.html += '<source src="' + (media_path + this.graphics.media) + '" type="video/ogg">',
         this.html += '</video>';
         break;
       default:
         // TODO

     }

     this.html += '</div>';
   }

}

GUI.prototype.hasGraphics = function() {
  return ( (this.properties & GUI.GRAPHICS_PROPS) == GUI.GRAPHICS_PROPS) ? true : false;
}

GUI.prototype.hasButtons = function() {
  return ( (this.properties & GUI.BUTTONS_PROPS) == GUI.BUTTONS_PROPS) ? true : false;
}

GUI.prototype.hasTitle = function() {
  return ( (this.properties & GUI.TITLE_PROPS) == GUI.TITLE_PROPS) ? true : false;
}

GUI.prototype.update = function() {
  // Update background media by setting visibility of each element in the svg file.
  var graph = this.graphics;
  if (this.hasGraphics() && this.graphics.type === 'svg') {
    var a = document.getElementById('popup_svg');
    a.data= (media_path + this.graphics.media);
    a.addEventListener("load",function() {
      var svgDoc = this.contentDocument; //get the inner DOM of popup_svg.svg
      console.log(graph.elements);
      for (var i=0; i < graph.elements.length; i++) {
        console.log(graph.elements[i]+'==?'+graph.visibility+' '+ graph.elements[i].indexOf(graph.visibility));
        if (graph.visibility.indexOf(graph.elements[i]) == -1) {
          svgDoc.getElementById(graph.elements[i]).style.display = 'none';
        }
        else {
          svgDoc.getElementById(graph.elements[i]).style.display = 'block';
        }
      }
    },false);
  }
}
