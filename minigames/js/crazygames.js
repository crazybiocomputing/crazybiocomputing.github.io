let output = document.getElementById('levels');
let html = '';
for (let i=1; i < titles.length; i++) {
  html += '<h2>Level #'+i+':&nbsp;'+titles[i]+'</h2>';
  html +='<table><tr>';
  for (let j = 0; j < minigames.length; j++) {
    if (minigames[j].level === i) {       
      html +='<td><a href="'+minigames[j].url+'"><img src="../img/thumbnail_unknown.png"></a></td>';
    }

  }
  html +='</tr></table>';
}
output.innerHTML = html;
 
function next_game() {
  console.log(localStorage);
  let index = localStorage.crazybio_accession;
  let nextID = minigames[index].next;
  let i = 0;
  while (minigames[i].ID !== nextID && i < minigames.length ) {
    i++;
  }
  // Redirect to the next game
  document.location.href = '../'+minigames[i].url;
}
