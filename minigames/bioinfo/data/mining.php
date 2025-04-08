<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>

<link href='http://fonts.googleapis.com/css?family=Rock+Salt' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Special+Elite' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Architects+Daughter' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Walter+Turncoat' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Coda' rel='stylesheet' type='text/css'>

<style>
.the_button {
  text-decoration: none;
  padding: 0px 5px 2px;
  border: 1px solid #DDD;
  border-radius: 3px;
  background-clip: padding-box;
  background-color: #EEE;
  font-family: Monaco,"DejaVu Sans Mono","Courier New",monospace;
  font-size: 13px;
  color: #666;
}

#chat {
  display:inline-block;
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

#woman {
  display: inline-block;
}


.people {
  vertical-align: bottom;
  transform: scaleX(-1);
}

.dragclass {
  height:1px;
  width:1px;
  background-color:#ff0000;
  color:#ffffff;
}
</style>

<script type="text/javascript" src="click_and_drag.js"></script>


<div id="page">
  <div id="content">
  
    <div id="woman">
      <img class="people" src="../img/biologist_closeview.png" width="140px"></img>
    </div>
    
    <div id="chat">
      <p> What is the common taxonomic tree of all these species? </p>
      <ol style="font-family: Courier,fixed; font-size: 10px">
        <li>Pseudoterranova decipiens </li>
        <li>Ascaris suum </li>
        <li>Biomphalaria glabrata  </li>
        <li>Daphnia magna </li>
        <li>Cichorium intybus </li>
        <li>Zea mays </li>
        <li>Tegillarca granosa </li>
        <li>Carcinus maenas </li>
        <li>Solanum tuberosum  </li>
        <li>Ceratodon purpureus</li>
      </ol>
      <p>Help me to build that tree...</p>
    </div>

        <pre style="font-size: 24px">
Eukaryota
├── Metazoa
│   ├──Mollusca
│   │  ├── ?
│   │  └── ?
│   ├── Arthropoda
│   │   ├── ?
│   │   └── ?
│   └── Rhabditida
│       ├── ?
│       └── ?
└── Streptophyta
    ├── Magnoliopsida
    │   ├── ?
    │   ├── ?
    │   └── ?
    └── ?
        </pre>
        <br>

<div class="dragclass" style="top:<?php echo rand(-400,0); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="assets/decipiens.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-400,0); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="assets/mays.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-400,0); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="assets/magna.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-400,0); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="assets/tuberosum.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-400,0); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="assets/granosa.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-400,0); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="assets/maneas.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-400,0); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="assets/purpureus.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-400,0); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="assets/suum.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-400,0); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="assets/glabrata.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-400,0); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="assets/intybus.png"></img></div>

</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
