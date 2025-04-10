<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>

<link href='http://fonts.googleapis.com/css?family=Rock+Salt' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Special+Elite' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Architects+Daughter' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Walter+Turncoat' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Coda' rel='stylesheet' type='text/css'>

<style>
.the_button {
  text-decoration: none;
  padding: 0px 5px 2px;
  border: 1px solid #DDD;
  border-radius: 3px;
  background-clip: padding-box;
  background-color: #EEE;
  font-family: Monaco,"DejaVu Sans Mono","Courier New",monospace;
  font-size: 13px;
  color: #666;
}

#chat {
  float:left;
  width:700px;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  font-family: 'Coda', sans-serif;
  font-size:16px;
}
#chat p {
  padding: 0px;
  margin: 0px;
}


</style>

<script type="text/javascript" src="search.js"></script>


<div id="page">
<div id="content">
<div id="chat">
<p> I tried to get all the protein sequences of hemoglobin of rabbit in the CrazyBioLab search engine... but I don't know how to fill in this form below. Could you help me? </p>
</div>
<p style="float:left;font-size:20px;font-family:'Rock Salt',cursive">CrazyBioLab Search Engine</p>
<img src="../img/biologist_closeview.png" width="140px"></img>

<div id="result" style="font-family:'Coda',sans-serif; font-size: 16px"></div>

<div id="engine">
<form>
<p>Choose a Databank:
<select id="databank" onchange="
document.getElementById('result').innerHTML = '<br /><br />';
document.getElementById('descr1').selectedIndex = 0;
document.getElementById('keywd1').value = '';

if(this.selectedIndex == 11) {
  document.getElementById('descr0').innerHTML = displayOptions['protein'];
  document.getElementById('descr0').selectedIndex = 11;
  document.getElementById('descr1').innerHTML = displayOptions['protein'];
}
else if(this.selectedIndex == 8) {
  document.getElementById('descr0').innerHTML = displayOptions['taxonomy'];
  document.getElementById('descr0').selectedIndex = 2;
  document.getElementById('descr1').innerHTML = displayOptions['taxonomy'];
}
else {
  document.getElementById('descr0').innerHTML = displayOptions['other'];
  document.getElementById('descr0').selectedIndex = 6;
  document.getElementById('descr1').innerHTML = displayOptions['other'];
}"
>
<option value="None">-----</option>
<option value="Books">Books</option>
<option value="MeSH">MeSH</option>
<option value="PubMed">PubMed</option>
<option value="Central">PubMed Central</option>
<option value="Assembly">Assembly</option>
<option value="Genome">Genome</option>
<option value="Nucleotide">Nucleotide</option>
<option value="Taxonomy">Taxonomy</option>
<option value="EST">EST</option>
<option value="Gene">Gene</option>
<option value="Protein" selected="selected">Protein</option>
<option value="Structure">Structure</option>
<option value="PubChem">PubChem Compound</option>
</select>
</p>

<p>
<select id="logop0">
<option value="and">AND</option>
</select>
<select id="descr0">
<option value="All Fields">All Fields</option>
<option value="Assembly">Assembly</option>
<option value="Author">Author</option>
<option value="Division">Division</option>
<option value="EC/RN Number">EC/RN Number</option>
<option value="Feature key">Feature key</option>
<option value="Filter">Filter</option>
<option value="Gene Name">Gene Name</option>
<option value="Journal">Journal</option>
<option value="Keyword">Keyword</option>
<option value="Modification Date">Modification Date</option>
<option value="Organism" selected="selected" >Organism</option>
<option value="Primary Accession">Primary Accession</option>
<option value="Properties">Properties</option>
<option value="Protein Name">Protein Name</option>
<option value="Publication Date">Publication Date</option>
<option value="Sequence Length">Sequence Length</option>
<option value="Title">Title</option>
</select>
<input type="text" id="keywd0" size=40 value="rabbit" readonly></input>
</p>
<p>
<select id="logop1">';
<option value="and">AND</option>';
</select>
<select id="descr1">';
<option selected="selected" value="All Fields">All Fields</option>
<option value="Assembly">Assembly</option>
<option value="Author">Author</option>
<option value="Division">Division</option>
<option value="EC/RN Number">EC/RN Number</option>
<option value="Feature key">Feature key</option>
<option value="Filter">Filter</option>
<option value="Gene Name">Gene Name</option>
<option value="Journal">Journal</option>
<option value="Keyword">Keyword</option>
<option value="Modification Date">Modification Date</option>
<option value="Organism">Organism</option>
<option value="Primary Accession">Primary Accession</option>
<option value="Properties">Properties</option>
<option value="Protein Name">Protein Name</option>
<option value="Publication Date">Publication Date</option>
<option value="Sequence Length">Sequence Length</option>
<option value="Title">Title</option>
</select>
<input type="text" id="keywd1" size=40></input>
</p>

<br>
<input type="button" value="Search Sequence(s)" onclick="javascript:search()"></input>
</form>
</div>
<br>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
