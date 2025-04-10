
var board={};

board.cells=[];
board.width=6;
board.height=4;

var tokenOptions = [
 
   { 
    ID:'0011', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    type:'D', 
    knots:'oxxx',
    title:'Data', 
    icon:'data.png',
    description:{
      title:'Sequence', 
      contents:'<pre style="font-family:monospace;font-size:8px">>sequence\nggtagaacagcttcagttgggatcacaggcttctagggatcctttgggcaaaaaagaaaa\nacagaaggcattctttctat'+
'acaagaaaggactttatagagctgctaccatgaacggaac\nagaaggtccaaatttttatgtccccatgtccaacaaaactggggtggtacgaagcccatt\ncgattaccctcagtattac'+
'ttagcagagccatggcaatattcagcactggctgcttacat\ngttcctgctcatcctgcttgggttaccaatcaacttcatgaccttgtttgttaccatcca\ngcacaagaaactcagaac'+
'acccctaaactacatcctgctgaacctggtatttgccaatca\ncttcatggtcctgtgtgggttcacggtgacaatgtacacctcaatgcacggctacttcat\nctttggccaaactggtt'+
'gctacattgaaggcttctttgctacacttggtggtgaagtggc\ncctctggtcactggtagtattggccgttgaaagatatatggtggtctgcaagcccatggc\ncaacttccgattcgggg'+
'agaaccatgctattatgggtgtagccttcacatggatcatggc\ntttgtcttgtgctgctcctcctctcttcggatggtccagatacatcccagagggaatgca\natgctcatgcggagtag'+
'actactacacactgaagcctgaggtcaacaatgaatcctttgt\ntatctacatgttcattgtccacttcaccattcccctgattgtcatcttcttctgctatgg\ntcgcctgctctgcactg'+
'tcaaagaggctgcagcccagcaacaggaatctgctaccaccca\ngaaggctgagaaagaggtcaccagaatggttgttatcatggtcgttttcttcctgatctg\nttgggtgccctatgcct'+
'atgtggcattctacatcttcacccaccagggctctaactttgg\ncccagtcttcatgaccgtcccagctttctttgccaagagctctgctatctacaatcctgt\ncatctacattgtcttga'+
'acaaacagttccgtaactgcttgatcaccaccctgtgctgtgg\naaagaatccattcggtgatgaagatggctcctctgcagccacctccaagacagaagcttc\nttctgtctcttccagcca'+
'ggtgtctcctgcataagagcttcaccagggctgtctcagggt\nccgctgcctcacacaattcccatcacttaagccctgtctacttgttgcgaaggcaaagaa\nttccacagttttaatattt'+
'acccccattctgcccaaccttggacactgtaagagctgacc\nccattactgctgggaaggcccaagctttgttgcattctgatgtgatcctttcagcagaaa\natgggtggattcaatgaattt'+
'caccaaggctgtacataacaataacattagtctgaaggc\nacctcccacccagagaatgcaacacttatttatctctgtcttttcttgacatattgatgc\ntgcttctattcatggtcactaac'+
'aaaaagtcccattttacaatgcaactgaaagtaatgt\natttttgtaatataataacatatttcatgcaatctcctctgcttattggcaaggtctgat\natagtgaggatagacagccagaccc'+
'cttgcattaaaatcctgtattaaaaatttctttgc\naagt\n<pre>'
    }
  },
  { 
    ID:'1111', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    type:'D', 
    knots:'oxxx',
    title:'Matrix: Identity', 
    icon:'data.png',
    description:{
      title:'Matrix', 
      contents:'<table>'+
        '<tr><td>&nbsp;</td><td>A</td><td>C</td><td>G</td><td>T</td></tr>'+
        '<tr><td>A</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>'+
        '<tr><td>C</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>'+
        '<tr><td>G</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>'+
        '<tr><td>T</td><td>0</td><td>0</td><td>0</td><td>1</td></tr></table>'
    }
 },
  { 
    ID:'2222', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    type:'D', 
    knots:'oxxx',
    title:'Matrix: BLOSUM62', 
    icon:'data.png',
    description:{
      title:'Matrix', 
      contents:'BLOSUM62'
    }
 },
 { 
    ID:'0078', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    type:'T', 
    knots:'iioi',
    title:'Tool: BLASTp', 
    icon:'tool.png',
    description:{
      title:'Tool', 
      contents:'<p>blastp</p>'
    }
  },
 { 
    ID:'0178', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    type:'T', 
    knots:'iioi',
    title:'Tool: BLASTn', 
    icon:'tool.png',
    description:{
      title:'Tool', 
      contents:'<p>blastn</p>'
    }
  },
 { 
    ID:'5378', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    type:'T', 
    knots:'iioi',
    title:'Tool: megaBLAST', 
    icon:'tool.png',
    description:{
      title:'Tool', 
      contents:'<p>megaBLAST</p>'
    }
  },
 { 
    ID:'5278', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    type:'T', 
    knots:'iioi',
    title:'Tool: BLASTx', 
    icon:'tool.png',
    description:{
      title:'Tool', 
      contents:'<p>blastx</p>'
    }
  },
 { 
    ID:'5678', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    type:'T', 
    knots:'iioi',
    title:'Tool: tBLASTn', 
    icon:'tool.png',
    description:{
      title:'Tool', 
      contents:'<p>tBLASTn</p>'
    }
  },
 { 
    ID:'5699', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    type:'T', 
    knots:'iioi',
    title:'Tool: psi-BLAST', 
    icon:'tool.png',
    description:{
      title:'Tool', 
      contents:'<p>psi-BLAST</p>'
    }
  },
  {
    ID:'settings1', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    knots:'xxox',
    title:'Databank: SwissProt', 
    icon:'bank.png',
    description:{title:'Databank', contents:'SwissProt'},
  },

  {
    ID:'settings2', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    knots:'xxox',
    title:'Databank: Genbank', 
    icon:'bank.png',
    description:{title:'Databank', contents:'Genbank'},
  },


  { 
    ID:'VADIS', 
    props: NONE, 
    knots:'xxxx',
    description:{title:'View', contents:'<img src="blast2.png" alt="Error">'},
  },
  { 
    ID:'MQ', 
    props: ENCRYPTABLE, 
    knots:'xxxx',
    description:{title:'View', contents:'<j7Lr35r"zJDp);nbHiTazt-05/u".6B7y:IhIttg6D0r7ghL52pr:30xdgz9Ft8,!Z/LiGvD30tipzw/8rpcwwEBSg;317.rn8'},
  },
  {
    ID:'0007', 
    props: CLOSABLE | CONTAINABLE | LINKABLE | MOVABLE | RENDERABLE | SWITCHABLE | ROTATABLE, 
    knots:'ixxx',
    title:'View',
    icon:'view_blue.png',
    description:{title:'View', contents:'<h2>ERROR</h2> Wrong workflow or missing token'},
    nodes:[
      {key:'0007:0',value:'VADIS'},
      {key:'0007:0(5278:0(0011:0,2222:0,settings1:0))',value:'MQ'}
    ],

  }
];

function doIt() {
  init(80);
}

