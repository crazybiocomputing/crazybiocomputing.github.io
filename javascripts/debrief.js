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

function debrief_moderate_menubar() {
    let home = localStorage.getItem('crazybio_home');
    let output = document.getElementById("output");
    let remind = output.createElement('a'); 
    remind.innerHTML='<a href="'+home+'">Reminders</a>';
    configButton(remind,'green');
    let challenges = output.createElement('a'); 
    challenges.innerHTML='<a href="'+home+'">Challenges</a>';
    configButton(challenges,'orange');
    let homelink = output.createElement('a'); 
    homelink.innerHTML='<a href="'+home+'">Return to Page</a>';
    configButton(homelink,"#0078e7");
}

function debrief_very_easy_menubar() {
    let home = localStorage.getItem('crazybio_home');
    let output = document.getElementById("output");
    output.innerHTML='<a href="'+home+'">Reminders</a>';
    output.innerHTML='<a href="'+home+'">Challenges</a>';
    output.innerHTML='<a href="'+home+'">Return to Page</a>';
}
