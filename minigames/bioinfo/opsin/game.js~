var sample=0;
var joker=false;
var emptybubble={'x':0,'y':0};

function doIt() {
console.log(data);
}

var data=[
{
id:'xzy00',
organism:'pan troglodytes',
title:'long-wave-sensitive red cone pigment',
gene_name:'xxx',
fasta:
  '>LWS opsin|green cone pigment|Pan troglodytes|partial DNA\n'+
  'ATTTCCTGGGAGAGGTGGCTGGTGGTGTGCAAGCCCTTTGGCAATGTGAGATTTGATGCCAAGCTGGCCATCATTGGCAT\n'+
  'TGCCTTCTCCTGGATCTGGTCTGCTGTGTGGACAGCCGGCCCAGACGTGTTCAGCGGCAGCTCGTACCCCGGGGTGCAGT\n'+
  'CTTACATGATTGTCCTCATGGTCACCTGCTGCATCATCCCACTCGCTATCATCATGCTCTGCTACCTCAAGTGACGCGCA\n'+
  'TGGTGGTGGTGATGATCTTTGCGTACTGCGTCTGCTGGGGACCCTACACCTTCTTCGCATGCTTTGCTGCTGCCAACCCT\n'+
  'GGCTACGCCTTCCACCCTTTGATGGCTGCCCTGCCGGCCTACTTTGCCAAAAGT\n'
},
{
id:'xzy00',
organism:'pan troglodytes',
title:'medium-wave-sensitive green cone pigment',
gene_name:'xxx',
fasta:
'>MWS opsin|green cone pigment|Pan troglodytes|partial DNA\n'+
'ATTTCCTGGGAGAGATGGATGGTGGTCTGCAAGCCCTTTGGCAACGTGAGATTTGATGCCAAGCTGGCCATCGTGGGCAT\n'+
'TGTCTTCTCCTGGGTCTGGGCTGCTGTGTGGACAGCCGGCCCAGATGTGTTCAGTGGCAGCTCGTACCCCGGGGTGCAGT\n'+
'CTTACATGATCGTCCTCATGATCACATGCTGCTTCCCCCCACTCAGCATCATTGTGCTCTGCTACCTCAAGTGACGCGCA\n'+
'TGGTGGTGGTGATGGTCCTGGCATTCTGCTTCTGCTGGGGACCGTATGCCTTCTTCGCATGCTTTGCTGCTGCCAACCCT\n'+
'GGCTACCCCTTCCACCCTTTGATGGCTGCCCTGCCGGCCTTCTTTGCCAAAAGT\n'
},

{
id:'xzy00',
organism:'gorilla gorilla',
title:'LWS opsin',
gene_name:'xxx',
fasta:
'>LWS opsin|Gorilla gorilla|partial DNA\n'+
'ATTTCCTGGGAGAGGTGGCTGGTGGTGTGCAAGCCCTTTGGCAACGTGAGATTTGATGCCAAGCTGGCCATCATTGGCAT\n'+
'TGCCTTCTCCTGGATCTGGTCTGCTGTGTGGACAGACGGCCCAGATGTGTTCAGCGGCAGCTCGTACCCCGGGGTGCAGT\n'+
'CTTACATGATTGTCCTCATGATCACCTGCTGCATCATCCCACTCGCCATCATCGTGCTCTGCTACCTCAAGTGACGCGCA\n'+
'TGGTGGTGGTGATGATCTTTGCGTACTGCGTCTGCTGGGGACCCTACACCTTCTTCGCATGCTTTGCTGCTGCCAACCCT\n'+
'GGCTACGCCTTCCACCCTTTGATGGCTGCCCTGCCGGCCTACTTTGCCAAAAGT\n'
},
{
id:'xzy00',
organism:'gorilla gorilla',
title:'MWS opsin',
gene_name:'xxx',
fasta:
'>MWS_Gorilla_Gorilla_gorilla|partial DNA\n'+
'ATTTCCTGGGAGAGATGGATGGTGGTCTGCAAGCCCTTTGGCAACGTGAGATTTGATGCCAAGCTGGCCATCGTGGGCAT\n'+
'TGCCTTCTCCTGGGTCTGGGCTGCTGTGTGGACAGCCGGCCCAGATGTGTTCAGCGGCAGCTCGTACCCCGGGGTGCAGT\n'+
'CTTACATGATTGTCCTCATGATCACCTGCTGCATCACCCCACTCAGCATCATCGTGCTCTGCTACCTCAAGTGACGCGCA\n'+
'TGGTGGTGGTGATGGTCCTGGCATTCTGCTTCTGCTGGGGACCCTACGCCTTCTTCGCATGCTTTGCTGCTGCGAACCCT\n'+
'GGCTACGCCTTCCACCCTTTGATGGCTGCCCTGCCGGCCTTCTTTGCCAAAAGT\n'
},
{
id:'xzy00',
organism:'homo sapiens',
title:'long-wave-sensitive red cone pigment opsin (OPN1LW)',
gene_name:'OPN1LW',
fasta:
'>LWS_Human|Homo sapiens|partial DNA\n'+
'ATTTCCTGGGAGAGGTGGCTGGTGGTGTGCAAGCCCTTTGGCAATGTGAGATTTGATGCCAAGCTGGCCATCGTGGGCAT\n'+
'TGCCTTCTCCTGGATCTGGTCTGCTGTGTGGACAGCCGGCCCAGACGTGTTCAGCGGCAGCTCGTACCCCGGGGTGCAGT\n'+
'CTTACATGATTGTCCTCATGGTCACCTGCTGCATCATCCCACTCGCTATCATCATGCTCTGCTACCTCAAGTGACGCGCA\n'+
'TGGTGGTGGTGATGATCTTTGCGTACTGCGTCTGCTGGGGACCCTACACCTTCTTCGCATGCTTTGCTGCTGCCAACCCT\n'+
'GGTTACGCCTTCCACCCTTTGATGGCTGCCCTGCCGGCCTACTTTGCCAAAAGT\n'
},
{
id:'xzy00',
organism:'homo sapiens',
title:'medium-wave-sensitive green cone pigment opsin (OPN1MW)',
gene_name:'OPN1MW',
fasta:
'>MWS_Human|Homo sapiens|partial DNA\n'+
'ATTTCCTGGGAGAGATGGATGGTGGTCTGCAAGCCCTTTGGCAATGTGAGATTTGATGCCAAGCTGGCCATCGTGGGCAT\n'+
'TGCCTTCTCCTGGATCTGGGCTGCTGTGTGGACAGCCGGCCCAGACGTGTTCAGCGGCAGCTCGTACCCCGGGGTGCAGT\n'+
'CTTACATGATTGTCCTCATGGTCACCTGCTGCATCACCCCACTCAGCATCATCGTGCTCTGCTACCTCAAGTGACGCGCA\n'+
'TGGTGGTGGTGATGGTCCTGGCATTCTGCTTCTGCTGGGGACCATACGCCTTCTTCGCATGCTTTGCTGCTGCCAACCCT\n'+
'GGCTACCCCTTCCACCCTTTGATGGCTGCCCTGCCGGCCTTCTTTGCCAAAAGT\n'
},
{
id:'xzy00',
organism:'cercopithecus diana',
title:'MWS opsin',
gene_name:'xxx',
fasta:
'>Cercopithecus diana MWS|partial DNA\n'+
'ATTTCCTGGGAGAGATGGATGGTGGTCTGCAAGCCCTTTGGCAACGTGAGATTTGATGCCAAGCTCGCCATCGTGGGCAT\n'+
'TGCCTTCTCCTGGGTATGGGCTGCTGTGTGGACGGCCGGCCCAGATGTGTTCAGTGGCAGCTCGTACCCCGGGGTGCAGT\n'+
'CTTACATGATTGTCCTCATGGTCACCTGCTGCATCACCCCACTCACCATCATCGTGCTCTGTTACCTCAAGTGACGCGCA\n'+
'TGGTGGTGGTGATGTTCCTGGCGTTCTGCTTCTGCTGGGGACCTTACGCCTTCTTCGCATGCTTTGCTGCTGCCAACCCT\n'+
'GGCTACGCCTTCCACCCTCTGATGGCTGCCTTGCCAGCCTACTTTGCCAAAAGT\n'
},
{
id:'xzy00',
organism:'cercopithecus diana',
title:'LWS opsin',
gene_name:'xxx',
fasta:
'>Diana_LWS Cercopithecus diana|partial DNA\n'+
'ATTTCCTGGGAGAGGTGGCTGGTGGTCTGCAAGCCCTTTGGCAACGTGAGATTTGATGCCAAGCTCGCCATCGTGGGCAT\n'+
'TGCCTTCTCCTGGATCTGGTCTGCTGTGTGGACGGCCGGCCCAGATGTGTTCAGTGGCAGCTCGTACCCCGGGGTGCAGT\n'+
'CTTACATGATTGTCCTCATGGTCACCTGCTGCATCATTCCACTGGCTATCATCATGCTCTGCTACCTCAAGTGACGCGCA\n'+
'TGGTGATGGTGATGATCTTCGCGTACTGCGTCTGCTGGGGACCCTACACCTTCTTCGCATGCTTTGCTGCTGCCAACCCT\n'+
'GGCTACGCCTTCCACCCTCTGATGGCTGCCTTGCCAGCCTACTTTGCCAAAAGT\n'
},
{
id:'xzy00',
organism:'miopithecus talapoin',
title:'MWS opsin',
gene_name:'xxx',
fasta:
'>MWS opsin|Miopithecus talapoin|partial DNA\n'+
'ATTTCCTGGGAGAGATGGATGGTGGTCTGCAAGCCCTTTGGCAACGTGAGATTTGATGCCAAGCTCGCCATCGTGGGCAT\n'+
'TGTCTTCTCCTGGGTATGGGCTGCTGTGTGGACAGCCGGCCCAGATGTGTTCAGTGGCAGCTCGTACCCCGGGGTGCAGT\n'+
'CTTACATGATTGTCCTCATGGTCACCTGCTGCATCACCCCACTCACCATCATCGTGCTCTGCTACCTCAAGTGACGCGCA\n'+
'TGGTGGTGGTGATGTTCCTGGCGTTCTGCTTCTGCTGGGGACCTTACGCCTTCTTCGCATGCTTTGCTGCTGCCAACCCT\n'+
'GGCTACGCCTTCCACCCTCTGATGGCTGCCTTGCCAGCCTACTTTGCCAAAAGT\n'
},
{
id:'xzy00',
organism:'miopithecus talapoin',
title:'MWS opsin',
gene_name:'xxx',
fasta:
'>LWS opsin|Miopithecus talapoin|partial DNA\n'+
'ATTTCCTGGGAGAGGTGGCTGGTGGTCTGCAAGCCCTTTGGCAACGTGAGATTTGATGCCAAGCTCGCCATCGTGGGCAT\n'+
'TGCTTTCTCCTGGATCTGGTCTGCTGTGTGGACAGCCGGCCCAGATGTGTTCAGTGGCAGCTCGTACCCCGGGGTGCAGT\n'+
'CTTACATGATTGTCCTCATGGTCACCTGCTGCATCATTCCACTGGCTATCATCATGCTCTGCTACCTCAAGTGACGCGCA\n'+
'TGGTGATGGTGATGATCTTCGCATACTGCGTCTGTTGGGGACCCTACACCTTCTTCGCATGCTTTGCTGCTGCCAACCCT\n'+
'GGCTACGCCTTCCACCCTCTGATGGCTGCCTTGCCAGCCTACTTTGCCAAAAGT\n'
},
{
id:'xzy00',
organism:'gallus gallus',
title:'iodopsin',
gene_name:'',
fasta:
'> Chicken iodopsin|Gallus gallus|partial DNA\n'+
'ATTTCGTGGGAGCGGTGGTTCGTGGTGTGCAAACCGTTCGGGAACATCAAATTCGACGGGAAGTTGGCGGTGGCGGGAAT\n'+
'CCTCTTCTCCTGGCTGTGGTCCTGCGCGTGGACCGCCGGCCCGGATGTGTTCAGCGGCAGCTCCGACCCGGGGGTGCAGTC\n'+
'CTACATGGTGGTGCTGATGGTCACGTGCTGCTTCTTCCCCCTCGCCATCATCATCCTCTGCTACCTGCAAGTGACGCGCAT\n'+
'GGTGGTGGTGATGATCGTGGCCTACTGCTTCTGCTGGGGGCCCTACACCTTCTTCGCCTGCTTCGCCGCCGCCAACCCCGG\n'+
'CTACGCCTTCCACCCCCTGGCGGCCGCCCTGCCCGCCTACTTCGCCAAGT\n'
}
];




function search() {
  var answer='';
  var count=1;
  var organism='';
  var title='xxx';
  var gene='';

  var e = null;
  e = document.getElementById("descr0"); 
  if (e.options[e.selectedIndex].value === "Organism") {
    organism = document.getElementById('keywd0').value.toLowerCase().trim();
  }
  else if (e.options[e.selectedIndex].value === "Title") {
    title = document.getElementById('keywd0').value.toLowerCase().trim();
  }
  else if (e.options[e.selectedIndex].value === "Gene Name") {
    gene = document.getElementById('keywd0').value.toUpperCase().trim();
  }
  else if (e.options[e.selectedIndex].value === "All Fields") {
    answer = 'toomuch';
  }

  e = document.getElementById("descr1"); 
  if (e.options[e.selectedIndex].value === "Organism") {
    organism = document.getElementById('keywd1').value.toLowerCase().trim();
  }
  else if (e.options[e.selectedIndex].value === "Title") {
    title = document.getElementById('keywd1').value.toLowerCase();
  }
  else if (e.options[e.selectedIndex].value === "Gene Name") {
    gene = document.getElementById('keywd1').value.toUpperCase().trim();
  }
  else if (e.options[e.selectedIndex].value === "All Fields") {
    answer = 'toomuch';
  }
  else if (e.options[e.selectedIndex].value === "Journal" && document.getElementById('keywd1').value === 'crazybio') {
    answer = 'all';
  }


  console.log ('Keys:'+organism + ','+ gene + ','+ title);

  if (answer !== 'all') {
  var regexp = new RegExp(title);

  for (var i=0; i< data.length; i++) {
    var seq=data[i];
    console.log(regexp.exec(seq.title) + ' '+ regexp.test(seq.title));
    if (seq.organism === organism && seq.gene_name === gene && regexp.test(seq.title) ) {
       answer += '<p style="color:#00A0FF">'+(count++)+'- '+seq.title+'</p><pre>'+seq.fasta+'</pre><br>';
    }
    else if (seq.organism === organism && seq.gene_name === gene) {
       answer += '<p style="color:#00A0FF">'+(count++)+'- '+seq.title+'</p><pre>'+seq.fasta+'</pre><br>';
    }
    else if (seq.organism === organism && regexp.test(seq.title) ) {
       answer += '<p style="color:#00A0FF">'+(count++)+'- '+seq.title+'</p><pre>'+seq.fasta+'</pre><br>';
    }
    else if (seq.organism === organism && regexp.test(seq.title) ) {
       answer += '<p style="color:#00A0FF">'+(count++)+'- '+seq.title+'</p><pre>'+seq.fasta+'</pre><br>';
    }
    else if (seq.organism === organism && title === 'xxx') {
      answer = 'toomuch';
    }
    else if (organism === '' && regexp.test(seq.title)) {
      answer = 'toomuch';
    }
  }

  }

  if (answer === '') {
    document.getElementById('result').innerHTML='<pre>No items found</pre>';
  }
  else if (answer === 'all') {
    for (var i=0; i< data.length; i++) {
      var seq=data[i];
      answer += '<p style="color:#00A0FF">'+(count++)+'- '+seq.title+'</p><pre>'+seq.fasta+'</pre><br>';
    }
    document.getElementById('result').innerHTML='<pre>Too much entries, the server is saturated. Cannot display results...</pre>';
  }
  else if (answer === 'toomuch') {
    document.getElementById('result').innerHTML='<pre>Too much entries, the server is saturated. Cannot display results...</pre>';
  }
  else {
    document.getElementById('result').innerHTML=answer;
  }

}



