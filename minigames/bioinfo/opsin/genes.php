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

<script type="text/javascript" src="yamd5-min.js"></script>
<script type="text/javascript" src="verify.js"></script>


<div id="page">
<div id="content">

<div id="chat">
<p> Good. You are now an expert about opsins and color vision ... There is one thing interesting about the opsins. We know that most <b>eutherian mammals</b> have two types of photopigment and are <b>dichromatic</b> but only the <b>Primates</b> have evolved <b>trichromatic vision</b>. This evolution can be studied by bioinformatics using phylogeny tools.</p><br>
<p>But, before beginning a phylogeny project, we are going to study the opsins of <i>Homo sapiens</i> and answer simple questions like how many genes are encoding opsins? and what are their chromosome location???</p>
<p>Use you favourite search engine to download the mRNA sequences and paste them (one at a time) in the textarea below ...</p>
</div>
<img src="biologist_closeview.png" width="150px"></img>

<div id="result" style="float:left"></div>

<div id="my_form" style="float:left">
<br><br>
<form>
<label>Chromosome Location</label><input type="text" id="loc" size=4></input><br>

<textarea id="seq" rows="6" cols="60" >
Enter your sequence (only one sequence in FASTA format without title)
</textarea>

<br>
<input type="button" value="Submit" onclick="javascript:checkIntegrity()"></input>
</form>

<br>
</div>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
