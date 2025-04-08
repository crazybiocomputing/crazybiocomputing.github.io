var sample=0;
var joker=false;
var emptybubble={'x':0,'y':0};

function doIt() {
console.log(data);
}

var data=[
'>GENE1-monkey| monkey\n'+
'ATTTCCTGGGAGAGGTGGCTGGTGGTCTGCAAGCCCTTTGGCAACGTGAGATTTGATGCCAAGCTCGCCATCGTGGGCATT\n'+
'GCCTTCTCCTGGATCTGGTCTGCCGTGTGGACGGCCGGCCCAGATGTGTTCAGTGGCAGCTCGTACCCCGGGGTGCAGTCT\n'+
'TACATGATTGTCCTCATGGTCACCTGCTGCATCATTCCACTGGCTATCATCATGCTCTGCTACCTCAAGTGACGCGCATGG\n'+
'TGATGGTGATGATCTTCGCATACTGCGTCTGCTGGGGACCCTACACCTTCTTCGCATGCTTTGCTGCTGCCAACCCTGGCT\n'+
'ACGCCTTCCACCCTCTGATGGCTGCCCTGCCAGCCTACTTTGCCAAAAGT\n',
'>GENE2-monkey| monkey\n'+
'ATTTCCTGGGAGAGATGGATGGTGGTCTGCAAGCCCTTTGGCAACGTGAGATTTGATGCCAAGCTGGCCATTGTGGGAGTT\n'+
'GCCTTCTCCTGGATCTGGGCTGCTGTGTGGACAGCCGGCCCAGATGTGTTCAGTGGCAGCTCGTACCCCGGGGTGCAGTCT\n'+
'TACATGATTGTCCTCATGGTCACCTGCTGCATCACCCCACTCACCATCATCGTGCTCTGCTACCTCAAGTGACGCGCATGG\n'+
'TGGTGGTGATGTTCCTGGCGTTCTGCTTCTGCTGGGGACCCTACGCCTTCTTCGCATGCTTTGCTGCTGCCAACCCTGGCT\n'+
'ACGCCTTCCACCCTCTGATGGCTGCCCTGCCAGCCTACTTTGCCAAAAGT\n'
];


function checkTree() {
  var tree=document.getElementById('tree').value;
  tree = tree.replace(/(\r\n|\n|\r)/gm,"");
  console.log(tree);
  var regexp = new RegExp("([ML]WS)","g");
  var arr=tree.match(regexp);
  var answer=arr.join();
  console.log(answer);
  var regexp = new RegExp("([ML]WS-[a-zA-Z]+)","g");
  var species=tree.match(regexp);
  console.log(arr);
  
  // win? = step #2
  if (answer === "MWS,MWS,MWS,MWS,MWS,LWS,LWS,LWS,LWS,LWS" || answer === "LWS,LWS,LWS,LWS,LWS,MWS,MWS,MWS,MWS,MWS") {
    whichSpecies();
  }
  else {
    document.getElementById('chat').innerHTML='<p>There is something wrong in you tree... Try again</p>';
  }

}

function whichSpecies() {
  var dialog='<p>Great!!, Nice work but to study the evolution of genes, we need a timescale in this tree and your graph is unrooted.</p>'+
    'To root this tree, you need to add an outgroup &mdash; that means a group outside these species &mdash;</p>'+
    'Among these species, which one is the best suited for your project...</p>';
  dialog += ' <div id="species_left" style="float:left;width:300px"><ul>';
  for (var i=0; i< data.length/2; i++) {
    dialog += '<li>'+data[i]+'</li>';
  }
  dialog += '</ul></div>';
  dialog += '<div id="species_right"><ul>';
  console.log(data.length/2);
  for (var i=Math.floor(data.length/2); i< data.length; i++) {
    dialog += '<li>'+data[i]+'</li>';
  }
  dialog += '</ul></div>';
  document.getElementById('chat').innerHTML= dialog; 

  // Species textfield
  var text='<br><br><p><input id="species" type="text" value="Enter species" size="40"></input>'+
    '<input type="button" value="Submit" onclick="javascript:checkSpecies()"></input></p>'; 
  document.getElementById('result').innerHTML= text;
}

function checkSpecies() {
  var value=document.getElementById('species').value.toLowerCase().trim();
  console.log(value);
  if (value === 'gallus gallus') {
    document.getElementById('chat').innerHTML=
      'That sounds logical... but to be sure, go to the TAXONOMY databank and get the most recent common ancestor to the human and chicken...';
    document.getElementById('result').innerHTML=
      '<p><input id="ancestor" type="text" value="Enter common ancestor" size="40"></input>'+
      '<input type="button" value="Submit" onclick="javascript:checkProof()"></input></p>';
  }
  else {
    document.getElementById('chat').innerHTML=
      'Unfortunately, this species belongs to the Primates and cannot be used as an outside group.'+
      ' Reload the web page and try again...';
    document.getElementById('result').innerHTML='';
  }

}




function checkFinal() {
  var e = document.getElementById("family"); 

  if (document.getElementById('item00').value.toLowerCase().trim() === 'old' && e.options[e.selectedIndex].value  === 'P') {
    document.getElementById('chat').innerHTML=
      '<p>Congratulations!!</p><br><p>Then, click <a href="fireworks.php">here</a> to go to the next mini-game.</p>';

    document.getElementById('result').innerHTML='';
  }
  else {
    document.getElementById('chat').innerHTML='Wrong answer... Reload the web page and try again...';
    document.getElementById('result').innerHTML='';
  }

}

function checkLast() {

  if (document.getElementById('item0').value.toLowerCase().trim() === 'different' 
   && document.getElementById('item1').value.toLowerCase().trim() === 'divergence'
   && document.getElementById('item2').value.toLowerCase().trim() === 'duplication' ) {
    document.getElementById('chat').innerHTML=
      '<p>Congratulations!!</p><br><p>Ohh!! ...last question...</p>'+
      '<p>I have these two sequences of opsin genes and I would like to know if they belong to a new or old world monkey...</p>'+
      '<pre style="font-size:12px">'+data[0]+'</pre><p>and...</p>'+
      '<pre style="font-size:12px">'+data[1]+'</pre><p></p>';


    document.getElementById('result').innerHTML='<br><br>'+
      '<p>According to the cladogram, this animal is a '+ 
      '<input id="item00" rows="6" size="8" value="Old or New"></input> World monkey likely belonging to '+
      '<select id="family">'+
      '<option selected="selected" value="X">unknown</option>'+
      '<option value="C">Callitrichidae</option>'+
      '<option value="E">Cebidae</option>'+
      '<option value="P">Cercopithecidae</option>'+
      '<option value="C">Cheirogaleidae</option>'+
      '<option value="D">Daubentoniidae</option>'+
      '<option value="G">Galagonidae</option>'+
      '<option value="Y">Hylobatidae</option>'+
      '<option value="H">Hominidae</option>'+
      '<option value="I">Indridae</option>'+
      '<option value="L">Lemuridae</option>'+
      '<option value="O">Loridae</option>'+
      '<option value="T">Tarsiidae</option>'+
      '</select>'+
      ' family.</p>'+
      '<p><input type="button" value="Submit" onclick="javascript:checkFinal()"></input></p>';
  }
  else {
    document.getElementById('chat').innerHTML='Wrong answer... Reload the web page and try again...';
    document.getElementById('result').innerHTML='';
  }

}




