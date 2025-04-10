var sample=0;
var joker=false;
var emptybubble={'x':0,'y':0};

function doIt() {
  console.log(sessionStorage.getItem("life_section") );
  if (sessionStorage.getItem("life_section") != null) {
    switch (sessionStorage.getItem("life_section") ) {
    case '1':
      whichSpecies();
      break;
    case '2':
      whichAncestor();
      break;
    case '3':
      whichEvolution();
      break;
    }

  }
}

var data=[
  'Propithecus verreauxi',
  'Loris tardigradus',
  'Colobus vellerosus',
  'Saguinus mystax',
  'Nycticebus pygmaeus',
  'Lagothrix cana',
  'Otolemur crassicaudatus',
  'Saimiri sciureus',
  'Aotus trivirgatus',
  'Alouatta coibensis',
  'Galago gallarum',
  'Saimiri ustus',
  'Gallus gallus',
  'Lagothrix poeppigii',
  'Colobus guereza',
  'Leontopithecus caissara',
  'Varecia variegata',
  'Cercopithecus wolfi',
  'Saimiri vanzolinii',
  'Perodicticus potto',
  'Tarsius syrichta',
  'Callithrix humilis',
  'Otolemur monteiri',
  'Aotus brumbacki',
  'Cebuella pygmaea',
  'Callimico goeldii',
  'Cercopithecus solatus',
  'Leontopithecus chrysomelas',
  'Euoticus pallidus',
  'Presbytis femoralis',
  'Colobus polykomos',
  'Daubentonia madagascariensis',
  'Cercopithecus neglectus'
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
    sessionStorage.setItem("life_section",1);
    whichSpecies();
  }
  else {
    document.getElementById('chat').innerHTML='<p>There is something wrong in you tree... Try again</p>';
  }

}

function whichSpecies() {
  var dialog='<p>Great!! Nice work but to study the evolution of genes, we need a timescale in this tree and your graph is unrooted.</p>'+
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
    sessionStorage.setItem("life_section",2);
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

function whichAncestor() {
  document.getElementById('chat').innerHTML=
      'That sounds logical... but to be sure, go to the TAXONOMY databank and get the most recent common ancestor to the human and chicken...';
  document.getElementById('result').innerHTML=
      '<p><input id="ancestor" type="text" value="Enter common ancestor" size="40"></input>'+
      '<input type="button" value="Submit" onclick="javascript:checkProof()"></input></p>';

}

function checkProof() {
  var value=document.getElementById('ancestor').value.toLowerCase().trim(); 
  if (value === 'amniota') {
    sessionStorage.setItem("life_section",3);
    document.getElementById('chat').innerHTML=
      '<p>Congratulations!!<p>The chicken is a good choice because it is a descendant of Dinosaur and human of Primates.</p>'+
      '<p>Now, download the chicken opsin  - named iodopsin - nucleotide sequence from our lab-made databank of <i>Hominoidea</i>... </p>'+
      '<p>Then, compute again the tree with all the hominoidae species AND the chicken to root your tree...</p>'+
      '<p>Finally, conclude in terms of evolution of these genes...</p>';

    document.getElementById('result').innerHTML=
      '<p>The oldest gene is <input id="gene" rows="6" size="4" value="MWS or LWS"></input></p>'+
      '<p>In this case, the gene evolution corresponds to a '+
      '<input id="item1" rows="6" size="8" value="duplication or divergence"></input> followed by a '+
      '<input id="item2" rows="6" size="8" value="duplication or divergence"></input>.</p>'+
      '<p><input type="button" value="Submit" onclick="javascript:checkLast()"></input></p>';
  }
  else {
    document.getElementById('chat').innerHTML='Wrong answer... Reload the web page and try again...';
    document.getElementById('result').innerHTML='';
  }
}

function whichEvolution() {
  document.getElementById('chat').innerHTML=
      '<p>Congratulations!!<p>The chicken is a good choice because it is a descendant of Dinosaur and human of Primates.</p>'+
      '<p>Now, download the chicken opsin  - named iodopsin - nucleotide sequence from our lab-made databank of <i>Hominoidea</i>... </p>'+
      '<p>Then, compute again the tree with all the hominoidae species AND the chicken to root your tree...</p>'+
      '<p>Finally, conclude in terms of evolution of these genes...</p>';

  document.getElementById('result').innerHTML=
      '<p>The oldest gene is <input id="gene" rows="6" size="4" value="MWS or LWS"></input></p>'+
      '<p>In this case, the gene evolution corresponds to a '+
      '<input id="item1" rows="6" size="8" value="duplication or divergence"></input> followed by a '+
      '<input id="item2" rows="6" size="8" value="duplication or divergence"></input>.</p>'+
      '<p><input type="button" value="Submit" onclick="javascript:checkLast()"></input></p>';

}

/********
function checkFinal() {
  if (value === 'amniota') {
    document.getElementById('chat').innerHTML=
      '<p>Congratulations!!</p><br><p>Then, click <a href="deadoralive.php">here</a> to go to the next mini-game.</p>';

    document.getElementById('result').innerHTML='';
  }
  else {
    document.getElementById('chat').innerHTML='Wrong answer... Reload the web page and try again...';
    document.getElementById('result').innerHTML='';
  }

}
*********/


function checkLast() {
  if (document.getElementById('gene').value.toUpperCase().trim()  === 'LWS' 
   && document.getElementById('item1').value.toLowerCase().trim() === 'duplication'
   && document.getElementById('item2').value.toLowerCase().trim() === 'divergence' ) {
    document.getElementById('chat').innerHTML=
      '<p>Congratulations!!</p><br><p>Then, click <a href="deadoralive.php">here</a> to go to the next mini-game.</p>';

    document.getElementById('result').innerHTML='';
  }
  else {
    document.getElementById('chat').innerHTML='Wrong answer... Reload the web page and try again...';
    document.getElementById('result').innerHTML='';
  }

}




