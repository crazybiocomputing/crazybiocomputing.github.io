
var board={};

board.cells=[];
board.width=6;
board.height=4;

var tokenOptions = [
  { 
    ID:'3344', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Description',
    icon:'data.png',
    default_status:'a[0;true]',
    description:{title:'Databank', contents:'<p>rabbit</p>'}
  },
  { 
    ID:'a2b4', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: SwissProt',
    background_color:'#F8E0F7',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'SwissProt'}
  },
  { 
    ID:'hori', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: ENA (ex-EMBL)',
    background_color:'#F8E0F7',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'ENA (ex-EMBL)'}
  },
  { 
    ID:'milk', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: PDB',
    background_color:'#F8E0F7',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'PDB'}
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
    ID:'nrjZ', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        '<h2>Oryctolagus cuniculus</h2>'+
        '<span style="color:rgb(150,150,150)"><ul><li> - Taxonomy ID: 9986</li><li>Genbank common name: rabbit</li>'+
        '<li>Inherited blast name: rabbits & hares</li>'+
        '<li>Rank: species</li>'+
        '<li>common name: 	rabbits</li>'+
        '<li>common name: 	domestic rabbit</li>'+
        '<li>Lineage: cellular organisms; Eukaryota; Opisthokonta; <br>'+
        'Metazoa; Eumetazoa; Bilateria; Deuterostomia; Chordata; Craniata; Vertebrata; <br>'+
        'Gnathostomata; Teleostomi; Euteleostomi; Sarcopterygii; Dipnotetrapodomorpha; <br>'+
        'Tetrapoda; Amniota; Mammalia; Theria; Eutheria; Euarchontoglires; Glires; <br>'+
        'Lagomorpha; Leporidae; Oryctolagus </li></ul></span>'
    }
  },
  { 
    ID:'aZrY', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: SCOP',
    background_color:'#F8E0F7',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'SCOP'}
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
    ID:'VADIS', 
    props: ENCRYPTABLE, 
    knots:'xxxx',
    description:{title:'View', contents:'Q5tg4i.6-ntusz7AKJMzTumL3)5uxxf3mI7yosG463!sl00fxZIFy8>1v3/fya5mzBww3I<h:A'},
  },
  { 
    ID:'QUOA', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        'Send me all the protein sequences of rabbit. Right now. The Boss.'
    }
  },
  { 
    ID:'WXDE', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        '<ol><li>AC AGX26121 - arylalkylamine N-acetyltransferase [rabbit fish] </li>'+
        '<li>AC P86810.2 - L-amino-acid oxidase [white-spotted rabbitfish]  </li>'+
        '<li>AC Q94RJ2.1 - NADH-ubiquinone oxidoreductase [rabbit fish]  </li>'+
        '<li>AC AGK33991 - receptor-interacting serine-threonine kinase 4 [streamlined spinefoot]  </li>'+
        '<li>AC AGT48606 - capsid protein [Rabbit hemorrhagic disease virus]  </li>'+
        '<li>AC E5DNC7 - capsid protein [Rabbit calicivirus].</li><li>........</li></ol>'+
        '<p>THE BOSS - "Are you sure this is a listing of rabbit proteins :-( the animal with long ears ???"</p>'
    }
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
    ID:'0218', 
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
    description:{ title:'View',  contents: '<h2>Error: Missing Token or wrong Databank</h2>'},
    nodes:[
      {key:'0007:0',value:'QUOA'},
      {key:'0007:0(0118:0(3344:0,a2b4:0))',value:'WXDE'},
      {key:'0007:0(0218:0(3344:0,a2b4:0))',value:'WXDE'},
      {key:'0007:0(0118:0(3344:0,4321:0))',value:'nrjZ'},
      {key:'0007:0(0218:0(3344:0,4321:0))',value:'nrjZ'},
      {key:'0007:0(0118:0(0218:0(3344:0,4321:0),a2b4:0))',value:'VADIS'},
      {key:'0007:0(0218:0(0118:0(3344:0,4321:0),a2b4:0))',value:'VADIS'}
    ]
  },

];

function doIt() {
  init(80);
}



