
var board={};

board.cells=[];
board.width=6;
board.height=4;

var tokenOptions = [
  { 
    ID:'3344', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Organism',
    icon:'../crazybioflow/img/form_h80.png',
    default_status:'a[0;true]',
    description:{title:'Organism Name', contents:'<form name="form_3344">Organism:<input type="text" name="b" value="unknown"><br></form><a class="OKButton" href="javascript:void(0)" onclick="saveStatus(\'3344\');">Apply</a>'}
  },
  { 
    ID:'and0', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oixi',
    title:'AND',
    icon:'../crazybioflow/img/logicalOP_h80.png',
    clip:'rect(0px 80px 80px 0px)',
    default_status:'b[0]',
    description:{title:'Data', contents:'AND operator'}
  },
  { 
    ID:'or00', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oixi',
    title:'OR',
    icon:'../crazybioflow/img/logicalOP_h80.png',
    clip:'rect(0px 160px 80px 80px)',
    clip_left:'-80px',
    default_status:'b[0]',
    description:{title:'Data', contents:'OR operator'}
  },
  { 
    ID:'not0', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'NOT',
    icon:'../crazybioflow/img/logicalOP_h80.png',
    clip:'rect(0px 240px 80px 160px)',
    clip_left:'-160px',
    default_status:'b[0]',
    description:{title:'Data', contents:'NOT operator'}
  },
  { 
    ID:'first', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'#1',
    icon:'../crazybioflow/img/sort_first_h80.png',
    default_status:'b[0]',
    description:{title:'Data', contents:'NOT operator'}
  },
  { 
    ID:'second', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'#2',
    icon:'../crazybioflow/img/sort_second_h80.png',
    default_status:'b[0]',
    description:{title:'Data', contents:'PDB'}
  },
  { 
    ID:'soft', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Database: Swissprot',
    background_color:'#F8E0F7',
    icon:'../crazybioflow/img/bank_h80.png',
    default_status:'b[0]',
    description:{title:'Data', contents:'KEGG'}
  },
  { 
    ID:'appl', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Database: KEGG',
    background_color:'#F8E0F7',
    icon:'../crazybioflow/img/bank_h80.png',
    default_status:'b[0]',
    description:{title:'Data', contents:'KEGG'}
  },
  { 
    ID:'9786', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Date',
    icon:'../crazybioflow/img/form_h80.png',
    default_status:'a[0;true]',
    description:{title:'Creation Date', contents:'<form name="form_9786">Creation Date:<input type="text" name="b" value="unknown"><br></form><a class="OKButton" href="javascript:void(0)" onclick="saveStatus(\'9786\');">Apply</a>'}
  },
  { 
    ID:'MLKJ', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Database: PFam',
    background_color:'#F8E0F7',
    icon:'../crazybioflow/img/bank_h80.png',
    default_status:'b[0]',
    description:{title:'Data', contents:'PFam'}
  },
  { 
    ID:'VADIS', 
    props: ENCRYPTABLE, 
    knots:'xxxx',
    description:{title:'View', contents:'The result of this workflow is <h2>logic.php</h2>'},
  },
  { 
    ID:'QUOA', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        'Search all the articles of mouse ear cress published between 2010 May 11<sup>th</sup> and 2013 Sep 24<sup>th</sup>'
    }
  },
  { 
    ID:'0118', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'iiox',
    title:'Search engine',
    icon:'../crazybioflow/img/tool_h80.png',
    description:{title:'Search Engine', contents:'Search Engine'}
  },
  { 
    ID:'0007', 
    props: CLOSABLE | CONTAINABLE | LINKABLE | MOVABLE | SWITCHABLE | RENDERABLE | ROTATABLE,  
    knots:'xxix',
    title:'View',
    icon:'../crazybioflow/img/view_blue_h80.png',
    description:{ title:'View',  contents: '<h2>Error</h2> Missing Token or wrong Workflow'},
    nodes:[{key:'0007:0',value:'QUOA'},{key:'0007:0(0118:0(3344:0,hori:0))',value:'VADIS'}]
  },

];

function doIt() {
  init(80);
}


