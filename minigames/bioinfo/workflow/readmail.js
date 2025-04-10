
var scroller  = null;
var scrollbar = null;

function scrollbarEvent (o, type) {
	if (type == "mousedown") {
		if (o.className == "Scrollbar-Track") o.style.backgroundColor = "#E3E3E3";
		else o.style.backgroundColor = "#BBB";
	} else {
		if (o.className == "Scrollbar-Track") o.style.backgroundColor = "#EEE";
		else o.style.backgroundColor = "#CCC";
	}
}

function readmail() {
  var div=document.getElementById('crazyworkflow');
  var text='<div id="mail">';
  text+='<div id="mail_header">';
  text+='<p><b>From:</b>boss@crazybiolab.bordeaux.fr</p><b>To:</b>student@crazybiolab.bordeaux.fr</p>';
  text+='</div><div id="mail_subject">';
  text+='<p><b>Subject:</b> URGENT!!</p>';
  text+='</div>';
  text+='<div id="mail_contents">';
  text+='<div id="mail_text">';
  text+='<div class="Scroller-Container">';
  text+='<span style="font-family:\'Rock Salt\',cursive"><p>Extract the sequence in Pearson/Fasta format from this entry. Use the \'crazybioflow\' tool to do that. This package is installed on one of the computers of the CrazyBioLab</p>';
  text+='<p>The boss.</span></p>';
  text+='<pre style="font-family:fixed,monospace">';
  text+='ID   X65923; SV 1; linear; mRNA; STD; HUM; 518 BP.\n';
  text+='AC   X65923;\n';
  text+='DT   13-MAY-1992 (Rel. 31, Created)\n';
  text+='DT   18-APR-2005 (Rel. 83, Last updated, Version 11)\n';
  text+='DE   H.sapiens fau mRNA\n';
  text+='KW   fau gene.\n';
  text+='OS   Homo sapiens (human)\n';
  text+='OC   Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi; Mammalia;\n';
  text+='OC   Eutheria; Euarchontoglires; Primates; Haplorrhini; Catarrhini; Hominidae;\n';
  text+='OC   Homo.\n';
  text+='RN   [1]\n';
  text+='RP   1-518\n';
  text+='RA   Michiels L.M.R.;\n';
  text+='RT   ;\n';
  text+='RL   Submitted (29-APR-1992) to the EMBL/GenBank/DDBJ databases.\n';
  text+='RL   L.M.R. Michiels, University of Antwerp, Dept of Biochemistry,\n';
  text+='RL   Universiteisplein 1, 2610 Wilrijk, BELGIUM\n';
  text+='RN   [2]\n';
  text+='RP   1-518\n';
  text+='RX   PUBMED; 8395683.\n';
  text+='RA   Michiels L., Van der Rauwelaert E., Van Hasselt F., Kas K., Merregaert J.;\n';
  text+='RT   "fau cDNA encodes a ubiquitin-like-S30 fusion protein and is expressed as\n';
  text+='RT   an antisense sequence in the Finkel-Biskis-Reilly murine sarcoma virus";\n';
  text+='RL   Oncogene 8(9):2537-2546(1993).\n';
  text+='XX\n';
  text+='DR   H-InvDB; HIT000322806.\n';
  text+='FH   Key             Location/Qualifiers\n';
  text+='FH\n';
  text+='FT   source          1..518\n';
  text+='FT                   /organism="Homo sapiens"\n';
  text+='FT                   /chromosome="11q"\n';
  text+='FT                   /map="13"\n';
  text+='FT                   /mol_type="mRNA"\n';
  text+='FT                   /clone_lib="cDNA"\n';
  text+='FT                   /clone="pUIA 631"\n';
  text+='FT                   /tissue_type="placenta"\n';
  text+='FT                   /db_xref="taxon:9606"\n';
  text+='FT   misc_feature    57..278\n';
  text+='FT                   /note="ubiquitin like part"\n';
  text+='FT   CDS             57..458\n';
  text+='FT                   /gene="fau"\n';
  text+='FT                   /db_xref="GDB:135476"\n';
  text+='FT                   /db_xref="GOA:P35544"\n';
  text+='FT                   /db_xref="GOA:P62861"\n';
  text+='FT                   /db_xref="HGNC:3597"\n';
  text+='FT                   /db_xref="InterPro:IPR000626"\n';
  text+='FT                   /db_xref="InterPro:IPR006846"\n';
  text+='FT                   /db_xref="InterPro:IPR019954"\n';
  text+='FT                   /db_xref="InterPro:IPR019955"\n';
  text+='FT                   /db_xref="InterPro:IPR019956"\n';
  text+='FT                   /db_xref="UniProtKB/Swiss-Prot:P35544"\n';
  text+='FT                   /db_xref="UniProtKB/Swiss-Prot:P62861"\n';
  text+='FT                   /protein_id="CAA46716.1"\n';
  text+='FT                   /translation="MQLFVRAQELHTFEVTGQETVAQIKAHVASLEGIAPEDQVVLLAG\n';
  text+='FT                   APLEDEATLGQCGVEALTTLEVAGRMLGGKVHGSLARAGKVRGQTPKVAKQEKKKKKTG\n';
  text+='FT                   RAKRRMQYNRRFVNVVPTFGKKKGPNANS"\n';
  text+='FT   misc_feature    98..102\n';
  text+='FT                   /note="nucleolar localization signal"\n';
  text+='FT   misc_feature    279..458\n';
  text+='FT                   /note="S30 part"\n';
  text+='FT   polyA_signal    484..489\n';
  text+='FT   polyA_site      509\n';
  text+='SQ   Sequence 518 BP; 125 A; 139 C; 148 G; 106 T; 0 other;\n';
  text+='     ttcctctttc tcgactccat cttcgcggta gctgggaccg ccgttcagtc gccaatatgc        60\n';
  text+='     agctctttgt ccgcgcccag gagctacaca ccttcgaggt gaccggccag gaaacggtcg       120\n';
  text+='     cccagatcaa ggctcatgta gcctcactgg agggcattgc cccggaagat caagtcgtgc       180\n';
  text+='     tcctggcagg cgcgcccctg gaggatgagg ccactctggg ccagtgcggg gtggaggccc       240\n';
  text+='     tgactaccct ggaagtagca ggccgcatgc ttggaggtaa agttcatggt tccctggccc       300\n';
  text+='     gtgctggaaa agtgagaggt cagactccta aggtggccaa acaggagaag aagaagaaga       360\n';
  text+='     agacaggtcg ggctaagcgg cggatgcagt acaaccggcg ctttgtcaac gttgtgccca       420\n';
  text+='     cctttggcaa gaagaagggc cccaatgcca actcttaagt cttttgtaat tctggctttc       480\n';
  text+='     tctaataaaa aagccactta gttcagtcaa aaaaaaaa                               518';
  text+='</pre>'
  text+='</div></div></div>';
  text+='<div id="Scrollbar-Container">';
  text+='<div class="Scrollbar-Track">';
  text+='<div class="Scrollbar-Handle"></div>';
  text+='</div>';

  div.innerHTML=text;

  scroller  = new jsScroller(document.getElementById("mail_text"), 600, 400);
  scrollbar = new jsScrollbar (document.getElementById("Scrollbar-Container"), scroller, true, scrollbarEvent);
}




