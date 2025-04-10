
var entries = [
'Q9RSS9','Q9RSS7','Q9RXY1','Q9RXJ2','Q9RSK9','Q9RXJ5','Q9RSJ5','Q9RSL2','Q9RWB4','Q9RSS8','Q9RSW7','Q9RY64',
'Q9RXJ7','Q9RXK0','Q9RXJ1','Q9RX88','Q9RY65','Q9RXJ4','Q9RXJ9','Q9RSL0','Q9RW44','P49228','Q9RSS4','Q9RSH2',
'Q9RSW6','Q9RSK0','Q9RXK2','Q9RXK1','Q9RXJ0','Q9RSL3','Q9RST0','Q9RY49','Q5SHN7','P80376','Q5SHN3','P80377',
'Q5SHQ1','Q5SJ76','Q5SJH3','Q5SHP7','Q5SLQ0','Q5SHP2','P80380','P62662','P80371','P62663','P80372','P80373',
'Q5SHQ5','Q5SLP8','P17291','Q5SHQ2','P62669','P80374','P62611','Q5SIH3','P62612'];

var entry_names=[
'RL10_DEIRA','RL11_DEIRA','RL13_DEIRA','RL14_DEIRA','RL15_DEIRA','RL16_DEIRA','RL17_DEIRA','RL18_DEIRA',
'RL19_DEIRA','RL1_DEIRA','RL20_DEIRA','RL21_DEIRA','RL22_DEIRA','RL23_DEIRA','RL24_DEIRA','RL25_DEIRA',
'RL27_DEIRA','RL29_DEIRA','RL2_DEIRA','RL30_DEIRA','RL31_DEIRA','RL32_DEIRA','RL33_DEIRA','RL34_DEIRA',
'RL35_DEIRA','RL36_DEIRA','RL3_DEIRA','RL4_DEIRA','RL5_DEIRA','RL6_DEIRA','RL7_DEIRA','RL9_DEIRA','RS10_THET8',
'RS11_THET8','RS12_THET8','RS13_THET8','RS14Z_THET8','RS15_THET8','RS16_THET8','RS17_THET8','RS18_THET8',
'RS19_THET8','RS20_THET8','RS2_THET2','RS2_THET8','RS3_THET2','RS3_THET8','RS4_THET8','RS5_THET8','RS6_THET8',
'RS7_THET8','RS8_THET8','RS9_THET2','RS9_THET8','RSHX_THEAQ','RSHX_THET8','RSHX_THETH'];

var prot_names=[
'50S ribosomal protein L10','50S ribosomal protein L11','50S ribosomal protein L13','50S ribosomal protein L14',
'50S ribosomal protein L15','50S ribosomal protein L16','50S ribosomal protein L17','50S ribosomal protein L18',
'50S ribosomal protein L19','50S ribosomal protein L1','50S ribosomal protein L20','50S ribosomal protein L21',
'50S ribosomal protein L22','50S ribosomal protein L23','50S ribosomal protein L24','50S ribosomal protein L25',
'50S ribosomal protein L27','50S ribosomal protein L29','50S ribosomal protein L2','50S ribosomal protein L30',
'50S ribosomal protein L31','50S ribosomal protein L32','50S ribosomal protein L33','50S ribosomal protein L34',
'50S ribosomal protein L35','50S ribosomal protein L36','50S ribosomal protein L3','50S ribosomal protein L4',
'50S ribosomal protein L5','50S ribosomal protein L6','50S ribosomal protein L7/L12','50S ribosomal protein L9',
'30S ribosomal protein S10','30S ribosomal protein S11','30S ribosomal protein S12','30S ribosomal protein S13',
'30S ribosomal protein S14','30S ribosomal protein S15','30S ribosomal protein S16','30S ribosomal protein S17',
'30S ribosomal protein S18','30S ribosomal protein S19','30S ribosomal protein S20','30S ribosomal protein S2',
'30S ribosomal protein S2','30S ribosomal protein S3','30S ribosomal protein S3','30S ribosomal protein S4',
'30S ribosomal protein S5','30S ribosomal protein S6 (TS9)','30S ribosomal protein S7','30S ribosomal protein S8',
'30S ribosomal protein S9','30S ribosomal protein S9','30S ribosomal protein Thx','30S ribosomal protein Thx (S31)',
'30S ribosomal protein Thx'];

var gene_names=[
'rplJ DR_2044','rplK DR_2046','rplM DR_0174','rplN DR_0321','rplO DR_2115','rplP DR_0318','rplQ DR_2129','rplR DR_2112',
'rplS DR_0755','rplA DR_2045','rplT DR_2004','rplU DR_0086','rplV DR_0316','rplW DR_0313','rplX DR_0322','rplY DR_0427',
'rpmA DR_0085','rpmC DR_0319','rplB DR_0314','rpmD DR_2114','rpmE DR_0825','rpmF DR_2366','rpmG DR_2049','rpmH DR_2152',
'rpmI DR_2005','rpmJ DR_2124','rplC DR_0311','rplD DR_0312','rplE DR_0323','rplF DR_2111','rplL DR_2043','rplI DR_0102',
'rpsJ TTHA1693','rpsK TTHA1666','rpsL TTHA1697','rpsM TTHA1667','rpsZ TTHA1679','rpsO TTHA1138','rpsP TTHA1035',
'rpsQ TTHA1683','rpsR TTHA0243','rpsS TTHA1688','rpsT TTHA1397','rpsB TT_C0509','rpsB TTHA0861','rpsC TT_C1322',
'rpsC TTHA1686','rpsD TTHA1665','rpsE TTHA1675','rpsF TTHA0245','rpsG TTHA1696','rpsH TTHA1678','rpsI TT_C1100',
'rpsI TTHA1464','rpsU','rpsU TTHA1396','rpsU'];

var organism=[
'Deinococcus radiodurans','Deinococcus radiodurans','Deinococcus radiodurans','Deinococcus radiodurans',
'Deinococcus radiodurans','Deinococcus radiodurans','Deinococcus radiodurans','Deinococcus radiodurans',
'Deinococcus radiodurans','Deinococcus radiodurans','Deinococcus radiodurans','Deinococcus radiodurans',
'Deinococcus radiodurans','Deinococcus radiodurans','Deinococcus radiodurans','Deinococcus radiodurans',
'Deinococcus radiodurans','Deinococcus radiodurans','Deinococcus radiodurans','Deinococcus radiodurans',
'Deinococcus radiodurans','Deinococcus radiodurans','Deinococcus radiodurans','Deinococcus radiodurans',
'Deinococcus radiodurans','Deinococcus radiodurans','Deinococcus radiodurans','Deinococcus radiodurans',
'Deinococcus radiodurans','Deinococcus radiodurans','Deinococcus radiodurans','Deinococcus radiodurans',
'Thermus thermophilus','Thermus thermophilus','Thermus thermophilus','Thermus thermophilus',
'Thermus thermophilus','Thermus thermophilus','Thermus thermophilus','Thermus thermophilus',
'Thermus thermophilus','Thermus thermophilus','Thermus thermophilus','Thermus thermophilus',
'Thermus thermophilus','Thermus thermophilus','Thermus thermophilus','Thermus thermophilus',
'Thermus thermophilus','Thermus thermophilus','Thermus thermophilus','Thermus thermophilus',
'Thermus thermophilus','Thermus thermophilus','Thermus aquaticus','Thermus thermophilus',
'Thermus thermophilus'];

var seq_length=[
'169','144','174','134','156','141','116','114','166','233','118','100','134','95','115','237','91','67',
'275','55','73','60','55','47','66','37','211','205','180','185','122','146','105','129','132','126','61',
'89','88','105','88','93','106','256','256','239','239','209','162','101','156','138','128','128','27',
'27','27'];

function tableResults() {
  var str='<table>';
  for (var i=0;i<entries.length;i++) {
    str+='<tr><td>'+entries[i]+'</td></tr>';
  }
  str+='</table>';
  return str;
}


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
    background_color:'#FFFFFF',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'PFam'}
  },
  { 
    ID:'aZrY', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: SCOP',
    background_color:'#D5E5FF',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'SCOP'}
  },
 { 
    ID:'a2b4', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: UniprotKB/SwissProt',
    icon:'bank.png',
    background_color:'#D7E3F4',
    default_status:'b[0]',
    description:{title:'Databank', contents:'UniprotKB/SwissProt'}
  },
  { 
    ID:'hori', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: ENA',
    icon:'bank.png',
    background_color:'#AFC6E9',
    default_status:'b[0]',
    description:{title:'Databank', contents:'ENA (ex-EMBL)'}
  },
  { 
    ID:'milk', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: PDB',
    background_color:'#87AADE',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'PDB'}
  },
  { 
    ID:'pear', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: OMIM',
    background_color:'#5F8DD3',
    icon:'bank.png',
    default_status:'b[0]',
    description:{title:'Databank', contents:'OMIM'}
  },
  { 
    ID:'appl', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: NCBI:Protein',
    icon:'bank.png',
    background_color:'#3771C8',
    default_status:'b[0]',
    description:{title:'Databank', contents:'NCBI:Protein'}
  },
  { 
    ID:'4321', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Databank: Taxonomy',
    icon:'bank.png',
    background_color:'#2C5AA0',
    default_status:'b[0]',
    description:{title:'Databank', contents:'Taxonomy'}
  },

  { 
    ID:'nrjZ', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents: tableResults()
    }
  },
  { 
    ID:'VADIS', 
    props: ENCRYPTABLE, 
    knots:'xxxx',
    description:{title:'View', contents:'Congratulations !!! The result of this workflow is <h2>only_latin.php</h2>'},
  },
  { 
    ID:'3344', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Description',
    icon:'form.png',
    default_status:'a[0;true]',
    description:{
    title:'Description', 
    contents:
     '<form name="form_3344">'+
      '<div style="float:left;">'+
      'Value&nbsp; <input type="text" name="aw" value=""><br>'+
      '</form><a  class="OKButton" href="javascript:void(0)" onclick="saveModStatus();">Apply</a>'
    }
  },
  { 
    ID:'QUOA', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
       'Send me all the protein sequences published by the woman nobel prize in 2009 working on ribosomes that you can find in the European databank.<br>The Boss.'
    }
  },
  { 
    ID:'WXDE', 
    props: NONE, 
    knots:'xxxx',
    description:{
      title:'View', 
      contents:
       'Good job !! To unlock this mini-game, type <h2>paradise.php</h2>'
    }
  },

  { 
    ID:'0108', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxix',
    title:'Filter',
    icon:'filter.png',
    default_status:'aa[false]ab[false]ac[false]ad[false]ae[false]af[false]ag[false]ah[false]aj[false]',
    description:{
      title:'Results: Customize', 
      contents:'<form name="form_0108">'+
     '<input type="checkbox" name="aa" value="0">Entry name<br>'+
     '<input type="checkbox" name="ab" value="1">Status<br>'+
     '<input type="checkbox" name="ac" value="2">Protein name<br>'+
     '<input type="checkbox" name="ad" value="3">Gene name<br>'+
     '<input type="checkbox" name="ae" value="4">Length<br>'+
     '<input type="checkbox" name="af" value="5">Organism<br>'+
     '<input type="checkbox" name="ag" value="6">Sequence<br>'+
     '<input type="checkbox" name="ah" value="7">Version<br>'+
     '<input type="checkbox" name="aj" value="8">Virus Hosts<br>'+
     '</form><a  class="OKButton" href="javascript:void(0)" onclick="saveStatus(\'0108\');">Apply</a>'
    }
  },
  { 
    ID:'2119', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxix',
    title:'Field',
    icon:'settings.png',
    description:{title:'Field', 
      contents:
     '<form name="form_2119">'+
     '<div style="float:left;"><input type="radio" name="ba" value="0" checked>AC<br>'+
     '<input type="radio" name="ba" value="1">CC<br>'+
     '<input type="radio" name="ba" value="2">DE<br>'+
     '<input type="radio" name="ba" value="3">DT<br>'+
     '<input type="radio" name="ba" value="4">EC<br>'+
     '<input type="radio" name="ba" value="5">FH<br>'+
     '<input type="radio" name="ba" value="6">FT<br>'+
     '<input type="radio" name="ba" value="7">GN<br>'+
     '<input type="radio" name="ba" value="8">GO<br>'+
     '<input type="radio" name="ba" value="9">ID<br>'+
     '<input type="radio" name="ba" value="10">KW<br>'+
     '<input type="radio" name="ba" value="11">OC<br>'+
     '</div><div style="margin-left:140px;width:120px;">'+
     '<input type="radio" name="ba" value="12">OS<br>'+
     '<input type="radio" name="ba" value="13">OH<br>'+
     '<input type="radio" name="ba" value="14">RA<br>'+
     '<input type="radio" name="ba" value="15">RC<br>'+
     '<input type="radio" name="ba" value="16">RL<br>'+
     '<input type="radio" name="ba" value="17">RN<br>'+
     '<input type="radio" name="ba" value="18">RP<br>'+
     '<input type="radio" name="ba" value="19">RT<br>'+
     '<input type="radio" name="ba" value="20">SQ<br></div>'+
     '</form><a  class="OKButton" href="javascript:void(0)" onclick="saveStatus(\'2119\');">Apply</a>'
    }
  },
  { 
    ID:'0118', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Field',
    icon:'settings.png',
    description:{title:'Field', 
      contents:
     '<form name="form_0118">'+
     '<div style="float:left;"><input type="radio" name="b" value="0" checked>LOCUS<br>'+
     '<input type="radio" name="b" value="1">DEFINITION<br>'+
     '<input type="radio" name="b" value="2">ACCESSION<br>'+
     '<input type="radio" name="b" value="3">VERSION<br>'+
     '<input type="radio" name="b" value="4">SOURCE<br>'+
     '<input type="radio" name="b" value="5">DBSOURCE<br>'+
     '<input type="radio" name="b" value="6">KEYWORDS<br>'+
     '<input type="radio" name="b" value="7">ORGANISM<br>'+
     '</div><div style="margin-left:140px;width:120px;">'+
     '<input type="radio" name="b" value="8">AUTHORS<br>'+
     '<input type="radio" name="b" value="9">TITLE<br>'+
     '<input type="radio" name="b" value="10">JOURNAL<br>'+
     '<input type="radio" name="b" value="11">PUBMED<br>'+
     '<input type="radio" name="b" value="12">REFERENCE<br>'+
     '<input type="radio" name="b" value="13">FEATURES<br>'+
     '<input type="radio" name="b" value="14">ORIGIN<br></div>'+
     '</form><a  class="OKButton" href="javascript:void(0)" onclick="saveStatus(\'0118\');">Apply</a>'
    }
  },
  { 
    ID:'0218', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'ioix',
    title:'Search engine',
    icon:'tool.png',
    description:{title:'Search Engine', contents:'UniProt Search'}
  },

  { 
    ID:'0007', 
    props: CLOSABLE | CONTAINABLE | LINKABLE | MOVABLE | SWITCHABLE | RENDERABLE | ROTATABLE,  
    knots:'xxix',
    title:'View',
    icon:'view_blue.png',
    description:{ title:'View',  contents:'<h2>Error: Missing Token or wrong Databank</h2>'},
    nodes:[
      {key:'0007:0',value:'QUOA'},
      {key:'0007:0(0218:0(2119:ba[14;true](3344:aw[yonath a]),a2b4:0))',value:'WXDE'},
      {key:'0007:0(0108:0(0218:0(2119:ba[14;true],3344:aw[yonath a],a2b4:0)))',value:'nrjZ'},
      {key:'0007:0(0108:aa[false]ab[false]ac[false]ad[false]ae[false]af[false]ag[false]ah[false]aj[false](0218:0(2119:b[0;true]ba[14;true],3344:aw[yonath a],a2b4:0)))',value:'nrjZ'},
      {key:'0007:0(0118:0(3344:0,4321:0))',value:'nrjZ'},
      {key:'0007:0(0108:aa[true]ab[false]ac[false]ad[true]ae[true]af[false]ag[false]ah[false]aj[false](0218:0(2119:b[0;true]ba[14;true],3344:aw[yonath a],a2b4:0)))',value:'nrjZ'},
      {key:'0007:0(0218:0(0108:a[12;true](appl:0),0118:b[8;true](a2b4:0),3344:0))',value:'VADIS'}
    ]
  },

];

function doIt() {
  init(80);
}

function saveModStatus() {
  document.forms['form_3344'].elements['aw'].value = document.forms['form_3344'].elements['aw'].value.replace(':','←');
  saveStatus('3344');
}


