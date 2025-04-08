<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>
<link href='http://fonts.googleapis.com/css?family=Rock+Salt' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Architects+Daughter' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Walter+Turncoat' rel='stylesheet' type='text/css'>

<style>
#crazybiolab {
  position: absolute;
}

#answer {
  position: absolute;
  left:20px;
  top: 30px;
  width:360px;
  font-family: 'Rock Salt',cursive;
  font-size: 16px;
}

#question {
  color: #ffffff;
  position: absolute;
  left:50px;
  top: 400px;
  width:400px;
  z-index: 1;
}

.askButton {
  text-decoration:none;
  text-shadow: none;
  background-color: #FF8040;
  border: 1px solid #FF8010;
  border-radius: 5px;
  margin: 2px 2px 4px 2px;
  padding: 4px 4px 4px 4px;
  font-style: normal;
  font-weight: normal;
  font-family: 'Walter Turncoat', cursive;
  color: rgb(40,40,40);
}

.askKButton:hover {
  color: rgb(0,0,0);
}
</style>


<div id="page">
<div id="content">
  <p style="font-family: 'Walter Turncoat', cursive;font-size:30px">C&nbsp;h&nbsp;a&nbsp;p&nbsp;t&nbsp;e&nbsp;r&nbsp;&nbsp;&nbsp;3&nbsp;:&nbsp;I&nbsp;n&nbsp;s&nbsp;t&nbsp;a&nbsp;l&nbsp;l&nbsp;(&nbsp;c&nbsp;o&nbsp;n&nbsp;t&nbsp;'&nbsp;d&nbsp;)</p>

<?php
  if (isset($_POST['OK']) ) {
    $score=0;
    echo '<div style="width:700px;height:500px;background-color:#000;color:white;font-size:14px;padding:10px;">';
      echo '<pre>';
    if ($_POST['needle']==6) {
      echo 'needle................................<span style="color:#0f0; font-weight:bold">OK</span><br>';
      $score |=2;
    }
    else
      echo 'needle................................<span style="color:red; font-weight:bold">KO</span><br>';

    if ($_POST['sixpack']==21 || $_POST['sixpack']==33 || $_POST['sixpack']==43)  {
      echo 'sixpack...............................<span style="color:#0f0; font-weight:bold">OK</span><br>';
      $score |=4;
    }
    else
      echo 'sixpack...............................<span style="color:red; font-weight:">KO</span><br>';

    if ($_POST['transeq']==43)  {
      echo 'transeq...............................<span style="color:#0f0; font-weight:bold">OK</span><br>';
      $score |=8;
    }
    else
      echo 'transeq...............................<span style="color:red; font-weight:bold">KO</span><br>';

    if ($_POST['pepstats']==57)  {
      echo 'pepstats..............................<span style="color:#0f0; font-weight:bold">OK</span><br>';
      $score |=16;
    }
    else
      echo 'pepstats..............................<span style="color:red; font-weight:bold">KO</span><br>';

    if ($_POST['dottup']==5)  {
      echo 'dottup................................<span style="color:#0f0; font-weight:bold">OK</span><br>';
      $score |=32;
    }
    else
      echo 'dottup................................<span style="color:red; font-weight:bold">KO</span><br>';

      echo '<br>';
      if ($score ==62)
        echo 'Installation correctly fixed. Click on this link <a style="text-decoration:none;color:white;font-weight:bold" href="yesitis.php"> [next game &gt;&gt;] </a>';
      else
        echo 'Installation aborted. To reset the game, click on [H O M E] of the header';
      
      echo '</pre>';


  }
  elseif (isset($_GET['install']) && $_GET['install']==1) {
    echo '<div style="width:700px;height:500px;background-color:#000;color:white;font-size:14px;padding:10px;">';
      echo '<pre>';
      echo 'Several applications were not correctly installed.<br>Move the following applications in their good subgroups<br>';
      echo 'There is a search in the server Mobyle @ Pasteur, France<br> that can be useful to locate them';
      echo '<form action="continued.php" method="post">';
      echo '<label>$> needle&nbsp;&nbsp;</label>';
      echo '<select name="needle">';
      combo();
      echo '</select><br>';
      echo '<label>$> sixpack&nbsp;</label>';
      echo '<select name="sixpack">';
      combo();
      echo '</select><br>';
      echo '<label>$> transeq&nbsp;</label>';
      echo '<select name="transeq">';
      combo();
      echo '</select><br>';
      echo '<label>$> pepstats</label>';
      echo '<select name="pepstats">';
      combo();
      echo '</select><br>';
      echo '<label>$> dottup&nbsp;&nbsp;</label>';
      echo '<select name="dottup">';
      combo();
      echo '</select><br>';
      echo '<br>';

      echo '<br>';
      echo '<input style="font-size:14px;background-color:#000;color:white;text-decoration:none;border:none" type="submit" name="OK" value="OK">';
      echo '</form></div>';
  }
  else {
    echo '<div id="crazybiolab"><img src="computer_room.jpg" usemap="#computer"></img></a></div>';
  }

  function combo() {
      echo '<option value="0">None</option>';
      echo '<option value="1">Acd</option>';
      echo '<option value="2">Alignment</option>';
      echo '<option value="3">Alignment consensus</option>';
      echo '<option value="4">Alignment differences</option>';
      echo '<option value="5">Alignment dot plots</option>';
      echo '<option value="6">Alignment global</option>';
      echo '<option value="7">Alignment local</option>';
      echo '<option value="8">Alignment multiple</option>';
      echo '<option value="9">Assembly fragment assembly</option>';
      echo '<option value="10">Data resources</option>';
      echo '<option value="11">Data retrieval</option>';
      echo '<option value="12">Data retrieval chemistry data</option>';
      echo '<option value="13">Data retrieval feature data</option>';
      echo '<option value="14">Data retrieval ontology data</option>';
      echo '<option value="15">Data retrieval resource data</option>';
      echo '<option value="16">Data retrieval sequence data</option>';
      echo '<option value="17">Data retrieval sequence data assembly data</option>';
      echo '<option value="18">Data retrieval text data</option>';
      echo '<option value="19">Data retrieval tool data</option>';
      echo '<option value="20">Data retrieval url data</option>';
      echo '<option value="21">Display</option>';
      echo '<option value="22">Documentation</option>';
      echo '<option value="23">Edit</option>';
      echo '<option value="24">Enzyme kinetics</option>';
      echo '<option value="25">Feature tables</option>';
      echo '<option value="26">HMM</option>';
      echo '<option value="27">Menus</option>';
      echo '<option value="28">Nucleic 2d structure</option>';
      echo '<option value="29">Nucleic codon usage</option>';
      echo '<option value="30">Nucleic composition</option>';
      echo '<option value="31">Nucleic CpG islands</option>';
      echo '<option value="32">Nucleic functional sites</option>';
      echo '<option value="33">Nucleic gene finding</option>';
      echo '<option value="34">Nucleic motifs</option>';
      echo '<option value="35">Nucleic mutation</option>';
      echo '<option value="36">Nucleic primers</option>';
      echo '<option value="37">Nucleic profiles</option>';
      echo '<option value="38">Nucleic properties</option>';
      echo '<option value="39">Nucleic repeats</option>';
      echo '<option value="40">Nucleic restriction</option>';
      echo '<option value="41">Nucleic RNA folding</option>';
      echo '<option value="42">Nucleic transcription</option>';
      echo '<option value="43">Nucleic translation</option>';
      echo '<option value="44">Ontology</option>';
      echo '<option value="45">Ontology edam</option>';
      echo '<option value="46">Ontology go</option>';
      echo '<option value="47">Ontology taxonomy</option>';
      echo '<option value="48">Phylogeny consensus</option>';
      echo '<option value="49">Phylogeny continuous characters</option>';
      echo '<option value="50">Phylogeny discrete characters</option>';
      echo '<option value="51">Phylogeny distance matrix</option>';
      echo '<option value="52">Phylogeny gene frequencies</option>';
      echo '<option value="53">Phylogeny molecular sequence</option>';
      echo '<option value="54">Phylogeny tree drawing</option>';
      echo '<option value="55">Protein 2d structure</option>';
      echo '<option value="56">Protein 3d structure</option>';
      echo '<option value="57">Protein composition</option>';
      echo '<option value="58">Protein domains</option>';
      echo '<option value="59">Protein functional sites</option>';
      echo '<option value="60">Protein modifications</option>';
      echo '<option value="61">Protein motifs</option>';
      echo '<option value="62">Protein mutation</option>';
      echo '<option value="63">Protein profiles</option>';
      echo '<option value="64">Protein properties</option>';
      echo '<option value="65">Test</option>';
      echo '<option value="66">Utils</option>';
      echo '<option value="67">Utils database creation</option>';
      echo '<option value="68">Utils database indexing</option>';
  }
?>

</div>
</div>


<MAP NAME="computer">
<AREA shape="POLY" coords="101,177,159,164,162,213,111,225" HREF="continued.php?install=1" ALT="computer" />
<AREA shape="POLY" coords="260,143,302,132,305,176,262,190" HREF="continued.php?install=1" ALT="computer" />

</MAP>


<?php
	include('../../phpCrazy/footer.inc.php');
?>
</body>
</html>
