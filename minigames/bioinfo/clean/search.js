
var board={};

board.cells=[];
board.width=6;
board.height=3;

var tokenOptions = [
  { 
    ID:'3344', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Organism',
    icon:'../crazybioflow/img/form.png',
    default_status:'a[0;true]',
    description:{title:'Organism Name', contents:'<form name="form_3344">Organism:<input type="text" name="b" value="unknown"><br></form><a class="OKButton" href="javascript:void(0)" onclick="saveStatus(\'3344\');">Apply</a>'}
  },
  { 
    ID:'a2b4', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Database: SwissProt',
    background_color:'#F8E0F7',
    icon:'../crazybioflow/img/bank.png',
    default_status:'b[0]',
    description:{title:'Data', contents:'SwissProt'}
  },
  { 
    ID:'4321', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Database: Taxonomy',
    background_color:'#F8E0F7',
    icon:'../crazybioflow/img/bank.png',
    default_status:'b[0]',
    description:{title:'Data', contents:''}
  },
  { 
    ID:'vert', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Database: Pubmed',
    background_color:'#F8E0F7',
    icon:'../crazybioflow/img/bank.png',
    default_status:'b[0]',
    description:{title:'Data', contents:'Pubmed'}
  },
  { 
    ID:'hori', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Database: ENA',
    background_color:'#F8E0F7',
    icon:'../crazybioflow/img/bank.png',
    default_status:'b[0]',
    description:{title:'Data', contents:'ENA'}
  },
  { 
    ID:'bark', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Database: ENSEMBL',
    background_color:'#F8E0F7',
    icon:'../crazybioflow/img/bank.png',
    default_status:'b[0]',
    description:{title:'Data', contents:'ENSEMBL'}
  },
  { 
    ID:'milk', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Database: PDB',
    background_color:'#F8E0F7',
    icon:'../crazybioflow/img/bank.png',
    default_status:'b[0]',
    description:{title:'Data', contents:'PDB'}
  },
  { 
    ID:'pear', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Database: OMIM',
    background_color:'#F8E0F7',
    icon:'../crazybioflow/img/bank.png',
    default_status:'b[0]',
    description:{title:'Data', contents:'OMIM'}
  },
  { 
    ID:'appl', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Database: KEGG',
    background_color:'#F8E0F7',
    icon:'../crazybioflow/img/bank.png',
    default_status:'b[0]',
    description:{title:'Data', contents:'KEGG'}
  },
  { 
    ID:'9786', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Date',
    icon:'../crazybioflow/img/form.png',
    default_status:'a[0;true]',
    description:{title:'Creation Date', contents:'<form name="form_9786">Creation Date:<input type="text" name="b" value="unknown"><br></form><a class="OKButton" href="javascript:void(0)" onclick="saveStatus(\'9786\');">Apply</a>'}
  },

  { 
    ID:'aZrY', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Database: SCOP',
    background_color:'#F8E0F7',
    icon:'../crazybioflow/img/bank.png',
    default_status:'b[0]',
    description:{title:'Data', contents:'SCOP'}
  },
  { 
    ID:'MLKJ', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Database: PFam',
    background_color:'#F8E0F7',
    icon:'../crazybioflow/img/bank.png',
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
    knots:'ioix',
    title:'Search engine',
    icon:'../crazybioflow/img/tool.png',
    description:{title:'Search Engine', contents:'Search Engine'}
  },
  { 
    ID:'0007', 
    props: CLOSABLE | CONTAINABLE | LINKABLE | MOVABLE | SWITCHABLE | RENDERABLE | ROTATABLE,  
    knots:'xxix',
    title:'View',
    icon:'../crazybioflow/img/view_blue.png',
    description:{ title:'View',  contents: '<h2>Error: Missing Token or wrong Database</h2>'},
    nodes:[{key:'0007:0',value:'QUOA'},{key:'0007:0(0118:0(3344:0,hori:0))',value:'VADIS'}]
  },

];

function doIt() {
  init();
}


