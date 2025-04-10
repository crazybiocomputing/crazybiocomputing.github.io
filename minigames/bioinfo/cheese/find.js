
var board={};

board.cells=[];
board.width=6;
board.height=4;

var tokenOptions = [
  { 
    ID:'3344', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Author',
    icon:'form.png',
    default_status:'a[0;true]',
    description:{title:'Author', contents:'<form name="form_3344">Author:<input type="text" name="b" value="unknown"><br></form><a class="OKButton" href="javascript:void(0)" onclick="saveModStatus(\'3344\',2);">Apply</a>'}
  },
  { 
    ID:'vbnk', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Journal',
    icon:'form.png',
    default_status:'a[0;true]',
    description:{title:'Journal', contents:'<form name="form_vbnk">Journal:<input type="text" name="b" value="unknown"><br></form><a class="OKButton" href="javascript:void(0)" onclick="saveModStatus(\'vbnk\',1);">Apply</a>'}
  },
  { 
    ID:'ghjy', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Journal',
    icon:'form.png',
    default_status:'a[0;true]',
    description:{title:'Journal', contents:'<form name="form_ghjy">Journal:<input type="text" name="b" value="unknown"><br></form><a class="OKButton" href="javascript:void(0)" onclick="saveModStatus(\'ghjy\',1);">Apply</a>'}
  },
  { 
    ID:'9786', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Date',
    icon:'form.png',
    default_status:'a[0;true]',
    description:{title:'Creation Date', contents:'<form name="form_9786">Creation Date:<input type="text" name="b" value="unknown"><br></form><a class="OKButton" href="javascript:void(0)" onclick="saveStatusAfterCleaning(\'9786\',\'b\');">Apply</a>'}
  },
  { 
    ID:'and0', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oixi',
    title:'AND',
    icon:'logicalOP.png',
    clip:'rect(0px 80px 80px 0px)',
    default_status:'b[0]',
    description:{title:'Data', contents:'AND operator'}
  },
   { 
    ID:'and1', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oiix',
    title:'AND',
    icon:'logicalOP.png',
    clip:'rect(0px 80px 80px 0px)',
    default_status:'b[0]',
    description:{title:'Data', contents:'AND operator'}
  },
  { 
    ID:'or01', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oiix',
    title:'OR',
    icon:'logicalOP.png',
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
    icon:'logicalOP.png',
    clip:'rect(0px 240px 80px 160px)',
    clip_left:'-160px',
    default_status:'b[0]',
    description:{title:'Data', contents:'NOT operator'}
  },
  { 
    ID:'soft', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: Swissprot',
    background_color:'#F8E0F7',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'Swissprot'}
  },
  { 
    ID:'appl', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: Pubmed',
    background_color:'#F8E0F7',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'Pubmed'}
  },
  { 
    ID:'MLKJ', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: OMIM',
    background_color:'#F8E0F7',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'OMIM'}
  },
  { 
    ID:'VADIS', 
    props: ENCRYPTABLE, 
    knots:'xxxx',
    description:{title:'View', contents:'blii/wDvzNN"l0:Iytu1pxLs:-xZ0wK:A6runv0"0we_l!Ks8Z.2pr(wltJ)>5-'},
  },
  { 
    ID:'QUOA', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        'Search all the articles published in Nature and Science by the nobel prize 2013 - the guy with the mustache - in physiology and medecine...'
    }
  },
  { 
    ID:'JACTA', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        '0 Entries found. Parameter too restrictive.'
    }
  },
  { 
    ID:'ALEA', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        '0 Entries found. Wrong logic in the workflow.'
    }
  },
  { 
    ID:'0118', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'ioxi',
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
    description:{ title:'View',  contents: '<h2>Error</h2> Missing Token or wrong Workflow'},
    nodes:[
    {key:'0007:0',value:'QUOA'},
    {key:'0007:0(0118:0(3344:b[schekman rw],appl:0))',value:'JACTA'},
    {key:'0007:0(0118:0(and0:0(3344:b[schekman r],or01:0(ghjy:b[science],vbnk:b[nature])),appl:0))',value:'VADIS'},
    {key:'0007:0(0118:0(and0:0(3344:b[schekman r],or01:0(ghjy:b[nature],vbnk:b[science])),appl:0))',value:'VADIS'},
    {key:'0007:0(0118:0(and1:0(3344:b[schekman r],or01:0(ghjy:b[science],vbnk:b[nature])),appl:0))',value:'VADIS'},
    {key:'0007:0(0118:0(and1:0(3344:b[schekman r],or01:0(ghjy:b[nature],vbnk:b[science])),appl:0))',value:'VADIS'},
    {key:'0007:0(0118:0(and1:0(3344:b[schekman r],and0:0(ghjy:b[science],vbnk:b[nature])),appl:0))',value:'ALEA'},
    {key:'0007:0(0118:0(and1:0(3344:b[schekman r],and0:0(ghjy:b[nature],vbnk:b[science])),appl:0))',value:'ALEA'},
    {key:'0007:0(0118:0(and0:0(3344:b[schekman r],and1:0(ghjy:b[science],vbnk:b[nature])),appl:0))',value:'ALEA'},
    {key:'0007:0(0118:0(and0:0(3344:b[schekman r],and1:0(ghjy:b[nature],vbnk:b[science])),appl:0))',value:'ALEA'}
    ]

  },

];

function saveStatusAfterCleaning(tokID,elt) {
  var str=document.forms['form_'+tokID].elements[elt].value;
  // Remove space character
  str = str.replace(/\s+/g, '');
  document.forms['form_'+tokID].elements[elt].value = str.replace(':','←');
  saveStatus(tokID);
}


function saveModStatus(tokID,words_num) {
  var str=document.forms['form_'+tokID].elements['b'].value;
  // Only lowercase
  str = str.toLowerCase();
  // Remove extra space character
  var regex=/\s+/;
  var words=str.trim().split(regex);
  str='';
  for (var i=0;i<words_num;i++) {
     str += words[i];
    if (i != words_num - 1)
      str+=' ';
  }
  document.forms['form_'+tokID].elements['b'].value=str;
  saveStatus(tokID);
}


function doIt() {
  init(80);
}


