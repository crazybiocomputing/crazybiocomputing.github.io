var isPredefinedSet=true;

function Selector() {

}


function select(options) {
  // Init selectedAtoms
  selectedAtoms=mol.atoms;
  isPredefinedSet=true;
  // Predefined Sets?
  str=selectPredefinedSet(options);

  // atom ID?
  if (!isPredefinedSet)
    str=selectID(options);

  return str;
}

function selectPredefinedSet(options) {
  // Init selectedAtoms
  selectedAtoms=mol.atoms;

  var str='No atoms selected!';

  for (var i=0;i<options.length;i++) console.log('['+options[i]+']');

  switch (selectOpts[options[0]]) {
  case selectEnum.ALL:
    selectedAtoms=mol.atoms;
    break;
  case selectEnum.AT:
    str='ERROR: Predefined set not implemented';
    selectedAtoms=[];
    break;
  case selectEnum.ACIDIC:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('101010000000000000000000',2));
    break;
  case selectEnum.ACYCLIC:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('101001000000000000000000',2));
    break;
  case selectEnum.ALIPHATIC:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('101000100000000000000000',2));
    break;
  case selectEnum.ALPHA:
    str='ERROR: Predefined set not implemented';
    selectedAtoms=[];
    break;
  case selectEnum.AMINO:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('101000000000000000000000',2));
    break;
  case selectEnum.AROMATIC:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('101000010000000000000000',2));
    break;
  case selectEnum.BACKBONE:
    // Protein: N-CA-C=O-
    // Nucleic: ??-P-??
    str='ERROR: Predefined set not implemented';
    selectedAtoms=[];
    break;
  case selectEnum.BASIC:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('101000001000000000000000',2));
    break;
  case selectEnum.BONDED:
    str='ERROR: Predefined set not implemented';
    selectedAtoms=[];
    break;
  case selectEnum.BURIED:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('101000000100000000000000',2));
    break;
  case selectEnum.CG:
    str='ERROR: Predefined set not implemented';
    selectedAtoms=[];
    break;
  case selectEnum.CHARGED:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('101000000010000000000000',2));
    break;
  case selectEnum.CYCLIC:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('101000000001000000000000',2));
    break;
  case selectEnum.CYSTINE:
    str='ERROR: Predefined set not implemented';
    selectedAtoms=[];
    break;
  case selectEnum.HELIX:
    str='ERROR: Secondary structure information not available';
    selectedAtoms=[];
    break;
  case selectEnum.HETERO:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('010000000000000000000000',2));
    break;
  case selectEnum.HYDROGEN:
    str='ERROR: Predefined set not implemented';
    selectedAtoms=[];
  case selectEnum.HYDROPHOBIC:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('101000000000100000000000',2));
    break;
  case selectEnum.IONS:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('010000000000010000000001',2));
    break;
  case selectEnum.LARGE:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('101000000000010000000000',2));
    break;
  case selectEnum.LIGAND:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('010000000000000000000100',2));
    break;
  case selectEnum.MEDIUM:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('101000000000001000000000',2));
    break;
  case selectEnum.NEGATIVE:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('101000000000000100000000',2));
    break;
  case selectEnum.NEUTRAL:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('101000000000000010000000',2));
    break;
  case selectEnum.NUCLEIC:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('100000000000000000000000',2));
    break;
  case selectEnum.POLAR:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('101000000000000001000000',2));
    break;
  case selectEnum.POSITIVE:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('101000000000000000100000',2));
    break;
  case selectEnum.PROTEIN:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('101000000000000000000000',2));
    break;
  case selectEnum.PURINE:
  case selectEnum.PYRIMIDINE:
  case selectEnum.SELECTED:
    str='ERROR: Predefined set not implemented';
    selectedAtoms=[];
    break;
  case selectEnum.SHEET:
    str='ERROR: Secondary structure information not available';
    selectedAtoms=[];
    break;
  case selectEnum.SIDECHAIN:
    str='ERROR: Predefined set not implemented';
    selectedAtoms=[];
    break;
  case selectEnum.SMALL:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('101000000000000000010000',2));
    break;
  case selectEnum.SOLVENT:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('010000000000000000000011',2));
    break;
  case selectEnum.SURFACE:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('101000000000000000001000',2));
    break;
  case selectEnum.TURN:
    str='ERROR: Secondary structure information not available';
    selectedAtoms=[];
    break;
  case selectEnum.WATER:
    selectedAtoms=selectWithMask(mol.atoms,parseInt('010000000000000000000010',2));
    break;
  default:
    selectedAtoms=[];
    str='ERROR: Unknown option';
    isPredefinedSet=false;
  } 

  if (selectedAtoms.length!=0)
    str=selectedAtoms.length + ' atoms selected!';
  return str;
}


function selectWithMask(atoms,mask) {
  var tmp=[];
  for (var i=0;i<atoms.length;i++) {
    if ( (atoms[i].props & mask) == mask)
      tmp.push(atoms[i]);
  }

  return tmp;
}


function selectID(options) {
  // Init selectedAtoms
  selectedAtoms=mol.atoms;
  var str='No atoms selected!';

  // Regexp <Group><Pos>:<chain>.<atomname>
  // cys
  // as?
  // 112
  // *120
  // cys.sg
  // hem:b.fe
  // cys112:b.sg
  // [so4]

  var pattern='';
  if (/[0-9]+:/.test(options[0]) )
    pattern=options[0];
  else if (/[0-9]+/.test(options[0]) )
    pattern=options[0]+':';
  else
    pattern=options[0];
  pattern=pattern.replace('.','\\\.');

  // For debug
  if (options[0][0]=='/')
    pattern=options[0].substring(1,options[0].length);

  console.log(options[0][0]+' select ID /'+pattern+'/');
  var regexp = new RegExp(pattern,'i');
  // Loop
  var tmp=[];
  for (var i=0;i<mol.atoms.length;i++) {
    if ( regexp.test(mol.atoms[i].ID) ) {
      console.log(mol.atoms[i].ID);
      tmp.push(mol.atoms[i]);
    }
  }
  selectedAtoms=tmp;
  if (selectedAtoms.length!=0)
    str=selectedAtoms.length + ' atoms selected!';
  return str;

  
}



