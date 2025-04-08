
var board={};

board.cells=[];
board.width=5;
board.height=3;

var  text='<pre style="font-family:fixed,monospace">'
  text+='Entry with Accession Number X65923 copied from the mail.';
  text+='</pre>';

var tokenOptions = [
  { 
    ID:'3344', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'Data',
    background_color:'#E0F8F7',
    icon:'data.png',
    description:{title:'Data', contents:text}
  },
  { 
    ID:'a2b4', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'oxxx',
    title:'File format',
    icon:'settings.png',
    default_status:'b[unknown]',
    description:{title:'Data', contents:'Pearson/FASTA'}
  },
  { 
    ID:'VADIS', 
    props: ENCRYPTABLE, 
    knots:'xxxx',
    description:{title:'View', contents:'asr1;M2)DGFp2eIW00o9o;qw9(Ms1n"3ZtZH/rjE60B(s1n:Ip2Pevkw329ey25x.8 INv_CyssQ)6rA0 4;A3<J'},
  },
  { 
    ID:'0118', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'ioix',
    title:'EMBOSS::extractseq',
    icon:'tool.png',
    default_status:'a[None]',
    description:{title:'EMBOSS Tool', contents:'extractseq'}
  },
  { 
    ID:'0119', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'ioix',
    title:'EMBOSS::descseq',
    icon:'tool.png',
    default_status:'a[None]',
    description:{title:'EMBOSS Tool', contents:'descseq'}
  },
  { 
    ID:'0120', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'ioix',
    title:'EMBOSS::aligncopy',
    icon:'tool.png',
    default_status:'a[None]',
    description:{title:'EMBOSS Tool', contents:'aligncopy'}
  },
  { 
    ID:'0121', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'ioix',
    title:'EMBOSS::notab',
    icon:'tool.png',
    default_status:'a[None]',
    description:{title:'EMBOSS Tool', contents:'notab'}
  },
  { 
    ID:'0122', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'ioix',
    title:'EMBOSS::seqret',
    icon:'tool.png',
    default_status:'a[None]',
    description:{title:'EMBOSS Tool', contents:'seqret'}
  },
  { 
    ID:'0123', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'ioix',
    title:'EMBOSS::splitsource',
    icon:'tool.png',
    default_status:'a[None]',
    description:{title:'EMBOSS Tool', contents:'splitsource'}
  },
  { 
    ID:'0124', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'ioix',
    title:'EMBOSS::trimseq',
    icon:'tool.png',
    default_status:'a[None]',
    description:{title:'EMBOSS Tool', contents:'trimseq'}
  },
  { 
    ID:'0125', 
    props: CLOSABLE | LINKABLE | MOVABLE | CONTAINABLE | RENDERABLE | ROTATABLE, 
    knots:'ioix',
    title:'EMBOSS::vectorstrip',
    icon:'tool.png',
    default_status:'a[None]',
    description:{title:'EMBOSS Tool', contents:'vectorstrip'}
  },
  { 
    ID:'0007', 
    props: CLOSABLE | CONTAINABLE | LINKABLE | MOVABLE | SWITCHABLE | RENDERABLE | ROTATABLE,  
    knots:'xxix',
    title:'View Operation',
    icon:'view_blue.png',
    description:{title:'View', contents:'<h1>I need the sequence in Pearson/FASTA format.<br>The Boss.</h1>'},
    nodes:[{key:'0007:0(0122:0(3344:0,a2b4:0))',value:'VADIS'}]
  }

];

function checkForm(tokID) {
  // Only lowercase
  document.forms['form_'+tokID].elements['b'].value = document.forms['form_'+tokID].elements['b'].value.toLowerCase();
  saveStatus(tokID);
}

function doIt() {
  document.getElementById('crazyworkflow').innerHTML='<div id="sandbox"></div><br /><div id="board"></div></div><div id="popup"></div>';
  init(80);
}

