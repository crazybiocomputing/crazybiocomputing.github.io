<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>
<link href='http://fonts.googleapis.com/css?family=Walter+Turncoat' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Coda' rel='stylesheet' type='text/css'>

<script>
function showVideo(ev) {
  document.getElementById('myVideo').style.display='block';
  document.getElementById('myVideoSource').addEventListener('ended', function(e) {
    alert('The End');
    document.getElementById('myVideo').style.display='none';
  });
}
</script>

<style>
label {
  font-family: monospace;
  font-size:18px;
  color:#646464;";
}

input {
  font-size: 18px;
  font-family: 'Coda', sans-serif;
  border: none;
  background-color: #adf;
}

#bubble {
  float:left;
  width:300px;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  font-family: 'Coda', sans-serif;
  font-size:18px;
}
#bubble p {
  padding: 0px;
  margin: 0px;
}

#myVideo {
  position: relative;
  top: -760px;
  left: 25px;
}
</style>


<div id="page">
<div id="content">
 <p style="font-family: 'Walter Turncoat', cursive;font-size:30px">C&nbsp;h&nbsp;a&nbsp;p&nbsp;t&nbsp;e&nbsp;r&nbsp;&nbsp;&nbsp;5: A Male or Female tooth?</p>
<div id="myform" style="width:700px;margin:auto;font-size : 20px; font-family :  arial,sans serif;">

<center>
<?php

if (isset($_POST['OK']) ) {
  $id1=strtolower($_POST['item1']); // amelogenin
  $id2=strtoupper($_POST['item2']); // AMELX
  $id3=strtolower($_POST['item3']); // p22.31-p22.1
  $id4=strtoupper($_POST['item4']); // AMELY
  $id5=strtolower($_POST['item5']); // p11.2
  $id6=ucfirst(strtolower($_POST['item6']));
  $id7=strtoupper($_POST['item7']);
  $id8=strtoupper($_POST['item8']);
  $id9=strtoupper($_POST['item9']);
  $id10=strtoupper($_POST['item10']);
  $id11=strtoupper($_POST['item11']);
  $id12=strtoupper($_POST['item12']);
  $id13=strtoupper($_POST['item13']);
  $id14=strtoupper($_POST['item14']);
  $id15=strtoupper($_POST['item15']);
  $id16=strtoupper($_POST['item16']);
  $id17=strtoupper($_POST['item17']);
  $sex=strtoupper($_POST['sex']);

  $page=$_POST['page'];

  $score=0;
  if ($page==0) {
    if ($id1=='amelogenin') {
      $score =1;
    }
    else {
      $id1='?';
    }

    if ($id2=='AMELX') {
      $score +=2;
    }
    else {
      $id2='?';
    }

    if ($id3=='p22.2-p22.3') {
      $score +=4;
    }
    else {
      $id3='?';
    }

    if ($id4=='AMELY') {
      $score +=8;
    }
    else {
      $id4='?';
    }

    if ($id5=='p11.2') {
      $score +=16;
    }
    else {
      $id5='?';
    }
  }
  else if ($page==1) {

    if ($id6=='Nucleotide') {
      $score +=1;
    }
    else {
      $id6='?';
    }

    if ($id7=='NG_012040' || $id7=='NG_012040.1' || $id7=='237820647') {
      $score +=2;
    }
    else {
      $id7='NG_?';
    }

    if ($id8=='NG_008011' || $id8=='NG_008011.1' || $id8=='190341055') {
      $score +=4;
    }
    else {
      $id8='NG_?';
    }
  }

  else if ($page==2) {

    if ($id9=='10051') {
      $score +=1;
    }
    else {
      $id9='?';
    }

    if ($id10=='4095') {
      $score +=2;
    }
    else {
      $id10='?';
    }

    if ($id11=='10481') {
      $score +=4;
    }
    else {
      $id11='?';
    }
    if ($id12=='4426') {
      $score +=8;
    }
    else {
      $id12='?';
    }
  }
  else if ($page==3) {

    if ($id13=='205') {
      $score =1;
    }
    else {
      $id13='?';
    }
    if ($id14=='205') {
      $score +=2;
    }
    else {
      $id14='?';
    }
  }
  else if ($page==4) {

    if ($id15=='D') {
      $score +=1;
    }
    else {
      $id15='?';
    }

    if ($id16=='106') {
      $score +=2;
    }
    else {
      $id16='?';
    }

    if ($id17=='112') {
      $score +=4;
    }
    else {
      $id17='?';
    }
  }
  else if ($page==5) {
    if ($sex=='M') {
      $score =64;
    }
    else {
      $sex='M/F';
    }
  }

  
  if ($score==31 && $page==0)
    $page++;
  else if ($score==7 && $page==1)
    $page++;
  else if ($score==15 && $page==2)
    $page++;
  else if ($score==3 && $page==3)
    $page++;
  else if ($score==7 && $page==4)
    $page++;
  else if ($score==64 && $page==5)
    $page++;

}
else {
  $page=0;
  $id1='?'; $id2=''; $id3='p...';
  $id4=''; $id5='p...'; $id6=''; 
  $sex='M/F'; 
}

?>
</center>
<p style="font-size: 14px; font-family: 'Walter Turncoat'">Unfortunately, the suspect found in the previous chapter has a good alibi. But, you didn't analyze the tooth found in the crime scene and it is human. You have to determine if it belongs to a man or a woman...</p>
<br>

<form action="determine.php" method="post">
<div id="bubble">
<?php
if ($page==0) {
?>

<p>
<input type="hidden" name="page" value="0"></input>
In a tooth, the major protein constituent in enamel is <input type="text" size=12 name="item1" value="<?php echo $id1; ?>"></input> containing high concentrations of Pro, Gln, Leu, and His. Isoforms of the protein genes are located on sex chromosomes in <i>Homo sapiens</i>. The X gene named <input type="text" size=8 name="item2" value="<?php echo $id2; ?>"></input> is located in the <abbr title="Search in Nucleotide Databank for DNA chromosomal gene">chromosome region</abbr>
<input type="text" size=12 name="item3" value="<?php echo $id3; ?>"></input> and the Y gene entitled <input type="text" size=8 name="item4" value="<?php echo $id4; ?>"></input> is located in the region <input type="text" size=10 name="item5" value="<?php echo $id5; ?>"></input>...
</p>
<input style="float:right;border:1px solid;" type="submit" name="OK" value="Next"></input>
<?php
}
else if ($page==1) {
?>
<input type="hidden" name="page" value="1"></input>
<p>For my PCR (see Principle in Help), I got these <strong title="See the video in help">primers</strong> <ul><li>5'-GCCATAATGGCAAAGA-3'</li><li>5'-CACCACTGGGATGTGG-3'</li></ul>Before beginning my experiment, I want to test them in bioinformatics. For that, I search in the NCBI database <input type="text" size=10 name="item6" value="<?php echo $id6; ?>"></input> the sequences of the X and Y genes and filter the results with <strong>RefSeq</strong>. Thus, I download two entries of the X and Y genes corresponding to the locus <input type="text" size=12 name="item7" value="<?php echo $id7; ?>"></input> and <input type="text" size=12 name="item8" value="<?php echo $id8; ?>"></input>, respectively.</p>
<input style="float:right;border:1px solid;" type="submit" name="OK" value="Next"></input>
<?php
}
else if ($page==2) {
?>
<input type="hidden" name="page" value="2"></input>
<p>Please, give me the lengths of the X and Y amplimers (amplified products) using this primer (Forward and Reverse, respectively)<ul><li>5'-GCCATAATGGCAAAGA-3'</li><li>5'-CACCACTGGGATGTGG-3'</li></ul>Just to remind you, the simplest way is to locally align these two short sequences with the gene sequence. Thus, the Forward has a perfect match with X gene at location <input type="text" size=10 name="item9" value="<?php echo $id9; ?>"></input>and the Reverse at <input type="text" size=10 name="item10" value="<?php echo $id10; ?>"></input>.<br>
The Forward has a perfect match with Y gene at location <input type="text" size=10 name="item11" value="<?php echo $id11; ?>"></input>and the Reverse at <input type="text" size=10 name="item12" value="<?php echo $id12; ?>"></input>.<br></p>
<input style="float:right;border:1px solid;" type="submit" name="OK" value="Next"></input>
<?php
}
else if ($page==3) {
?>
<input type="hidden" name="page" value="3"></input>
To compute the lengths of the amplimers for the X and Y genes, you need the total length of your gene sequence. Then, the formula is <code>length = (L-R+1) - F +1</code><br> Thus, they are respectively <input type="text" size=10 name="item13" value="<?php echo $id13; ?>"></input>bp and <input type="text" size=10 name="item14" value="<?php echo $id14; ?>"></input>bp.  </p>
<input style="float:right;border:1px solid;" type="submit" name="OK" value="Next"></input>
<?php
}
else if ($page==4) {
?>
<input type="hidden" name="page" value="4"></input>
<p>The previous primer isn't good because the X and Y amplimers are of the exact same lengths. We need a primer producing different amplimers for the X and Y genes. Here is a list of various primers...
<ul>
<li>A
<ul style="font-size:10px"><li>5'-TATTTGGACTCTCTCTGAGGA-3'</li><li>5'-TTCTACTACAAGGGTGTTGCA-3'</li></ul>
<li>B
<ul style="font-size:10px"><li>5'-CTGGAGAGCCACAAGCTGAC-3'</li><li>5'-TTGCTGTGGACTGCCAAGAG-3'</li></ul>
<li>C
<ul style="font-size:10px"><li>5'-ATAAGTATCGACCTCGTCGGAAG-3'</li><li>5'-GCACTTCGCTGCAGAGTACCGAAG-3'</li></ul>
<li>D
<ul style="font-size:10px"><li>5'-CCCTGGGCTCTGTAAAGAATAGTG-3'</li><li>5'-ATCAGAGCTTAAACTGGGAAGCTG-3'</li></ul>
<li>E
<ul style="font-size:10px"><li>5'-ATGATAGAAACGGAAATATG-3'</li><li>5'-AGTAGAATGCAAAGGGCTC-3'</li></ul>
</ul>
The best primer is <input type="text" size=3 name="item15" value="<?php echo $id15; ?>"></input> producing for X <input type="text" size=4 name="item16" value="<?php echo $id16; ?>"></input>bp and for Y <input type="text" size=4 name="item17" value="<?php echo $id17; ?>"></input>bp.<br>
<b>Note</b>: There is an EMBOSS tool to do that very quickly...<br>
</p>
<input style="float:right;border:1px solid;" type="submit" name="OK" value="Next"></input>
<?php
}
else if ($page==5) {
?>
<input type="hidden" name="page" value="5"></input>
<p>I chose the primer you selected, did the PCR and I get this elecrophoresis gel. Is it a male or female tooth?<br>
<img src="gel.jpg"></img>
<br>Sex:<input type="text" size=6 name="sex" value="<?php echo $sex; ?>"></input><br>
</p>
<input style="float:right;border:1px solid;" type="submit" name="OK" value="OK"></input>
<?php
}
else if ($page==6) {
?>
<div style="background-color: #000">
<p style="font-size: 32px; color: white">Congratulations!! The code for the mini-game is 'enamel.php'<br>
<img width=300 src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Fogos_artificiais_-_Fuegos_artificiales_-_Fireworks_-_Santa_Minia_2014_-_Brion_-_Animacion_-_05.gif/319px-Fogos_artificiais_-_Fuegos_artificiales_-_Fireworks_-_Santa_Minia_2014_-_Brion_-_Animacion_-_05.gif"></img></p>
</div>
<?php
}
?>

</div>
<img src="biologist_closeview.png"></img>
</form>

</div>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
