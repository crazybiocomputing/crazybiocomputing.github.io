var status=0;
var tool=0;
var active_tool=0;
var password=['*','*','*','*','*','*'];
var password_index=0;


var app = [
'Acd...................................OK',
'Alignment.............................OK',
'Assembly fragment assembly............OK',
'Data resources........................OK',
'Data retrieval........................OK',
'Display...............................OK',
'Documentation.........................OK',
'Edit..................................OK',
'Enzyme kinetics.......................OK',
'Feature tables........................OK',
'HMM...................................OK',
'Menus.................................OK',
'Nucleic...............................OK',
'Ontology..............................OK',
'Phylogeny.............................OK',
'Protein...............................OK',
'Test..................................OK',
'Utils.................................OK'
];


var step=1;
function install() {
  var display = document.getElementById('crazybiolab');
  var html='';
  if (step==1) {
  // Step #1: Install configuration
  // URL http:// emboss.sourceforge.net/

    html='Step #1: Install configuration of EMBOSS<br><br>';
    html+='<label>$>&nbsp;URL of EMBOSS:&nbsp;http://</label>';
  }
  else if (step==2) {

    // Step #2: Install
    html='Step #2: Install of Applications<br><br>';
    for (var i=0;i<app.length;i++) {
      console.log('do it '+i);
      html+=app[i]+'<br>';
    }
    html+='<br>Error: install manually the missing package<br>';
    html+='<label>$>&nbsp;Package name: </label>';
  }

  else if (step==3) {
    // Step #3: Fix error packages
    html='Step #2: Install of Applications<br><br>';
    for (var i=0;i<app.length;i++) {
      console.log('do it '+i);
      html+=app[i]+'<br>';
    }
    html+='<br>Error: install manually the missing package';
  }

  display.innerHTML='<div style="width:700px;height:500px;background-color:#000;color:white;font-size:14px;padding:10px;"><pre style="background-color:#000;color:#fff">'+html+'<input style="font-size:14px;background-color:#000;color:white;text-decoration:none;border:none" type="text" size="60"></pre><br></div>';

    step++;
    if (step==2)
      install();
}

