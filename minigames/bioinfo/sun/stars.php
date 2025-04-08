<?php
  require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
  include('../../phpCrazy/header.inc.php');
?>

<style>
a {
  text-decoration:none;
}

img {
  border:2px solid white;
  padding: 5px;
}

</style>
<script>
function doIt() {}


function check(id) {
  var checkbox = document.getElementById(id);
  if (!checkbox.checked) {
    checkbox.style.border="2px solid black";
    checkbox.checked=true;
    document.forms['form1']['org'].value=id;
    for (var i=0;i<6;i++) {
      var name='img'+i;
      if (name!= id) {
        document.getElementById(name).style.border="2px solid white";
        document.getElementById(name).style.border=false;
        document.getElementById(name).checked=false;
      }
    }
  }
  else {
    checkbox.style.border="2px solid white";
    checkbox.checked=false;
    document.forms['form1']['org'].value='';
  }


}
</script>
<div id="page">
<div id="content">

<div id="myform" style="width:700px;margin:auto;font-size : 20px; font-family :  arial,sans serif;">
<?php

  $prot=strtoupper($_POST['prot']);

  if (isset($_POST['Submit']) )  {
    if ($_POST['org']=='img5' && $prot=='AQUAPORIN')
      echo '<span style="font-size : 30px;background:yellow;">&#9786;&#9786;&#9786;<a title="Click on \'congratulations\'" style="text-decoration:none" href="california.php"> Congratulations!!!</a></span></p>';
    else
      echo '<span style="font-size : 30px;">&#9785;&#9785;&#9785; W r o n g &nbsp; a n s w e r</span></p>' ;
  }
?>

<pre style="font-size : 14px;">
>unknown
MAKDSEAGGFAAKDYHDPTPPAPLIDVEEFHTQWSFYRAIIAEFEITTLLFLYVAT
VLTVIGYSSQSDVDNGGNHICGGVGILGIAWAFGSGMIFVLVYCTAGWISGGHIER
NPAVTISFGLFLARKVSLVRAVLYMVFAQCVGAILCGCALVKSYFQKGLYHIRYGG
GANNSLAEGCGSTGTGSALAAEIIGTFUVLVYTVFSATCDPKRSAREDSHRIPVLA
PLHTMLPIGFAVFMVHLATIPITGAGINPARSFGAAVVFNHSKPWNDHWIFWVGPF
IGALIAAFYHQFILRAGAVKALGSFRSTHSV
</pre>

<form name="form1" action="stars.php" method="post">
<input type="hidden" name="org" value="">
<label> Protein Name </label><input type="text" name="prot" value=""> and <span style="font-size:40px;text-align:bottom;">&#x21b4;</span> ...
<input type="submit" name="Submit" value="Submit"><br><br>
<div id="patchwork" style="position:absolute">
<a href="javascript:void(0)" onclick="check('img0')"><img id="img0" style="display:block;position:relative;left:0px;top:0px;" height="140px" src="http://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Csinensis.jpg/320px-Csinensis.jpg"></a>
<a href="javascript:void(0)" onclick="check('img4')"><img id="img4" style="display:block;position:relative;left:215px;top:-155px" height="140px" src="http://upload.wikimedia.org/wikipedia/commons/3/3d/Chickpea.jpg"></a>
<a href="javascript:void(0)" onclick="check('img2')"><img id="img2" style="display:block;position:relative;left:430px;top:-310px" height="420px" src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ARS_cucumber.jpg/167px-ARS_cucumber.jpg"></a>
<br>
<a href="javascript:void(0)" onclick="check('img1')"><img id="img1" style="display:block;position:relative;left:0px;top:-610px" width="188px" src="http://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Arabidopsis_thaliana.jpg/173px-Arabidopsis_thaliana.jpg"></a>
<a href="javascript:void(0)" onclick="check('img5')"><img id="img5" style="display:block;position:relative;left:215px;top:-736px" width="188px" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Cucurbita_ficifolia_Courge_de_Siam.jpg"></a>
<a href="javascript:void(0)" onclick="check('img3')"><img id="img3" style="display:block;position:relative;left:215px;top:-1026px" width="188px" src="http://upload.wikimedia.org/wikipedia/commons/f/f2/Vitis-vinifera-2.JPG"></a>

</div>


</form>
</div>


</div>
</div>

<?php
  include('../../phpCrazy/footer.inc.php');
?>
