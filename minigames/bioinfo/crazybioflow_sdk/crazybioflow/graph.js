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
  var key=window.location.pathname.substr(9,window.location.pathname.length);

  function encode(str) {

console.log(key);
    var out='';
    for (var i=0;i<str.length;i++) {
      char=alphabet.indexOf(str[i]);
      shift=alphabet.indexOf(key[i%key.length]);
      out+=alphabet[(char+shift)%alphabet.length];
    }
    return out;
  }

  function decode(str) {
    var out='';
    for (var i=0;i<str.length;i++) {
      char=alphabet.indexOf(str[i]);
      shift=alphabet.indexOf(key[i%key.length]);
      if (char-shift < 0) char+=alphabet.length;
      out+=alphabet[(char-shift)%alphabet.length];
    }
    return out;
  }

  function printGraphDebug(tok,graph) {
    var el = document.getElementById('debug');
    var str='<p>'+tok.nodes+'</p>';
    var str='<p>'+encode(getGraph(tok))+'</p>';
    var str='<p>'+getGraph(tok)+'</p>';
    el.innerHTML=str;
  }


