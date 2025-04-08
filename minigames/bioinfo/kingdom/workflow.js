
var board={};

board.cells=[];
board.width=6;
board.height=4;

var tokenOptions = [
  { 
    ID:'and0', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Keywords',
    background_color:'#E5FF80',
    icon:'data.png',
    default_status:'b[0;true]',
    description:{title:'Keywords', contents:'tRNA <b>AND</b> synthetase'}
  },
  { 
    ID:'or00', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Keywords',
    background_color:'#EEFFAA',
    icon:'data.png',
    default_status:'b[0;true]',
    description:{title:'Keywords', contents:'16S rRNA'}
  },
  { 
    ID:'key00', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Keywords',
    background_color:'#F6FFD5',
    icon:'data.png',
    default_status:'b[0;true]',
    description:{title:'Keywords', contents:'tRNA <b>OR</b> synthetase'}
  },
  { 
    ID:'9999', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxix',
    title:'BLASTp',
    background_color:'#5F8DD3',
    icon:'tool.png',
    default_status:'a[0;true]',
    description:{title:'Tool:BLASTp', contents:'BLASTp'}
  },
  { 
    ID:'9786', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxix',
    title:'ClustalW',
    background_color:'#87AADE',
    icon:'tool.png',
    default_status:'a[0;true]',
    description:{title:'Tool:ClustalW', contents:'ClustalW'}
  },
  { 
    ID:'0118', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'iiox',
    title:'Search engine',
    background_color:'#AFC6E9',
    icon:'tool.png',
    description:{title:'Search Engine', contents:'NCBI::Entrez'}
  },
  { 
    ID:'8642', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oiii',
    title:'Search Engine',
    background_color:'#D7E3F4',
    icon:'tool.png',
    default_status:'a[0;true]',
    description:{title:'Search Engine', contents:'NCBI::Entrez'}
  },
  { 
    ID:'3579', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxix',
    title:'Neighbor-Joining',
    background_color:'#D5E5FF',
    icon:'tool.png',
    default_status:'a[0;true]',
    description:{title:'Tool:Neighbor-Joining', contents:'Neighbor-Joining'}
  },

  { 
    ID:'soft', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: GenBank',
    background_color:'#FF8080',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'NCBI::GenBank'}
  },
  { 
    ID:'appl', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: Protein',
    background_color:'#FFAAAA',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'NCBI::Protein'}
  },
  { 
    ID:'MLKJ', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: Taxonomy',
    background_color:'#FFD5D5',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Data', contents:'NCBI::Taxonomy'}
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
    ID:'ABCD', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oixx',
    title:'Filter::Species',
    background_color:'#EEAAFF',
    icon:'filter.png',
    default_status:'b[0]',
    description:{title:'Filter::Species', contents:
     '<form name="form_ABCD">'+
     '<input type="checkbox" name="aa" value="0">Animals<br>'+
     '<input type="checkbox" name="ab" value="1">Plants<br>'+
     '<input type="checkbox" name="ac" value="2">Fungi<br>'+
     '<input type="checkbox" name="ad" value="3">Protists<br>'+
     '<input type="checkbox" name="ae" value="4">Bacteria<br>'+
     '<input type="checkbox" name="af" value="5">Archae<br>'+
     '<input type="checkbox" name="ag" value="6">Eucaryotae<br>'+
     '</form><a  class="OKButton" href="javascript:void(0)" onclick="saveStatus(\'ABCD\');">Apply</a>'}
  },
  { 
    ID:'WXYZ', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxix',
    title:'Filter::Field',
    background_color:'#F6D5FF',
    icon:'filter.png',
    default_status:'b[0]',
    description:{title:'Filter::Field', contents:
     '<form name="form_WXYZ">'+
     '<div style="float:left;"><input type="radio" name="ba" value="0" checked>All Fields<br>'+
     '<input type="radio" name="ba" value="1">CAccession<br>'+
     '<input type="radio" name="ba" value="2">Assembly<br>'+
     '<input type="radio" name="ba" value="3">Author<br>'+
     '<input type="radio" name="ba" value="4">Gene Name<br>'+
     '<input type="radio" name="ba" value="5">Journal<br>'+
     '<input type="radio" name="ba" value="6">Organism<br>'+
     '<input type="radio" name="ba" value="7">Publication Date<br>'+
     '<input type="radio" name="ba" value="8">Title<br>'+
     '<input type="radio" name="ba" value="9">Volume<br></div>'+
     '</form><a  class="OKButton" href="javascript:void(0)" onclick="saveStatus(\'WXYZ\');">Apply</a>'}
  },

  { 
    ID:'VADIS', 
    props: NONE, 
    knots:'xxxx',
    description:{title:'View', contents:'<img src="tree.jpg"></img>'},
  },
  { 
    ID:'BINI', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        'Waouhh!! you got a huge number of sequences ... but many of them are not related to your keywords.'
    }
  },
  { 
    ID:'QYNY', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        'That is interesting... you are on the way to solve this mini-game!!'
    }
  },
  { 
    ID:'QUOA', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
        'Build a tree of life using a protein family for Archae, Bacteria, and Eukaryota.<br>Don\'t forget to read the help'
    }
  },
  { 
    ID:'WINEE', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:'<pre>'+
        'SYA1_CLOPH/4-711        YGVNELRKMYLDFFESKG....HLKLNSFSLVPQ.NDKSLLLINSGMAPLKPYFTGQ<br>'+
        'SYA2_CLOPH/1-591        MTANELRKMYVDYFKERG....HQEIASASLLPE.NDPTVLFTTAGMHPLVPYLLGE<br>'+
        'SYAC_BOMMO/5-767        MTGNEIRKTFIDFFIKKG....HKYVHSSSTIPL.DDPTLLFANAGMNQFKPIFLGS<br>'+
        'SYAC_CAEEL/4-767        LTASEVRSTFINFFREKKe...HTYVHSSSVIPH.DDPTLLFANAGMNQFKPLFLGI<br>'+
        'SYA_YERPN/3-709         KSTAEIRQAFLDFFHSKG....HQVVSSSTLVPN.NDPTLLFTNAGMNQFKDVFLG-<br>'+
        'SYA_YERPP/3-709         KSTAEIRQAFLDFFHSKG....HQVVSSSTLVPN.NDPTLLFTNAGMNQFKDVFLG-<br>'+
        'SYA_YERPS/3-709         KSTAEIRQAFLDFFHSKG....HQVVSSSSLVPN.NDPTLLFTNAGMNQFKDVFLG-<br>'+
        'SYA_YERPY/3-709         KSTAEIRQAFLDFFHSKG....HQVVSSSSLVPN.NDPTLLFTNAGMNQFKDVFLG-<br>'+
        'SYA_ZYMMO/2-720         ITTNEIRRSFLEYFEKNG....HRIVPSAPLVPQ.NDPTLMFVNAGMVPFKNTFTGL</pre>'
    }
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
    {key:'0007:0(0118:0(and0:0,appl:0))',value:'BINI'},
    {key:'0007:0(0118:0(WXYZ:ba[8;true](and0:0),appl:0))',value:'QYNY'},
    {key:'0007:0(9786:0(ABCD:aa[false]ab[false]ac[false]ad[false]ae[true]af[true]ag[true](0118:0(WXYZ:ba[8;true](and0:0),appl:0))))',value:'WINEE'},
    {key:'0007:0(3579:0(9786:0(ABCD:aa[false]ab[false]ac[false]ad[false]ae[true]af[true]ag[true](0118:0(WXYZ:ba[8;true](and0:0),appl:0)))))',value:'VADIS'}
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


