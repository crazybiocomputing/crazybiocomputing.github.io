<?php

	require('../../phpCrazy/cookie_check_crazybio.inc.php');

	include('../../phpCrazy/header.inc.php');

?>
<link href='http://fonts.googleapis.com/css?family=Walter+Turncoat' rel='stylesheet' type='text/css'>

<script type="text/javascript">
function doIt() {
  // do nothing
}

var seqs=[
'loop_\n'+
'_entity_poly.entity_id \n'+
'_entity_poly.type \n'+
'_entity_poly.nstd_linkage \n'+
'_entity_poly.nstd_monomer \n'+
'_entity_poly.pdbx_seq_one_letter_code \n'+
'_entity_poly.pdbx_seq_one_letter_code_can \n'+
'_entity_poly.pdbx_strand_id \n'+
'1 \'alligator.php\'        no no \n'+
';KDFLNPKYTLENFIVGEGNRLAYEVVKEALENLGSLYNPIFIYGSVGTGKTHLLQAAGNEAKKRGYRVIYSSADDFAQAM\n'+
'VEHLKKGTINEFRNMYKSVDLLLLDDVQFLSGKERTQIEFFHIFNTLYLLEKQIILASDRHPQKLDGVSDRLVSRFEGGI\n'+
'LVEIELDNKTRFKIIKEKLKEFNLELRKEVIDYLLENTKNVREIEGKIKLIKLKGFEGLERKERKERDKLMQIVEFVANY\n'+
'# \n',

'>P1;buffalo.php\n'+ 
'14-3-3 protein beta/alpha;\n'+ 
'MTMDKSELVQ KAKLAEQAER YDDMAAAMKA VTEQGHELSN EERNLLSVAY KNVVGARRSS\n'+ 
'WRVISSIEQK TERNEKKQQM GKEYREKIEA ELQDICNDVL QLLDKYLIPN ATQPESKVFY\n'+ 
'LKMKGDYFRY LSEVASGDNK QTTVSNSQQA YQEAFEISKK EMQPTHPIRL GLALNFSVFY\n'+ 
'YEILNSPEKA CSLAKTAFDE AIAELDTLNE ESYKDSTLIM QLLRDNLTLW TSENQGDEGD\n'+ 
'AGEGEN*\n',

'DE   dragonfly.php\n'+
'SQ   Sequence   246 AA;\n'+ 
'     MTMDKSELVQ KAKLAEQAER YDDMAAAMKA VTEQGHELSN EERNLLSVAY KNVVGARRSS\n'+ 
'     WRVISSIEQK TERNEKKQQM GKEYREKIEA ELQDICNDVL QLLDKYLIPN ATQPESKVFY\n'+ 
'     LKMKGDYFRY LSEVASGDNK QTTVSNSQQA YQEAFEISKK EMQPTHPIRL GLALNFSVFY\n'+ 
'     YEILNSPEKA CSLAKTAFDE AIAELDTLNE ESYKDSTLIM QLLRDNLTLW TSENQGDEGD\n'+ 
'     AGEGEN\n'+
'//\n',

'>P1;TPIS1_LISIN\n'+
'elephant.php;\n'+
'MRKPIIAGNW KMNKTAAKAG QFAEDVKNNV PSSDAVESVV AAPALFLQEL VRLTEGTNLR\n'+
'VAAQNCYFED EGAFTGEISP FALADLGVSY VIIGHSERRE YFHETDEDIN KKAHAIFKHG\n'+
'MTPIICCGET LDQREAGQTD TWVRGQIRAA LAGLTEEQVI KSVIAYEPIW AIGTGKSSTS\n'+
'ADANETCAVI RAEVADAVSQ KAADAVRIQY GGSVKPENIA DYLAESDIDG ALVGGASLEP\n'+
'ASFLALLEAV K*\n',

'DE   giraffe.php\n'+
'XX\n'+
'SQ   Sequence 368 BP;\n'+
'AB000263  Length: 368  Check: 4514  ..\n'+
'       1  acaagatgcc attgtccccc ggcctcctgc tgctgctgct ctccggggcc acggccaccg\n'+
'      61  ctgccctgcc cctggagggt ggccccaccg gccgagacag cgagcatatg caggaagcgg\n'+
'     121  caggaataag gaaaagcagc ctcctgactt tcctcgcttg gtggtttgag tggacctccc\n'+
'     181  aggccagtgc cgggcccctc ataggagagg aagctcggga ggtggccagg cggcaggaag\n'+
'     241  gcgcaccccc ccagcaatcc gcgcgccggg acagaatgcc ctgcaggaac ttcttctgga\n'+
'     301  agaccttctc ctcctgcaaa taaaacctca cccatgaatg ctcacgcaag tttaattaca\n'+
'     361  gacctgaa\n',

'goose.php   GCCCAGGTATTAGCCAGGGTAGATGGATGCAGTTAGGAGCGCGAACGGTCTTCTCGGACT 60\n'+
'unknown1    ------------------------------------GAGCGCGAACGGTCTTC--GGACT 21\n'+
'unknown2    -------------------------GGCTGATGCTAGAGCGCGAACGGTCTTCTCGGACT 34\n'+
'Seq3        ------------------------------------GAGCGCGAACGGTCTTC--GGACT 21\n'+
'Seq4        ------------------------------------GAGCGCGAACGGTCTTC--GGACT 21\n'+
'                                                *****************  *****\n',

'Sequence and secondary structure for hedgehog.php\n'+
'1     VHLTPEEKSA VTALWGKVNV DEVGGEALGR LLVVYPWTQR FFESFGDLST\n'+
'<span style="color:rgb(150,150,150);">      HHHHHH     HHHHHTT  T TTHHHHHHHH HHHHSGGGGG GGGGG   SS</span> \n'+
'51    PDAVMGNPKV KAHGKKVLGA FSDGLAHLDN LKGTFATLSE LHCDKLHVDP\n'+
'<span style="color:rgb(150,150,150);">      HHHHHT HHH HHHHHHHHHH HHHHHT GGG HHHHHHHHHH HHHTTS   T</span> \n'+
'101   ENFRLLGNVL VCVLAHHFGK EFTPPVQAAY QKVVAGVANA LAHKYH\n'+
'<span style="color:rgb(150,150,150);">      HHHHHHHHHH HHHHHHHHGG GS HHHHHHH HHHHHHHHHH HGGGG</span>  \n',

'hippopotamus.php\n<img src="chain.png"></img>',

'horse.php\n'+
'        10         20         30         40         50         60\n'+ 
'MVLSPADKTN VKAAWGKVGA HAGEYGAEAL ERMFLSFPTT KTYFPHFDLS HGSAQVKGHG \n'+
'\n'+
'        70         80         90        100        110        120 \n'+
'KKVADALTNA VAHVDDMPNA LSALSDLHAH KLRVDPVNFK LLSHCLLVTL AAHLPAEFTP \n'+
'\n'+
'       130        140 \n'+
'AVHASLDKFL ASVSTVLTSK YR\n',

'&lt;PDBx:entity_src_gen entity_id="1"&gt;\n'+
'  &lt;PDBx:gene_src_common_name&gt;human.php&lt;/PDBx:gene_src_common_name&gt;\n'+
'  &lt;PDBx:gene_src_genus&gt;Homo&lt;/PDBx:gene_src_genus&gt;\n'+
'  &lt;PDBx:pdbx_gene_src_ncbi_taxonomy_id&gt;9606&lt;/PDBx:pdbx_gene_src_ncbi_taxonomy_id&gt;\n'+
'  &lt;PDBx:pdbx_gene_src_scientific_name>Homo sapiens&lt;/PDBx:pdbx_gene_src_scientific_name&gt;\n'+
'&lt;/PDBx:entity_src_gen&gt;\n',


'&lt;taxon scientificName="Panthera leo" commonName="lion.php" taxId="9689"&gt;\n'+
'  &lt;lineage&gt;\n'+
'      &lt;taxon scientificName="Eukaryota"/&gt;\n'+
'      &lt;taxon scientificName="Metazoa"/&gt;\n'+
'      &lt;taxon scientificName="Chordata"/&gt;\n'+
'      &lt;taxon scientificName="Craniata"/&gt;\n'+
'      &lt;taxon scientificName="Vertebrata"/&gt;\n'+
'      &lt;taxon scientificName="Euteleostomi"/&gt;\n'+
'      &lt;taxon scientificName="Mammalia"/&gt;\n'+
'      &lt;taxon scientificName="Eutheria"/&gt;\n'+
'      &lt;taxon scientificName="Laurasiatheria"/&gt;\n'+
'      &lt;taxon scientificName="Carnivora"/&gt;\n'+
'      &lt;taxon scientificName="Feliformia"/&gt;\n'+
'      &lt;taxon scientificName="Felidae"/&gt;\n'+
'      &lt;taxon scientificName="Pantherinae"/&gt;\n'+
'      &lt;taxon scientificName="Panthera"/&gt;\n'+
'  &lt;/lineage&gt;\n'+
'&lt;/taxon&gt;\n'+
'&lt;sequence&gt;\n'+
'cacagactcagagagaacccaccatggtgctgtctcctgccgacaagaccaacgtcaagg\n'+
'ccgcctggggtaaggtcggcgcgcacgctggcgagtatggtgcggaggccctggagagga\n'+
'tgttcctgtccttccccaccaccaagacctacttcccgcacttcgacctgagccacggct\n'+
'ctgcccaggttaagggccacggcaagaaggtggccgacgcgctgaccaacgccgtggcgc\n'+
'acgtggacgacatgcccaacgcgctgtccgccctgagcgacctgcacgcgcacaagcttc\n'+
'gggtggacccggtcaacttcaagctcctaagccactgcctgctggtgaccctggccgccc\n'+
'acctccccgccgagttcacccctgcggtgcacgcctccctggacaagttcctggcttctg\n'+
'tgagcaccgtgctgacctccaaataccgttaagctggagcctcggtagccgttcctcctg\n'+
'cccgctgggcctcccaacgggccctcctcccctccttgcac\n'+
'&lt;/sequence&gt;\n',

'SOURCE      mitochondrion Alces alces (moose.php)\n'+
'  ORGANISM  Alces alces\n'+
'            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;\n'+
'            Mammalia; Eutheria; Laurasiatheria; Cetartiodactyla; Ruminantia;\n'+
'            Pecora; Cervidae; Odocoileinae; Alces.\n'+
'ORIGIN      \n'+
'        1 gctttaaaat accaaaaata taagcaaatt atactgtatt tttaaaagtt agtctaaaaa\n'+
'       61 ggtacagcct tttagagatg gatacaacct taactagaga gtaaaattta ataataccat\n'+
'      121 agtaggccta aaagcagcca ccaattaaga aagcgttaaa gctcaacaat aaaattatat\n'+
'      181 aaattccaaa aacaagaaat caactcctag cccaatactg gactaatcta taaaaataga\n'+
'      241 agcaataatg ttaatatgag taacaagaag catcttctcc ctgcataagt ttaagtcagt\n'+
'      301 atctgataat accctgacta ttaacagcaa aataagaata atctaattat taatgactta\n',

'SOURCE   3 ORGANISM_COMMON: mouse.php;\n' +
'SEQRES   1 A  150  ACE VAL ASP ALA ALA VAL ALA LYS VAL CYS GLY SER GLU\n'+     
'SEQRES   2 A  150  ALA ILE LYS ALA ASN LEU ARG ARG SER TRP GLY VAL LEU\n'+
'SEQRES   3 A  150  SER ALA ASP ILE GLU ALA THR GLY LEU MET LEU MET SER\n'+
'SEQRES   4 A  150  ASN LEU PHE THR LEU ARG PRO ASP THR LYS THR TYR PHE',


'pig.php\n'+
'CCTGGAGGGTGGCCCCACCGGCCGAGACAGCGAGCATATGCAGGAA\n'+
'CTCCTGACTTTCCTCGCTTGGTGGTTTGAGTGGACCTCCCAGGCCA\n'+
'CTGCAGGAACTTCTTCTGGAAGACCTTCTCCTCCTGCAAATAAAAC\n'+
'CTCCTGACTTTCCTCGCTTGGTGGTTTGAGTGGACCTCCCAGGCCA\n'+
'TTTAATTA',

'(\n'+
'  (raccoon.php:19.19959,bear:6.80041):0.84600,\n'+
'  (\n'+
'    (sea_lion:11.99700, seal:12.00300):7.52973,\n'+
'    (\n'+
'      (monkey:100.85930,cat:47.14069):20.59201,\n'+
'      weasel:18.87953\n'+
'    ):2.09460\n'+
'  ):3.87382,dog:25.46154\n'+
');\n',

'1         11        21        31        41        51   \n'+     
'MKTRTQQIEELQKEWTQPRWEGITRPYSAEDVVKLRGSVNPECTLAQLGAAKMWRLLHGE\n'+
'61        71        81        91        101       111       \n'+
'SKKGYINSLGALTGGQALQQAKAGIEAVYLSGWQVAADANLAASMYPDQSLYPANSVPAV\n'+
'121       131       141       151       161       171       \n'+
'VERINNTFRRADQIQWSAGIEPGDPRYVDYFLPIVADAEAGFGGVLNAFELMKAMIEAGA\n'+
'181       191       201       211       221       231       \n'+
'AAVHFEDQLASVKKCGHMGGKVLVPTQEAIQKLVAARLAADVTGVPTLLVARTDADAADL\n'+
'241       251       261       271       281       291       \n'+
'ITSDCDPYDSEFITGERTSEGFFRTHAGIEQAISRGLAYAPYADLVWCETSTPDLELARR\n'+
'301       311       321       331       341       351       \n'+
'FAQAIHAKYPGKLLAYNCSPSFNWQKNLDDKTIASFQQQLSDMGYKFQFITLAGIHSMWF\n'+
'361       371       381       391       401       411       \n'+
'NMFDLANAYAQGEGMKHYVEKVQQPEFAAAKDGYTFVSHQQEVGTGYFDKVTTIIQGGTS\n'+
'421       431       441\n'+
'SVTALTGSTEESQF______SHRIMP.PHP\n',


'TIGER.PHPVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDL\n'+
'SHGSAQVKGHGKKVADALTNAVAHVDDMPNALSALSDLHAHKLRVDPVNFKLLSHCLLVT\n'+
'LAAHLPAEFTPAVHASLDKFLASVSTVLTSKYR',


'DE  trout.php\n'+
'SQ  Sequence 120bp\n'+
'1   cctggagggt ggccccaccg gccgagacag cgagcatatg\n'+
'41  ctcctgactt tcctcgcttg gtggtttgag tggacctccc\n'+
'82  ctgcaggaac ttcttctgga agaccttctc ctcctgcaaa\n'+
'//\n',

'turkey.php\n'+
'LOCUS       AAU03518 237 bp DNA PLN 04-FEB-1995\n'+
'DEFINITION  turkey.php 18S rRNA and 5.8S rRNA genes, partial sequence.\n'+
'ACCESSION   X12345\n'+
'ORIGIN  \n'+
'        1 aacctgcgga aggatcatta ccgagtgcgg gtcctttggg cccaacctcc catccgtgtc \n'+
'       61 tattgtaccc tgttgcttcg gcgggcccgc cgcttgtcgg ccgccggggg ggcgcctctg \n'+
'      121 ccccccgggc ccgtgcccgc cggagacccc aacacgaaca ctgtctgaaa gcgtgcagtc \n'+
'      181 tgagttgatt gaatgcaatc agttaaaact ttcaacaatg gatctcttgg ttccggc\n'+
'//\n',


'>turtle.php\n'+
'ACAAGATGCCATTGTCCCCCGGCCTCCTGCTGCTGCTGCTCTCCGG\n'+
'CCTGGAGGGTGGCCCCACCGGCCGAGACAGCGAGCATATGCAGGAA\n'+
'CTCCTGACTTTCCTCGCTTGGTGGTTTGAGTGGACCTCCCAGGCCA\n'+
'TTTAATTACAGACCTGAA',

'; comment\n'+
'; comment\n'+
'viper.php\n'+
'AACCTGCGGAAGGATCATTACCGAGTGCGGGTCCTTTGGGCCCAACCTCCCATCCGTGTCTATTGTACCC\n'+
'TGTTGCTTCGGCGGGCCCGCCGCTTGTCGGCCGCCGGGGGGGCGCCTCTGCCCCCCGGGCCCGTGCCCGC\n'+
'CGGAGACCCCAACACGAACACTGTCTGAAAGCGTGCAGTCTGAGTTGATTGAATGCAATCAGTTAAAACT\n'+
'TTCAACAATGGATCTCTTGGTTCCGGC1\n',

'MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHG\n'+
'KKVADALTNAVAHVDDMPNALSALSDLHAHKLRVDPVNFKLLSHCLLVTLAAHLPAEFTP\n'+
'AVHASLDKFLASVSTVLTSKYR____WHALE.PHP\n',

'hemoglobin alpha chain [wolf.php]\n'+
'Alignment statistics for match #1 Score	Expect	Method	Identities	Positives	Gaps\n'+
'261 bits(666) 	1e-86 	Compositional matrix adjust. 	128/142(90%) 	133/142(93%) 	0/142(0%)\n'+
'\n'+
'Query  1    MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHG  60\n'+
'<span style="color:rgb(150,150,150);">            MVLSPADK NVKAAWGKVG HAGEYGAEALERMFLSFPTTKTYFPHFD+SHGSAQVK HG</span>\n'+
'Sbjct  1    MVLSPADKANVKAAWGKVGGHAGEYGAEALERMFLSFPTTKTYFPHFDMSHGSAQVKAHG  60\n'+
'\n'+
'Query  61   KKVADALTNAVAHVDDMPNALSALSDLHAHKLRVDPVNFKLLSHCLLVTLAAHLPAEFTP  120\n'+
'<span style="color:rgb(150,150,150);">            KKVADALT AV H+DD+P ALSALSDLHAHKLRVDPVNF+LL+HCLLVTLA H P EFTP</span>\n'+
'Sbjct  61   KKVADALTQAVDHLDDLPGALSALSDLHAHKLRVDPVNFQLLAHCLLVTLANHHPNEFTP  120\n',

'ID AA03518 standard; DNA; FUN; 237 BP.\n'+
'XX\n'+
'AC U03518;\n'+
'XX\n'+
'DE wolverine.php\n'+
'XX\n'+
'SQ Sequence 237 BP; 41 A; 77 C; 67 G; 52 T; 0 other;\n'+
'AA03518 Length: 237 Check: 4514 ..\n'+
'\n'+
'  1 aacctgcgga aggatcatta ccgagtgcgg gtcctttggg cccaacctcc catccgtgtc\n'+
' 61 tattgtaccc tgttgcttcg gcgggcccgc cgcttgtcgg ccgccggggg ggcgcctctg \n'+
'121 ccccccgggc ccgtgcccgc cggagacccc aacacgaaca ctgtctgaaa gcgtgcagtc \n'+
'181 tgagttgatt gaatgcaatc agttaaaact ttcaacaatg gatctcttgg ttccggc\n',


'DE   worm.php\n'+
'XX\n'+
'SQ   Sequence 368 BP;\n'+
'     acaagatgcc attgtccccc ggcctcctgc tgctgctgct ctccggggcc acggccaccg        60\n'+
'     ctgccctgcc cctggagggt ggccccaccg gccgagacag cgagcatatg caggaagcgg       120\n'+
'     caggaataag gaaaagcagc ctcctgactt tcctcgcttg gtggtttgag tggacctccc       180\n'+
'     aggccagtgc cgggcccctc ataggagagg aagctcggga ggtggccagg cggcaggaag       240\n'+
'     gcgcaccccc ccagcaatcc gcgcgccggg acagaatgcc ctgcaggaac ttcttctgga       300\n'+
'     agaccttctc ctcctgcaaa taaaacctca cccatgaatg ctcacgcaag tttaattaca       360\n'+
'     gacctgaa                                                                368\n'+
'//\n'
];


function clickOnIt(ev,x,y) {
  ev = ev || window.event();
  var popup = document.getElementById('popup');
  popup.innerHTML='<div class="titlebar"><a href="javascript:void(0)"><img src="../crazybioflow/img/closeButton.png"></img></a>&nbsp;&nbsp;Data</div><div class="contents"> <pre>'+seqs[x+5*y]+'</pre></div>';
  popup.style.left= (ev.clientX + 10) + 'px';
  popup.style.top = (ev.clientY + 10) + 'px';
}

</script>

<style>
#popup {
  background: #FFFFFF;
  border: 2px solid;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  -moz-border-top-left-radius: 10px;
  -moz-border-top-right-radius: 10px;
  display:inline-block;
  text-align: left;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 9999;
}

#popup .titlebar {
  background-color:#666666 ;
  margin: 0px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  -moz-border-top-left-radius: 10px;
  -moz-border-top-right-radius: 10px;
  color: #FFFFFF;
  font-family: 'Walter Turncoat', cursive;
}

#popup .contents {
  padding: 2px 10px 2px 10px;
}

</style>


<style>
a {
  font-size: 80px;
  text-decoration: none;
}

.dragclass {
  padding-left:2px;
  text-align:left;
  height:80px;
  width:350px;
  background-color:#ff0000;
  color:#ffffff;
}

</style>

<div id="page">
<div id="content">

<center>  
<table>
<tr>
<td><a id='00' href="javascript:void(0)" onclick="clickOnIt(event,0,0)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,1,0)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,2,0)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,3,0)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,4,0)">&#9786;</a></td>
</tr>
<tr>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,0,1)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,1,1)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,2,1)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,3,1)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,4,1)">&#9786;</a></td>
</tr>
<tr>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,0,2)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,1,2)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,2,2)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,3,2)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,4,2)">&#9786;</a></td>
</tr>
<tr>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,0,3)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,1,3)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,2,3)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,3,3)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,4,3)">&#9786;</a></td>
</tr>
<tr>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,0,4)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,1,4)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,2,4)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,3,4)">&#9786;</a></td>
<td><a href="javascript:void(0)" onclick="clickOnIt(event,4,4)">&#9786;</a></td>
</tr>
</table>

<div id="popup"></div>


</center>

</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
