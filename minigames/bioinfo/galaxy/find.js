
var board={};

board.cells=[];
board.width=6;
board.height=4;

var tokenOptions = [
  { 
    ID:'3344', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Request',
    icon:'data.png',
    description:{title:'Request', contents:' (((((aaea[Title]) OR aaeb[Title]) OR nepi[Title]) OR fief[Title]) OR mntp[Title])'}
  },
  { 
    ID:'vbnk', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Request',
    icon:'data.png',
    default_status:'a[0;true]',
    description:{title:'Request', contents:'escherichia coli[Organism]'}
  },
  { 
    ID:'ghjy', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Request',
    icon:'data.png',
    default_status:'a[0;true]',
    description:{title:'Request', contents:'(efflux pump[Title])'}
  },
  { 
    ID:'9786', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxix',
    title:'Filter',
    icon:'tool_form.png',
    default_status:'ba[0;true]',
    description:{title:'Filter', 
    contents:'<h2>Source databases</h2>'+
     '<form name="form_9786">'+
     '<input type="radio" name="ba" value="0" checked>All<br>'+
     '<input type="radio" name="ba" value="1">DDBJ<br>'+
     '<input type="radio" name="ba" value="2">EMBL<br>'+
     '<input type="radio" name="ba" value="3">GenBank<br>'+
     '<input type="radio" name="ba" value="4">PDB<br>'+
     '<input type="radio" name="ba" value="5">RefSeq<br>'+
     '<input type="radio" name="ba" value="6">UniProtKB / Swiss-Prot<br>'+
     '</form><a class="OKButton" href="javascript:void(0)" onclick="saveStatus(\'9786\');">Apply</a>'}
  },
  { 
    ID:'first', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxix',
    title:'#1',
    icon:'sort_first.png',
    default_status:'b[0]',
    description:{title:'First', contents:'#1'}
  },
  { 
    ID:'second', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oixx',
    title:'#2',
    icon:'sort_second.png',
    default_status:'b[0]',
    description:{title:'Second', contents:'#2'}
  },

  { 
    ID:'and0', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oixi',
    title:'AND',
    icon:'logicalOP.png',
    clip:'rect(0px 80px 80px 0px)',
    default_status:'b[0]',
    description:{title:'AND', contents:'AND operator'}
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
    description:{title:'OR', contents:'OR operator'}
  },
  { 
    ID:'not0', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxii',
    title:'NOT',
    icon:'logicalOP.png',
    clip:'rect(0px 240px 80px 160px)',
    clip_left:'-160px',
    default_status:'b[0]',
    description:{title:'NOT', contents:'NOT operator'}
  },

  { 
    ID:'appl', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: NCBI::Protein',
    background_color:'#F8E0F7',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'NCBI::Protein'}
  },

  { 
    ID:'VADIS', 
    props: ENCRYPTABLE, 
    knots:'xxxx',
    description:{
    title:'View', 
    contents:'5)MV.E9me9!mA9us:Eu8Q4Zi 9gxGturi5Mt,C9is6qu)I03"60vROLtr5vl_rArsZ85.)5xsKqmf8ot"ryw9F:"p.owfPj6EOPl,-U"ow!;_HL7gux86,ZmaKev"x;AmFFIZCKXh.u_f8ot"2t9<H6vdKqmf8oxwG:5:!xpo(!pEIhrvnuL>z3g_6wtBBwwt'

/****'11 Entries found.<br>'+
    'The sequences correspond to the 3 proteic components of the efflux pump AcrAB-TolC of <i>Escherichia coli</i>.<br>'+ 
    'Thus, the password of this workflow is acrab_tolc_pump.php'
***/
    },
  },
  { 
    ID:'QUOA', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        '11 entries found in UniProtKB/SwissProt.'
    }
  },
  { 
    ID:'8455879', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        '8455879 Entries found.'
    }
  },
  { 
    ID:'22955', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        '22955 Entries found.'
    }
  },
   { 
    ID:'41222', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        '41222 Entries found.'
    }
  },
   { 
    ID:'457', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        '457 Entries found.'
    }
  },
   { 
    ID:'8816', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        '8816 Entries found.'
    }
  },
   { 
    ID:'406', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        '406 Entries found.'
    }
  },
   { 
    ID:'7698', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        '7698 Entries found.'
    }
  },
   { 
    ID:'101', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        '101 Entries found.'
    }
  },
   { 
    ID:'4908', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        '4908 Entries found.'
    }
  },
   { 
    ID:'90', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        '90 Entries found.'
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
    {key:'0007:0(9786:ba[6;true](0118:0(and0:0(not0:0(first:0(ghjy:0),second:0(3344:0)),vbnk:0),appl:0)))',value:'VADIS'},
    {key:'0007:0(0118:0(appl:0,vbnk:0))',value:'8455879'},
    {key:'0007:0(9786:ba[6;true](0118:0(appl:0,vbnk:0)))',value:'22955'},
    {key:'0007:0(0118:0(appl:0,ghjy:0))',value:'41222'},
    {key:'0007:0(9786:ba[6;true](0118:0(appl:0,ghjy:0)))',value:'457'},
    {key:'0007:0(0118:0(3344:0,appl:0))',value:'8816'},
    {key:'0007:0(9786:ba[6;true](0118:0(3344:0,appl:0)))',value:'406'},
    {key:'0007:0(0118:0(and0:0(ghjy:0,vbnk:0),appl:0))',value:'7698'},
    {key:'0007:0(9786:ba[6;true](0118:0(and0:0(ghjy:0,vbnk:0),appl:0)))',value:'101'},
    {key:'0007:0(0118:0(and0:0(3344:0,vbnk:0),appl:0))',value:'4908'},
    {key:'0007:0(9786:ba[6;true](0118:0(and0:0(3344:0,vbnk:0),appl:0)))',value:'90'}
    ]
  },

];

function doIt() {
  init(80);
}


