let output = document.getElementById('levels');
let html = '';
for (let i=0; i < titles.length; i++) {
  html += '<h2>'+titles[i]+'</h2>';
  html +='<table><tr>';
  for (let j = 0; j < minigames.length; i++) {
    if (minigames[j].level === i) {       
      html +='<td><img src="../img/thumbnail_unknown.png"></td>';
    }

  }
  html +='</tr></table>';
}

