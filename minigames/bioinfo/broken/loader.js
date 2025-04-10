//
// 
//

function PDBLoader() {
  var text=document.getElementById('data').innerHTML;
  this.mol = {
    'title':'',
    'classification':'undefined',
    'sec_struct':0,
    'pdbid':'undefined',
    'experiment':'undefined',
    'chainCount':0,
    'groupCount':0,
    'hetgroupCount':0,
    'hetatomCount':0,
    'bondCount':0,
    'helixCount':0,
    'strandCount':0,
    'turnCount':0,
  };
  this.loadStruct(text);
}  


PDBLoader.prototype.getStructure= function() {
  for (var i=0;i<this.mol.atoms.length;i++)
    console.log(this.mol.atoms[i].ID +' '+ this.mol.atoms[i].props);
  return this.mol;
}

PDBLoader.prototype.loadStruct= function(text) {

  var lines=text.split('\n');
  var atoms=[];
  var hetatom_count=0;
  var group_count=0;
  var hetgroup_count=0;
  var group_previous=0;
  var hetgroup_previous=0;
  for (var i=0;i<lines.length;i++) {
    var line=lines[i];

    if (lines[i].substring(0,6)=='HEADER') {
       this.mol.classification=line.substring(10,50).trim();
       this.mol.pdbid=line.substring(62,66).trim()+' ';
    }
    else if (lines[i].substring(0,6)=='EXPDTA') {
       this.mol.experiment=line.substring(10,79).trim();
    }
    else if (lines[i].substring(0,6)=='REMARK' && lines[i].substring(9,10)=='2' && lines[i].substring(11,22)=='RESOLUTION.') {
       this.mol.experiment+=' with resolution of '+line.substring(23,41).trim();
    }
    else if (lines[i].substring(0,6)=='TITLE ') {
       this.mol.title+=line.substring(10,80).trim() +' ';
    }
    else if (lines[i].substring(0,6)=='ATOM  ') {
      var atom={};
      atom.type=line.substring(0,1);
      atom.serial = parseInt(line.substring(6,11));
      atom.name = line.substring(12,16).trim();
      atom.group = line.substring(17,20).trim();
      atom.chain = line[21];
      atom.groupID = parseInt(line.substring(22,26));
      atom.x = parseFloat(line.substring(30,38));
      atom.y = parseFloat(line.substring(38,46));
      atom.z = parseFloat(line.substring(46,54));
      atom.symbol = line.substring(76,78).trim();
      atom.ID=atom.group+atom.groupID+':'+atom.chain+'.'+atom.name;
      atom.props=parseInt(props[atom.group],2);

      if (atom.groupID != group_previous) {
        group_count++;
        group_previous=atom.groupID;
      }
      atoms.push(atom);
    }
    else if (lines[i].substring(0,6)=='HETATM') {
      hetatom_count++;
      var atom={};
      atom.type=line.substring(0,1);
      atom.serial = parseInt(line.substring(6,11));
      atom.name = line.substring(12,16).trim();
      atom.group = line.substring(17,20).trim();
      atom.chain = line[21];
      atom.groupID = parseInt(line.substring(22,26));
      atom.x = parseFloat(line.substring(30,38));
      atom.y = parseFloat(line.substring(38,46));
      atom.z = parseFloat(line.substring(46,54));
      atom.symbol = line.substring(76,78).trim();
      atom.ID=atom.group+atom.groupID+':'+atom.chain+'.'+atom.name;
      if  ( atom.group=='WAT' || atom.group=='H20' || atom.group=='SOL' || atom.group=='TIP' || atom.group=='HOH' || atom.group=='D20' || atom.group=='DOD')
        atom.props=parseInt('010000000000000000000010',2);
      else 
        atom.props=parseInt('010000000000000000000100',2);

      if (atom.groupID != hetgroup_previous) {
        hetgroup_count++;
        hetgroup_previous=atom.groupID;
      }
      atoms.push(atom);
    }
  }
  this.mol.atoms=atoms;
  this.mol.hetatomCount=hetatom_count;
  this.mol.groupCount=group_count;
  this.mol.hetgroupCount=hetgroup_count;
}

