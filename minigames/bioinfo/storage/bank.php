<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>
<script type="text/javascript">

//Drag and Drop script - http://www.btinternet.com/~kurt.grigg/javascript

if  (document.getElementById){

(function(){

//Stop Opera selecting anything whilst dragging.
if (window.opera){
document.write("<input type='hidden' id='Q' value=' '>");
}

var n = 200;
var dragok = false;
var y,x,d,dy,dx;

function move(e){
if (!e) e = window.event;
 if (dragok){
  d.style.left = dx + e.clientX - x + "px";
  d.style.top  = dy + e.clientY - y + "px";
  return false;
 }
}

function down(e){
if (!e) e = window.event;
var temp = (typeof e.target != "undefined")?e.target:e.srcElement;
if (temp.tagName != "HTML"|"BODY" && temp.className != "dragclass"){
 temp = (typeof temp.parentNode != "undefined")?temp.parentNode:temp.parentElement;
 }
if (temp.className == "dragclass"){
 if (window.opera){
  document.getElementById("Q").focus();
 }
 dragok = true;
 temp.style.zIndex = n++;
 d = temp;
 dx = parseInt(temp.style.left+0);
 dy = parseInt(temp.style.top+0);
 x = e.clientX;
 y = e.clientY;
 document.onmousemove = move;
 return false;
 }
}

function up(){
dragok = false;
document.onmousemove = null;
}

document.onmousedown = down;
document.onmouseup = up;

})();
}//End.

</script>

<style>
p {
  width: 300px;
  font-family: 'Arial';
  font-size: 20px;
  border: 1px solid rgb(255,128,64);
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
}

.dragclass {
  height:1px;
  width:1px;
  background-color:#ff0000;
  color:#ffffff;
}
</style>

<div id="page">
<div id="content">

<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="kegg.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="ensembl.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="pubmed.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="uniprot.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="pubchem.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="prosite.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="omim.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="flybase.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="pdb.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="enzyme.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="pir.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="ena.png"></img></div>



<p>
Is a comprehensive, authoritative compendium of human genes and genetic phenotypes that is freely available and updated daily.
</p>

<p>
Contains validated chemical depiction information provided to describe substances.          
</p>


<p>
Produces genome databases for vertebrates and other eukaryotic species.
</p>

<p>
A database resource for understanding high-level functions and utilities of the biological system.
</p>

<p>
Database of protein domains, families and functional sites.
</p>

<p>
Comprises more than 24 million citations for biomedical literature from MEDLINE, life science journals, and online books.
</p>

<p>
Database of Drosophila Genes & Genomes.
</p>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
