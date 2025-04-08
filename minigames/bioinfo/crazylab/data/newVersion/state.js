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

/*
 * Constructor
 */

'use strict';

/*********************
 * @class State
 *
 *********************/
 function State(json_state) {
   this.ID     = json_state.ID || '__unknown__';
   this.actor  = null;
   console.log('new State');
   
   if (json_state.actions != null) {
     this.actions  = {};
     for (var i=0; i < json_state.actions.length; i++) {
        var action = new Action(json_state.actions[i]);
        this.actions[action.event] = action;
     }
   }
   else {
     console.log('Actions are required...'+ this.actor);
   }

   // Build GUI/popup with graphics + butttons
   this.GUI = new GUI(json_state);
 }

 State.prototype.addAction = function(action) {
   // return action corresponding to the given event
   this.actions[action.event] = action;
   console.log('addAction '+this.actor);
   action.setActor(this.actor);
 }

 State.prototype.getAction = function(event) {
   // return action corresponding to the given event
   return this.actions[event];
 }

 State.prototype.getActionWithRequire = function(requirement) {
   // return action containing this requirement
 }

 State.prototype.setActor = function(parent) {
   // return action containing this requirement
   console.log('State::setActor '+parent+' '+this.actions);
   this.actor = parent;
   // Propagate to children
   for (var i in this.actions) {
     this.actions[i].setActor(parent);
   }
 }

State.prototype.updateGUI = function() {
  this.GUI.update();
}
