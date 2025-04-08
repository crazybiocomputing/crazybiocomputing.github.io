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
 * Test of a scene
 */

 "use strict";

var inventory = [
  {
    'ID'     : 'book',
    'states' : [
      {
        'ID'         : 'init',
        'description': 'A red book...',
        'graphics'   : {
          'media'  : 'book.svg'
        },
        'actions'   : [
          {'event':'click','html':'A red book...'}
        ]
      }
    ]
  },
  {
    'ID'     : 'coin',
    'states' : [
      {
        'ID'         : 'init',
        'description': 'A coin...',
        'graphics': {
          'media'     : 'coinEuro.svg',
        },
        'actions'   : [
          {'event':'click','html':'A coin...'}
        ]
      },
    ]
  },
  {
    'ID'     : 'newspaper',
    'states' : [
      {
        'ID'         : 'init',
        'description': 'The last issue of <i>Bioinformatics News</i>...',
        'graphics': {
          'media'  : 'newspaper.svg'
        },
        'actions'   : [
          {'event':'click','html':'The last issue of <i>Bioinformatics News</i>...'}
        ]
      }
    ]
  },
  {
    'ID'     : 'screwdriver',
    'states' : [
      {
        'ID'         : 'init',
        'description': '',
        'graphics': {
          'media'  : 'screwdriver.svg'
        },
        'actions'   : [
          {'event':'click','html':'A yellow and black screwdriver...'}
        ]

      }
    ]
  }
]


var coffeeRoom = (function() {
  console.log('scene coffeeRoom');

  var dialogs = {
  '000' : {
    'html'  : [
      '__player__ Hi!',
      '__people__ Hi! ... Hmm I\'m tired... Need a coffee but I\'ve lost my last coin',
    ]
  },
  '010' : {
    'html'  : [
      '__player__ A coffee for you',
      '__people__ Thanks a lot...',
    ]
  }

}



var characters = [
  {
    /**
    * @require: The student is in the coffee room only if the player read the newspaper on the table.
    * First: He is waiting for a cup of coffee
    * Second: Once he got it, he begins to talk
    **/
    'ID'     : 'student',
    'states' : [
      {
        'ID'         : 'init',
        'graphics'   : {
          'media'  : 'student_simple.svg',
          'elements'  : ['body','coffeeCup','arm'],  // all the actors in the media.
          'visibility': 'body',  // two actors visible: carpet and coin.
        },
        'actions': [
          {'event': 'click', 'html' : 'A student is waiting in front of the vending machine...'},
          {'event': 'talk', 'dialog': '000'}
        ]
      },
      {
        'ID'     : 'with_coffee',
        'media'  : 'student_simple.svg',
        'actions': [
          {'event': 'explore', 'html' : 'The student is drinking his coffee...'},
          {'event': 'talk', 'dialog': '010'}
        ]
      }
    ]
  },

]

var objects = [
  {
    'ID'     : 'box1',
    'states' : [
      {
        'ID'         : 'init',
        'description': 'An empty box...', // Obsolete...
        'graphics'   : {
          'media'     : 'box.svg',
          'elements'  : ['background','box','box-top'],  // all the actors in the media.
          'visibility': 'background,box,box-top',  // two actors visible: carpet and coin.
        },
        'actions'   : [
          {
            'event'  :'click',
            'html'   :'An empty box...', // identical to description
          },
          {
            'event'  :'explore',
            'html'   :'A box containing tools...',
          },
          {
            'event'  :'grab',
            'html'   :'You got a screwdriver...',
            'trigger': 'set hasScrewDriver, store screwdriver' // add flag
          }
        ]
      },
      {
        'ID'     : 'hasScrewDriver',
        'description': '...Hmm...',
        'graphics'   : {
          'media'     : 'box.svg',
          'elements'  : ['background','box'],  // all the actors in the media.
          'visibility': 'background',  // two actors visible: carpet and coin.
        },
        'actions': [
          {
            'event'  :'click',
            'html'   :'An empty box...', // identical to description
          },
          {
            'event'  :'explore',
            'html'   :'The box is empty...',
          },
        ]
      }
    ]
  },
  {
    'ID'     : 'box2',
    'states' : [
      {
        'ID'     : 'init',
        'description': '...A box containing a scientific book...',
        'graphics': {
          'media'  : 'shelves_book.svg',
          'elements'  : ['shelves','box','box_front','box_top','book'],  // all the actors in the media.
          'visibility': 'shelves,box,box_front,box_top,book',  // two actors visible: carpet and coin.
        },
        'actions': [
          {
            'event'  :'click',
            'html'   :'...A box containing a scientific book...', // identical to description
          },
          {
            'event'  :'explore',
            'html'   :'A book about Biochemistry...',
          },
          {
            'event'    :'grab',
            'html'     :'You grab it...',
            'trigger'  : 'set hasBook,store book', // add flag
          }
        ]
      },
      {
        'ID'     : 'hasBook',
        'description': '...An empty box...',
        'graphics': {
          'media'  : 'shelves_book.svg',
          'elements'  : ['shelves','box','box_front','box_top','book'],  // all the actors in the media.
          'visibility': 'shelves,box,box_front,box_top',  // two actors visible: carpet and coin.
        },
        'actions': [
          {
            'event'  :'click',
            'html'   :'An empty box...', // identical to description
          },
          {
            'event'  :'explore',
            'html'   :'There is nothing interesting in this box...',
          }
        ]
      },
    ]
  },
  {
    'ID'     : 'box3',
    'states' : [
      {
        'ID'          : 'init',
        'description' :'...Papers, articles, journals ...Nothing is interesting...',
        'actions': [
          {
            'event'  :'click',
            'html'   :'...Papers, articles, journals ...Nothing is interesting...', // identical to description
          },
        ]
      }
    ]
  },
  {
    'ID'     : 'box4',
    'states' : [
      {
        'ID'         : 'init',
        'description': 'An empty box...',
        'graphics'   : {
          'media'     : 'shelves_book.svg',
          'elements'  : ['shelves','box','box_front','box_top','book'],  // all the elements in the media.
          'visibility': 'shelves,box,box_top',  // the elements visible: only background.
        },
        'actions': [
          {
            'event'  :'click',
            'html'   :'An empty box...', // identical to description
          },
        ]
      },
    ]
  },
  {
    /**
     * This carpet `contains' a visible coin (init), then it is grabbed and becomes invisible (coin_grabbed).
     * From the inventory, the coin can be out (drag and drop somewhere in an active area)
    **/
    'ID'      : 'carpet',
    'states' : [
      {
        'ID'         : 'init',
        'description': 'Someone lost a coin...',
        'graphics'   : {
          'media'     : 'carpet_simple.svg',
          'elements'  : ['carpet','coin'],  // all the actors in the media.
          'visibility': 'carpet,coin',  // two actors visible: carpet and coin.
        },
        'actions'    : [
          {
            'event'  :'click',
            'html'   :'Someone lost a coin...', // identical to description
          },
          {
            'event'  : 'explore', // Magnifier
            'html'   : ['This is exactly what I need to take a coffee ...']
          },
          {
            'event'  :'grab', // Hand
            'html'   :'Could be useful...',
            'trigger':'set coin_grabbed, store coin',
          },
        ]
      },
      {
        'ID'        : 'coin_grabbed',
        'description':'Nothing interesting... Just a dirty carpet...',
        'graphics': {
          'media'     : 'carpet_simple.svg',
          'elements'  : ['carpet','coin'],  // all the actors in the media.
          'visibility': 'carpet',  // background: carpet - must contain the media.
        },
        'actions'    : [
          {
            'event'  :'click',
            'html'   :'Nothing interesting... Just a dirty carpet...', // identical to description
          },
        ]
      }
    ]
  },
  {
    'ID'     : 'coffee_slot',
    'states' : [
      {
        'ID'     : 'init',
        'graphics': {
          'media'     : 'coffeeSlot.svg',
          'elements'  : ['slot','coin'],  // all the actors in the media.
          'visibility': 'slot',  // background: carpet - must contain the media.
        },
        'actions': [
          {
            'event':'explore', // Magnifier
            'html': ['That\'s for inserting a coin.']
          }
        ]
      },
      {
        'ID'     : 'useCoin',
        'graphics': {
          'media'     : 'coffeeSlot.svg',
          'elements'  : ['slot','coin'],  // all the actors in the media.
          'visibility': 'slot,coin',  // background: carpet - must contain the media.
        },
        'actions': [
          {
            'require' : 'coin',
            'event'    : 'use',        // Gears
            'html'     : 'The coffee is prepared and you grab it',
            'trigger'  : 'set init, store cup',       // update state (here, reset) and put cup in inventory
            'cutscene' : 'coffeeCup',  // run cutscene (animation)
          },
        ]
      }
    ]
  },
  {
    'ID'      : 'coffee_machine',
    'states' : [
      {
        'ID'         : 'init',
        'description': 'This vending machine offers hot drinks: tea, chocolate, .... and coffee. Yes!',
        'actions': [
          {
            'event'  : 'click',
            'html'   : 'This vending machine offers hot drinks: tea, chocolate, .... and coffee. Yes!',
            'trigger': 'show table'
          }
        ]
      }
    ]
  },
  {
    'ID'      : 'coffee',
    'states' : [
      {
        'ID'     : 'init',
        'graphics'   : {
          'media'   : 'coffeeCupFullHD.ogg',
        },
        'actions' : [
          {
            'event':'explore',
            'html' : ['The coffee machine seems to work... but I\' have no coin...']
          },
        ]
      }
    ]
  },
  {
    'ID'     : 'sofa',
    'states' : [
      {
        'ID'         : 'init',
        'actions': [
          {
            'event'  :'click',
            'html'   :'Hmm... someone leaves a pen on the sofa. I take it... That could be useful later...',
            'trigger': 'store pen'}
        ]


      }
    ]
  },
  {
    'ID'     : 'table',
    'states' : [
      {
        'ID'      : 'init',
        'graphics': {
          'media'  : 'table.jpg',
        },
        'actions': [
          {'event':'click','html':'A table ...'}
        ]
      }
    ]
  },
  {
    'ID'   : 'window',
    'states' : [  // states, modes, stages, statuses
      {
        'ID'          : 'init',
        'description' : 'A street with buildings, cars, trucks, pedestrians... A usual urban scenery...',
        'actions': [
          {'event'  :'click','html':'A street with buildings, cars, trucks, pedestrians... A usual urban scenery...'}
        ]
      }
    ]
  },

] // End of objects

var cutscenes = {
  'hasCoin': {
    'event': 'inventory',
  },
  'coffeeCup': {
    'graphics': {
      'media'  : 'coffee.mp4',
    },
    'event'  : 'inventory',
    'trigger': 'usedCoin',
    'remove' : ['hasCoin']
  },
  'hasScrewDriver': {
    'event'  : 'inventory',
    'media'  : 'emptyBox.jpg',
    'trigger': 'usedScrewDriver',
    'remove' : ['hasScrewDriver']
  },
}


var geometries = [
      {
        'ID'       : 'student',
        /* x="512.85712" y="42.857143" width="177.1429" height="321.42859"  */
        'geometry' : [512,42,177,321], // Only four values -> Rectangle
      },
      {
        'ID'       : 'coffee',
        // More than four values -> Polygon
        'geometry' : ['m',796.29607,262.46217, 45.161,12.06056, -3.03046,41.41625, -43.43656,-12.12183],
      },
      {
        'ID'       : "coffee_slot",
        'geometry' : ['m',865.70073,183.10392, 20.20305,5.05076, -4.04061,60.60916, -19.1929,-5.05077],

      },
      {
        'ID'       : 'coffee_machine',
        // More than four values -> Polygon
        'geometry' : ['m',784,81,77,16,-7,175, -74,-20],
      },
      {
        'ID'       : 'carpet',
        /* sodipodi:cx="301.02545" cy="590.7005" rx="22.223356" ry="22.223356" */
        'geometry' : [301,590,22], // Only three values (X,Y,radius) -> Circle
      },
      /**
      {
        'ID'       : 'box1',
        'geometry' : [535,500,150,150], // Only four values (X,Y,W,H) -> Rectangle
      },
      **/
      {
        'ID'       : 'sofa',
        // More than four values -> Polygon
        'geometry' : [
          'm',
          76.771593,376.54813,
          240.416307,-88.89342,
          115.15739,48.48732,
          2.0203,78.7919,
          -240.4163,96.97465,
          -113.137086,-48.48733
        ]
      },
      {
        'ID'       : 'box1',
        // More than four values -> Polygon
        'geometry' : [
          'm',
          1036.4165,429.07607,
          29.2944,-16.66752,
          35.8605,11.61675,
          -4.0407,23.23351,
          -28.2842,15.15229,
          -36.3655,-12.62691
        ]
      },
      {
        'ID'       : 'box2',
        // More than four values -> Polygon
        'geometry' : [
          'm',
          1121.2693,338.66741,
          31.3148,-16.66751,
          36.8705,12.6269,
          -3.5355,24.24366,
          -27.7792,13.13199,
          -37.8807,-10.6066
        ]
      },
      {
        'ID'       : 'box3',
        // More than four values -> Polygon
        'geometry' : [
          'm',
          1074.2972,223.51002,
          2.0203,0.50508,
          45.4569,9.09138,
          -4.0406,42.4264,
          -29.2944,15.15229,
          -37.8808,-9.59645,
          5.0508,-46.46701
        ]
      },
      {
        'ID'         : 'box4',
        // More than four values -> Polygon
        'geometry'   : [
          'm',
          1126.8252,196.74098,
          32.8299,-14.14213,
          44.9518,11.11167,
          -5.0508,37.37565,
          -31.3147,14.64721,
          -44.9518,-11.11168
        ]
      },
      {
        'ID'       : 'window',
        // More than four values -> Polygon
        'geometry' : [
          'M',
          5.7142853,50,
          212.85714,2.8571425,
          410,2.8571425,
          417.14286,180,
          4.2857143,311.42857
        ]
      },
      {
        'ID'       : 'table',
        'display'  : 'none',
        // More than four values -> Polygon
        'geometry' : ['M',250,501.42857, 472.85714,407.14286, 611.42857,464.28571, 384.28571,565.71429]
      }

    ];

    var exits = [
      {
        'ID'       : 'exit',
        // More than four values -> Polygon
        'geometry' : ['M',1077.1429,642.85714,1270,524.28571,-1.4286,121.42858]
      }

    ];


  // Exports
  return {
    'ID'         : 'coffee',
    'description': 'The coffee room of the lab...',
    'background' : 'coffee_man_1280x720.jpg',
    'characters' : characters,
    'dialogs'    : dialogs,
    'objects'    : objects,
    'geometries' : geometries
  }

})();


//
// End of scene `coffeeRoom`
//
