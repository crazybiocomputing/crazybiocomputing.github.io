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
  * @class Action
  *
  *********************/
  function Action(json_action) {
    // explore, grab, talk or use
    this.event     = json_action.event;
    this.require   = json_action.require || 'none';
    this.html      = json_action.html || '';
    this.actor     = null; // Parent

    if (json_action.trigger != null) {
      this.targets = this.createTargets(json_action.trigger);
    }
  }

  Action.prototype.run = function() {
    if (this.require !== 'none') {
      // TODO
    }
    this.updateTargets();
  }

  Action.prototype.updateTargets = function() {
    for (var target of this.targets) {
      switch (target.key) {
        case 'set':
          this.actor.setStatus(target.value);
          break;
        case 'show':
          break;
        case 'hide':
          break;
        case 'store':
          player.addItem(target.value);
          break;
        default:
          // do nothing
      }
    }
  }


  Action.prototype.createTargets = function(str) {
    var targets = [];
    var words = str.split(/[\s,]+/);
    console.log(words);
    for (var i=0; i < words.length; i+=2) {
      targets.push({'key':words[i],'value':words[i+1]}) ;
    }
    return targets;
  }

 Action.prototype.setActor = function(actor) {
   this.actor = actor;
   console.log('Action::setActor ' + actor.ID);
}
