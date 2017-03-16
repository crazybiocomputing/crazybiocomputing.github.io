let menu = document.querySelector('header');
console.log(menu);
let family = 'bioinfo'; // Must be checked between ip and bioinfo
let url = window.location.href.substr(window.location.href.lastIndexOf(family + '/') + family.length + 1);
console.log(url);
var index = 0;
while (minigames[index].url !== url && index < minigames.length) {
  index++;
}
let level = minigames[index].level;
let gameIndex = minigames[index].index;
localStorage.setItem('crazybio_'+family+'_level', level);
localStorage.setItem('crazybio_'+family+'_game', gameIndex);
let html = `
<ul>
<li><a href="../index.html">[ H o m e ]</a></li>
<li><a href="help.html">[ H e l p ]</a></li>
<li><a href="history.html">&mdash; c&nbsp;&nbsp;r&nbsp;&nbsp;a&nbsp;&nbsp;z&nbsp;&nbsp;y
&nbsp;&nbsp;b&nbsp;&nbsp;i&nbsp;&nbsp;o
&nbsp;&nbsp;c&nbsp;&nbsp;o&nbsp;&nbsp;m&nbsp;&nbsp;p&nbsp;&nbsp;u&nbsp;&nbsp;t&nbsp;&nbsp;i&nbsp;&nbsp;n&nbsp;&nbsp;g  &mdash;</a></li>
<li><a href="#">[ L e v e l # ` + level+ '&mdash; g a m e # '+ gameIndex +` ]</a></li>
</ul>
</div>`;
console.log(html);
menu.innerHTML = html;

