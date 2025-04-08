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
pre {
  border-top: 1px solid rgb(255,128,64);
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
<center>
<img src="background.png"></img>
</center>
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="dotpath.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="dottup.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="dotmatcher.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="needle.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="water.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="wordfinder.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="wordmatch.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="polydot.png"></img></div>


<pre>
Match large sequences against one or more other sequences
</pre>
<pre>
Local alignment of two sequences
</pre>
<pre>
Draw a threshold dotplot of two sequences
</pre>
<pre>
Find regions of identity (exact matches) of two sequences
</pre>
<pre>
Draw dotplots for all-against-all comparison of a sequence set
</pre>
<pre>
Global alignment of two sequences
</pre>

</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
