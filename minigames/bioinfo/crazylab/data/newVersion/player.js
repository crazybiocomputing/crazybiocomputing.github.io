/*********************
 * @class Player
 *
 *********************/
function Player(first) {
  this.path = [];
  this.path.push( {
    'ID': first,
    'answers':[]
  });

  this.GUI = '';
  this.inventory = [];
  this.avatar = 'anna.svg';
}

Player.prototype.addItem = function (an_actor) {
  this.inventory.push(an_actor);
}

Player.prototype.logpath = function () {
  var str='<ul>';
  for (var i in path) {
    str +=  '<li>'+path[i].ID + '[';
    for (var j in path[i].answers) {
      str += path[i].answers[j] +', ';
    }
    str += '] </li>';
  }
  str +='</ul>';
  document.getElementById('log').innerHTML = str;

}

Player.prototype.updateInventory = function () {
  var element = document.getElementById('inventory');
  var str='<ul>';
  for (var i=0; i < this.inventory.length; i++) {
    str+='<li><a href="javascript:void(0)" onclick="useInventory(\''+i+'\')">';
    console.log(this.inventory[i]);
    var item = game.inventory[this.inventory[i]];
    console.log(item);
    str+='<img class="inventory_item" src="'+(media_path + item.states['init'].graphics.media)+'"></object>';
    str+='</a></li>';
  }
  str += '</ul>';
  element.innerHTML = str;
}
