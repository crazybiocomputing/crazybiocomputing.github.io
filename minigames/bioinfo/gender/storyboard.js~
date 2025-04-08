
var dialog = {
'000' : {
  'ID'         : '000',
  'element'    : 'chat',
  'people'     : 'girl',
  'html'       :  '<p>In a tooth, the major protein constituent in enamel is __text__ containing high concentrations of Pro, Gln, Leu, and His. '+
                  '</p> __submit__',
  'widgets'     : [
      {
      'id'      : 'id1',
      'type'    : 'text',
      'event'   : '',
      'title'   : '???',
      'answer'  : 'amelogenin',
      },
    {
    'type'    : 'submit',
    'event'   : 'onclick',
    'title'   : 'Next'
    },

  ],
  'goto'       : {'0':'000','1':'001'},
},

'001' : {
  'ID'         : '001',
  'element'    : 'chat',
  'people'     : 'girl',
  'html'       :  '<p>Isoforms of the protein genes are located on sex chromosomes in <i>Homo sapiens</i>.</p>'+
                  '<p>The X gene named __text__ is located in the chromosome region __text__ ...</p> __submit__',
  'widgets'     : [
      {
      'id'      : 'id2',
      'type'    : 'text',
      'event'   : '',
      'title'   : '???',
      'answer'  : 'amelx',
      },
      {
      'id'      : 'id3',
      'type'    : 'text',
      'event'   : '',
      'title'   : 'p...',
      'answer'  : 'p22.31-p22.1',
      },
    {
    'type'    : 'submit',
    'event'   : 'onclick',
    'title'   : 'Next'
    },

  ],
  'goto'       : {'0':'001','1':'001','2':'002'},
},

'002' : {
  'ID'         : '002',
  'element'    : 'chat',
  'people'     : 'girl',
  'html'       :  '<p>The X gene named <b>AMELX</b> is located in the chromosome region <b>p22.31-p22.1</b> ...'+
                  ' and the Y gene entitled __text__ is located in the region __text__ ...</p> __submit__',
  'widgets'     : [
      {
      'id'      : 'id4',
      'type'    : 'text',
      'event'   : '',
      'title'   : '???',
      'answer'  : 'amely',
      },
      {
      'id'      : 'id5',
      'type'    : 'text',
      'event'   : '',
      'title'   : 'p...',
      'answer'  : 'p11.2',
      },
    {
    'type'    : 'submit',
    'event'   : 'onclick',
    'title'   : 'Next'
    },

  ],
  'goto'       : {'0':'002','1':'002','2':'003'},
},

'003' : {
  'ID'         : '003',
  'element'    : 'chat',
  'people'     : 'girl',
  'html'       :  '<p>Before trying to determine the gender from the tooth, I need the sequences of the two genes.For that, I search in the NCBI database '+
                  '__select__ the sequences of the X and Y genes and filter the results with RefSeq.</p>'+
                  'Thus, I download two entries of the two genes ...<ul><li>For the X gene, the locus (or entry name) is  __text__ and...</li>'+
                  '<li>For the Y gene, the locus (or entry name) is  __text__ .</li></p> __submit__',
  'widgets'     : [
      {
      'id'      : 'id6',
      'type'    : 'select',
      'event'   : '',
      'options' : ['Gene','Nucleotide','Protein','Pubmed','OMIM'],
      'title'   : '???',
      'answer'  : 'Nucleotide',
      },
      {
      'id'      : 'id7',
      'type'    : 'text',
      'event'   : '',
      'title'   : 'locus?',
      'answer'  : 'NG_012040 NG_012040.1 237820647',
      },
      {
      'id'      : 'id8',
      'type'    : 'text',
      'event'   : '',
      'title'   : 'locus?',
      'answer'  : 'NG_008011 NG_008011.1 190341055',
      },
    {
    'type'    : 'submit',
    'event'   : 'onclick',
    'title'   : 'Next'
    },

  ],
  'goto'       : {'0':'003','1':'003','2':'003','2':'006'},
},

'004' : {
  'ID'         : '004',
  'element'    : 'chat',
  'people'     : 'girl',
  'background' : '',
  'html'       : 'Ohh nooo!!! __back__',
  'widgets'    : [
    {
    'type'    : 'back',
    'event'   : 'onclick',
    'title'   : 'Next'
    },
  ],
  'goto'       : {},
},


'005' : {
  'ID'         : '005',
  'element'    : 'chat',
  'people'     : 'girl',
  'background' : '',
  'html'       : 
         '<p>Congratulations!!! Now, extract these regions with an EMBOSS Tool, and with your favourite text editor, '+
         'concatenate them to build the assembly in FASTA format</p>'+
         '<p>The secret word corresponds to the length of the assembly followed by the extension <b>.php</b></p>',
  'widgets'    : [],
  'goto'       : {},
},

'006' : {
  'ID'         : '006',
  'element'    : 'chat',
  'people'     : 'girl',
  'background' : 'pcr_primers.png',
  'html'       : 
         '<p>For my PCR, I plan to use these primers <ul><li>5\'-GCCATAATGGCAAAGA-3\'</li><li>5\'-CACCACTGGGATGTGG-3\'</li></ul>'+
         '... and I must calculate the lengths of the X and Y amplimers (amplified products) to check if this primer is a good choice.</p>'+
         'As shown in the image below, I need <ul><li><b>L</b> the length of the sequence</li><li> <b>F</b> the location of the forward primer and ...</li>'+
         '<li><b>R</b> the location of the reverse primer</li></ul>'+
         'Just to remind you, the simplest way to get the <b>F</b> and <b>R</b> to locally align these two short sequences with the gene sequence... __submit__', 
  'widgets'    : [
    {
    'id'      : 'id9',
    'type'    : 'numeric',
    'title'   : '0',
    'answer'  : 14349,
    },
    {
    'id'      : 'id10',
    'type'    : 'numeric',
    'title'   : '0',
    'answer'  : 15110,
    },
  ],
  'goto'       : {},
},

'007' : {
  'ID'         : '007',
  'element'    : 'chat',
  'people'     : 'girl',
  'background' : 'pcr_primers.png',
  'html'       : 
         '<p>How to compute amplimers lengths for these primers? <ul><li>5\'-GCCATAATGGCAAAGA-3\'</li><li>5\'-CACCACTGGGATGTGG-3\'</li></ul>'+
         '<p>With the X gene, the Forward primer has a perfect match at location __numeric__ and the Reverse at __numeric__.<br>'+
          'Similarly, The Forward primer has a perfect match with Y gene at location __numeric__ and the Reverse at __numeric__.<br></p>__submit__',
  'widgets'    : [
    {
    'id'      : 'id9',
    'type'    : 'numeric',
    'title'   : '0',
    'answer'  : 10051,
    },
    {
    'id'      : 'id10',
    'type'    : 'numeric',
    'title'   : '0',
    'answer'  : 4095,
    },
    {
    'id'      : 'id11',
    'type'    : 'numeric',
    'title'   : '0',
    'answer'  : 10481,
    },
    {
    'id'      : 'id12',
    'type'    : 'numeric',
    'title'   : '0',
    'answer'  : 4426,
    },
    {
    'type'    : 'submit',
    'event'   : 'onclick',
    'title'   : 'Next'
    },
  ],
  'goto'       : {},
},

'007' : {
  'ID'         : '008',
  'element'    : 'chat',
  'people'     : 'girl',
  'background' : 'pcr_primers.png',
  'html'       : 
         '<p>How to compute amplimers lengths for these primers? <ul><li>5\'-GCCATAATGGCAAAGA-3\'</li><li>5\'-CACCACTGGGATGTGG-3\'</li></ul>'+
         '<p>With the X gene, the Forward primer has a perfect match at location __numeric__ and the Reverse at __numeric__.<br>'+
          'Similarly, The Forward primer has a perfect match with Y gene at location __numeric__ and the Reverse at __numeric__.<br></p>__submit__',
  'widgets'    : [
    {
    'type'    : 'submit',
    'event'   : 'onclick',
    'title'   : 'Next'
    },
  ],
  'goto'       : {},
},



/**********************************
<input type="text" size=12 name="item3" value="<?php echo $id3; ?>"></input> 
</p>


if (isset($_POST['OK']) ) {
  $id1=strtolower($_POST['item1']); // amelogenin
  $id2=strtoupper($_POST['item2']); // AMELX
  $id3=strtolower($_POST['item3']); // p22.31-p22.1
  $id4=strtoupper($_POST['item4']); // AMELY
  $id5=strtolower($_POST['item5']); // p11.2
  $id6=ucfirst(strtolower($_POST['item6']));
  $id7=strtoupper($_POST['item7']);
  $id8=strtoupper($_POST['item8']);
  $id9=strtoupper($_POST['item9']);
  $id10=strtoupper($_POST['item10']);
  $id11=strtoupper($_POST['item11']);
  $id12=strtoupper($_POST['item12']);
  $id13=strtoupper($_POST['item13']);
  $id14=strtoupper($_POST['item14']);
  $id15=strtoupper($_POST['item15']);
  $id16=strtoupper($_POST['item16']);
  $id17=strtoupper($_POST['item17']);

  $page=$_POST['page'];

  $score=0;
  if ($page==0) {
    if ($id1=='amelogenin') {
      $score =1;
    }
    else {
      $id1='?';
    }

    if ($id2=='AMELX') {
      $score +=2;
    }
    else {
      $id2='?';
    }

    if ($id3=='p22.31-p22.1') {
      $score +=4;
    }
    else {
      $id3='?';
    }

    if ($id4=='AMELY') {
      $score +=8;
    }
    else {
      $id4='?';
    }

    if ($id5=='p11.2') {
      $score +=16;
    }
    else {
      $id5='?';
    }
  }
  else if ($page==1) {

    if ($id6=='Nucleotide') {
      $score +=1;
    }
    else {
      $id6='?';
    }

    if ($id7=='NG_012040' || $id7=='NG_012040.1' || $id7=='237820647') {
      $score +=2;
    }
    else {
      $id7='?';
    }

    if ($id8=='NG_008011' || $id8=='NG_008011.1' || $id8=='190341055') {
      $score +=4;
    }
    else {
      $id8='?';
    }
  }

  else if ($page==2) {

    if ($id9=='10051') {
      $score +=1;
    }
    else {
      $id9='?';
    }

    if ($id10=='4095') {
      $score +=2;
    }
    else {
      $id10='?';
    }

    if ($id11=='10481') {
      $score +=4;
    }
    else {
      $id11='?';
    }
    if ($id12=='4426') {
      $score +=8;
    }
    else {
      $id12='?';
    }
  }
  else if ($page==3) {

    if ($id13=='205') {
      $score =1;
    }
    else {
      $id13='?';
    }
    if ($id14=='205') {
      $score +=2;
    }
    else {
      $id14='?';
    }
  }
  else if ($page==4) {

    if ($id15=='D') {
      $score +=1;
    }
    else {
      $id15='?';
    }

    if ($id16=='106') {
      $score +=2;
    }
    else {
      $id16='?';
    }

    if ($id17=='112') {
      $score +=4;
    }
    else {
      $id17='?';
    }
  }
  else if ($page==5) {
    if ($sex=='M') {
      $score +=64;
    }
    else {
      $sex='M/F';
    }
  }

  if ($score==31 && $page==0)
    $page++;
  else if ($score==7 && $page==1)
    $page++;
  else if ($score==15 && $page==2)
    $page++;
  else if ($score==3 && $page==3)
    $page++;
  else if ($score==7 && $page==4)
    $page++;
  else if ($score==64 && $page==5)
    $page++;

}
else {
  $page=0;
  $id1='?'; $id2=''; $id3='p...';
  $id4=''; $id5='p...'; $id6='';
  $sex='M/F'; 
}

?>
</center>
<p>Unfortunately, the suspect found in the previous chapter has a good alibi. But, you didn't analyze the tooth found in the crime scene and it is human. You have to determine if it belongs to a man or a woman...</p>
<br>

<form action="determine.php" method="post">
<div id="bubble">
<?php
if ($page==0) {
?>
<p>
<input type="hidden" name="page" value="0"></input>
In a tooth, the major protein constituent in enamel is <input type="text" size=12 name="item1" value="<?php echo $id1; ?>"></input> containing high concentrations of Pro, Gln, Leu, and His. Isoforms of the protein genes are located on sex chromosomes in <i>Homo sapiens</i>. The X gene named <input type="text" size=8 name="item2" value="<?php echo $id2; ?>"></input> is located in the chromosome region
<input type="text" size=12 name="item3" value="<?php echo $id3; ?>"></input> and the Y gene entitled <input type="text" size=8 name="item4" value="<?php echo $id4; ?>"></input> is located in the region <input type="text" size=10 name="item5" value="<?php echo $id5; ?>"></input>...
</p>
<input style="float:right;border:1px solid;" type="submit" name="OK" value="Next"></input>
<?php
}
else if ($page==1) {
?>
<input type="hidden" name="page" value="1"></input>
<p>For my PCR, I got these primers <ul><li>5'-GCCATAATGGCAAAGA-3'</li><li>5'-CACCACTGGGATGTGG-3'</li></ul>Before beginning my experiment, I want to test them in bioinformatics. For that, I search in the NCBI database <input type="text" size=10 name="item6" value="<?php echo $id6; ?>"></input> the sequences of the X and Y genes and filter the results with RefSeq. Thus, I download two entries of the X and Y genes corresponding to the locus (or entry name) <input type="text" size=12 name="item7" value="<?php echo $id7; ?>"></input> and <input type="text" size=12 name="item8" value="<?php echo $id8; ?>"></input>, respectively.</p>
<input style="float:right;border:1px solid;" type="submit" name="OK" value="Next"></input>
<?php
}
else if ($page==2) {
?>
<input type="hidden" name="page" value="2"></input>
<p>Please, give me the lengths of the X and Y amplimers (amplified products) using this primer (Forward and Reverse, respectively)<ul><li>5'-GCCATAATGGCAAAGA-3'</li><li>5'-CACCACTGGGATGTGG-3'</li></ul>Just to remind you, the simplest way is to locally align these two short sequences with the gene sequence. Thus, the Forward has a perfect match with X gene at location <input type="text" size=10 name="item9" value="<?php echo $id9; ?>"></input>and the Reverse at <input type="text" size=10 name="item10" value="<?php echo $id10; ?>"></input>.<br>
The Forward has a perfect match with Y gene at location <input type="text" size=10 name="item11" value="<?php echo $id11; ?>"></input>and the Reverse at <input type="text" size=10 name="item12" value="<?php echo $id12; ?>"></input>.<br></p>
<input style="float:right;border:1px solid;" type="submit" name="OK" value="Next"></input>
<?php
}
else if ($page==3) {
?>
<input type="hidden" name="page" value="3"></input>
To compute the lengths of the amplimers for the X and Y genes, you need the total length of your gene sequence. Then, the formula is <code>length = (L-R+1) - F +1</code><br> Thus, they are respectively <input type="text" size=10 name="item13" value="<?php echo $id13; ?>"></input>bp and <input type="text" size=10 name="item14" value="<?php echo $id14; ?>"></input>bp.  </p>
<input style="float:right;border:1px solid;" type="submit" name="OK" value="Next"></input>
<?php
}
else if ($page==4) {
?>
<input type="hidden" name="page" value="4"></input>
<p>The previous primer isn't good because the X and Y amplimers are of the exact same lengths. We need a primer producing different amplimers for the X and Y genes. Here is a list of various primers...
<ul>
<li>A
<ul style="font-size:10px"><li>5'-TATTTGGACTCTCTCTGAGGA-3'</li><li>5'-TTCTACTACAAGGGTGTTGCA-3'</li></ul>
<li>B
<ul style="font-size:10px"><li>5'-CTGGAGAGCCACAAGCTGAC-3'</li><li>5'-TTGCTGTGGACTGCCAAGAG-3'</li></ul>
<li>C
<ul style="font-size:10px"><li>5'-ATAAGTATCGACCTCGTCGGAAG-3'</li><li>5'-GCACTTCGCTGCAGAGTACCGAAG-3'</li></ul>
<li>D
<ul style="font-size:10px"><li>5'-CCCTGGGCTCTGTAAAGAATAGTG-3'</li><li>5'-ATCAGAGCTTAAACTGGGAAGCTG-3'</li></ul>
<li>E
<ul style="font-size:10px"><li>5'-ATGATAGAAACGGAAATATG-3'</li><li>5'-AGTAGAATGCAAAGGGCTC-3'</li></ul>
</ul>
The best primer is <input type="text" size=3 name="item15" value="<?php echo $id15; ?>"></input> producing for X <input type="text" size=4 name="item16" value="<?php echo $id16; ?>"></input>bp and for Y <input type="text" size=4 name="item17" value="<?php echo $id17; ?>"></input>bp.<br>
<b>Note</b>: There is an EMBOSS tool to do that very quickly...<br>
</p>
<input style="float:right;border:1px solid;" type="submit" name="OK" value="Next"></input>
<?php
}
else if ($page==5) {
?>
<input type="hidden" name="page" value="5"></input>
<p>I chose the primer you selected, did the PCR and I get this elecrophoresis gel. Is it a male or female tooth?<br>
<img src="gel.jpg"></img>
<br>Sex:<input type="text" size=6 name="sex" value="<?php echo $sex; ?>"></input><br>
</p>
<input style="float:right;border:1px solid;" type="submit" name="OK" value="OK"></input>
<?php
}
else if ($page==6) {
?>

<p>Congratulations!! The code for the mini-game is 'enamel.php'<br></p>

<?php
}
?>

*******************************/


