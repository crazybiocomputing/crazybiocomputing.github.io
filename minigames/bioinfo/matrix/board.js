
var board={};

board.cells=[];
board.width=6;
board.height=4;

var tokenOptions = [
 { 
    ID:'1234', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    type:'D', 
    knots:'oxxx',
    title:'Data', 
    icon:'data.png',
    description:{
      title:'Data - ', 
      contents:'<pre>>peptide1\nAVGLCA\n>peptide2\nALGICS\n</pre>'
    }
  }, 
 { 
    ID:'5678', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    type:'T', 
    knots:'xoii',
    title:'Tool: blastp', 
    icon:'tool.png',
    description:{
      title:'Tool - blastp', 
      contents:'<p>No parameter</p>'
    }
  },

   
 { 
    ID:'5679', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    type:'T', 
    knots:'xoii',
    title:'Tool: blastn', 
    icon:'tool.png',
    description:{
      title:'Tool - blastn', 
      contents:'<p>No parameter</p>'
    }
  },

  {
    ID:'settings1', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Matrix Identity', 
    icon:'data.png',
    description:{title:'Matrix', contents:'Identity'},
  },

  {
    ID:'settings2', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Matrix BLOSUM62', 
    icon:'data.png',
    description:{title:'Settings', contents:'<img src="BLOSUM62.gif" alt="Error">'},
  },


  { 
    ID:'MQ', 
    props: ENCRYPTABLE, 
    knots:'xoxx',
    description:{title:'View', contents:'<h1>Good!!</h1>'},
  },

 {
    ID:'0008', 
    props: CLOSABLE | ROTATABLE | CONTAINABLE | LINKABLE | MOVABLE | RENDERABLE | SWITCHABLE, 
    knots:'xxxi',
    title:'View',
    icon:'view_blue.png',
    description:{title:'View', contents:'<pre>score=23 bits\nAVGLCA\nALGICS\n</pre>'},
    nodes:[{key:'1234:0(5678:0(settings2:0)(008:0))',value:'MQ'}],
    cell_x:2,
    cell_y:2
  }
];

function doIt() {
  init();
}

