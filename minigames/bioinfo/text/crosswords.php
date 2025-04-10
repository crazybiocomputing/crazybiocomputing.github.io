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
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="asn.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="clustal.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="embl.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="fasta.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="gcg.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="genbank.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="mmcif.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="pdbml.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="pdb.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="phylip.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="pir.png"></img></div>
<div class="dragclass" style="top:<?php echo rand(-300,500); ?>px;left:<?php echo rand(500,700); ?>px;"><img src="swissprot.png"></img></div>



<pre>
SQ   Sequence   314 AA;
     MAVASTSLAS QLSGPKSLSQ PYSGLRRSCP KLDQSHSSLF QHLSLSSSSR KASRAVVAMA
     GTGKFFVGGN WKCNGTKDLI SKLVSDLNSA KLEPDVDVVV APPFLYLDQV KSSLTDRIEI
     SGQNSWVAKG GAFTGEISVE QLKDIGRKWV ILGHSERRHV IGEDDQFIGK KAAYALNEGL
     GVIACIGEKL EEREAGKTFD VCYEQLKAFA DAVPSWENIV VAYEPVWAIG TGKVASPQQA
     QEVHVAVREW LKKNVSAEVA SKTRIIYGGS VNGGNSAELA KEEDIDGFLV GGASLKGPEF
     ATIVNAVTSK KVAA
//
</pre>

<pre>
>gi|160797|gb|AAA29796.1| hemoglobin [Pseudoterranova decipiens]
MHSSIVLATVLFVAIASASKTRELCMKSLEHAKVGTSKEAKQDGIDLYKHMFEHYPAMKKYFKHRENYTP
ADVQKDPFFIKQGQNILLACHVLCATYDDRETFDAYVGELMARHERDHVKVPNDVWNHFWEHFIEFLGSK
TTLDEPTKHAWQEIGKEFSHEISHHGRHSVRDHCMNSLEYIAIGDKEHQKQNGIDLYKHMFEHYPHMRKA
FKGRENFTKEDVQKDAFFVNKDTRFCWPFVCCDSSYDDEPTFDYFVDALMDRHIKDDIHLPQEQWHEFWK
LFAEYLNEKSHQHLTEAEKHAWSTIGEDFAHEADKHAKAEKDHHEGEHKEEHH
</pre>

<pre>
ORIGIN      
        1 mhssivlatv lfvaiasask trelcmksle hakvgtskea kqdgidlykh mfehypamkk
       61 yfkhrenytp advqkdpffi kqgqnillac hvlcatyddr etfdayvgel marherdhvk
      121 vpndvwnhfw ehfieflgsk ttldeptkha wqeigkefsh eishhgrhsv rdhcmnsley
      181 iaigdkehqk qngidlykhm fehyphmrka fkgrenftke dvqkdaffvn kdtrfcwpfv
      241 ccdssyddep tfdyfvdalm drhikddihl pqeqwhefwk lfaeylneks hqhlteaekh
      301 awstigedfa headkhakae kdhhegehke ehh
//
</pre>

<pre>
SEQRES   1 A  324  LYS ASP PHE LEU ASN PRO LYS TYR THR LEU GLU ASN PHE          
SEQRES   2 A  324  ILE VAL GLY GLU GLY ASN ARG LEU ALA TYR GLU VAL VAL          
SEQRES   3 A  324  LYS GLU ALA LEU GLU ASN LEU GLY SER LEU TYR ASN PRO          
SEQRES   4 A  324  ILE PHE ILE TYR GLY SER VAL GLY THR GLY LYS THR HIS          
SEQRES   5 A  324  LEU LEU GLN ALA ALA GLY ASN GLU ALA LYS LYS ARG GLY          
SEQRES   6 A  324  TYR ARG VAL ILE TYR SER SER ALA ASP ASP PHE ALA GLN          
</pre>

<pre>
>P1;TPIS1_LISIN
Triosephosphate isomerase 1;
MRKPIIAGNW KMNKTAAKAG QFAEDVKNNV PSSDAVESVV AAPALFLQEL VRLTEGTNLR
VAAQNCYFED EGAFTGEISP FALADLGVSY VIIGHSERRE YFHETDEDIN KKAHAIFKHG
MTPIICCGET LDQREAGQTD TWVRGQIRAA LAGLTEEQVI KSVIAYEPIW AIGTGKSSTS
ADANETCAVI RAEVADAVSQ KAADAVRIQY GGSVKPENIA DYLAESDIDG ALVGGASLEP
ASFLALLEAV K*
</pre>

<pre>
Seq1               GCCCAGGTATTAGCCAGGGTAGATGGATGCAGTTAGGAGCGCGAACGGTCTTCTCGGACT 60
Seq2               ------------------------------------GAGCGCGAACGGTCTTC--GGACT 21
Seq3               -------------------------GGCTGATGCTAGAGCGCGAACGGTCTTCTCGGACT 34
Seq4               ------------------------------------GAGCGCGAACGGTCTTC--GGACT 21
Seq5               ------------------------------------GAGCGCGAACGGTCTTC--GGACT 21
                                                       *****************  *****
</pre>

<pre>
&lt;PDBx:atom_site id="1180"&gt;
         &lt;PDBx:B_iso_or_equiv&gt;53.82&lt;/PDBx:B_iso_or_equiv&gt;
         &lt;PDBx:Cartn_x&gt;22.394&lt;/PDBx:Cartn_x&gt;
         &lt;PDBx:Cartn_y&gt;-15.471&lt;/PDBx:Cartn_y&gt;
         &lt;PDBx:Cartn_z&gt;5.855&lt;/PDBx:Cartn_z&gt;
         &lt;PDBx:auth_asym_id&gt;B&lt;/PDBx:auth_asym_id&gt;
         &lt;PDBx:auth_atom_id&gt;CD1&lt;/PDBx:auth_atom_id&gt;
         &lt;PDBx:auth_comp_id&gt;TRP&lt;/PDBx:auth_comp_id&gt;
         &lt;PDBx:auth_seq_id&gt;15&lt;/PDBx:auth_seq_id&gt;
         &lt;PDBx:group_PDB&gt;ATOM&lt;/PDBx:group_PDB&gt;
         &lt;PDBx:label_alt_id xsi:nil="true" /&gt;
         &lt;PDBx:label_asym_id&gt;B&lt;/PDBx:label_asym_id&gt;
         &lt;PDBx:label_atom_id&gt;CD1&lt;/PDBx:label_atom_id&gt;
         &lt;PDBx:label_comp_id&gt;TRP&lt;/PDBx:label_comp_id&gt;
         &lt;PDBx:label_entity_id&gt;2&lt;/PDBx:label_entity_id&gt;
         &lt;PDBx:label_seq_id&gt;15&lt;/PDBx:label_seq_id&gt;
         &lt;PDBx:occupancy&gt;1.00&lt;/PDBx:occupancy&gt;
         &lt;PDBx:pdbx_PDB_model_num&gt;1&lt;/PDBx:pdbx_PDB_model_num&gt;
         &lt;PDBx:type_symbol&gt;C&lt;/PDBx:type_symbol&gt;
&lt;/PDBx:atom_site&gt;
</pre>

</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
