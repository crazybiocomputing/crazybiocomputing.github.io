var status=0;
var tool=0;
var active_tool=0;
var password=['*','*','*','*','*','*'];
var password_index=0;

var groups_url='http://emboss.sourceforge.net/apps/release/6.6/emboss/apps/groups.html';

function load_EMBOSS_groups()
{

  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    request=new XMLHttpRequest();
  }
  else
    alert('Please update your browser');
  try {
    request.open("GET",groups_url,false);
    request.send();
  } catch (e) {
    alert(e.description);
  }
    document.getElementById('crazybiolab').innerHTML = '<pre>' + request.responseText + '</pre>';

  
}


Group	Description
Acd 	Acd file utilities
Alignment 	Sequence comparison and alignment
Alignment consensus 	Merging sequences to make a consensus
Alignment differences 	Finding differences between sequences
Alignment dot plots 	Dot plot sequence comparisons
Alignment global 	Global sequence alignment
Alignment local 	Local sequence alignment
Alignment multiple 	Multiple sequence alignment
Assembly fragment assembly 	DNA sequence assembly
Data resources 	Data resources
Data retrieval 	Data retrieval
Data retrieval chemistry data 	Chemistry data retrieval
Data retrieval feature data 	Sequence feature data retrieval
Data retrieval ontology data 	Ontology data retrieval
Data retrieval resource data 	Resource data retrieval
Data retrieval sequence data 	Sequence data retrieval
Data retrieval sequence data assembly data 	Sequence assembly data retrieval
Data retrieval text data 	Text data retrieval
Data retrieval tool data 	Tool data retrieval
Data retrieval url data 	Url data retrieval
Display 	Publication-quality display
Documentation 	Documentation
Edit 	Data file and content editing
Enzyme kinetics 	Enzyme kinetics calculations
Feature tables 	Manipulation and display of sequence annotation
HMM 	Hidden markov model analysis
Menus 	Menu interface(s)
Nucleic 2d structure 	Nucleic acid secondary structure
Nucleic codon usage 	Codon usage analysis
Nucleic composition 	Composition of nucleotide sequences
Nucleic CpG islands 	CpG island detection and analysis
Nucleic functional sites 	Nucleic acid functional sites
Nucleic gene finding 	Predictions of genes and other genomic features
Nucleic motifs 	Nucleic acid motif searches
Nucleic mutation 	Nucleic acid sequence mutation
Nucleic primers 	Primer prediction
Nucleic profiles 	Nucleic acid profile generation and searching
Nucleic properties 	Nucleic acid physicochemical properties
Nucleic repeats 	Nucleic acid repeat detection
Nucleic restriction 	Restriction enzyme sites in nucleotide sequences
Nucleic RNA folding 	RNA folding methods and analysis
Nucleic transcription 	Transcription factors, promoters and terminator prediction
Nucleic translation 	Translation of nucleotide sequence to protein sequence
Ontology 	Ontologies
Ontology edam 	Edam ontology
Ontology go 	Go gene ontology
Ontology taxonomy 	Ncbi taxonomy
Phylogeny consensus 	Phylogenetic consensus methods
Phylogeny continuous characters 	Phylogenetic continuous character methods
Phylogeny discrete characters 	Phylogenetic discrete character methods
Phylogeny distance matrix 	Phylogenetic distance matrix methods
Phylogeny gene frequencies 	Phylogenetic gene frequency methods
Phylogeny molecular sequence 	Phylogenetic molecular sequence methods
Phylogeny tree drawing 	Phylogenetic tree drawing methods
Protein 2d structure 	Protein secondary structure
Protein 3d structure 	Protein tertiary structure
Protein composition 	Composition of protein sequences
Protein domains 	Protein domain analysis
Protein functional sites 	Protein functional sites
Protein modifications 	Protein post-translational modifications
Protein motifs 	Protein motif searches
Protein mutation 	Protein sequence mutation
Protein profiles 	Protein profile generation and searching
Protein properties 	Protein physicochemical properties
Test 	Testing tools, not for general use.
Utils 	Utility tools
Utils database creation 	Database installation
Utils database indexing 	Database indexing


var app = [
'Acd...................................OK',
'Alignment.............................OK',
'Assembly fragment assembly............OK',
'Data resources........................OK',
'Data retrieval........................OK',
'Display...............................OK',
'Documentation.........................OK',
'E#$%&&................................KO <<< Error',
'Enzyme kinetics.......................OK',
'Feature tables........................OK',
'HMM...................................OK',
'Menus.................................OK',
'Nucleic...............................OK',
'Ontology..............................OK',
'Phylogeny.............................OK',
'Protein...............................OK',
'Test..................................OK',
'Utils.................................OK'
];


var step=1;
function install() {
  var display = document.getElementById('crazybiolab');
  var html='';
  if (step==1) {
  // Step #1: Install configuration
  // URL http:// emboss.sourceforge.net/

    html='Step #1: Install configuration of EMBOSS<br><br>';
    html+='<label>$>&nbsp;URL of EMBOSS:&nbsp;http://</label>';
  }
  else if (step==2) {

    // Step #2: Install
    html='Step #2: Install of Applications<br><br>';
    for (var i=0;i<app.length;i++) {
      console.log('do it '+i);
      html+=app[i]+'<br>';
    }
    html+='<br>Error: install manually the missing package<br>';
    html+='<label>$>&nbsp;Package name: </label>';
  }

  else if (step==3) {
    // Step #3: Fix error packages
    html='Step #2: Install of Applications<br><br>';
    for (var i=0;i<app.length;i++) {
      console.log('do it '+i);
      html+=app[i]+'<br>';
    }
    html+='<br>Error: install manually the missing package';
  }

  display.innerHTML='<div style="width:700px;height:500px;background-color:#000;color:white;font-size:14px;padding:10px;"><pre style="background-color:#000;color:#fff">'+html+'<input style="font-size:14px;background-color:#000;color:white;text-decoration:none;border:none" type="text" size="60"></pre><br></div>';

    step++;
    if (step==2)
      install();
}

