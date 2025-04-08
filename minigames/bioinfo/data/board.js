
var board={};

board.cells=[];
board.width=6;
board.height=4;

var tokenOptions = [
  { 
    ID:'MLKJ', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: PFam',
    background_color:'#FF8080',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'PFam'}
  },
  { 
    ID:'a2b4', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: SwissProt',
    background_color:'#FFAAAA',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'SwissProt'}
  },
  { 
    ID:'bark', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: ENSEMBL',
    background_color:'#FFD5D5',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'ENSEMBL'}
  },

  { 
    ID:'4321', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: Taxonomy',
    background_color:'#E5FF80',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'Taxonomy'}
  },
  { 
    ID:'vert', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: Pubmed',
    background_color:'#EEFFAA',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'Pubmed'}
  },
  { 
    ID:'hori', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: ENA (ex-EMBL)',
    background_color:'#F6FFD5',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'ENA (ex-EMBL)'}
  },
  { 
    ID:'milk', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: PDB',
    background_color:'#E580FF',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'PDB'}
  },
  { 
    ID:'pear', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: OMIM',
    background_color:'#EEAAFF',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'OMIM'}
  },
  { 
    ID:'appl', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: KEGG',
    background_color:'#F6D5FF',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'KEGG'}
  },
  { 
    ID:'aZrY', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: SCOP',
    background_color:'#FFFFFF',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'SCOP'}
  },

  { 
    ID:'VADIS', 
    props: ENCRYPTABLE, 
    knots:'xxxx',
    description:{title:'View', contents:'Whx Cq07t6zAuA8ki. H0ZxnyuIIp7-<02dm4r01s:Bwws<EhNE'},
  },
  { 
    ID:'QUOA', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        '<ol><li>Pseudoterranova decipiens hemoglobin mRNA, complete cds 1,353 bp linear mRNA </li>'+
        '<li>Ascaris suum hemoglobin mRNA, complete cds 1,169 bp linear mRNA  </li>'+
        '<li>Biomphalaria glabrata partial mRNA for hemoglobin (hb gene), clone 4 558 bp linear mRNA  </li>'+
        '<li>Daphnia magna dhb3 mRNA for hemoglobin, complete cds 1,180 bp linear mRNA  </li>'+
        '<li>Cichorium intybus x Cichorium endivia mRNA for plant hemoglobin 846 bp linear mRNA  </li>'+
        '<li>Zea mays hemoglobin (LOC541815), mRNA 885 bp linear mRNA  </li>'+
        '<li>Tegillarca granosa hemoglobin (HbII) mRNA, complete cds 698 bp linear mRNA  </li>'+
        '<li>Daphnia magna hemoglobin (Dhb1) mRNA, complete cds 1,261 bp linear mRNA  </li>'+
        '<li>Carcinus maenas mRNA for hemoglobin (hb gene) 1,017 bp linear mRNA  </li>'+
        '<li>Solanum tuberosum cultivar 68-DTU-28 hemoglobin mRNA, complete cds 646 bp linear mRNA  </li>'+
        '<li>Ceratodon purpureus hemoglobin mRNA, complete cds 902 bp linear mRNA</li></ol>'
    }
  },
  { 
    ID:'3344', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Description',
    icon:'data.png',
    default_status:'a[0;true]',
    description:{title:'Data', contents:'<h1>hemoglobin</h1>'}
  },
  { 
    ID:'0118', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'ioix',
    title:'Search engine',
    icon:'tool.png',
    description:{title:'Search Engine', contents:'Search Engine'}
  },
  { 
    ID:'0007', 
    props: CLOSABLE | CONTAINABLE | LINKABLE | MOVABLE | SWITCHABLE | RENDERABLE | ROTATABLE,  
    knots:'xxix',
    title:'View',
    icon:'view_blue.png',
    description:{ title:'View',  contents: '<h2>Error: Missing Token or wrong Database</h2>'},
    nodes:[{key:'0007:0',value:'QUOA'},{key:'0007:0(0118:0(3344:0,hori:0))',value:'VADIS'}]
  },

];

function doIt() {
  init(80);
}


