var dialogs = {


}

var characters = {
  'nobody' {
    'ID'        : 'nobody'
  },
  'student': {
    'ID'        : 'student',
    'resources' : 'face.jpg',
    'actions'   : {
      'explore': {event: 'explore', html : 'A tall man...'},
      'speak'  : {event: 'speak', 'dialog': dialogs['000']}
    }
  },
  'student_with_coffee': {
    'ID'        : 'student_with_coffee',
    'resources' : 'face.jpg',
    'actions'   : {
      'explore': {event: 'explore', html : 'A tall man...'},
      'speak'  : {event: 'speak', 'dialog': dialogs['000'] }
    }
  },
  'girl': {

  },
  'anna': {

  }
}

var objects = {
  'electroshock_weapon' : {
    'ID'         : 'electroshock_weapon',
    'resources'  : 'taser.jpg',
    'actions'    : [
      {
        'event'  :'grab',
        'html'   :'You got it...',
        'trigger': 'hasElectroshockWeapon' // add flag
      }
    ]
  },
  'blue_bird' : {
    'ID'         : 'blue_bird',
    'resources'  : 'blueBird.jpg',
    'actions'    : [
      {
        'event':'grab',
        'html':'You are too slooowww...'
      },
      {
        'event':'explore',
        'html': ['This is a blue bird...','It\'s so peaceful','Don\'t try to harass it!?!']
      },
      {
        'event'    : 'combine',
        'with'     : 'ElectroshockWeapon',
        'html'     : [
          'You set the taser to \'Low\' and... __next__ ...shot the bird. __next__ Don\'t try to kill it. It\'s so beautiful...',
          'The bird is too fast for you. He flew away...'
          ],
        'trigger'  : 'isFrozen' // add flag
      },
    ]
  },
  'blue_bird_frozen' : {
    'ID'         : 'blue_bird_frozen',
    'resources'  : 'blueBirdFrozen.jpg',
    'actions'    : [
      {
        'event':'explore',
        'html': ['The blue bird is burnt and ... __next__ is made of a steel??? __next__ It\'s a robot !?!','Don\'t try to harass it!?!']
      },
      {
        'event'   :'use',
        'html'    : 'It\'s a robot. Under its wing, a button is hidden... You push it',
        'trigger' : 'openBird'  // add flag
      },
    ]
  }

}

var effects = {
  'hasElectroshockWeapon': {
    'event': 'inventory',
  },
  'isFrozen': {
    'event': 'inventory',
  },
  'openBird': {
    'event'     : 'video',
    'resources' : 'openBird.mp4'
  },
}


var scenes = {
  'coffee' : {
    ID         : 'coffee',
    background : 'coffee1280x720.jpg',
    characters : [
      {
        'ID'       : 'student',
        'geometry' : [535,500,150,150], // Only four values -> Rectangle
        'condition': ['isThere',characters['nobody'],characters['student'] ]
      },
    ],
    objects    : [
      {
        'ID'       : 'tree',
        'geometry' : [535,500,150], // Only three values (X,Y,radius) -> Circle
        'targets'  : [objects['tree'] ],
      },
      {
        'ID'       : 'batteries',
        'geometry' : [535,500,150,150], // Only four values (X,Y,W,H) -> Rectangle
        'targets'  : {'action':'dialog','target':'000'},
      },
      {
        'ID'       : 'blue_bird',
        // More than four values -> Polygon
        'geometry' : [100,100,200,300,100,100],
        /**
         *  if (status.indexOf(isFrozen) != -1 ) {
         *    target = objects['blue_bird_frozen'];
         *  }
         *  else {
         *    target = objects['blue_bird'];
         *  }
          **/
        'condition': ['isFrozen',objects['blue_bird_frozen'],objects['blue_bird'] ]
      }
    ],
    exits     : [

    ],

  }
}

console.log(scenes['S000'].objects[2].condition[1]);
console.log(objects['detective'].actions[1]);

//
// End of storyboard
//
