
var board={};

board.cells=[];
board.width=6;
board.height=4;

var tokenOptions = [
  { 
    ID:'MLKJ', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: SwissProt',
    background_color:'#FFFFFF',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'SwissProt'}
  },
  { 
    ID:'aZrY', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: Taxonomy',
    background_color:'#D5E5FF',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'Taxonomy'}
  },
 { 
    ID:'a2b4', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: NCBI::Protein',
    icon:'bank.png',
    background_color:'#D7E3F4',
    default_status:'b[0]',
    description:{title:'Databank', contents:'NCBI::Protein'}
  },
  { 
    ID:'hori', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: ENA (ex-EMBL)',
    icon:'bank.png',
    background_color:'#AFC6E9',
    default_status:'b[0]',
    description:{title:'Databank', contents:'ENA (ex-EMBL)'}
  },
  { 
    ID:'milk', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: OMIM',
    background_color:'#87AADE',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'OMIM'}
  },
  { 
    ID:'pear', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: GenBank',
    background_color:'#5F8DD3',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'GenBank'}
  },
  { 
    ID:'appl', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: NCBI::Genome',
    icon:'bank.png',
    background_color:'#3771C8',
    default_status:'b[0]',
    description:{title:'Databank', contents:'NCBI::Genome'}
  },
  { 
    ID:'VADIS', 
    props: ENCRYPTABLE, 
    knots:'xxxx',
    description:{title:'View', contents:'Fo6kCs8ypdFxv2v OzgLjli-DtZ9otMs:L8lmvf.v6nf4sHLxw"_ >z0ds,;.,8;rrFJstds,:AZ4!)kOH'},
  },
  { 
    ID:'QUOA', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        'Send me all the nucleic sequences published in the NCBI databank from January 1st 2010 up to June 30th 2012.<br>The Boss.'
    }
  },
  { 
    ID:'0108', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Value',
    icon:'form.png',
    description:{title:'Value', 
      contents:
      '<form name="form_0108">'+
      'Value&nbsp; <input type="text" name="a" value=""><br>'+
      '</form><a  class="OKButton" href="javascript:void(0)" onclick="saveModStatus();">Apply</a>'
    }
  },
  { 
    ID:'0118', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxix',
    title:'Field',
    icon:'settings.png',
    description:{title:'Field', 
      contents:
      '<form name="form_0118">'+
      '<div style="float:left;"><input type="radio" name="b" value="0" checked>[ALL]<br>'+
      '<input type="radio" name="b" value="1">[ACCN]<br>'+
      '<input type="radio" name="b" value="2">[AUTH]<br>'+
      '<input type="radio" name="b" value="3">[FKEY]<br>'+
      '<input type="radio" name="b" value="4">[JOUR]<br>'+
      '<input type="radio" name="b" value="5">[KYWD]<br>'+
      '<input type="radio" name="b" value="6">[MDAT]<br>'+
      '</div><div style="margin-left:140px;width:120px;">'+
      '<input type="radio" name="b" value="7">[ORGN]<br>'+
      '<input type="radio" name="b" value="8">[PDAT]<br>'+
      '<input type="radio" name="b" value="9">[PROP]<br>'+
      '<input type="radio" name="b" value="10">[SLEN]<br>'+
      '<input type="radio" name="b" value="11">[TITL]<br>'+
      '<input type="radio" name="b" value="12">[WORD]<br>'+
      '</form><a  class="OKButton" href="javascript:void(0)" onclick="saveStatus(\'0118\');">Apply</a>'
    }
  },
  { 
    ID:'0218', 
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
    description:{ title:'View',  contents: '<h2>Error: Missing Token or wrong Databank</h2>'},
    nodes:[
      {key:'0007:0',value:'QUOA'},
      {key:'0007:0(0218:0(0118:b[8;true](0108:a[2010/01/01←2012/06/30]),pear:0))',value:'VADIS'}

    ]
  },
];

function saveModStatus() {
  document.forms['form_0108'].elements['a'].value = document.forms['form_0108'].elements['a'].value.replace(':','←');
  saveStatus('0108');
}

function doIt() {
  init(80);
}



