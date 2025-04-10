// Jean-Christophe Taveau
// http://www.crazybiocomputing.free.fr
// http://crazybiocomputing.blogspot.com
// Nov. 2013


var SANDBOX_BORDER_AND_PADDING = 4;
var BOARD_MARGIN_AND_PADDING = 0;

var neighbors = [
  {'dx':0.0,'dy':-1.0,'iknot':2},
  {'dx':1.0,'dy':0.0,'iknot':3},
  {'dx':0.0,'dy':1.0,'iknot':0},
  {'dx':-1.0,'dy':0.0,'iknot':1}
];

var TOKENSIZE = 100.0;
var HOME_FLOW = '';

var max_tokens = 0;

var tokens=[];

var code='';
var sandbox = {};

function init(size) {
  if (size!=null) {
    TOKENSIZE = size;
  }
  max_tokens = Math.floor(900 / TOKENSIZE);

  var num = 0;
  for (var i in tokenOptions)
    if (tokenOptions[i].props & RENDERABLE)
      num++;

  sandbox.element = document.getElementById('sandbox');
  sandbox.width  = Math.min(max_tokens,Math.max(3,num) );
  sandbox.height = Math.ceil(num/sandbox.width);
  sandbox.element.style.width  = sandbox.width  * TOKENSIZE;
  sandbox.element.style.height = sandbox.height * TOKENSIZE;

  board.element = document.getElementById('board');
  board.element.style.width = board.width * TOKENSIZE;
  board.element.style.height = board.height * TOKENSIZE;

  createBoard();
  createTokens();
  console.log(board);

}

function createBoard() {
  for (var y=0; y<board.height; y++) {
    for (var x=0; x<board.width; x++) {
      board.cells[x + board.width * y] = 'x';
    }
  }

}

// Factory
function createTokens() {
  var count=0;
  for (var i in tokenOptions) {
    if (tokenOptions[i].props & RENDERABLE) {
      padLeft = SANDBOX_BORDER_AND_PADDING; // sandbox.element.style.paddingLeft;
      padTop  = SANDBOX_BORDER_AND_PADDING; // sandbox.element.style.paddingTop;
      console.log('PAD '+padLeft +' ' + padTop);
      tokenOptions[i].orgx = padLeft + (count%sandbox.width) * TOKENSIZE ;
      tokenOptions[i].orgy = padTop + Math.floor(count/sandbox.width) * TOKENSIZE;

      var ID = tokenOptions[i].ID;
      tokens[ID] = TokenFactory.get(tokenOptions[i]);
      var dx = tokens[ID].orgx;
      var dy = tokens[ID].orgy;

      // Update sandbox and/or board
      if (tokens[ID].cell_x != -1 && tokens[ID].cell_y != -1 ) {
        dx = BOARD_MARGIN_AND_PADDING + tokens[ID].cell_x  * TOKENSIZE;
        dy = BOARD_MARGIN_AND_PADDING + tokens[ID].cell_y  * TOKENSIZE;
        // Update board
        board.cells[tokens[ID].cell_x + board.width * tokens[ID].cell_y]=ID;
        tokens[ID].status=0;
        board.element.innerHTML+=tokens[ID].html;
      }
      else
        sandbox.element.innerHTML+=tokens[ID].html;


      tokens[ID].element = document.getElementById(''+ID);
      tokens[ID].element.style.top  =  dy + 'px';
      tokens[ID].element.style.left =  dx + 'px';

      console.log(tokens[ID]);
      count++;
    }
    else {
      var ID = tokenOptions[i].ID;
      tokens[ID] = TokenFactory.get(tokenOptions[i]);
    }
  }
  updateKnots();
}


// http://www.snook.ca/archives/javascript/anatomy_of_a_drag_and_drop/

/*
	Copyright Robert Nyman, http://www.robertnyman.com
	Free to use if this text is included
	// modified slightly based on Prototype
*/
  var xDelta = 0, yDelta = 0;
  var xStart = 0, yStart = 0;
  var token=null;
  var activeToken=null;


  // remove the events
  function enddrag(e)
  {
    e = e || window.event;
    var board_html = document.getElementById('board');

    document.onmouseup = null;
    document.onmousemove = null;
    var mouse_x_in_token = xStart - board_html.offsetLeft - token.offsetLeft;
    var mouse_y_in_token = yStart - board_html.offsetTop  - token.offsetTop;
    if (xDelta==0 && yDelta==0) {
      console.log("Click close "+ activeToken + ' '+xStart + ' '+ yStart + mouse_x_in_token + ' '+ mouse_y_in_token);
      if ( (activeToken.props & CLOSABLE) && mouse_x_in_token < 30 && mouse_y_in_token < 30 ) {
        // Click on top left area of a token aka 'Close' button");
        board.cells[activeToken.cell_x + board.width * activeToken.cell_y] = 'x';
        activeToken.status=-1;
        activeToken.cell_x=-1;
        activeToken.cell_y=-1;
        activeToken.angle=0;
        activeToken.knots = activeToken.knots.toLowerCase();

        // Update HTML and/or CSS
        //token.style.top  = activeToken.orgy + 'px';
        //token.style.left = activeToken.orgx + 'px';
      }
      else if ( (activeToken.props & ROTATABLE) &&  mouse_y_in_token < 30 && (activeToken.width - mouse_x_in_token) < 30 ) {
        // Click on top right area of a token aka 'Rotate' button");
        activeToken.angle=(activeToken.angle + 90)%360;
      }
      else if (activeToken.cell_x !=-1 && activeToken.cell_y !=-1 && (activeToken.props & CONTAINABLE)  )  {
        // Click elsewhere in a token
        // Open contents if on board
        var contents=activeToken.description.contents; // default
        if (activeToken.props & REVEALABLE) {
          var g= (activeToken.props & ENCRYPTABLE) ? encode(getGraph(activeToken)) : getGraph(activeToken);
          if (activeToken.DEBUGGABLE)
             printGraphDebug(activeToken);
          for (var n in activeToken.nodes)
            if (activeToken.nodes[n].key == g) {
              var node=activeToken.nodes[n].value;
              contents= (tokens[node].props & ENCRYPTABLE) ? decode(tokens[node].description.contents) : tokens[node].description.contents;
            }
        }
        var popup = document.getElementById('popup');
        popup.style.top = board_html.offsetTop + token.offsetTop + 80 + 'px';
        popup.style.left = board_html.offsetLeft + token.offsetLeft + 50 + 'px';
        str ='<div class="titlebar" >';
        str+='<div id="close" onclick="popup_close_click(this,event)"> <img src="'+ HOME_FLOW +'/crazybioflow/img/closeButton.png"></img></div>';
        str+='<div id="title" onmousedown="move_popup(this,event)">'+activeToken.description.title+'</div>';
        str+='<div class="clear"></div>';
        str+='</div>';
        str+='<div class="contents">'+contents+'</div>';
        str+='<div class="footer"></div>';
        popup.innerHTML=str;
        // update form
        console.log('update form ' + activeToken.status);
        readStatus(activeToken.ID);

      }
    }
    else {
      document.getElementById('popup').innerHTML='';
      console.log('end of drag' + xDelta + ", "+yDelta);
      xDelta=0; yDelta=0;
      var viewportOffset = board_html.getBoundingClientRect();
      // these are relative to the viewport

      var cell_x = xStart - parseInt(viewportOffset.left);
      var cell_y = yStart - parseInt(viewportOffset.top);
      console.log('board YES ' + xStart+' ' + yStart+' ' +parseInt(e.clientX) +' '+parseInt(e.clientY) +'->['+board_html.offsetLeft+' '+board_html.offsetTop+']='+cell_x+' '+cell_y);
      cell_x /= TOKENSIZE;
      cell_y /= TOKENSIZE;
      cell_x = (cell_x < 0.0) ? 0 : Math.floor(cell_x);
      cell_y = (cell_y < 0.0) ? 0 : Math.floor(cell_y);
      cell_x = (cell_x > parseFloat(board.width) ) ? (board.width -1) : Math.floor(cell_x);
      cell_y = (cell_y > parseFloat(board.height) ) ? (board.height-1) : Math.floor(cell_y);

      console.log('board '+  + " " + cell_x +' '+cell_y+' '+board.cells[cell_x + board.width * cell_y] );

      if (board.cells[cell_x + board.width * cell_y] === 0) {    
        // Update board and active token
        if (activeToken.status== -1)
          activeToken.status = 0;   
        else
          board.cells[activeToken.cell_x + board.width * activeToken.cell_y] = 'x';
    
        activeToken.cell_x = cell_x;
        activeToken.cell_y = cell_y;
        board.cells[activeToken.cell_x + board.width * activeToken.cell_y] = activeToken.ID;
      }
    }
    updateKnots();
    // HACK: ONLY FOR DEBUG: debugBoard();
  }

  // Fire each time it's dragged
  function drag(e)
  {
    e = e || window.event;
    xDelta = xStart - parseInt(e.clientX);
    yDelta = yStart - parseInt(e.clientY);
    xStart = parseInt(e.clientX);
    yStart = parseInt(e.clientY);
    token.style.top  = (token.offsetTop - yDelta) + 'px';
    token.style.left = (token.offsetLeft - xDelta) + 'px';

  }

  // initiate the drag
  function move(element,ev)
  {
    ev = ev || window.event;
    xStart = parseInt(ev.clientX);
    yStart = parseInt(ev.clientY);
    console.log('down '+element.id+' '+xStart+' ' + yStart );
    token=null;
    if (tokens[element.id].props & MOVABLE) {
      activeToken = tokens[element.id]; // A CHANGER --> retrouver l'ID
      token=element;

      document.onmouseup = enddrag;
      document.onmousemove = drag;
    }
    return false;
  }

  // initiate the drag
  function move_popup(element,ev)
  {
    ev = ev || window.event;
    xStart = parseInt(ev.clientX);
    yStart = parseInt(ev.clientY);
    console.log('down '+element.id );
    token=null;
    activeToken = tokens[element.id]; // A CHANGER --> retrouver l'ID
    token=element;

    document.onmouseup = end_drag_popup;
    document.onmousemove = drag_popup;
    return false;
  }

// tie it into the element
//  el.onmousedown = md;


  function popup_close_click(element,e)
  {
    var popup = document.getElementById('popup');
    popup.innerHTML='';
    popup.style.left='0px';
    popup.style.top='0px';
    console.log('click' + element.id +" "+x+" , "+y);

  }

  function shiftChar(str, value) {
    var out=str+str;
    return out.substring(str.length-value, str.length*2-value);

  }

  function render(tok) {
    // Update html and position for resize
    if (tok.cell_x ==-1 && tok.cell_y ==-1) {
      sandbox.element.innerHTML+=tok.html;
      el = document.getElementById(tok.ID);
      el.style.left= tok.orgx+'px';
      el.style.top = tok.orgy+'px';
    }
    else {
      board.element.innerHTML+=tok.html;
      el = document.getElementById(tok.ID);
      el.style.left= BOARD_MARGIN_AND_PADDING + (tok.cell_x * TOKENSIZE)+'px';
      el.style.top = BOARD_MARGIN_AND_PADDING + (tok.cell_y * TOKENSIZE)+'px';
      console.log('style '+tok.cell_x+' '+tok.cell_y+' = '+el.style.left+' '+el.style.top);
    }
  }

  function updateKnots() {
    // Check N, E, S and W neighbors
    sandbox.element.innerHTML='';
    board.element.innerHTML='';

    for (var itok in tokens) 
    {
      var tok = tokens[itok];
      if (tok.props & RENDERABLE)
        render(tok);

        tok.knots=tok.knots.toLowerCase(); // reset neighbors

        var knots_ = tok.knots;
        console.log(itok+' '+ tok.knots+'->'+ (tok.angle/90)+'= '+knots_);
        for (var index=0;index<4;index++) {
          var dx = neighbors[index].dx;
          var dy = neighbors[index].dy;
          var k = neighbors[index].iknot;
          var neighbor_x = tok.cell_x + dx;
          var neighbor_y = tok.cell_y + dy;

          if ( (neighbor_x >=0 && neighbor_x < board.width )
            && (neighbor_y >=0 && neighbor_y < board.height) 
            && (board.cells[neighbor_x + board.width * neighbor_y] != 'x') ) 
          {
            var neighbor_ID = board.cells[neighbor_x + board.width * neighbor_y];
            var a_neighbor = tokens[neighbor_ID];
            var org_index = (4+index-tok.angle/90)%4; // unrotated knot
            var org_neighbor_index = (4+k-a_neighbor.angle/90)%4; // unrotated knot of neighbor

console.log(index+ '<->'+k+' '+org_index+'<=>'+org_neighbor_index );

            if (knots_[org_index].toLowerCase()=='i' && a_neighbor.knots[org_neighbor_index].toLowerCase()=='o')
              tok.knots=tok.knots.substr(0, org_index) + 'I' + tok.knots.substr(org_index+1);
            else if (knots_[org_index].toLowerCase()=='o' && a_neighbor.knots[org_neighbor_index].toLowerCase()=='i')
              tok.knots=tok.knots.substr(0, org_index) + 'O' + tok.knots.substr(org_index+1);
              console.log('lock '+tok.knots);
            }
        }

              console.log(tok.knots);


        // Update knot(s) and style...
        for (var i=0;i<4;i++) {
          var knot= document.getElementById(tok.knots[i].toLowerCase()+i+'_'+ tok.ID);
          if (knot != null) {
            knot.style.transform='rotate('+(i*90+tok.angle)%360+'deg)';
            knot.style.webkitTransform='rotate('+(i*90+tok.angle)%360+'deg)';

            knot.style.left=tok.getKnotLeft(tok.knots[i])+'px';
            knot.style.clip=tok.getKnotRect(tok.knots[i]);
            knot.style.webkitTransformOrigin=(Math.abs(tok.getKnotLeft(tok.knots[i]))+TOKENSIZE/2.0)+"px "+(TOKENSIZE/2.0)+"px";
            knot.style.transformOrigin=(Math.abs(tok.getKnotLeft(tok.knots[i]))+TOKENSIZE/2.0)+"px "+(TOKENSIZE/2.0)+"px";

            console.log(knot.style);
          }
        }

    } // end of loop
  }

  function getGraph(root) {
    for (var i in tokens)
      tokens[i].done=false;

    var graph = getBranch(root);
    console.log('GRAPH '+graph);
    return graph;
  }

  function getBranch(node) { 
    node.done=true;   
    var branch=node.ID+':'+node.status;
    var children=getChildren(node);
    if (children.length <= 0)
      return branch;
    // else
    branch +='(';
    for (var i=0;i<children.length;i++) {
      branch+=getBranch(tokens[children[i]]);
      if ( i != (children.length-1) )
        branch += ',';
    }
    branch +=')';
    return branch;
  }

  function getChildren(node) {
    var children=[];
    for (i=0;i<4;i++) {
      if (node.knots[i].toUpperCase()==node.knots[i]) {
        j=(i + node.angle/90)%4;
        var n=neighbors[j];
        var the_id=board.cells[node.cell_x + n.dx + (node.cell_y+n.dy)*board.width];
        if (!tokens[the_id].done)
          children.push(the_id);
      }     
    }
    children.sort();
    return children;
  }


  var alphabet='aA0bB1cC2dD3eE4fF5gG6hH7iI8jJ9kK/lL.mM,nN(oO)pP:qQ<rR>sS tT_uU!vV-wW"xX;yYzZ';

  var key = (function () {
    var words = window.location.pathname.split('/').slice(2);
    return words.join('/');
  })();

  function encode(str) {

console.log('KEY '+key );
    var out='';
    for (var i=0;i<str.length;i++) {
      char=alphabet.indexOf(str[i]);
      shift=alphabet.indexOf(key[i%key.length]);
      out+=alphabet[(char+shift)%alphabet.length];
    }
    return out;
  }

  function decode(str) {

console.log('KEY '+key + ' '+ window.location.pathname);


    var out='';
    for (var i=0;i<str.length;i++) {
      char=alphabet.indexOf(str[i]);
      shift=alphabet.indexOf(key[i%key.length]);
      if (char-shift < 0) char+=alphabet.length;
      out+=alphabet[(char-shift)%alphabet.length];
    }
    return out;
  }

  function saveStatus(str) {
    var status='';
    for (var i=0;i< document.forms['form_'+str].elements.length;i++) {
      if (document.forms['form_'+str].elements[i].type=="radio" && document.forms['form_'+str].elements[i].checked)
        status+=document.forms['form_'+str].elements[i].name+'['+document.forms['form_'+str].elements[i].value+";"+document.forms['form_'+str].elements[i].checked+']';
      else if (document.forms['form_'+str].elements[i].type=="checkbox")
        status+=document.forms['form_'+str].elements[i].name+'['+document.forms['form_'+str].elements[i].checked+']';
      else if (document.forms['form_'+str].elements[i].type!="radio")
        status+=document.forms['form_'+str].elements[i].name+'['+document.forms['form_'+str].elements[i].value+']';
    }
    tokens[str].status=status;
    // Close popup
    document.getElementById('popup').innerHTML='';

  }

  function readStatus(str) {
    var status=tokens[str].status;
    if (status != 0) {
      var arr=status.split(']');
      for (var i=0;i<arr.length-1;i++) {
        var names=arr[i].split(/[\[;]+/ );
        //console.log('readStatus['+i+"] of "+str+"->"+status+" " +arr+'->'+names[0]+'='+names[1]+'='+names[2]);

        if (names.length==3 && names[2]=='true')
          document.forms['form_'+str].elements[names[0]][names[1]].checked=true;
        else if (names[1]=='false' || names[1]=='true')
          document.forms['form_'+str].elements[names[0]].checked=(names[1]=='true')?true:false;
        else {
          // Wildcards :;[]
          var v = names[1].replace('←',':');
          document.forms['form_'+str].elements[names[0]].value=v;
        }
      }
    }
  }


  function printGraphDebug(tok,graph) {
    var el = document.getElementById('debug');
    var str='<p>'+tok.nodes+'</p>';
    var str='<p>'+encode(getGraph(tok))+'</p>';
    var str='<p>'+getGraph(tok)+'</p>';
    el.innerHTML=str;
  }

  function debugBoard() {
    var el = document.getElementById('debug');
    var str='<table>';
    str+='<th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></th>';
    for (var y=0; y<board.height; y++) {
      str+='<tr>';
      for (var x=0; x<board.width; x++) {
        str+='<td>'+board.cells[x + board.width * y];
        var id = board.cells[x + board.width * y];
        if (id != 'x')
          str+='<br />'+tokens[id].knots+'<br />'+tokens[id].angle;
        str+='</td>'
      }
      str+='</tr>';
    }
     str+='</table>';
     el.innerHTML=str;

  }


