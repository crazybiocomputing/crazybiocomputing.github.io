<?php
session_start();
$_SESSION['game_id']="BIOINFO";
$_SESSION['path']='/bioinfo/';


	if (!isset($_COOKIE['crazyHistory'.$_SESSION['game_id']]))
	{
		// Cookie removed or expired
		$history="0000000000000000000000000000000000000000";
		setcookie("crazyHistory".$_SESSION['game_id'],$history, time()+24*60*60*1000,'/');
	}
	else
	{
		$history=$_COOKIE['crazyHistory'.$_SESSION['game_id']];
		if(strlen($history) < 40)
		{
			//echo 'conversion...'.strlen($history);
			// Update crazyHistory cookie with new version - 22 nov 2010
			$tmp="0000000000000000000000000000000000000000";
			for ($i=0;$i < 10;$i++)
			{
			if (substr($history,$i,1)=='a')
				$tmp=substr_replace($tmp,'00',$i*2,2);
			else if (substr($history,$i,1)=='b')
				$tmp=substr_replace($tmp,'01',$i*2,2);
			else if (substr($history,$i,1)=='c')
				$tmp=substr_replace($tmp,'01',$i*2,2);
			else if (substr($history,$i,1)=='d')
				$tmp=substr_replace($tmp,'03',$i*2,2);
			else if (substr($history,$i,1)=='e')
				$tmp=substr_replace($tmp,'03',$i*2,2);
			else if (substr($history,$i,1)=='f')
				$tmp=substr_replace($tmp,'07',$i*2,2);
			else if (substr($history,$i,1)=='g')
				$tmp=substr_replace($tmp,'07',$i*2,2);
			else if (substr($history,$i,1)=='h')
				$tmp=substr_replace($tmp,'0F',$i*2,2);
			else if (substr($history,$i,1)=='i')
				$tmp=substr_replace($tmp,'0F',$i*2,2);
			else if (substr($history,$i,1)=='j')
				$tmp=substr_replace($tmp,'1F',$i*2,2);
			else if (substr($history,$i,1)=='k')
				$tmp=substr_replace($tmp,'1F',$i*2,2);
			else if (substr($history,$i,1)=='l')
				$tmp=substr_replace($tmp,'3F',$i*2,2);
			else if (substr($history,$i,1)=='m')
				$tmp=substr_replace($tmp,'3F',$i*2,2);
			else if (substr($history,$i,1)=='n')
				$tmp=substr_replace($tmp,'7F',$i*2,2);
			else if (substr($history,$i,1)=='o')
				$tmp=substr_replace($tmp,'7F',$i*2,2);
			else if (substr($history,$i,1)=='p')
				$tmp=substr_replace($tmp,'FF',$i*2,2);
			}
		
			$history=$tmp;
			setcookie("crazyHistory".$_SESSION['game_id'],$history, time()+24*60*60*1000,'/crazybiocomputing'); 
		}

	}

?>
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN">
<html>
<head>
	<META http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
	<META NAME="Publisher" CONTENT="Jean-Christophe Taveau">
	<META NAME="description" CONTENT="Mini-games by JC Taveau for ImageJ, the Gimp in the field of image processing and bioinformatics">
	<META NAME="Indentifier-URL" CONTENT="www.u-bordeaux1.fr/crazybiocomputing"> 
	<META NAME="KeyWords" CONTENT="image,ImageJ,gimp,image processing, bioinformatics, image analysis">
	<META NAME="Robots" CONTENT="Index, NoFollow"> 
	
<title>CrazyBioComputing: Bioinformatics</title>
<link href="../style_crazy.css" rel="stylesheet" type="text/css"> 
<script Language="Javascript" src="./scripts/page.js">
</script>
<link href='http://fonts.googleapis.com/css?family=Rock+Salt' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Lato:300' rel='stylesheet' type='text/css'>


<style type="text/css">
body {
  width: 900px;
  margin:auto;
}


p {
  font-size: 16px;
  font-family: 'Lato', sans-serif;
}

#text {
padding: 0px;
margin:0px;
}


#text h2 {
  margin:30px 0px 10px 0px;
  padding:0px 0px 0px 10px;
  border-top: 1px solid #9e0a0d;
}
#text h2 span{
  margin: 0px;
  padding:0px;
  border:none;
}


	<!--
input.btn {
   color:#111;
   font-family:'trebuchet ms',helvetica,sans-serif;
   font-size:100%;
   font-weight:bold;
   background-color:#fff;
   border:1px solid;
   border-top-color:#696;
   border-left-color:#696;
   border-right-color:#363;
   border-bottom-color:#363;}
    //-->
</style>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46562131-1', 'free.fr');
  ga('send', 'pageview');

</script>
   
</head>
<body>

<h1 style="font-family: 'Rock Salt', cursive;"> CrazyBioComputing - Bioinformatics</h1>

<div id="nav">
<ul>
<li style="font-family: 'Rock Salt', cursive;"><a href="../index.html">Home</a></li>
<li style="font-family: 'Rock Salt', cursive;">Bioinformatics</li>
<li style="font-family: 'Rock Salt', cursive;"><a href="../gis/index.php">GIS</a></li>
<li style="font-family: 'Rock Salt', cursive;"><a href="../ip/index.php">Image Processing</a></li>
<li style="font-family: 'Rock Salt', cursive;"><a href="../tutorial/index.php">Tutorials</a></li>
<li style="font-family: 'Rock Salt', cursive;"><a href="http://crazybiocomputing.blogspot.com">Blog</a></li>
<li style="font-family: 'Rock Salt', cursive;"><a href="../crazylinks.html">Links</a></li>
<li style="font-family: 'Rock Salt', cursive;"><a href="../crazyplugs.html">ImageJ</a></li>
</ul>
</div>

<div id="text">

<p>These are multimedia mini-exercises in the field of Bioinformatics </p>
<p>Each level is composed of a maximum of 
five enigmas (puzzle games) and the only goal is to reach the end of each mini-series. The various levels can be
explored separately. However, the difficulty is increasing with the levels and a good knowledge of 
Bioinformatics techniques is required for the latest. 
<p> All the exercices can be solved with tools available through the web
<p> Last thing! You must have enabled cookies in your web browser to play with crazybiocomputing!
<p> Enjoy yourself!!


<h2><span>Check the configuration of your web browser ... [ N E W   Nov 2011]</span></h2>
<p><a href="checkWebBrowser.html">Click to check ...</a></p>

<h2><span>Level #0: Get started ... [ N E W   Nov 2011]</span></h2>
<p><a href="../tutorial/index.php">Click to go to the <b>tutorial section</b> and do the level #0 ...</a><br></p>


<?php

//	if (isset($_COOKIE['crazyHistory']))
//		$history=$_COOKIE['crazyHistory'];

	// Load BDD
	$f = './levels.bdd';
	if(file_exists($f)) {
		$lines = file($f);  // place le fichier dans un tableau
	}
	else {
		echo '<script Language="Javascript">alert(\'Cannot find the mini-game. Maybe a server problem.\n Please retry later.\');</script>';
		exit();
	}

	$titles=array(
	"Get started ... T u t o r i a l [  updated Nov 2013]",
	"Entry format -  ... [ N E W   Dec 2013]",
	"Databases -  ... [ N E W   Nov 2014]",
	"Data mining -  ... [ N E W   Dec 2013]",
	"Bread AND Cheese OR Dessert BUT NOT Ice cream  ... [ N E W   Dec 2013]",
	"Data mining: Experts only [ N E W   Dec 2013]",
	"3D Structure [ N E W   Nov 2014]",
	"Bioinformatics Tools [ N E W   Dec 2013]",
	"Using Tools [ N E W   Jan 2013]",
	"Dot plots [ N E W   Jan 2014]",
	"Alignements [ N E W   Feb 2014]",
	"Blaaaast [ UPDATED   Mar 2014]",
	"Proteomics [ UPDATED   Sep 2014]",
	"Phylogeny ... [ N E W   Oct 2014]",
	"Could you help me? ... [ UPDATED Mar 2014]",
	"Happy sunday for 'Dee And Hey' ... [ N E W   Feb 2014]",
	"Project <i>'Notes'</i> ... [ N E W   Sep 2014]",
	"Multiple Alignment ... [ N E W   Feb 2014]",
	"Project ... [ N E W   Feb 2014]",
	"Project <i>'In your eyes only'</i> ... [ N E W   Oct 2014]",
	);	

	$solutions= array(0x00,0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80);
	$complete_level=array(0x00,0x01,0x03,0x07,0x0f,0x1f,0x2f);

//	echo '<h2><span>Level #'.$level." : ".$title.' ... [ U p d a t e d   Oct 2010]</span></h2>';

	for ($level=1;$level<count($titles);$level++)
	{
		$i=0;
		$stop=0;
		while ( ($stop == 0) && ($i < count($lines)) )
		{
			$cells = explode("\t", $lines[$i]);
//echo '<p>'.$level.'=='.trim($cells[6]).' '.(intval(trim($cells[6]) ) == $level);
			if (intval(trim($cells[1]) ) == $level)
			{
				$stop=1;
				$index=$i;
			}
			$i++;
		}
		if ($i >= count($lines) ) {
			echo '<script Language="Javascript">alert(\'Cannot find informations '. $level.'. Maybe a server problem.\n Please retry later.\');</script>';
			exit();
		}
			
		echo '<html><body>';

		$level_score=hexdec(substr($history,$level*2,2));
		echo '<h2><span>Level #'.$level.': '.$titles[$level].'</span></h2>'."\n";

			echo '<table>'."\n"; // <tr><td>#1</td><td>#2</td><td>#3</td><td>#4</td><td>#5</td></tr>
			echo '<tr>';
			$game_count=8; // max ??
			$j=1;
			while ($j <= $game_count)
			{
				$stop=0;
				while ($stop==0 && $index < count($lines))
				{
					$cells = explode("\t", $lines[$index]);
					if (trim($cells[7])==$j)
					{
						$stop=1;
						$url='http://'.$_SERVER["SERVER_NAME"].'/bioinfo/'.$cells[2];
						$directory=dirname($cells[2]);
						$game_count=intval($cells[8]);
						$lock= ($cells[5]=='x') ? true : false;
//						echo $level,$cells[6];
					}
					$index++;
				}

				// TODO: check for unlocking mini-game in function of history
				// TODO

//				echo '<td>Mini-game #'.$j.' '.$complete_level[$game_count].' '.$level_score;
				if ($lock==true)
					echo'<td><img src="../phpCrazy/thumbnail_lock.png" title="Not explored"/></td>'."\n";
				else {
				if ( ($level_score & $solutions[$j]) == $solutions[$j])
					echo'<td><a href="'.$url.'" title="Explored and solved"><img src="../../'.$_SESSION['path'].$directory.'/thumbnail.png" /></a></td>'."\n";
				else
					echo'<td><a href="'.$url.'" title="Not explored"><img src="../phpCrazy/thumbnail_unknown.png" title="Not explored"/></a></td>'."\n";
				}
				$j++;
			}
			if ($complete_level[$game_count]==$level_score)
				echo'<td><a href="trophy/complete.php?level='.$level.'"><img src="../phpCrazy/thumbnail_bonus.png" title="You win!!!"/></a></td>'."\n";

			echo '</tr>';

		echo '</table>';

	} // loop

	echo '<p>'.$history.'['.strlen($history).']';

?>

</div>

</body>
</html>
