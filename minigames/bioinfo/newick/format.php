<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>

<link href='http://fonts.googleapis.com/css?family=Walter+Turncoat' rel='stylesheet' type='text/css'>


<style>
.line {
  position: absolute;
  background&boxh;color: #000000;
}

.vertical { 
   width: 1px;
   height: 30px;
}

.horizontal {
   width: 50px;
   height: 1px;
}

#line1 {
   top: 100px;
   left: 50%;
}

#line2 {
   top: 100px;
   left: 25%;
}

#result {
  font-family:'Walter Turncoat',cursive;
  font-size:40px;
}

</style>

<script>
function runForm() {
  var arr = document.joker_form.elements['items[]'];
  var ans1='BOVINE,GIBBON,ORANGUTAN,GORILLA,CHIMPANZEE,HUMAN,';
  var ans2='BOVINE,GIBBON,ORANGUTAN,GORILLA,HUMAN,CHIMPANZEE,';

  var answer='';
  for (var i=0;i< arr.length;i++) {
    answer +=arr[i].value.toUpperCase().trim()+",";
  }
    console.log(answer );

  if (answer === ans1 || answer === ans2) {
    document.getElementById('result').innerHTML='<p>Congratulations!!<br>Click <a href="uncle.php">Here</a> to go to the next mini-game</p>';
  }
  else {
    document.getElementById('result').innerHTML='<p>Oh Nooo!!, one (or several) answers are wrong... </p>';
  }

}
</script>



<div id="page">
<div id="content">
<pre>

                                                                 &boxdr;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh; HUMAN
                                                                 &boxv;
                                                                 &boxv;   
                                                       &boxdr;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxvl;         
                                                       &boxv;         &boxv;
                                                       &boxv;         &boxv;
                                             &boxdr;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxvl;         &boxur;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh; CHIMPANZEE
                                             &boxv;         &boxv;
                                             &boxv;         &boxv;
                                   &boxdr;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxvl;         &boxur;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh; GORILLA
                                   &boxv;         &boxv;
                                   &boxv;         &boxv;
                         &boxdr;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxvl;         &boxur;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh; ORANGUTAN
                         &boxv;         &boxv;
                         &boxv;         &boxv;
 Root   &nbsp;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxvl;         &boxur;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh; GIBBON
                         &boxv;
                         &boxv;
                         &boxur;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh; BOVINE
</pre>

<center>

<p>
<form name="joker_form" method="post">'
<span style="color:#ff0000;font-size:26px">(</span>
<input type="text" name="items[]" size="3">
,
<span style="color:#00ff00;font-size:26px">(</span>
<input type="text" name="items[]" size="3">
,
<span style="color:#0000ff;font-size:26px">(</span>
<input type="text" name="items[]" size="3">
,
<span style="color:#ff00ff;font-size:26px">(</span>
<input type="text" name="items[]" size="3">
,
<span style="color:#ffff00;font-size:26px">(</span>
<input type="text" name="items[]" size="3">
,
<input type="text" name="items[]" size="3">
<span style="color:#ffff00;font-size:26px">)</span>
<span style="color:#ff00ff;font-size:26px">)</span>
<span style="color:#0000ff;font-size:26px">)</span>
<span style="color:#00ff00;font-size:26px">)</span>
<span style="color:#ff0000;font-size:26px">)</span>
</p>
<input type="button" style="float:right;" value="OK" onclick="runForm()"></input>
</form>
<br>

<div id="result"></div>
</center>

</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
