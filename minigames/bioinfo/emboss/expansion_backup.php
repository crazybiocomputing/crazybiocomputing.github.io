<?php
	require('../../phpCrazy/cookie_redirect_crazybio.inc.php');
?>

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

<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="./assets/compseq.png"></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="./assets/infoseq.png"></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="./assets/water.png"></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="./assets/??.png"></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="./assets/??.png"></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="./assets/geecee.png"></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="./assets/revseq.png"></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="./assets/needle.png"></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="./assets/transeq.png"></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="./assets/sixpack.png"></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="./assets/primersearch.png"></div>
<div class="dragclass" style="top:<?php echo rand(100,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="./assets/water.png"></div>



<p id="compseq">
    Calculate the composition of unique words in sequences
</p>

<p id="infoseq">
    Display basic information about sequences
</p>

<p id="water">
    Smith-Waterman local alignment of sequences
</p>

<p id="sixpack">
    Display a DNA sequence with 6-frame translation and ORFs
</p>

<p id="transeq">
    Translate nucleic acid sequences
</p>

<p id="needle">
    Needleman-Wunsch global alignment of two sequences
</p>

<p id="primersearch">
    Search DNA sequences for matches with primer pairs
</p>

<p id="revseq">
    Reverse and complement a nucleotide sequence
</p>

<p id="geecee">
    Calculate fractional GC content of nucleic acid sequences
</p>

</div>
</div>



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

<?php
	include('../../phpCrazy/footer.inc.php');
?>
