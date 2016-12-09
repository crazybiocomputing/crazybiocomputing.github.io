function debrief(elt,v,org,target) {
    this.href ="https://moodle1.u-bordeaux.fr/mod/page/view.php" + "?"+"id="+target;
}


let buttons = document.querySelectorAll('.crazybutton');
for (let i in buttons) {
    let elt = buttons[i];
    console.log(elt);
    elt.style.background = "#0078e7"; 
    elt.style.color = "white";
    // elt.style.border = "1px solid black";
    elt.style.borderRadius = "2px"; 
    elt.style.padding = "0.5em 1em";
    elt.style.textDecoration = "none";
}
