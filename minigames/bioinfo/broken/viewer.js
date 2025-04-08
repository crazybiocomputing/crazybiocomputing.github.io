

var mol={};
var selectedAtoms=[];
var scroller  = null;
var scrollbar = null;

function scrollbarEvent (o, type) {
	if (type == "mousedown") {
		if (o.className == "Scrollbar-Track") o.style.backgroundColor = "#E3E3E3";
		else o.style.backgroundColor = "#BBB";
	} else {
		if (o.className == "Scrollbar-Track") o.style.backgroundColor = "#EEE";
		else o.style.backgroundColor = "#CCC";
	}
}


function doIt()
{
  // Load PDB structure
  var loader = new PDBLoader();
  mol= loader.getStructure();
  document.getElementById('output').innerHTML='<p> CrazyMol version 2014.03.11<br>Jean-Christophe Taveau - March 2014<br>'+navigator.userAgent+'<br>'+navigator.platform+' - '+navigator.product+'</p>';
  // Init scrolling area and scrollbars...
  scroller  = new jsScroller(document.getElementById("scroller"), 800, 400);
  scrollbar = new jsScrollbar (document.getElementById("Scrollbar-Container"), scroller, true, scrollbarEvent);

}

function runCommand()
{
  var contents=document.getElementById('output').innerHTML;
  var input=document.getElementById('command').value;
  document.getElementById('command').value=''; // Reset

  var data = document.getElementById('data');
  contents +='<pre>CrazyMol> '+input+'<br>'+parse(input)+'</pre>';
  document.getElementById('output').innerHTML=contents;

  // Init scrolling area and scrollbars...
  // TODO: Need an update of contents
  scroller  = new jsScroller(document.getElementById("scroller"), 800, 400);
  scrollbar = new jsScrollbar (document.getElementById("Scrollbar-Container"), scroller, true, scrollbarEvent);
  scrollbar.scrollTo(0,scroller.totalHeight);

  return false;
}

function parse(input) {
  var words=input.split(' ');
  var keyword=commands[words[0]];
  var options=[];
  for (var i=1;i<words.length;i++) options.push(words[i]);
  switch (keyword) {
  case tokenEnum.BULGARIAN:
  case tokenEnum.CHINESE:
  case tokenEnum.ENGLISH:
  case tokenEnum.FRENCH:
  case tokenEnum.ITALIAN:
  case tokenEnum.JAPANESE:
  case tokenEnum.SPANISH:
    return 'ERROR: No Graphics Window available. Cannot change language menus';
  case tokenEnum.BACKBONE:
  case tokenEnum.CARTOON:
  case tokenEnum.DOTS:
  case tokenEnum.RIBBONS:
  case tokenEnum.STAR:
  case tokenEnum.SPACEFILL:
  case tokenEnum.STRANDS:
  case tokenEnum.WIREFRAME:
  case tokenEnum.BACKBONE: 
    return 'ERROR: Display pipeline broken';
  case tokenEnum.SELECT:
  case tokenEnum.RESTRICT:
    console.log('opts:'+words[1]);
    return select(options);
  case tokenEnum.SHOW:
    return show(options);
  default:
    return 'ERROR: Unknown command';
  }


//  scroller.scrollTo(0,200);
}


var leadingSpaces=[' ','  ','   ','    ','     '];

function show(options) {
  var str= 'Unknown command';
  console.log(options[0]);
  switch (showOpts[options[0]]) {
  case showEnum.INFORMATION_OPT:
    str=showInfo(); 
    break;
  case showEnum.SELECTED_OPT:
    console.log(options.length);
    if (options.length <= 1) options[1]='group';
    str=showSelected(showOpts[options[1]]); 
    break;
  case showEnum.SEQUENCE_OPT:
    str=showSequence(); 
    break;
  default:
    str='ERROR: Unknown option';
  }
  return str;
}

function showInfo() {
  var str='No information available';
  str ='Molecule name ......... '+ mol.title+'<br>';
  str+='Classification ........ '+ mol.classification+'<br>';
  str+='Secondary Structure ... '+ mol.sec_struct+'<br>';
  str+='Database Code ......... '+ mol.pdbid+'<br>';
  str+='Experiment Technique .. '+ mol.experiment+'<br>';
  str+='Count of Chains ...... '+ mol.chainCount+'<br>';
  str+='Count of Groups ...... '+ mol.groupCount+' ('+mol.hetgroupCount+')<br>'; 
  str+='Count of Atoms ....... '+ (mol.atoms.length - mol.hetatomCount)+' ('+mol.hetatomCount+')<br>';
  str+='Count of Bonds ....... '+ mol.bondCount+'<br>';
  str+='Count of Helices ..... '+ mol.helixCount+'<br>';
  str+='Count of Strands ..... '+ mol.strandCount+'<br>';
  str+='Count of Turns ....... '+ mol.turnCount+'<br>';

  return str;
}

function showSelected(opt) {
  var str='';
  switch (opt) {
  case showEnum.ATOM_OPT:
    for (var i=0;i<selectedAtoms.length;i++) {
      str+='Chain:  '+selectedAtoms[i].chain+
           ' Group: '+ leadingSpaces[5 - selectedAtoms[i].group.length] + selectedAtoms[i].group+
                         leadingSpaces[5 - selectedAtoms[i].groupID.toString().length]+ selectedAtoms[i].groupID +
           '   Atom : '+ leadingSpaces[5 - selectedAtoms[i].name.length] + selectedAtoms[i].name+' '+selectedAtoms[i].serial+'<br>';
    }
    break;
  case showEnum.GROUP_OPT:
    var id=selectedAtoms[0].groupID;
    var chainid=selectedAtoms[0].chain;
    var count=1;
    var total=1;
    var type=(selectedAtoms[0].type=='H')?' Hetero: ':' Group : ';
    var group=selectedAtoms[0].group;
    for (var i=1;i<selectedAtoms.length;i++) {
      if (selectedAtoms[i].groupID!=id) {
        str+='Chain: '+chainid+type+ group+' '+ id +'    ('+count+'/'+total+') atoms<br>';
        id=selectedAtoms[i].groupID;
        chainid=selectedAtoms[i].chain;
        count=1;
        total=1;
        type=(selectedAtoms[i].type=='H')?' Hetero: ':' Group : ';
        group=selectedAtoms[i].group;
      }
      else {
        count++;
        total++;
      }
    }
    // Last
    str+='Chain: '+chainid+type+ group+' '+ selectedAtoms[selectedAtoms.length-1].groupID+'    ('+count+'/'+total+') atoms<br>';
    break;
  case showEnum.CHAIN_OPT:
    str='show selected *CHAIN* not supported';
    break;
  default:
    str='ERROR: Unknown sub-option';
  }
  return str;
}

function showSequence() {
  var str='';
  var count=0;
  var chain='-';
  for (var i=0;i<mol.atoms.length;i++) {
    if (mol.atoms[i].type=='A' && mol.atoms[i].name=='CA') {
      // Check chain
      if (mol.atoms[i].chain != chain) {
        str+='<br>Chain '+mol.atoms[i].chain+'<br>';
        chain=mol.atoms[i].chain;
        count=0;
      }
      // Write 3-code AA
      var spaces='';
      if (mol.atoms[i].groupID < 10)
        spaces='   ';
      else if (mol.atoms[i].groupID < 100)
        spaces='  ';
      else if (mol.atoms[i].groupID < 1000)
        spaces=' ';
      str+=mol.atoms[i].group+mol.atoms[i].groupID+spaces;
      count++;
      if (count%10==0) str+='<br>';
    }

  }
  return str;
}

