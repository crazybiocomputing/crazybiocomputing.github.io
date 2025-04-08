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

<style>
#seq {
  text-decoration: none;
  font-family: 'Architects Daughter';
  font-size: 1.3em;
}

.popup {
  background: #FFFFFF;
  border: 2px solid;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: inline-block;
  text-align: left;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 9999;
}

.popup .titlebar {
  background-color: #666666;
  margin: 0px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #FFFFFF;
  font-family: 'Walter Turncoat', cursive;
}

.titlebar #close_popup {
  display: inline-block;
  background: url("assets/closeButton.png") no-repeat 100% 0;
  width: 20px;
  height: 20px;
  text-decoration: none;
}

.body {
  padding: 15px;
}

.hidden {
  display:none;
}

</style>

<div id="page">
<div id="content">
<a id="seq" href="#">
<pre>
> BAA28694.1 OprM [Pseudomonas aeruginosa]
MKRSFLSLAVAAVVLSGCSLIPDYQRPEAPVAAAYPQGQAYGQNTGAAAVPAADIGWREFFRDPQLQQLI
GVALENNRDLRVAALNVEAFRAQYRIQRADLFPRIGVDGSGTRQRLPGDLSTTGSPAISSQYGVTLGTTA
WELDLFGRLRSLRDQALEQYLATEQAQRSAQTTLVASVATAYLTLKADQAQLQLTKDTLGTYQKSFDLTQ
RSYDVGVASALDLRQAQTAVEGARATLAQYTRLVAQDQNALVLLLGSGIPANLPQGLGLDQTLLTEVPAG
LPSDLLQRRPDILEAEHQLMAANASIGAARAAFFPSISLTANAGTMSRQLSGLFDAGSGSWLFQPSINLP
IFTAGSLRASLDYAKIQKDINVAQYEKAIQTAFQEVADGLAARGTFTEQLQAQRDLVKASDEYYQLADKR
YRTGVDNYLTLLDAQRSLFTAQQQLITDRLNQLTSEVNLYKALGGGWNQQTVTQQQTAKKEDPQA
</pre>
</a>

<!-- popup -->
<div class="popup hidden">
  <div class="titlebar">
    <a id="close_popup" href="#">&nbsp;</a>
    Data
  </div>
  <div class="body">
    <pre>
> Mutant OprM [Pseudomonas aeruginosa]
MKRSFLSLAVAAVVLSGCSLIPDYQRNTGAAAVPAADIGWREFFRDPQLQQLIGVALENNRDLRVAALNV
EAFRAQYRIQRADLFPTHISDGSGTRQRLPGDLSTTGSPAISSQYGVTLGTTAWELDLFGRLRSLRDQAL
EQYLATEQAQRSAQTTLVASVATAYLTLKADQAQLQLTKDTLGTYQKSFDLTQRSYDVGVASALDLRQAQ
TAISGARATLAQYTRLVAQDQNALPERIVLLLGSGIPANLGLDQTLLTEVPAGLPSDLLQRRPLASMAEH
QLMAANASIGAARAAFFPSISLTANAGTMSRQLSGLFDAGSGSWLFQPSINLPIFTAGSLRASLDYAKIQ
KDINVAQYEKAIQTAFQEVADPHPGLAARGTFTEQLQAQRDLVKASDEYYDKRYRTGVDNYLTLLDAQRS
LFTAQQQLITDRQQTVTQQQTAKKEDPQA
    </pre>
  </div>
</div>


</div>
</div>
<script>
const popup = document.querySelector('.popup');
document.getElementById('seq').addEventListener('click', (ev) => {
  popup.classList.toggle('hidden');
  popup.style.left= (ev.clientX + 10) + 'px';
  popup.style.top = (ev.clientY + 10) + 'px';
});

document.querySelector('#close_popup').addEventListener('click', (ev) => {
  popup.classList.toggle('hidden');
});

</script>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
