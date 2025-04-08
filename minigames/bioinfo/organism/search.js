function doIt() {
  // Do nothing
}

var results = {
  'taxon': {
    girl:'<p><b>Great!!!</b> Keep in mind that you have to use the scientific name written in Latin for data mining...It\'s very easy to get it in the Taxonomy databank.</p><p>Now, click on <a class="the_button" href="javascript:void(0)" onclick="document.getElementById(\'keywd0\').value=\'Oryctolagus cuniculus\';document.getElementById(\'result\').innerHTML=\'<br />\';">This Button</a> to fill in the form...</p>',
    answer:
        '<br /><h2>Oryctolagus cuniculus</h2>'+
        '<span style="color:rgb(150,150,150); font-size: 14px"><ul><li>Taxonomy ID: 9986</li><li>Genbank common name: rabbit</li>'+
        '<li>Inherited blast name: rabbits & hares</li>'+
        '<li>Rank: species</li>'+
        '<li>common name: 	rabbits</li>'+
        '<li>common name: 	domestic rabbit</li>'+
        '<li>Lineage: cellular organisms; Eukaryota; Opisthokonta; <br>'+
        'Metazoa; Eumetazoa; Bilateria; Deuterostomia; Chordata; Craniata; Vertebrata; <br>'+
        'Gnathostomata; Teleostomi; Euteleostomi; Sarcopterygii; Dipnotetrapodomorpha; <br>'+
        'Tetrapoda; Amniota; Mammalia; Theria; Eutheria; Euarchontoglires; Glires; <br>'+
        'Lagomorpha; Leporidae; Oryctolagus </li></ul></span>'
  },
  'protein': {
    girl: '<p style="color:red">Are you sure this is a listing of rabbit proteins <span style ="color:black; font-weight: bold;font-size:30px">&#9785;</span> the animal with long ears ???.. Try something different because the common name isn\'t a good choice...</p><p>The question is <i>What kind of databank can you ask to get the scientific name of the rabbit?</i></p>',
    answer:
        '<br /><ol><li>AC AGX26121 - arylalkylamine N-acetyltransferase [rabbit fish] </li>'+
        '<li>AC P86810.2 - L-amino-acid oxidase [white-spotted rabbitfish]  </li>'+
        '<li>AC Q94RJ2.1 - NADH-ubiquinone oxidoreductase [rabbit fish]  </li>'+
        '<li>AC AGK33991 - receptor-interacting serine-threonine kinase 4 [streamlined spinefoot]  </li>'+
        '<li>AC AGT48606 - capsid protein [Rabbit hemorrhagic disease virus]  </li>'+
        '<li>AC E5DNC7 - capsid protein [Rabbit calicivirus].</li><li>........</li></ol>'
    }
}

var displayOptions = {
'other':
'<option value="All Fields"  selected="selected" >All Fields</option>'+
'<option value="Author">Author</option>'+
'<option value="Gene Name">Gene Name</option>'+
'<option value="Journal">Journal</option>'+
'<option value="Keyword">Keyword</option>'+
'<option value="Modification Date">Modification Date</option>'+
'<option value="Organism">Organism</option>'+
'<option value="Primary Accession">Primary Accession</option>'+
'<option value="Properties">Properties</option>'+
'<option value="Protein Name">Protein Name</option>'+
'<option value="Publication Date">Publication Date</option>',
'protein':
'<option value="All Fields"  selected="selected" >All Fields</option>'+
'<option value="Assembly">Assembly</option>'+
'<option value="Author">Author</option>'+
'<option value="Division">Division</option>'+
'<option value="EC/RN Number">EC/RN Number</option>'+
'<option value="Feature key">Feature key</option>'+
'<option value="Filter">Filter</option>'+
'<option value="Gene Name">Gene Name</option>'+
'<option value="Journal">Journal</option>'+
'<option value="Keyword">Keyword</option>'+
'<option value="Modification Date">Modification Date</option>'+
'<option value="Organism">Organism</option>'+
'<option value="Primary Accession">Primary Accession</option>'+
'<option value="Properties">Properties</option>'+
'<option value="Protein Name">Protein Name</option>'+
'<option value="Publication Date">Publication Date</option>'+
'<option value="Sequence Length">Sequence Length</option>'+
'<option value="Title">Title</option>',
'structure':
'<option value="ASU Biopolymer Count">ASU Biopolymer Count</option>'+
'<option value="ASU Chemical Count">ASU Chemical Count</option>'+
'<option value="ASU DNA Molecule Count">ASU DNA Molecule Count</option>'+
'<option value="ASU Other Molecule Count">ASU Other Molecule Count</option>'+
'<option value="ASU Protein Molecule Count">ASU Protein Molecule Count</option>'+
'<option value="ASU RNA Molecule Count">ASU RNA Molecule Count</option>'+
'<option value="Abstract">Abstract</option>'+
'<option value="All Fields" selected="selected">All Fields</option>'+
'<option value="Author">Author</option>'+
'<option value="BioUnit Biopolymer Count">BioUnit Biopolymer Count</option>'+
'<option value="BioUnit Chemical Count">BioUnit Chemical Count</option>'+
'<option value="BioUnit DNA Molecule Count">BioUnit DNA Molecule Count</option>'+
'<option value="BioUnit Molecular Weight">BioUnit Molecular Weight</option>'+
'<option value="BioUnit Other Molecule Count">BioUnit Other Molecule Count</option>'+
'<option value="BioUnit Protein Molecule Count">BioUnit Protein Molecule Count</option>'+
'<option value="BioUnit RNA Molecule Count">BioUnit RNA Molecule Count</option>'+
'<option value="Chemical Description">Chemical Description</option>'+
'<option value="Chemical Name">Chemical Name</option>'+
'<option value="Chemical Synonyms">Chemical Synonyms</option>'+
'<option value="Conserved Domain Description">Conserved Domain Description</option>'+
'<option value="Conserved Domain PSSMID">Conserved Domain PSSMID</option>'+
'<option value="Conserved Domain Short Name">Conserved Domain Short Name</option>'+
'<option value="Conserved Domain Superfamily Description">Conserved Domain Superfamily Description</option>'+
'<option value="Conserved Domain Superfamily PSSMID">Conserved Domain Superfamily PSSMID</option>'+
'<option value="Conserved Domain Superfamily Short Name">Conserved Domain Superfamily Short Name</option>'+
'<option value="Conserved Domain Superfamily Title">Conserved Domain Superfamily Title</option>'+
'<option value="Conserved Domain Title">Conserved Domain Title</option>'+
'<option value="DNA Name">DNA Name</option>'+
'<option value="EC/RN Number">EC/RN Number</option>'+
'<option value="Experimental Method">Experimental Method</option>'+
'<option value="Filter">Filter</option>'+
'<option value="Gene Description">Gene Description</option>'+
'<option value="Gene Name">Gene Name</option>'+
'<option value="Journal">Journal</option>'+
'<option value="MMDB Entry Date">MMDB Entry Date</option>'+
'<option value="MMDB Modify Date">MMDB Modify Date</option>'+
'<option value="Number of PDB Records per Structure">Number of PDB Records per Structure</option>'+
'<option value="Oligomeric State">Oligomeric State</option>'+
'<option value="Organism">Organism</option>'+
'<option value="Other Molecule Name">Other Molecule Name</option>'+
'<option value="PDB Accession">PDB Accession</option>'+
'<option value="PDB Chemical Code">PDB Chemical Code</option>'+
'<option value="PDB Class">PDB Class</option>'+
'<option value="PDB Comment">PDB Comment</option>'+
'<option value="PDB Deposit Date">PDB Deposit Date</option>'+
'<option value="PDB Description">PDB Description</option>'+
'<option value="PDB Source">PDB Source</option>'+
'<option value="Protein Name">Protein Name</option>'+
'<option value="RNA Name">RNA Name</option>'+
'<option value="Resolution">Resolution</option>'+
'<option value="Taxonomy ID">Taxonomy ID</option>'+
'<option value="Title">Title</option>',

'taxonomy':
'<option value="All Fields"  selected="selected" >All Fields</option>'+
'<option value="All Names">All Names</option>'+
'<option value="Common Name">Common Name</option>'+
'<option value="Division">Division</option>'+
'<option value="Entrez Date">Entrez Date</option>'+
'<option value="Filter">Filter</option>'+
'<option value="GC">GC</option>'+
'<option value="Lineage">Lineage</option>'+
'<option value="MGC">MGC</option>'+
'<option value="Modification Date">Modification Date</option>'+
'<option value="Name Tokens">Name Tokens</option>'+
'<option value="Next Level">Next Level</option>'+
'<option value="PGC">PGC</option>'+
'<option value="Properties">Properties</option>'+
'<option value="Rank">Rank</option>'+
'<option value="Scientific Name">Scientific Name</option>'+
'<option value="Subtree">Subtree</option>'+
'<option value="Synonym">Synonym</option>'+
'<option value="Text Word">Text Word</option>'
}

function search() {
  var answer='';
  var count=1;
  var databank='';
  var organism='';
  var title='xxx';
  var gene='';

  var e = null;

  // Choose a databank
  e = document.getElementById("databank");
  databank = e.options[e.selectedIndex].value;

  // First row
  e = document.getElementById("descr0"); 
  organism = document.getElementById("keywd0").value.toLowerCase().trim();

  // Second row
  e = document.getElementById("descr1"); 
  if (e.options[e.selectedIndex].value === "Organism") {
    organism = document.getElementById('keywd1').value.toLowerCase().trim();
  }
  else if (e.options[e.selectedIndex].value === "Title") {
    title = document.getElementById('keywd1').value.toLowerCase();
  }
  else if (e.options[e.selectedIndex].value === "Gene Name") {
    gene = document.getElementById('keywd1').value.toUpperCase().trim();
  }
  else if (e.options[e.selectedIndex].value === "All Fields") {
    answer = 'toomuch';
  }
  else if (e.options[e.selectedIndex].value === "Journal" && document.getElementById('keywd1').value === 'crazybio') {
    answer = 'all';
  }


  console.log ('Keys:'+databank+','+organism + ','+ gene + ','+ title);
  if (databank === 'Protein' && title ==='hemoglobin' && document.getElementById('keywd0').value === 'rabbit') {
    document.getElementById('result').innerHTML= results['protein'].answer;
    document.getElementById('chat').innerHTML= results['protein'].girl;
  }
  else if (databank === 'Protein' && title ==='hemoglobin' && document.getElementById('keywd0').value==='Oryctolagus cuniculus') {
    document.getElementById('result').innerHTML= '<p style="font-size:20px">You win!!! The secret word is only_latin.php</p>';
    document.getElementById('chat').innerHTML= 'Congratulations !!! <span style ="font-weight: bold;font-size:30px">&#9786;&#9786;&#9786;</span>';
  }
  else if (databank === 'Taxonomy' && document.getElementById('keywd1').value==='') {
    document.getElementById('result').innerHTML= results['taxon'].answer;
    document.getElementById('chat').innerHTML= results['taxon'].girl;
  }
  else {
    document.getElementById('result').innerHTML='<br /><p><b>Wrong parameters or Too much entries. Cannot display results...</b></p>';
  }



  var hits = answer.replace(/(\r\n|\n|\r)/gm,"");
  var regexp = new RegExp("([ML]WS-[a-zA-Z]+)","g");
  var arr=hits.match(regexp);
  if (arr != null) {
    console.log(arr);
    results = results.concat(arr).unique();
    results = results.sort();
    console.log(results.join().toLowerCase() );
  }

  if (results.join().toLowerCase() === "lws-diana,lws-gorilla,lws-human,lws-pan,lws-talapoin,mws-diana,mws-gorilla,mws-human,mws-pan,mws-talapoin") {
    document.getElementById('chat').innerHTML=
      '<p>Great!! You found all the sequences...</p><br><p>Click <a href="philosophy.php">here</a> to go to the next mini-game.</p>';

    document.getElementById('engine').innerHTML='';
    document.getElementById('result').innerHTML='';

  }
  else if (answer === '') {
    document.getElementById('result').innerHTML='<pre>No items found</pre>';
  }
  else if (answer === 'all') {
    for (var i=0; i< data.length; i++) {
      var seq=data[i];
      answer += '<p style="color:#00A0FF">'+(count++)+'- '+seq.title+'</p><pre>'+seq.fasta+'</pre><br>';
    }
    document.getElementById('result').innerHTML='<pre>Too much entries, the server is saturated. Cannot display results...</pre>';
  }
  else if (answer === 'toomuch') {
    document.getElementById('result').innerHTML='<pre>Too much entries, the server is saturated. Cannot display results...</pre>';
  }
  else {
    document.getElementById('result').innerHTML=answer;
  }

}

Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};
