var tokenEnum={
BACKBONE:0,
BACKGROUND:1,
BOND:2,
BULGARIAN:3,
CARTOON:4,
CENTRE:5,
CHINESE:6,
CLIPBOARD:7,
COLOUR:8,
COLOURMODE:9,
CONNECT:10,
CPK:11,
CPKNEW:12,
DEFER:13,
DEFINE:14,
DEPTH:15,
DOTS:16,
ECHO:17,
ENGLISH:18,
EXECUTE:19,
EXIT:20,
FRENCH:21,
HBONDS:22,
HELP:23,
ITALIAN:24,
JAPANESE:25,
LABEL:26,
LOAD:27,
MAP:28,
MOLECULE:29,
MONITOR:30,
NOTOGGLE:31,
PAUSE:32,
PLAY:33,
PRINT:34,
QUIT:35,
RECORD:36,
REFRESH:37,
RENUMBER:38,
RESET:39,
RESTRICT:40,
RIBBONS:41,
ROTATE:42,
SAVE:43,
SCRIPT:44,
SELECT:45,
SET:46,
SHOW:47,
SLAB:48,
SOURCE:49,
SPACEFILL:50,
SPANISH:51,
SSBONDS:52,
STAR:53,
STEREO:54,
STRANDS:55,
STRUCTURE:56,
SURFACE:57,
TRACE:58,
TRANSLATE:59,
UNBOND:60,
WIREFRAME:61,
WRITE:62,
ZAP:63,
ZOOM:64
};

var commands={
'backbone':tokenEnum.BACKBONE,
'background':tokenEnum.BACKGROUND,
'bond':tokenEnum.BOND,
'bulgarian':tokenEnum.BULGARIAN,
'cartoon':tokenEnum.CARTOON,
'centre':tokenEnum.CENTRE,
'chinese':tokenEnum.CHINESE,
'clipboard':tokenEnum.CLIPBOARD,
'colour':tokenEnum.COLOUR,
'colourmode':tokenEnum.COLOURMODE,
'connect':tokenEnum.CONNECT,
'cpk':tokenEnum.CPK,
'cpknew':tokenEnum.CPKNEW,
'defer':tokenEnum.DEFER,
'define':tokenEnum.DEFINE,
'depth':tokenEnum.DEPTH,
'dots':tokenEnum.DOTS,
'echo':tokenEnum.ECHO,
'english':tokenEnum.ENGLISH,
'execute':tokenEnum.EXECUTE,
'exit':tokenEnum.EXIT,
'french':tokenEnum.FRENCH,
'hbonds':tokenEnum.HBONDS,
'help':tokenEnum.HELP,
'italian':tokenEnum.ITALIAN,
'japanese':tokenEnum.JAPANESE,
'label':tokenEnum.LABEL,
'load':tokenEnum.LOAD,
'map':tokenEnum.MAP,
'molecule':tokenEnum.MOLECULE,
'monitor':tokenEnum.MONITOR,
'notoggle':tokenEnum.NOTOGGLE,
'pause':tokenEnum.PAUSE,
'play':tokenEnum.PLAY,
'print':tokenEnum.PRINT,
'quit':tokenEnum.QUIT,
'record':tokenEnum.RECORD,
'refresh':tokenEnum.REFRESH,
'renumber':tokenEnum.RENUMBER,
'reset':tokenEnum.RESET,
'restrict':tokenEnum.RESTRICT,
'ribbons':tokenEnum.RIBBONS,
'rotate':tokenEnum.ROTATE,
'save':tokenEnum.SAVE,
'script':tokenEnum.SCRIPT,
'select':tokenEnum.SELECT,
'set':tokenEnum.SET,
'show':tokenEnum.SHOW,
'slab':tokenEnum.SLAB,
'source':tokenEnum.SOURCE,
'spacefill':tokenEnum.SPACEFILL,
'spanish':tokenEnum.SPANISH,
'ssbonds':tokenEnum.SSBONDS,
'star':tokenEnum.STAR,
'stereo':tokenEnum.STEREO,
'strands':tokenEnum.STRANDS,
'structure':tokenEnum.STRUCTURE,
'surface':tokenEnum.SURFACE,
'trace':tokenEnum.TRACE,
'translate':tokenEnum.TRANSLATE,
'unbond':tokenEnum.UNBOND,
'wireframe':tokenEnum.WIREFRAME,
'write':tokenEnum.WRITE,
'zap':tokenEnum.ZAP,
'zoom':tokenEnum.ZOOM
};


// Options
var optsEnum={OFF:0,ON:1};
var generalOpts={'on':optsEnum.ON,'off':optsEnum.OFF};

// Select or restrict options

var selectEnum={
AT:0,
ACIDIC:1,
ACYCLIC:2,
ALIPHATIC:3,
ALPHA:3,
AMINO:4,
AROMATIC:5,
BACKBONE:6,
BASIC:7,
BONDED:8,
BURIED:9,
CG:10,
CHARGED:11,
CYCLIC:12,
CYSTINE:13,
HELIX:14,
HETERO:15,
HYDROGEN:16,
HYDROPHOBIC:17,
IONS:18,
LARGE:19,
LIGAND:20,
MEDIUM:21,
NEGATIVE:22,
NEUTRAL:23,
NUCLEIC:24,
POLAR:25,
POSITIVE:26,
PROTEIN:27,
PURINE:28,
PYRIMIDINE:29,
SELECTED:30,
SHEET:31,
SIDECHAIN:32,
SMALL:33,
SOLVENT:34,
SURFACE:35,
TURN:36,
WATER:37,
ALL:100
};

var groups={
ALA:40,
ARG:41,ASN:42,ASP:43,CYS:44,GLU:45,
GLN:46,GLY:47,HIS:48,ILE:49,LEU:50,
LYS:51,MET:52,PHE:53,PRO:54,SER:55,
THR:56,TRP:57,TYR:58,VAL:59,ASX:60,
GLX:61,PCA:62,HYP:63,  
A:64,  C:65  ,  G:66,  T:67
};


var selectOpts={
    'all':selectEnum.ALL                  ,
    'at':selectEnum.AT                  ,'acidic':selectEnum.ACIDIC        ,'acyclic':selectEnum.ACYCLIC,
    'aliphatic':selectEnum.ALIPHATIC    ,'alpha':selectEnum.ALPHA          ,'amino':selectEnum.AMINO,
    'aromatic':selectEnum.AROMATIC      ,'backbone':selectEnum.BACKBONE    ,'basic':selectEnum.BASIC,
    'bonded':selectEnum.BONDED          ,'buried':selectEnum.BURIED        ,'cg':selectEnum.CG,
    'charged':selectEnum.CHARGED        ,'cyclic':selectEnum.CYCLIC        ,'cystine':selectEnum.CYSTINE,
    'helix':selectEnum.HELIX            ,'hetero':selectEnum.HETERO        ,'hydrogen':selectEnum.HYDROGEN,
    'hydrophobic':selectEnum.HYDROPHOBIC,'ions':selectEnum.IONS            ,'large':selectEnum.LARGE,
    'ligand':selectEnum.LIGAND          ,'medium':selectEnum.MEDIUM        ,'negative':selectEnum.NEGATIVE,
    'neutral':selectEnum.NEUTRAL        ,'nucleic':selectEnum.NUCLEIC      ,'polar':selectEnum.POLAR,
    'positive':selectEnum.POSITIVE      ,'protein':selectEnum.PROTEIN      ,'purine':selectEnum.PURINE,
    'pyrimidine':selectEnum.PYRIMIDINE  ,'selected':selectEnum.SELECTED    ,'sheet':selectEnum.SHEET,
    'sidechain':selectEnum.SIDECHAIN    ,'small':selectEnum.SMALL          ,'solvent':selectEnum.SOLVENT,
    'surface':selectEnum.SURFACE        ,'turn':selectEnum.TURN            ,'water':selectEnum.WATER
};

// Show
var showEnum={
  INFORMATION_OPT:0, CENTRE_OPT:1, PHIPSI_OPT:2, RAMPRINT_OPT:3,
  ROTATION_OPT:4, SELECTED_OPT:5, SEQUENCE_OPT:6, SYMMETRY_OPT:7,
  TRANSLATION_OPT:8,ZOOM_OPT:9,
  GROUP_OPT:10,CHAIN_OPT:11,ATOM_OPT:12
};

var showOpts={
  'information':showEnum.INFORMATION_OPT,
  'centre':showEnum.CENTRE_OPT,
  'phipsi':showEnum.PHIPSI_OPT,
  'ramprint':showEnum.RAMPRINT_OPT,
  'rotation':showEnum.ROTATION_OPT,
  'selected':showEnum.SELECTED_OPT,
  'sequence':showEnum.SEQUENCE_OPT,
  'symmetry':showEnum.SYMMETRY_OPT,
  'translation':showEnum.TRANSLATION_OPT,
  'zoom':showEnum.ZOOM_OPT,
  'group':showEnum.GROUP_OPT,
  'chain':showEnum.CHAIN_OPT,
  'atom':showEnum.ATOM_OPT
};

//atom hetero protein nucleic acidic acyclic aliphatic aromatic basic buried charged cyclic hydrophobic large medium negative neutral polar positive small surface ligand water ions
var props={
'ALA':'101001100100100010010000',
'ARG':'101001001010010001101000',
'ASN':'101001000000001011001000',
'ASP':'101011000010001101001000',
'CYS':'101001000100001011000000',
'GLU':'101011000010010101001000',
'GLN':'101001000000010011001000',
'GLY':'101001100000100010011000',
'HIS':'101000011011010011101000',
'ILE':'101001100100110010000000',
'LEU':'101001100100110010000000',
'LYS':'101001001010010001101000',
'MET':'101001000100110010000000',
'PHE':'101000010101110010000000',
'PRO':'101000000001101010001000',
'SER':'101001000000000011011000',
'THR':'101001000000001011001000',
'TRP':'101000010101110010000000',
'TYR':'101000010001110010001000',
'VAL':'101001100100101010000000',
'_DA':'100100000000000000000000',
'_DC':'100100000000000000000000',
'_DG':'100100000000000000000000',
'_DT':'100100000000000000000000',
'_DI':'100100000000000000000000',
'__A':'100100000000000000000000',
'__C':'100100000000000000000000',
'__G':'100100000000000000000000',
'__T':'100100000000000000000000',
'__I':'100100000000000000000000',
'__U':'100100000000000000000000',
' +U':'100100000000000000000000',
'1MA':'100100000000000000000000',
'5MC':'100100000000000000000000',
'OMC':'100100000000000000000000',
'1MG':'100100000000000000000000',
'2MG':'100100000000000000000000',
'M2G':'100100000000000000000000',
'7MG':'100100000000000000000000',
'OMG':'100100000000000000000000',
'_YG':'100100000000000000000000',
'H2U':'100100000000000000000000',
'5MU':'100100000000000000000000',
'PSU':'100100000000000000000000'
};
