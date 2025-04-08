/*
 *  crazybioGame: CrazyBioComputing Game Engine
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
 *  along with crazybioGame.  If not, see <http://www.gnu.org/licenses/>.
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
 * @class Scene
 *
 *********************/
function Scene(json_scene) {

  function getGeometryFrom(array,id) {
    var i = 0;
    while (i< array.length) {
      if (array[i].ID === id){
        return array[i];
      }
      i++;
    }
    return null;
  }
  console.log(json_scene.characters);

  this.ID = json_scene.ID || null;
  this.background = json_scene.background || null;
  this.states = '';
  this.actors = {};

  for (var i=0; i< json_scene.objects.length; i++) {
    var obj = json_scene.objects[i];
    this.actors[obj.ID]= new Actor(obj,'object');
    this.actors[obj.ID].setGeometry(getGeometryFrom(json_scene.geometries,obj.ID) );
    this.states += this.actors[obj.ID].getAllStates()+',';
  }

  for (var i=0; i< json_scene.characters.length; i++) {
    var people = json_scene.characters[i];
    console.log(people);
    this.actors[people.ID]= new Actor(people,'character');
    this.actors[people.ID].setGeometry(getGeometryFrom(json_scene.geometries,people.ID) );
    console.log(people.ID);
    console.log(this.actors[people.ID]);
    this.states += this.actors[people.ID].getAllStates()+',';
  }

  console.log(this);

  this.svg = this.createBackground();
}

Scene.prototype.createBackground = function () {
  var opacity = 0.0;  // DEBUG only. By default, equal to 0.0
  var color   = "#ff0"; // DEBUG only. By default, equal to fff
  var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" id="svgBckgrnd">'+
          '<image width="1280" height="720" xlink:href="'+(media_path + this.background)+'"></image>';

  for (var i in this.actors) {
    var obj = this.actors[i];

    // The spots to locate the interactive areas
    svg +='<circle  class="svg_spot" id="spot_'+obj.ID+'" title="'+obj.ID+':'+obj.status+'"';
    svg += 'cx="'+obj.cg.x+'" cy="'+obj.cg.y+'" r="10" fill="#f00" opacity="1.0" />';

    // Define interactive area(s)
    svg += '<a xlink:href="javascript:void(0)" onclick="sendMessage(\''+obj.ID+'\')">';
    if (obj.geometry.length == 3) {
      // A circle
      obj.cg.x = obj.geometry[0];
      obj.cg.y = obj.geometry[1];
      svg += '<circle id="svg_'+obj.ID+'" cx="'+obj.geometry[0]+'" cy="'+obj.geometry[1]+'" r="'+obj.geometry[2];
      svg += '" fill="'+color+'" opacity="'+opacity+'" />';
    }
    else if (obj.geometry.length == 4) {
      // A rectangle
      svg += '<rect id="svg_'+obj.ID+'"';
      svg += 'x="'+obj.geometry[0]+'" y="'+obj.geometry[1];
      svg += '" width="'+obj.geometry[2]+'" height="'+obj.geometry[3];
      svg += '" fill="'+color+'" opacity="'+opacity+'" />';
    }
    else {
      //Absolute coords
      var str = obj.geometry.toString();
      svg += '<polygon  id="svg_'+obj.ID+'" points="'+str+'" fill="'+color+'" opacity="'+opacity+'" />';
    }
    svg += '</a>';

  }
  svg+='</svg>';
  return svg;

}
