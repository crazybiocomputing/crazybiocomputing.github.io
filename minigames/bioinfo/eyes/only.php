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

#bubble .tag {
  background-color: #000000;
  float:left;
  color: #ffffff;
  margin-right:10px;
  padding:3px;
  font-family:'Coda',sans-serif;
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

<script type="text/javascript" src="dialog.js"></script>


<div id="page">
<div id="content">

<div id="chat">
<p> In this scene, scientists are not always telling the truth. Try to sort out the true from the false and give me the list of correct statements...</p>
<p>Just one advice... you can submit partial answers to see if they are correct or not.</p>
<p><i>Syntax: #100 #200 #300</i></p>
<input id="truth" type="text" size="40"></input><input type="button" value="Submit" onclick="javascript:runForm()"></input>
</div>
<div id="result" style="float:left; font-family:'Coda',sans-serif; font-size: 20px"></div>
<img src="biologist_closeview.png" width="150px"></img>


<br>
<div id="bubble"></div>
<img src="background.png" usemap="#people"></img>

<MAP NAME="people">
<AREA shape="poly" coords="128,73,176,200,156,207,121,125,162,251,111,251,109,367,65,364,67,253,18,250,53,124,19,207,0,202,49,73" href="javascript:void(0)" onclick="javascript:dialog(event,1)" ALT="collection" />
<AREA shape="poly" coords="253,143,276,157,297,269,284,267,264,192,254,225,279,290,263,291,263,418,249,417,235,292,223,414,206,416,205,292,188,291,217,228,205,191,188,267,176,266,194,159,220,143" href="javascript:void(0)" onclick="javascript:dialog(event,2)" ALT="collection" />
<AREA shape="poly" coords="203,138,215,86,234,76,258,101,267,138" href="javascript:void(0)" onclick="javascript:dialog(event,3)" ALT="collection" />
<AREA shape="poly" coords="554,143,602,270,582,277,547,195,588,321,537,321,535,437,491,434,493,323,444,320,479,194,445,277,426,272,475,143" href="javascript:void(0)" onclick="javascript:dialog(event,4)" ALT="collection" />
<AREA shape="poly" coords="368,120,415,129,434,244,420,247,400,195,427,406,405,406,369,284,340,400,310,407,340,198,318,255,301,255,322,128" href="javascript:void(0)" onclick="javascript:dialog(event,5)" ALT="collection" />
<AREA shape="poly" coords="697,64,700,201,676,201,674,362,648,360,643,209,634,360,610,355,607,201,582,200,582,65" href="javascript:void(0)" onclick="javascript:dialog(event,6)" ALT="collection" />

</MAP>
</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
