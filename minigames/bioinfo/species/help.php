<?php
	include('../../phpCrazy/header_help.inc.php');
?>
<link href='http://fonts.googleapis.com/css?family=Walter+Turncoat' rel='stylesheet' type='text/css'>

<style>
#left,#right {
  font-family:'Walter Turncoat','Arial','Helvetica',sans-serif;
}
#left {
 float: left;
}

#left img {
  vertical-align:middle;
}

#right img {
  vertical-align:middle;
}
</style>

<div id="page">
<div id="content">

<center>
<p style="font-family:'Walter Turncoat','Arial','Helvetica',sans-serif;font-size:20px">Optimize your NCBI BLAST<br>by running several processes simultaneously...</p>
<div id="left">
<h3>Sequential BLAST</h3>
<p>Seq1 &rarr;<img src="buttonBlast.png" alt="blast"></img><img src="sleepysmiley.png" alt="boring"></img></p>
<p>Seq2 &rarr;<img src="buttonBlast.png" alt="blast"></img><img src="sleepysmiley.png" alt="boring"></img></p>
<p>Seq3 &rarr;<img src="buttonBlast.png" alt="blast"></img><img src="sleepysmiley.png" alt="boring"></img></p>
<p>Seq4 &rarr;<img src="buttonBlast.png" alt="blast"></img><img src="sleepysmiley.png" alt="boring"></img></p>
<p><img src="sadsmiley.png" alt="blast"></img></p>

</div>
<div id="right">
<h3>Simultaneous BLAST <img src="smiley.png" width="45px" alt="smiley"></h3>
<p><img src="optimizeBlast.png" width="400px" alt="form_blast"></img></p>
<p style="font-size:20px">&darr;</p>
<p><img src="buttonBlast.png" alt="blast"></img></p>
<p>...and choose the good results page with the combo.</p>
<p><img src="optimizeBlast2.png" width="400px" alt="results"></img></p>
</div>

</center>
</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
</body>
</html>
