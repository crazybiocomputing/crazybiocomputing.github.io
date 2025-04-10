
var board={};

board.cells=[];
board.width=6;
board.height=4;

var tokenOptions = [
  { 
    ID:'0118', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'ioix',
    title:'Search engine',
    icon:'tool.png',
    description:{title:'Search engine', contents:'NCBI::Entrez'}
  },
  { 
    ID:'6879', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Field FKEY',
    icon:'form.png',
    default_status:'a[0]',
    description:{title:'Field', contents:'<form name="form_6879">[FKEY] <input type="text" name="a" value="unknown"><br></form><a class="OKButton" href="javascript:void(0)" onclick="saveStatus(\'6879\');">Apply</a>'}
  },

  { 
    ID:'9786', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Field TITL',
    icon:'form.png',
    default_status:'a[0]',
    description:{title:'Field', contents:'<form name="form_9786">[TITL] <input type="text" name="a" value="unknown"><br></form><a class="OKButton" href="javascript:void(0)" onclick="saveStatus(\'9786\');">Apply</a>'}
  },
  { 
    ID:'9799', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxix',
    title:'Filter',
    icon:'filter.png',
    default_status:'ba[0;true]',
    description:{title:'Filter', 
    contents:'<h2>Source databases</h2>'+
     '<form name="form_9799">'+
     '<input type="radio" name="ba" value="0" checked>All<br>'+
     '<input type="radio" name="ba" value="1">DDBJ<br>'+
     '<input type="radio" name="ba" value="2">EMBL<br>'+
     '<input type="radio" name="ba" value="3">GenBank<br>'+
     '<input type="radio" name="ba" value="4">PDB<br>'+
     '<input type="radio" name="ba" value="5">RefSeq<br>'+
     '<input type="radio" name="ba" value="6">UniProtKB / Swiss-Prot<br>'+
     '</form><a class="OKButton" href="javascript:void(0)" onclick="saveStatus(\'9799\');">Apply</a>'}
  },

  { 
    ID:'4523', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Field WORD',
    icon:'form.png',
    default_status:'a[0]',
    description:{title:'Field', contents:'<form name="form_4523">[WORD] <input type="text" name="a" value="unknown"><br></form><a class="OKButton" href="javascript:void(0)" onclick="saveStatus(\'4523\');">Apply</a>'}
  },
  { 
    ID:'3344', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'ixox',
    title:'Display Settings',
    icon:'settings.png',
    default_status:'set[1;true]',
    description:{
    title:'Display Settings', 
    contents:
      '<form name="form_3344">'+
      '<div><input type="radio" name="set" value="0">Summary<br>'+
      '<input type="radio" name="set" value="1" checked>GenPept<br>'+
      '<input type="radio" name="set" value="2">FASTA<br>'+
      '<input type="radio" name="set" value="3">Graphics<br>'+
      '<input type="radio" name="set" value="4">ASN.1<br>'+
      '</form><a  class="OKButton" href="javascript:void(0)" onclick="saveStatus(\'3344\');">Apply</a>'
    }
  },
  { 
    ID:'4321', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: Taxonomy',
    background_color:'#F8E0F7',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'Taxonomy'}
  },
  { 
    ID:'vert', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: Pubmed',
    background_color:'#F8E0F7',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'Pubmed'}
  },
  { 
    ID:'bark', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: ENSEMBL',
    background_color:'#F8E0F7',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'ENSEMBL'}
  },
  { 
    ID:'pear', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: OMIM',
    background_color:'#F8E0F7',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'OMIM'}
  },
  { 
    ID:'appl', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: KEGG',
    background_color:'#F8E0F7',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'KEGG'}
  },


  { 
    ID:'aZrY', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: NCBI::Protein',
    background_color:'#F8E0F7',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'NCBI::Protein'}
  },
  { 
    ID:'MLKJ', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: PFam',
    background_color:'#F8E0F7',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'PFam'}
  },
  { 
    ID:'JACTA', 
    props: ENCRYPTABLE, 
    knots:'xxxx',
    description:{title:'View', contents:'S5ysxgNzMnprz9:7105H8x"EZm.M41x2<0v.Fw,L!>!-xt0.>7 4;At<M'},
  },
  { 
    ID:'QUOA', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        'Search all the protein sequences of hemoglobin in the \'Protein DataBank\' and send all the results in a format suitable for further processing'
    }
  },
  { 
    ID:'VADIS', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        'Sounds good... but I can\'t use your results <span style="font-size:40px">&#9785;</span>'
    }
  },

  { 
    ID:'0007', 
    props: CLOSABLE | CONTAINABLE | LINKABLE | MOVABLE | SWITCHABLE | RENDERABLE | ROTATABLE,  
    knots:'xxix',
    title:'View',
    icon:'view_blue.png',
    description:{ title:'View',  contents: '<h2>Error: Missing Token or wrong Databank</h2>'},
    nodes:[
      {key:'0007:0',value:'QUOA'},
      {key:'0007:0(3344:set[2;true](9799:ba[4;true](0118:0(9786:a[hemoglobin],aZrY:0))))',value:'JACTA'},
      {key:'0007:0(9799:ba[4;true](0118:0(9786:a[hemoglobin],aZrY:0)))',value:'VADIS'}

    ]
  },

];

function doIt() {
  init(80);
}


