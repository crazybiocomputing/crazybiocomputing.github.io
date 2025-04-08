
function doIt() {
console.log(data);
}

var results=[];

var data=[
{
id:'xzy00',
organism:'pan troglodytes',
title:'long-wave-sensitive red cone pigment (opsin)',
gene_name:'xxx',
fasta:
  '>LWS-Pan|opsin 1 long wave sensitive|green cone pigment|Pan troglodytes|partial DNA\n'+
  'ATTTCCTGGGAGAGGTGGCTGGTGGTGTGCAAGCCCTTTGGCAATGTGAGATTTGATGCCAAGCTGGCCATCATTGGCAT\n'+
  'TGCCTTCTCCTGGATCTGGTCTGCTGTGTGGACAGCCGGCCCAGACGTGTTCAGCGGCAGCTCGTACCCCGGGGTGCAGT\n'+
  'CTTACATGATTGTCCTCATGGTCACCTGCTGCATCATCCCACTCGCTATCATCATGCTCTGCTACCTCAAGTGACGCGCA\n'+
  'TGGTGGTGGTGATGATCTTTGCGTACTGCGTCTGCTGGGGACCCTACACCTTCTTCGCATGCTTTGCTGCTGCCAACCCT\n'+
  'GGCTACGCCTTCCACCCTTTGATGGCTGCCCTGCCGGCCTACTTTGCCAAAAGT\n'
},
{
id:'xzy00',
organism:'pan troglodytes',
title:'medium-wave-sensitive green cone pigment (opsin)',
gene_name:'xxx',
fasta:
'>MWS-Pan|opsin 1 medium wave sensitive|green cone pigment|Pan troglodytes|partial DNA\n'+
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
'>LWS-Gorilla|opsin 1 long wave sensitive|Gorilla gorilla|partial DNA\n'+
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
'>MWS-Gorilla|opsin 1 medium wave sensitive|Gorilla gorilla|partial DNA\n'+
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
'>LWS-Human|opsin 1 long wave sensitive|Homo sapiens|partial DNA\n'+
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
'>MWS-Human|opsin 1 medium wave sensitive|Homo sapiens|partial DNA\n'+
'ATTTCCTGGGAGAGATGGATGGTGGTCTGCAAGCCCTTTGGCAATGTGAGATTTGATGCCAAGCTGGCCATCGTGGGCAT\n'+
'TGCCTTCTCCTGGATCTGGGCTGCTGTGTGGACAGCCGGCCCAGACGTGTTCAGCGGCAGCTCGTACCCCGGGGTGCAGT\n'+
'CTTACATGATTGTCCTCATGGTCACCTGCTGCATCACCCCACTCAGCATCATCGTGCTCTGCTACCTCAAGTGACGCGCA\n'+
'TGGTGGTGGTGATGGTCCTGGCATTCTGCTTCTGCTGGGGACCATACGCCTTCTTCGCATGCTTTGCTGCTGCCAACCCT\n'+
'GGCTACCCCTTCCACCCTTTGATGGCTGCCCTGCCGGCCTTCTTTGCCAAAAGT\n'
},
{
id:'xzy00',
organism:'cercopithecus diana',
title:'medium-wave-sensitive green cone pigment opsin - Cercopithecus diana',
gene_name:'xxx',
fasta:
'>MWS-Diana|opsin 1 medium wave sensitive|Cercopithecus diana|partial DNA\n'+
'ATTTCCTGGGAGAGATGGATGGTGGTCTGCAAGCCCTTTGGCAACGTGAGATTTGATGCCAAGCTCGCCATCGTGGGCAT\n'+
'TGCCTTCTCCTGGGTATGGGCTGCTGTGTGGACGGCCGGCCCAGATGTGTTCAGTGGCAGCTCGTACCCCGGGGTGCAGT\n'+
'CTTACATGATTGTCCTCATGGTCACCTGCTGCATCACCCCACTCACCATCATCGTGCTCTGTTACCTCAAGTGACGCGCA\n'+
'TGGTGGTGGTGATGTTCCTGGCGTTCTGCTTCTGCTGGGGACCTTACGCCTTCTTCGCATGCTTTGCTGCTGCCAACCCT\n'+
'GGCTACGCCTTCCACCCTCTGATGGCTGCCTTGCCAGCCTACTTTGCCAAAAGT\n'
},
{
id:'xzy00',
organism:'cercopithecus diana',
title:'Long-wave-sensitive red (cone pigment) opsin - Cercopithecus diana',
gene_name:'xxx',
fasta:
'>LWS-Diana|opsin 1 long wave sensitive|Cercopithecus diana|partial DNA\n'+
'ATTTCCTGGGAGAGGTGGCTGGTGGTCTGCAAGCCCTTTGGCAACGTGAGATTTGATGCCAAGCTCGCCATCGTGGGCAT\n'+
'TGCCTTCTCCTGGATCTGGTCTGCTGTGTGGACGGCCGGCCCAGATGTGTTCAGTGGCAGCTCGTACCCCGGGGTGCAGT\n'+
'CTTACATGATTGTCCTCATGGTCACCTGCTGCATCATTCCACTGGCTATCATCATGCTCTGCTACCTCAAGTGACGCGCA\n'+
'TGGTGATGGTGATGATCTTCGCGTACTGCGTCTGCTGGGGACCCTACACCTTCTTCGCATGCTTTGCTGCTGCCAACCCT\n'+
'GGCTACGCCTTCCACCCTCTGATGGCTGCCTTGCCAGCCTACTTTGCCAAAAGT\n'
},
{
id:'xzy00',
organism:'miopithecus talapoin',
title:'Medium-wave-sensitive green (cone pigment) opsin - Miopithecus talapoin',
gene_name:'xxx',
fasta:
'>MWS-talapoin|opsin 1 medium wave sensitive|Miopithecus talapoin|partial DNA\n'+
'ATTTCCTGGGAGAGATGGATGGTGGTCTGCAAGCCCTTTGGCAACGTGAGATTTGATGCCAAGCTCGCCATCGTGGGCAT\n'+
'TGTCTTCTCCTGGGTATGGGCTGCTGTGTGGACAGCCGGCCCAGATGTGTTCAGTGGCAGCTCGTACCCCGGGGTGCAGT\n'+
'CTTACATGATTGTCCTCATGGTCACCTGCTGCATCACCCCACTCACCATCATCGTGCTCTGCTACCTCAAGTGACGCGCA\n'+
'TGGTGGTGGTGATGTTCCTGGCGTTCTGCTTCTGCTGGGGACCTTACGCCTTCTTCGCATGCTTTGCTGCTGCCAACCCT\n'+
'GGCTACGCCTTCCACCCTCTGATGGCTGCCTTGCCAGCCTACTTTGCCAAAAGT\n'
},
{
id:'xzy00',
organism:'miopithecus talapoin',
title:'Long-wave-sensitive red (cone pigment) opsin - Miopithecus talapoin',
gene_name:'xxx',
fasta:
'>LWS-talapoin|opsin 1 long wave sensitive|Miopithecus talapoin|partial DNA\n'+
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
gene_name:'xxx',
fasta:
'>IOP-Chicken|iodopsin|Gallus gallus|partial DNA\n'+
'ATTTCGTGGGAGCGGTGGTTCGTGGTGTGCAAACCGTTCGGGAACATCAAATTCGACGGGAAGTTGGCGGTGGCGGGAAT\n'+
'CCTCTTCTCCTGGCTGTGGTCCTGCGCGTGGACCGCCGGCCCGGATGTGTTCAGCGGCAGCTCCGACCCGGGGGTGCAGTC\n'+
'CTACATGGTGGTGCTGATGGTCACGTGCTGCTTCTTCCCCCTCGCCATCATCATCCTCTGCTACCTGCAAGTGACGCGCAT\n'+
'GGTGGTGGTGATGATCGTGGCCTACTGCTTCTGCTGGGGGCCCTACACCTTCTTCGCCTGCTTCGCCGCCGCCAACCCCGG\n'+
'CTACGCCTTCCACCCCCTGGCGGCCGCCCTGCCCGCCTACTTCGCCAAGT\n'
},
{
id:'xzy00',
organism:'alouatta seniculus',
title: 'long-wave-sensitive red (cone pigment) opsin',
gene_name:'xxx',
fasta:
'>LWS-Howler|opsin 1 long wave sensitive|Alouatta seniculus|partial DNA\n'+
'ATTTCCTGGGAGAGGTGGCTGGTTGTCTGCAAGCCCTTTGGCAATGTGAGATTTGATGCCAAGCTGGCTATCGTGGGAGT\n'+
'TGCCTTCTCCTGGATCTGGTCTGCTGTGTGGACGGCCGGCCCAGACGTGTTCAGTGGCAGCTCATACCCCGGGGTGCAGT\n'+
'CTTACATGATCGTCCTCATGATCACATGCTGCTTCCTCCCACTCGGCATCATTGAGCTCTGCTACCTCCAAGTGACGCGC\n'+
'ATGGTGGTGGTGATGATCATGGCTTACTGCGTCTGCTGGGGACCCTACACCTTCTTCGCATGCTTTGCTGCTGCCAACCC\n'+
'TGGCTACGCCTTCCACCCTCTGATGGCTGCCCTGCCAGCCTACTTTGCCAAAAGT\n'
},
{
id:'xzy00',
organism:'alouatta seniculus',
title: 'medium-wave-sensitive green (cone pigment) opsin',
gene_name:'xxx',
fasta:
'>MWS-Howler|opsin 1 medium wave sensitive|Alouatta seniculus|partial DNA\n'+
'ATTTCCTGGGAGAGGTGGCTGGTTGTCTGCAAGCCCTTTGGCAATGTGAGATTTGATGCCAAGCTGGCTATCGTGGGAGTT\n'+
'GCCTTCTCCTGGATCTGGGCTGCTGTATGGACGGCCGGCCCAGACGTGTTCAGTGGCAGCTCATACCCCGGGGTGCAGTCT\n'+
'TACATGATCGTCCTCGTGATCACATGCTGCATCCTTCCACTCAGCATCATTGTGCTCTGCTACCTCCAATGACGCGCATGG\n'+
'TGGTGGTGATGATCATAGCGTTCTGCGTCTGCTGGGGACCCTACGCCTTCTTCGCATGCTTTGCTGCTGCCAACCCTGGCT\n'+
'ACGCCTTCCACCCTCTGATGGCTGCCCTGCCAGCCTACTTTGCCAAAAGT\n'
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


  var hits = answer.replace(/(\r\n|\n|\r)/gm,"");
  var regexp = new RegExp("([ML]WS-[a-zA-Z]+)","g");
  var arr=hits.match(regexp);
  if (arr != null) {
    console.log(arr);
    results = results.concat(arr).unique();
    results = results.sort();
    console.log(results.join().toLowerCase() );
  }

  if (results.join().toLowerCase() === "lws-diana,lws-gorilla,lws-human,lws-pan,lws-talapoin,mws-diana,mws-gorilla,mws-human,mws-pan,mws-talapoin") {
    document.getElementById('chat').innerHTML=
      '<p>Great!! You found all the sequences...</p><br><p>Click <a href="philosophy.php">here</a> to go to the next mini-game.</p>';

    document.getElementById('engine').innerHTML='';
    document.getElementById('result').innerHTML='';

  }
  else if (answer === '') {
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

Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

