
var NONE=1;
var CLOSABLE=2; // == CLICKABLE_CLOSE
var CONTAINABLE=4; // == CLICKABLE_POPUP
var DEBUGGABLE=8;
var ENCRYPTABLE=16;
var LINKABLE=32;
var MOVABLE=64;
var RENDERABLE=128;
var RESIZABLE=256;
var REVEALABLE=512;
var SWITCHABLE=512; // synonym of REVEALABLE
var ROTATABLE=1024;
var SCROLLABLE=2048;



var TOKEN_PROPS = CLOSABLE | CONTAINABLE | LINKABLE | MOVABLE | RENDERABLE | ROTATABLE;

var TokenFactory = (function() {

  return {
    get: function (options) {
      var tok = new Token(options);
      console.log(tok.description.title +' '+tok.width);
      tok.html='<div class="token" id="'+tok.ID+'" style="background:'+tok.background_color+';" onmousedown="move(this,event)">';

      // Background + button(s)
      if ( (tok.props & CLOSABLE) && (tok.props & ROTATABLE) ) {
        console.log('closable? ' + tok.props.toString(2)+ ' ' + CLOSABLE + ' ' + (tok.props & CLOSABLE) );
        tok.html+='<img src="'+tok.path_img+tok.background+'" style="position:absolute;left:0px;clip:rect(0px '+tok.height+'px '+tok.height+'px 0px);"  onmousedown="return false;">';
      }
      else if ( (tok.props & CLOSABLE) ) {
        tok.html+='<img style="';
        tok.html+='position:absolute;';
        tok.html+='left:-'+tok.height+'px;clip:rect(0px '+(2*tok.height)+'px '+tok.height+'px '+tok.height+'px);"';
        tok.html+='src="'+tok.path_img+tok.background+'" onmousedown="return false;">'
      }
      else if ( (tok.props & ROTATABLE) ) {
        tok.html+='<img style="position:absolute;left:-200px;clip:rect(0px '+(3*tok.height)+'px '+tok.height+'px '+(2*tok.height)+'px);" src="'+tok.path_img+tok.background+'" onmousedown="return false;">';
      }
      else {
        tok.html+='<img style="position:absolute;left:-300px;clip:rect(0px '+(4*tok.height)+'px '+tok.height+'px '+(3*tok.height)+'px);" src="'+tok.path_img+tok.background+'" onmousedown="return false;">';
      }

      // Knot(s)
      for (var i=0;i<4;i++) {
        if (tok.knots[i]!= 'x') {
          tok.html+='<img class="knot" id="'+tok.knots[i].toLowerCase()+i+'_'+tok.ID+'" src="'+tok.path_img+tok.knots_img+'" onmousedown="return false;">';
        }
      }

      // Icon
      if (tok.clip=='undefined')
        tok.html+='<img title="'+tok.title+'" style="display:block; position:absolute; top:0px; left:0px;" src="'+tok.path_img+tok.icon+'" onmousedown="return false;">';
      else
        tok.html+='<img title="'+tok.title+'" style="display:block; position:absolute; top:0px; left:'+tok.clip_left+';clip:'+tok.clip+';" src="'+tok.path_img+tok.icon+'" onmousedown="return false;">';

      tok.html+='</div';
      return tok;
    }
  }

})();


function Token(options) {
  // Init
  this.ID = options.ID || -1;
  this.props = options.props || (CLOSABLE | CONTAINABLE | LINKABLE | MOVABLE | RENDERABLE | ROTATABLE);
  this.status = -1;
  this.orgx = options.orgx || 0;
  this.orgy = options.orgy || 0;
  this.width = options.width || TOKENSIZE;
  this.height = options.height || TOKENSIZE;
  this.type = options.type || 'X';
  this.title = options.title || 'No title';
  this.angle = options.angle || 0;
  this.description = options.description  || {title:'None',contents:''}; 
  this.nodes = options.nodes; 
  this.cell_x = (options.cell_x != null) ? options.cell_x : -1;
  this.cell_y = (options.cell_y != null) ? options.cell_y : -1;
  this.knots=options.knots || 'ixox';
  this.background_color=options.background_color || '#FFFFFF';

  this.path_img = HOME_FLOW +'/crazybioflow/img/'+TOKENSIZE+'/';
  this.background=options.background || 'background_token.png';
  this.knots_img = 'knots_row.png';
  this.icon=options.icon || 'question_mark.png';
  if (this.icon.indexOf("../crazybioflow/img/") != -1) {
    // Backward compatibility
    this.icon = this.icon.substring(20,this.icon.length);
  }


  this.clip=options.clip || 'undefined';
  this.clip_left=options.clip_left || 0;

  console.log('new Token '+this.ID+ ' '+this.cell_x+' '+this.cell_y+' '+this.props);
}

Token.prototype.getKnotRect = function(type) {
  var rect='';
  switch (type) {
  case 'o':
    rect= 'rect(0px '+this.height+'px '+this.height+'px   0px)'; 
    break;
  case 'O':
    rect= 'rect(0px '+(2*this.height)+'px '+this.height+'px '+   this.height +'px)';
    break;
  case 'i':
    rect= 'rect(0px '+(3*this.height)+'px '+this.height+'px '+(2*this.height)+'px)'; 
    break;
  case 'I':
    rect= 'rect(0px '+(4*this.height)+'px '+this.height+'px '+(3*this.height)+'px)'; 
    break;
  default:
    rect= 'rect(0px '+this.height+'px '+this.height+'px   0px)'; 
  }
  return rect;
}    

Token.prototype.getKnotLeft = function(type) {
  var left = 0;
  switch (type) {
  case 'o':
    left=0;
    break;
  case 'O':
    left=-this.height;
    break;
  case 'i':
    left=-2*this.height;
    break;
  case 'I':
    left=-3*this.height;
    break;
  default:
    left=0;
  }
  return left;
}



