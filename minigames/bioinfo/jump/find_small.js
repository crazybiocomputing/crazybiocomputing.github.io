
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
    icon:'form.png',
    default_status:'b[0;true]',
    description:{title:'Organism Name', contents:'<form name="form_3344">Organism:<input type="text" name="b" value="unknown"><br></form><a class="OKButton" href="javascript:void(0)" onclick="checkForm(\'3344\');">Apply</a>'}
  },
  { 
    ID:'and0', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oixi',
    title:'AND',
    icon:'logicalOP.png',
    clip:'img[0]',
    clip:'rect(0px 80px 80px 0px)',
    description:{title:'Data', contents:'AND operator'}
  },
  { 
    ID:'or00', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oixi',
    title:'OR',
    icon:'logicalOP.png',
    clip:'img[1]',
    clip:'rect(0px 160px 80px 80px)',
    clip_left:'-80px',
    description:{title:'Data', contents:'OR operator'}
  },
  { 
    ID:'not0', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxii',
    title:'NOT',
    icon:'logicalOP.png',
    clip:'img[2]',
    clip:'rect(0px 240px 80px 160px)',
    clip_left:'-160px',
    description:{title:'Data', contents:'NOT operator'}
  },
  { 
    ID:'first', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'#1',
    icon:'sort_first.png',
    default_status:'b[0]',
    description:{title:'First', contents:'#1'}
  },
  { 
    ID:'second', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'#2',
    icon:'sort_second.png',
    default_status:'b[0]',
    description:{title:'Second', contents:'#2'}
  },
  { 
    ID:'soft', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: GenBank',
    background_color:'#F8E0F7',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'GenBank'}
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
    ID:'9786', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Date',
    icon:'form.png',
    default_status:'a[0;true]',
    description:{title:'Creation Date', contents:'<form name="form_9786">Creation Date:<input type="text" name="b" value="unknown"><br></form><a class="OKButton" href="javascript:void(0)" onclick="saveModStatus();">Apply</a>'}
  },
  { 
    ID:'MLKJ', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Database: PFam',
    background_color:'#F8E0F7',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Data', contents:'PFam'}
  },
  { 
    ID:'VADIS', 
    props: ENCRYPTABLE, 
    knots:'xxxx',
    description:{title:'View', contents:'d1qICow 3FIvuC(txDD0,9-us35Nu7eBlBK_20t0,qrE-t57dAo>B'},
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
    {key:'0007:0(0118:0(and0:0(3344:b[arabidopsis thaliana],9786:b[2010/05/11←2013/09/24]),appl:0))',value:'VADIS'}
    ]
  },

];


function saveModStatus() {
  var str=document.forms['form_9786'].elements['b'].value;
  // Remove space character
  str = str.replace(/\s+/g, '');
  document.forms['form_9786'].elements['b'].value = str.replace(':','←');
  saveStatus('9786');
}

function checkForm(tokID) {
  var str=document.forms['form_'+tokID].elements['b'].value;
  // Only lowercase
  str = str.toLowerCase();
  // Remove extra space character
  var regex=/\s+/;
  var words=str.trim().split(regex);

  document.forms['form_'+tokID].elements['b'].value = words[0]+' '+words[1];
  saveStatus(tokID);
}

function doIt() {
  init(80);
}


