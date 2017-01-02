function debrief(v,org,target) {
    localStorage.setItem('crazybio_home',window.location);
}

function configButton(elt, backcolor) {
    elt.href = "https://moodle1.u-bordeaux.fr/mod/page/view.php" + "?"+"id="+elt.dataset.href;
    elt.style.background = backcolor; 
    elt.style.color = "white";
    // elt.style.border = "1px solid black";
    elt.style.borderRadius = "2px"; 
    elt.style.padding = "0.5em 1em";
    elt.style.textDecoration = "none";

}


function configButtons() {
    let buttons = document.querySelectorAll('.crazybutton');
    for (let i in buttons) {
        let elt = buttons[i];
        configButton(elt,"#0078e7");
    }
}

function createButton(color,label) {
    let elt = document.createElement('a');
    elt.appendChild(document.createTextNode(label));
    configButton(elt,color);
    return elt;
}

function debrief_moderate_menubar() {
    let home = localStorage.getItem('crazybio_home');
    let output = document.getElementById("output");
    let remind = createButton('green','Reminders');remind.href=home;
    let challenges = createButton('orange', 'Challenges'); challenges.href = home;
    let homelink = createButton("#0078e7", 'Return to Page');homelink.href= home;
    
    // Add buttons to 'output'
    output.appendChild(remind);
    output.appendChild(challenges);
    output.appendChild(homelink);
}

function debrief_very_easy_menubar() {
    let home = localStorage.getItem('crazybio_home');
    let output = document.getElementById("output");
    output.innerHTML='<a href="'+home+'">Reminders</a>';
    output.innerHTML='<a href="'+home+'">Challenges</a>';
    output.innerHTML='<a href="'+home+'">Return to Page</a>';
}

function highlight() {
    let strings = document.querySelectorAll('.hljs-string');
    for (let i in strings) {
        if (strings[i].style !== undefined) {
            strings[i].style.color = "#800";
        }
    }
    let kwords = document.querySelectorAll('.hljs-keyword');
    for (let i in kwords) {
        kwords[i].style.fontWeight = "bold";
    }
}
