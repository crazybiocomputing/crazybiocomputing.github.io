<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>
<link href='http://fonts.googleapis.com/css?family=Walter+Turncoat' rel='stylesheet' type='text/css'>

<style>
#question {
  font-family:'Walter Turncoat',cursive;
  font-size:20px;
}

#alert {
  visibility:hidden;
  font-family:'Walter Turncoat',cursive;
  font-size:20px;
}

</style>

<script type="text/javascript">
var index=0;
var count=0;
var value='';
var stop = false;

var arr = ['<b>Crocodile</b> is more closely related to <b>Lizard</b> than to <b>Bird</b> ? ',
           '<b>Crocodile</b> is more closely related to <b>Bird</b> than to <b>Lizard</b> ? ',
           '<b>Crocodile</b> is equally related to <b>Lizard</b> and to <b>Bird</b> ? ',
           '<b>Crocodile</b> is more closely related to <b>Lizard</b> but is not related to <b>Bird</b> ? '];
var timer;

function doIt() {
  // fade(document.getElementById('question') );
}

function fade(element) {
    var op = 1;  // initial opacity
    timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
            document.getElementById('alert').style.visibility="visible";
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 1000);
    
}

function next(ev) {
  console.log(' '+index +' '+ value);
  document.getElementById('question').style.opacity=1;
  document.getElementById('alert').style.visibility="hidden";
  clearInterval(timer);
  value += (document.getElementById('yes').checked ? 'y' :'')+(document.getElementById('no').checked ? 'n' :'');
  var html = '';

  if (count==7) {
  console.log(' '+index +' '+ value);
    if (value === 'ynyyynyn') {
      html='You win!! Click <a href="pet.php">Here</a> to go to the next mini-game';
    }
    else {
      html='You lost. Reload the page and try again';
    }
    document.getElementById('question').innerHTML=html;
  }
  else if ( (count %2) == 0 && document.getElementById('no').checked) {
    stop=true;
  }
  else if ((count % 2) == 0) {
    html += (index+1)+'- '+arr[index]+'<br>';
    html +=' <input type="radio" id="yes" name="group1" value="yes" onclick="javascript:next(event)"> YES';
    html +='<input type="radio" id="no" name="group1" value="no" onclick="javascript:next(event)" > NO';
    document.getElementById('question').innerHTML=html;
    fade(document.getElementById('question') );
    index++;
  }
  else {
    html += 'Next Question ?<br>';
    html +=' <input type="radio" id="yes" name="group1" value="yes" onclick="javascript:next(event)"> YES';
    html +='<input type="radio" id="no" name="group1" value="no" onclick="javascript:next(event)" > NO';
    document.getElementById('question').innerHTML=html;
  }

  if (!stop &&  (count %2) == 0) {

  }
  
  if (stop) {
    html='OOooohhhh!! you really want to quit the mini-game...';
    document.getElementById('question').innerHTML=html;
  }

  if (index > 4) {


  }
  count++;


}

</script>

<div id="page">
<div id="content">

<center>
<img id="background" src="background.png" ></img>


<div id="question">Are you Ready ? <br>
<input type="radio" id="yes"  name="group1" value="yes" onclick="javascript:next(event)"> YES
<input type="radio" id="no"  name="group1" value="no" checked> NO
</div>
<div id="alert">You are too slow... Reload the page and try again</div>


</center>


</div>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
