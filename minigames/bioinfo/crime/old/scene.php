<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>
<link href='http://fonts.googleapis.com/css?family=Walter+Turncoat' rel='stylesheet' type='text/css'>

<style>
label {
  font-family: monospace;
  font-size:18px;
  color:#646464;";
}

input {
  font-size: 18px;
}

</style>

<script type="text/javascript">
var sample=0;

function room(v) {
  switch (v) {
  case 1: alert('Yes!! an interesting sample tagged as \'A\'');sample|=2;break;
  case 2: alert('Yes!! A tooth... maybe during the fight');sample|=32;break;
  case 3: alert('Yes!! an interesting sample \'C\'');sample|=8;break;
  case 4: alert('The corpse was there...');break;
  case 5: alert('Nothing.');break;
  case 6: alert('Nooo!! Only dust');break;
  case 7: alert('Nothing interesting');break;
  case 8: alert('Yes!! an interesting sample  tagged as \'B\'');sample|=4;break;
  case 9: alert('Yes!! an interesting sample  tagged as \'D\'');sample|=16;break;
  }
  if (sample==62) {
    alert('I have enough samples... It\'s time to go to the lab to process these samples. Go to \'myforensics_lab.php\'');
  }
  var sampleHTML='';
  if ((sample&2)==2)
    sampleHTML+='<img src="sampleA.png"><br>';
  if ((sample&4)==4)
    sampleHTML+='<img src="sampleB.png"><br>';
  if ((sample&8)==8)
    sampleHTML+='<img src="sampleC.png"><br>';
  if ((sample&16)==16)
    sampleHTML+='<img src="sampleD.png"><br>';
  if ((sample&32)==32)
    sampleHTML+='<img src="sampleE.png">';
  document.getElementById('samples').innerHTML=sampleHTML;

}
</script>

<div id="page">
<div id="content">
 <p style="font-family: 'Walter Turncoat', cursive;font-size:30px">C&nbsp;h&nbsp;a&nbsp;p&nbsp;t&nbsp;e&nbsp;r&nbsp;&nbsp;&nbsp;1: Crime Scene</p>
<div id="myform" style="width:800px;margin:auto;font-size : 20px; font-family :  arial,sans serif;">
<p>You get an internship in the forensics service of the CTPD (CrazyTown Police Departement). It's time to work on your first case: <b>Lord Black was murdered during the night in his office</b>...</p>
<div id="samples" style="float:left"></div>
<div style="margin:auto">
<img src="background.png" width="700px" usemap="#room"></img>
</div>

<MAP NAME="room">
<AREA shape="rect" coords="206,202,246,216" HREF="javascript:room(1)" ALT="collection" />
<AREA shape="rect" coords="517,238,532,251" HREF="javascript:room(2)" ALT="collection" />
<AREA shape="rect" coords="294,408,306,416" HREF="javascript:room(3)" ALT="collection" />
<AREA shape="poly" coords="476,269,491,270,489,319,450,316,424,356,440,394,396,418,385,402,414,388,400,345,354,413,340,403,406,300,357,306,348,292,430,288" HREF="javascript:room(4)" ALT="collection" />
<AREA shape="rect" coords="136,387,168,416" HREF="javascript:room(5)" ALT="collection" />
<AREA shape="rect" coords="489,375,502,392" HREF="javascript:room(6)" ALT="collection" />
<AREA shape="rect" coords="304,224,356,248" HREF="javascript:room(7)" ALT="collection" />
<AREA shape="rect" coords="162,263,174,318" HREF="javascript:room(8)" ALT="collection" />
<AREA shape="rect" coords="272,160,294,168" HREF="javascript:room(9)" ALT="collection" />
</MAP>
<br>


</div>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
