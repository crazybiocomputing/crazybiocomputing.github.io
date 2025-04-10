
var board={};

board.cells=[];
board.width=6;
board.height=4;

var tokenOptions = [
 { 
    ID:'1234', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    type:'D', 
    knots:'oxxx',
    title:'Data', 
    icon:'../crazybioflow/img/data.png',
    description:{
      title:'Data - Hemoglobin subunit beta', 
      contents:'<pre>>uniprot|P68871|HBB_HUMAN Hemoglobin subunit beta;\nMVHLTPEEKSAVTALWGKVNVDEVGGEALGRLLVVYPWTQRFFESFGDLSTPDAVMGNPK\nVKAHGKKVLGAFSDGLAHLDNLKGTFATLSELHCDKLHVDPENFRLLGNVLVCVLAHHFG\nKEFTPPVQAAYQKVVAGVANALAHKYH</pre>'
    }
  },
 { 
    ID:'5678', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    type:'T', 
    knots:'ioxi',
    title:'Tool: BLAST', 
    icon:'../crazybioflow/img/tool.png',
    description:{
      title:'Tool - BLAST', 
      contents:'<p>No parameter</p>'
    }
  },
  { 
    ID:'AND', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    knots:'iiox',
    title:'Tool: AND', 
    icon:'../crazybioflow/img/logicalOP.png',
    clip:'rect(0px 100px 100px 0px)',
    description:{title:'AND', contents:'AND operator'},
  },
  {
    ID:'OR', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    knots:'iiox',
    title:'Tool: OR', 
    icon:'../crazybioflow/img/logicalOP.png',
    clip:'rect(0px 200px 100px 100px)',
    clip_left:'-100px',
    description:{title:'OR', contents:'OR operator'},
  },
  {
    ID:'NOT', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    knots:'iiox',
    title:'Tool: NOT', 
    icon:'../crazybioflow/img/logicalOP.png',
    clip:'rect(0px 300px 100px 200px)',
    clip_left:'-200px',
    description:{title:'NOT', contents:'NOT operator'},
  },

  {
    ID:'settings', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    knots:'xxox',
    title:'Tool: Settings', 
    icon:'../crazybioflow/img/settings.png',
    description:{title:'Settings', contents:'Settings of a Tool'},
  },

  {
    ID:'void', 
    props: CLOSABLE | CONTAINABLE| LINKABLE | MOVABLE | RENDERABLE | ROTATABLE, 
    knots:'xxox',
    title:'Void', 
    icon:'../crazybioflow/img/void.png',
    description:{title:'Empty', contents:'Only used to close/lock an input'},
  },

  { 
    ID:'MQ', 
    props: ENCRYPTABLE, 
    knots:'xoxx',
    description:{title:'View', contents:'<h1>Good!!</h1>'},
  },
  {
    ID:'0007', 
    props: CONTAINABLE | LINKABLE | MOVABLE | RENDERABLE | SWITCHABLE, 
    knots:'ixxx',
    title:'View',
    icon:'../crazybioflow/img/view_blue.png',
    description:{title:'View', contents:'<h1>Error</h1>'},
    nodes:[{key:'0007:0(5678:0(1234:0))',value:'MQ'}],
    cell_x:2,
    cell_y:2
  }

];

function doIt() {
  init();
}

