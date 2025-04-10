<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>

<link href='http://fonts.googleapis.com/css?family=Coda' rel='stylesheet' type='text/css'>


<style type="text/css">

.chat {
  float:left;
  width:650px;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  font-family: 'Coda', sans-serif;
  font-size:16px;
}
.chat p {
  padding: 0px;
  margin: 0px;
}

.the_button {
  text-decoration: none;
  padding: 0px 5px 2px;
  border: 1px solid #DDD;
  border-radius: 3px;
  background-clip: padding-box;
  background-color: #EEE;
  font-family: 'Coda', sans-serif;
  font-size: 16px;
  color: #666;
}

.right_button {
  float: right;
  text-decoration: none;
  padding: 0px 5px 2px;
  border: 1px solid #DDD;
  border-radius: 3px;
  background-clip: padding-box;
  background-color: #EEE;
  font-family: 'Coda', sans-serif;
  font-size: 16px;
  color: #666;
}

.seq {
  font-family:monospace;
  font-size:20px;
  line-height:40px;
}

.row {
  margin:0px;
  padding:0px;
}

.tag {
  font-family:sans-serif;
  font-size:16px;
  font-weight:bold;
  background-color:#000;
  color:#fff;
  width:30px;
  height:30px;
  border-radius:50%;
  padding:4px;
  text-align:center;
  margin:auto;
}

.shifti {
  width:40px;
  line-height:20px;
  border: 0px solid;
  background-color: transparent;
}

#read0,#read1,#read2,#read3,#read4 {
 font-size:28px;
 text-decoration: none;
}
</style>

<script type="text/javascript" src="../js/story.js"></script>
<script type="text/javascript" src="storyboard.js"></script>

<script type="text/javascript">
function doIt() {

  // Init sessionStorage
  sessionStorage.setItem("assembly2_max_comments",3);
  sessionStorage.setItem("assembly2_tool" ,"Which EMBOSS tool?");
  sessionStorage.setItem("assembly2_tool2","Which EMBOSS tool?");

  initStory('000');
  updateDisplay('000');

}
</script>



<div id="page">
<div id="content">

<div id="dialog">
  <div class="chat" id="chat"></div>
  <div id="people"></div>
</div>
<div id="scene" style="padding-top: 20px; clear:both;"></div>



</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
