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
<p> Where is your phylogenetic tree? I really look forward to seeing your results...</p><p>Copy and paste in the text field below the newick format of your tree...</p>
<p>Be sure that the leaves name contains the ID (ex: MWS-Human or LWS-Human) </p>

</div>
<img src="biologist_closeview.png" width="150px"></img>

<br>
<div id="result">
<textarea id="tree" rows="6" cols="60" >
Enter your phylogenetic tree in newick format.
</textarea>
<br>
<input type="button" value="Submit" onclick="javascript:checkTree()"></input>
</div>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
