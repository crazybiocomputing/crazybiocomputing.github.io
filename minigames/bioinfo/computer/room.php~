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
  <p style="font-family: 'Walter Turncoat', cursive;font-size:30px">C&nbsp;h&nbsp;a&nbsp;p&nbsp;t&nbsp;e&nbsp;r&nbsp;&nbsp;&nbsp;2&nbsp;:&nbsp;I&nbsp;n&nbsp;s&nbsp;t&nbsp;a&nbsp;l&nbsp;l</p>

<?php
  if (isset($_POST['answer']) ) {
    $keywords = preg_split("/\.+/", $_POST['answer']);
    echo '<div style="width:700px;height:500px;background-color:#000;color:white;font-size:14px;padding:10px;">';
    if ($keywords[0]=='emboss' && $keywords[1]=='sourceforge') {
      echo '<pre>';
      echo 'Acd...................................OK<br>';
      echo 'Alignment.............................OK<br>';
      echo 'Assembly fragment assembly............OK<br>';
      echo 'Data resources........................OK<br>';
      echo 'Data retrieval........................OK<br>';
      echo 'Display...............................OK<br>';
      echo 'Documentation.........................OK<br>';
      echo 'Edit..................................OK<br>';
      echo 'Enzyme kinetics.......................OK<br>';
      echo 'Feature tables........................OK<br>';
      echo 'HMM...................................OK<br>';
      echo 'Menus.................................OK<br>';
      echo 'Nucleic...............................OK<br>';
      echo 'Ontology..............................OK<br>';
      echo 'Phylogeny.............................OK<br>';
      echo 'Protein...............................OK<br>';
      echo 'Test..................................OK<br>';
      echo 'Utils.................................OK<br>';
      echo '<br>';
      echo 'End of installation. Click on this link <a style="text-decoration:none;color:white;font-weight:bold" href="guru.php"> [next game &gt;&gt;] </a>';
      echo '</pre>';
    }
    else {
      echo '<pre>';
      echo 'Acd...................................<span style="color:red; font-weight:bold">KO</span><br>';
      echo 'Alignment.............................<span style="color:red; font-weight:bold">KO</span><br>';
      echo 'Assembly fragment assembly............<span style="color:red; font-weight:bold">KO</span><br>';
      echo 'Data resources........................<span style="color:red; font-weight:bold">KO</span><br>';
      echo 'Data retrieval........................<span style="color:red; font-weight:bold">KO</span><br>';
      echo 'Display...............................<span style="color:red; font-weight:bold">KO</span><br>';
      echo 'Documentation.........................<span style="color:red; font-weight:bold">KO</span><br>';
      echo 'Edit..................................<span style="color:red; font-weight:bold">KO</span><br>';
      echo 'Enzyme kinetics.......................<span style="color:red; font-weight:bold">KO</span><br>';
      echo 'Feature tables........................<span style="color:red; font-weight:bold">KO</span><br>';
      echo 'HMM...................................<span style="color:red; font-weight:bold">KO</span><br>';
      echo 'Menus.................................<span style="color:red; font-weight:bold">KO</span><br>';
      echo 'Nucleic...............................<span style="color:red; font-weight:bold">KO</span><br>';
      echo 'Ontology..............................<span style="color:red; font-weight:bold">KO</span><br>';
      echo 'Phylogeny.............................<span style="color:red; font-weight:bold">KO</span><br>';
      echo 'Protein...............................<span style="color:red; font-weight:bold">KO</span><br>';
      echo 'Test..................................<span style="color:red; font-weight:bold">KO</span><br>';
      echo 'Utils.................................<span style="color:red; font-weight:bold">KO</span><br>';
      echo '<br>';
      echo 'Install aborted.<br>To reset this game, click on [H O M E] of the header<br></pre>';
      echo '</div>';
    }
  }
  elseif (isset($_GET['install']) && $_GET['install']==1) {
    echo '<div style="width:700px;height:500px;background-color:#000;color:white;font-size:14px;padding:10px;">';
    echo '<form action="room.php" method="post">';
    echo '<label>$> URL of package for install: http://</label>';
    echo '<input style="font-size:14px;background-color:#aaa;color:white;text-decoration:none;border:none" type="text" name="answer" size="60">';
    echo '<input style="font-size:14px;background-color:#000;color:white;text-decoration:none;border:none" type="submit" name="OK" value="OK">';
    echo '</form></div>';
  }
  else {
    echo '<div id="crazybiolab"><img src="computer_room.jpg" usemap="#computer"></img></a></div>';
  }
?>

</div>
</div>


<MAP NAME="computer">
<AREA shape="POLY" coords="101,177,159,164,162,213,111,225" HREF="room.php?install=1" ALT="computer" />
<AREA shape="POLY" coords="260,143,302,132,305,176,262,190" HREF="room.php?install=1" ALT="computer" />

</MAP>


<?php
	include('../../phpCrazy/footer.inc.php');
?>
</body>
</html>
