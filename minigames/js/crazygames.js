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
 
