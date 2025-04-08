
var board={};

board.cells=[];
board.width=5;
board.height=3;

var  text='<pre style="font-family:fixed,monospace">'
  text+='SQ   Sequence 518 BP; 125 A; 139 C; 148 G; 106 T; 0 other;\n'
  text+='     ttcctctttc tcgactccat cttcgcggta gctgggaccg ccgttcagtc gccaatatgc        60\n';
  text+='     agctctttgt ccgcgcccag gagctacaca ccttcgaggt gaccggccag gaaacggtcg       120\n';
  text+='     cccagatcaa ggctcatgta gcctcactgg agggcattgc cccggaagat caagtcgtgc       180\n';
  text+='     tcctggcagg cgcgcccctg gaggatgagg ccactctggg ccagtgcggg gtggaggccc       240\n';
  text+='     tgactaccct ggaagtagca ggccgcatgc ttggaggtaa agttcatggt tccctggccc       300\n';
  text+='     gtgctggaaa agtgagaggt cagactccta aggtggccaa acaggagaag aagaagaaga       360\n';
  text+='     agacaggtcg ggctaagcgg cggatgcagt acaaccggcg ctttgtcaac gttgtgccca       420\n';
  text+='     cctttggcaa gaagaagggc cccaatgcca actcttaagt cttttgtaat tctggctttc       480\n';
  text+='     tctaataaaa aagccactta gttcagtcaa aaaaaaaa                               518';
  text+='</pre>';

var tokenOptions = [
  { 
    ID:'3344', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Data',
    background_color:'#E0F8F7',
    icon:'../crazybioflow/img/data.png',
    description:{title:'Data', contents:text}
  },
  { 
    ID:'a2b4', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'File format',
    icon:'../crazybioflow/img/settings.png',
    default_status:'b[unknown]',
    description:{title:'Data', contents:'<form name="form_a2b4">Output Format:<input type="text" name="b" value="unknown"><br></form><a class="OKButton" href="javascript:void(0)" onclick="checkForm(\'a2b4\');">Apply</a>'}
  },
  { 
    ID:'VADIS', 
    props: ENCRYPTABLE, 
    knots:'xxxx',
    description:{title:'View', contents:'Dear Boss,<br> Please find enclosed the sequence in Pearson format. <h2>sincerely_yours.php</h2>'},
  },
  { 
    ID:'0118', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'ioix',
    title:'EMBOSS Tool',
    icon:'../crazybioflow/img/tool_form.png',
    default_status:'a[None]',
    description:{title:'EMBOSS Tool', contents:'<form name="form_0118"><input type="text" name="a" value="None"><br></form><a class="OKButton" href="javascript:void(0)" onclick="saveStatus(\'0118\');">&nbsp;&nbsp;OK&nbsp;&nbsp;</a>'}
  },
  { 
    ID:'0007', 
    props: CLOSABLE | CONTAINABLE | LINKABLE | MOVABLE | SWITCHABLE | RENDERABLE | ROTATABLE,  
    knots:'xxix',
    title:'View Operation',
    icon:'../crazybioflow/img/view_blue.png',
    description:{title:'View', contents:'<h1>&rarr; Pearson ?</h1>'},
    nodes:[{key:'0007:0(0118:a[seqret](3344:0,a2b4:b[pearson]))',value:'VADIS'}]
  }

];

function checkForm(tokID) {
  // Only lowercase
  document.forms['form_'+tokID].elements['b'].value = document.forms['form_'+tokID].elements['b'].value.toLowerCase();
  saveStatus(tokID);
}

