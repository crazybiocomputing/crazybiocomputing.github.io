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

#fasta {
  padding: 15px;
}

#replace {
  padding: 10px 5px;
}

.hidden {
  display:none;
}

</style>

<div id="page">
<div id="content">

<img usemap="#galaxy_org" src="assets/galaxy_workflow.png" />

<!-- popup -->
<div class="popup hidden">
  <div class="titlebar">
    <a id="close_popup" href="#">&nbsp;</a>
    Data
  </div>
  <div class="body">
  <div id="replace" class="hidden">
     <img src="assets/replace_params.png" />
  </div>

  <div id="fasta" class="hidden">
    <pre>
> sequence
ATGAAACGGTCCTTCCTTTCCCTGGCGGTAGCCGCTGTCGTTCTGTCCGGCTGCTCGCTGATCCCCGACT
ACCAGCGCCCCGAGGCGCCGGTAGCCGCGGCCTACCCGCAAGGGCAGGCCTACGGGCAGAACACCGGCGC
GGCGGCCGTTCCGGCCGCCGACATCGGCTGGCGCGAGTTCTTCCGaGACCCGCAGTTGCAGCAACTGATC
GGCGTGGCGCTGGAAAACAACCGCGAcCTGCGGGTCGCCGCGCTGAACGTCGAGGCCTTCCGGGCGCAGT
ACCGCATCCAGCGGGCCGACCTGTTCCCGCGGATCGGCGTGGACGGTAGCGGCACCCGCCAGCGTTTGCC
GGGtGACCTGTCGACCACCGGCAGTCCGGCGATTTCCAGCCAGTACGGGGTGACCCTGGGCACTACCGCC
TGGGAACTCGATCTCTTCGGgCGCCTGCGCAGCCTGCGCGACCAGGCCCTGGAGCAGTACCTGGCGACCG
AACAGGCGCAGCGCAGCGCGCAGACCAtCCTGGTGGCCAGCGTGGCGACCGCCTACCTGACGCTGAAGGC
CGACCAGGCGaAGTTGCAGCTGAcCAAGGACACCCTGGGCACCTACCAaAAGAGTTTCGACCTGACCCAG
CGCAGCTACGACGTCgGCGTCGCCTCCGCGCTCGACCTGCGCCAGGCGCAGACCGCCGTGGAAGGCGCCC
GCGCGACCCTGGCGCAGTACACCCGCCTGGTAGCCCAGGcCCAGAATGCGCTGGTCCTGCTaCTGGGCTC
CGGGATCCCGGCGAACCTGCCGCAAGGCCTGGGCCTGGACCAGACCCTGCTGACCGAAGTGCCGGCGGGT
CTGCCGTCGGACCTGCTGCAACGGCGCCCGGACATCCTCGAGGCCGAGCACCAGCTCATGGCtGCCAACG
CCAGCATCGcCGCCGCGCGCGaGGCGTTCTTCCCGAGCATCAGCCTGACCGCCAACGCCGGCACCATGAG
CCGCCAACTGTCCGGCCTGTTCGACGCCGGTTCGGGTTCCTGGTTGTTCCAGCCGTCGATCAACCaGCCG
ATCTTCACCGCCGGCAGCCTGCGTGcCAGCCTGGACTACGCGAAGATCCAGgAGGACATCAACGTCGCGC
AGTACGAGAAGGCGATCCAGACGGCGTTCCAGGAAGTCGCCGACGGCCTGGCCGCGCGCGGTACCTTCAC
CGAGCAGTTGCAGGCGCAGCGCGATCTGGTCAAGGCCAGCGACGAGTACTACCAGCTCGCCGACAAGCGC
TATCGCACGGGGGTGGACAACTACCTGACCCTGCTCGACGCGCAACGCTCGCTGTTCACCGCGCAGCAGC
AACTGATCACCGACCGCCTCAATCAGCTGACCAGCGAGGTCAACCTGTACAAGGCCCTCGGCGGCGGCTG
GAACCAGCAGACCGTGACCCAGaAGCAGACCGCGAAGAAGGAAGATCCCCAGGCTTGATCGCCTTCCGCG
CCATGCAAGAACgCCGACCCTAGGGTCGGCGTTTTTTTATCCTCGCGGAAGTCGGCGGGTCCGCGTCACG
GACCCGCTCGGCCTTAGCGGTTGCGGGTCAGCAGTGCGGGGCGCTCGCCCTTGCGCCGCGGTTCCAGCTC
GTCGAGCTGC
    </pre>
  </div>
  <div>
</div>

<map name="galaxy_org">
  <area
    shape="rect"
    coords="72,272,272,330"
    href="#"
    class="popable" data-name="fasta"
    alt="FASTA sequence" />
  <area
    shape="rect"
    coords="330,362,528,450"
    href="#"
    class="popable" data-name="replace"
    alt="FASTA sequence" />
</map>
</div>
</div>
<script>

const popable = document.querySelectorAll('.popable');
const popup = document.querySelector('.popup');
let lastClicked = null;

document.querySelector('#close_popup').addEventListener('click', (ev) => popup.classList.toggle('hidden'));

popable.forEach(elem => elem.addEventListener('click', togglePopup));

function togglePopup(e) {
  // Show popup
  popup.classList.toggle('hidden');
  popup.style.left= (e.clientX + 10) + 'px';
  popup.style.top = (e.clientY - 200) + 'px';

  // Show appropriate content
  const el = document.querySelector(`.popup #${e.target.dataset.name}`);
  
  // If  clicking something else, first restore '.hidden' to popup so that toggle will remove it.
  if (lastClicked != null && lastClicked !== e.target) {
    lastClicked.classList.toggle('hidden');
  }
  el.classList.toggle('hidden');
  lastClicked = el;  // remember the target
}
</script>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
