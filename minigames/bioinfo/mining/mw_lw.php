<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>
<link href='http://fonts.googleapis.com/css?family=Rock+Salt' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Coda' rel='stylesheet' type='text/css'>

<style>

#bubble {
  position:absolute;
  left:0px;
  top:0px;
  background-color:white;
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
  margin: 0px;
}

#bubble p {
  margin:0px;
  padding: 0px;
  font-size: 14px;
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


.block label { 
  display: inline-block; 
  font-size:30px;
  width: 40px; 
  text-align: right; 
  top-margin: 5px;
}​


</style>

<script type="text/javascript" src="game.js"></script>

<div id="page">
<div id="content">

<div id="chat">
<p> Can you extract from our lab-made databank of <i>Hominoidea</i> nucleotide sequences, M and L opsin sequences of human, chimpanzee, gorilla, diana, and talapoin?</p>
</div>
<img src="biologist_closeview.png" width="150px"></img>

<div id="engine">
<p style="font-size:20px;font-family:'Rock Salt',cursive">CrazyBioLab Search Engine</p>
<form>
<p>
<select id="logop0">
<option value="and">AND</option>
</select>
<select id="descr0">
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
<input type="text" id="keywd0" size=40></input>
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
<div id="result"></div>

</div>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
