/**
 *
 * @author Jean-Christophe Taveau
 */
 function create_sections() {
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
}

/**
 *
 * @author Jean-Christophe Taveau
 */
 function create_header(type="header") {
    let family = '';
    let index = -1;
    
    if (type === "header") {
        let family = 'bioinfo'; // Must be checked between ip, bioinfo, and tutorial
        let url = window.location.href.substr(window.location.href.lastIndexOf(family + '/') + family.length + 1);
        console.log(url);
        var index = 0;
        while (minigames[index].url !== url && index < minigames.length) {
            index++;
        }
        localStorage.setItem('crazybio_accession', index);
        localStorage.setItem('crazybio_family', family);
    }
    else {
        family = localStorage.crazybio_family;
        index = localStorage.crazybio_accession;
    }
    
    let menu = document.querySelector('header');
    let level = minigames[index].level;
    let gameIndex = minigames[index].index;
    let html = '';
    if (type === "history") {
        html = 
            '<ul>' +
            '<li><a href="'+family+'/index.html">[ H o m e ]</a></li>' +
            '<li><a href="help.html">[ H e l p ]</a></li>' +
            '<li><a href="#">&mdash; c&nbsp;&nbsp;r&nbsp;&nbsp;a&nbsp;&nbsp;z&nbsp;&nbsp;y' +
            '&nbsp;&nbsp;b&nbsp;&nbsp;i&nbsp;&nbsp;o' +
            '&nbsp;&nbsp;c&nbsp;&nbsp;o&nbsp;&nbsp;m&nbsp;&nbsp;p&nbsp;&nbsp;u&nbsp;&nbsp;t&nbsp;&nbsp;i&nbsp;&nbsp;n&nbsp;&nbsp;g  &mdash;' +
            '</a></li>' +
            '<li><a href="'+family+'/'+minigames[index].url+'">[ L e v e l # ' + level+ '&mdash; g a m e # '+ gameIndex +' ]</a></li>' +
            '</ul></div>';
            
            // Add content
            document.querySelector('output').innerHTML = '<ul>'+minigames[index].history.map(function (row) { return '<li>'+row+'</li>'}).join('') + '</ul>';

    } else if (type === "help") {
        html = 
            '<ul>' +
            '<li><a href="'+family+'/index.html">[ H o m e ]</a></li>' +
            '<li><a href="#">[ H e l p ]</a></li>' +
            '<li><a href="history.html">&mdash; c&nbsp;&nbsp;r&nbsp;&nbsp;a&nbsp;&nbsp;z&nbsp;&nbsp;y' +
            '&nbsp;&nbsp;b&nbsp;&nbsp;i&nbsp;&nbsp;o' +
            '&nbsp;&nbsp;c&nbsp;&nbsp;o&nbsp;&nbsp;m&nbsp;&nbsp;p&nbsp;&nbsp;u&nbsp;&nbsp;t&nbsp;&nbsp;i&nbsp;&nbsp;n&nbsp;&nbsp;g  &mdash;' +
            '</a></li>' +
            '<li><a href="'+family+'/'+minigames[index].url+'">[ L e v e l # ' + level+ '&mdash; g a m e # '+ gameIndex +' ]</a></li>' +
            '</ul></div>';
            
            // Add content
            document.querySelector('output').innerHTML = minigames[index].help.join('');
            
    } else {
        html = 
            '<ul>' +
            '<li><a href="../index.html">[ H o m e ]</a></li>' +
            '<li><a href="../../help.html">[ H e l p ]</a></li>' +
            '<li><a href="../../history.html">&mdash; c&nbsp;&nbsp;r&nbsp;&nbsp;a&nbsp;&nbsp;z&nbsp;&nbsp;y' +
            '&nbsp;&nbsp;b&nbsp;&nbsp;i&nbsp;&nbsp;o' +
            '&nbsp;&nbsp;c&nbsp;&nbsp;o&nbsp;&nbsp;m&nbsp;&nbsp;p&nbsp;&nbsp;u&nbsp;&nbsp;t&nbsp;&nbsp;i&nbsp;&nbsp;n&nbsp;&nbsp;g  &mdash;</a></li>' +
            '<li><a href="#">[ L e v e l # ' + level+ '&mdash; g a m e # '+ gameIndex +' ]</a></li></ul></div>';
    }
    
  
    menu.innerHTML = html;
    
    // Create Title
    let elt = document.createElement('title');
    elt.textContent = 'Level #'+level+' Game #'+gameIndex + ' - CrazyBioComputing';
    document.head.appendChild(elt);
}

/**
 *
 * @author Jean-Christophe Taveau
 */
 function create_header_history() {
    create_header("history");
    /*
    let menu = document.querySelector('header');
    let family = 'bioinfo'; // Must be checked between bioinfo, ip, programming, and tutorial
    let index = localStorage.crazybio_accession;
    let level = minigames[index].level;
    let gameIndex = minigames[index].index;
    let html = 
        '<ul>' +
        '<li><a href="'+family+'/index.html">[ H o m e ]</a></li>' +
        '<li><a href="help.html">[ H e l p ]</a></li>' +
        '<li><a href="#">&mdash; c&nbsp;&nbsp;r&nbsp;&nbsp;a&nbsp;&nbsp;z&nbsp;&nbsp;y' +
        '&nbsp;&nbsp;b&nbsp;&nbsp;i&nbsp;&nbsp;o' +
        '&nbsp;&nbsp;c&nbsp;&nbsp;o&nbsp;&nbsp;m&nbsp;&nbsp;p&nbsp;&nbsp;u&nbsp;&nbsp;t&nbsp;&nbsp;i&nbsp;&nbsp;n&nbsp;&nbsp;g  &mdash;' +
        '</a></li>' +
        '<li><a href="'+family+'/'+minigames[index].url+'">[ L e v e l # ' + level+ '&mdash; g a m e # '+ gameIndex +' ]</a></li>' +
        '</ul></div>';
  
    menu.innerHTML = html;
    
    // Create Title
    let elt = document.createElement('title');
    elt.textContent = 'Level #'+level+' Game #'+gameIndex + ' - CrazyBioComputing';
    document.head.appendChild(elt);
    
    // Add content
    document.querySelector('output').innerHTML = '<ul>'+minigames[index].history.map(function (row) { return '<li>'+row+'</li>'}).join('') + '</ul>';
    */
}

/**
 *
 * @author Jean-Christophe Taveau
 */
 function create_header_help() {
     create_header("help");
     /*
    let menu = document.querySelector('header');
    let family = 'bioinfo'; // Must be checked between bioinfo, ip, programming, and tutorial
    let index = localStorage.crazybio_accession;
    let level = minigames[index].level;
    let gameIndex = minigames[index].index;
    let html = 
        '<ul>' +
        '<li><a href="'+family+'/index.html">[ H o m e ]</a></li>' +
        '<li><a href="#">[ H e l p ]</a></li>' +
        '<li><a href="history.html">&mdash; c&nbsp;&nbsp;r&nbsp;&nbsp;a&nbsp;&nbsp;z&nbsp;&nbsp;y' +
        '&nbsp;&nbsp;b&nbsp;&nbsp;i&nbsp;&nbsp;o' +
        '&nbsp;&nbsp;c&nbsp;&nbsp;o&nbsp;&nbsp;m&nbsp;&nbsp;p&nbsp;&nbsp;u&nbsp;&nbsp;t&nbsp;&nbsp;i&nbsp;&nbsp;n&nbsp;&nbsp;g  &mdash;' +
        '</a></li>' +
        '<li><a href="'+family+'/'+minigames[index].url+'">[ L e v e l # ' + level+ '&mdash; g a m e # '+ gameIndex +' ]</a></li>' +
        '</ul></div>';
  
    menu.innerHTML = html;
    
    // Create Title
    let elt = document.createElement('title');
    elt.textContent = 'Level #'+level+' Game #'+gameIndex + ' - CrazyBioComputing';
    document.head.appendChild(elt);
    
    // Add content
    document.querySelector('output').innerHTML = minigames[index].help.join('');
    */
}


/**
 *
 * @author Jean-Christophe Taveau
 */
 function next_game() {
  console.log(localStorage);
  let index = localStorage.crazybio_accession;
  let nextID = minigames[index].next;
  if (nextID === 9999) {
    window.alert('Last mini-game of this series. Back to Home page');
    document.location.href = '../index.html';
  }
  else {
    let i = 0;
    while (minigames[i].ID !== nextID && i < minigames.length ) {
      i++;
    }
    // Redirect to the next game
    document.location.href = '../'+minigames[i].url;
  }
}
