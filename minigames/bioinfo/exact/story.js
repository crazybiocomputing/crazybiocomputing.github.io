// Story
// Jean-Christophe Taveau
// Crazybiocomputing
// Feb 2015


var path=[];

function initStory(first) {
  path.push( {
    'ID': first,
    'answers':[]
  });
}


function checkAnswer(options) {
  var node = {};
  node.answers = [];
  node.ID = '_';

  switch (options.type) {
  case 'button':
    node.ID = dialog[options.ID].goto['button']; 
    break;
  case 'select':
    answer = document.getElementById(options.element).value;
    node.ID = dialog[options.ID].goto[answer]; 
    node.answers.push(answer);
    break;
  case 'submit':
    var w = dialog[options.ID].widgets;
    var total = 0;
    for (var i=0; i < w.length; i++) {
      var answer = getAnswer(w[i]);
      if (answer[0] == 1) {
        node.answers.push(answer[1]);       
      }
      total +=answer[0];
    }
    console.log('answer '+total);
    if (dialog[options.ID].goto[total] != undefined) {
      node.ID = dialog[options.ID].goto[total];
    }
    else {
      node.ID = dialog[options.ID].goto['0'];
      node.answers.push('wrong');
    } 
    break;
  case 'value':
    answer = document.getElementById(options.element).value;
    node.ID = dialog[options.ID].goto[answer];
    node.answers.push(answer);
    console.log(answer + ' ' + next_node);
    break;
  default:
    alert('Wrong path');
  }
  
  if (node.ID != '_') {
    path.push(node );
  }

  updateDisplay(node.ID);

}

function getAnswer(widget) {
  var answer=0;
  var value;

  switch (widget.type) {
  case 'numeric':
    value = parseFloat(document.getElementById(widget.id).value);
    answer = ( value == widget.answer) ? 1 : 0;
    break;
  case 'select':
    value = document.getElementById(widget.id).value;
    answer = ( value === widget.answer) ? 1 : 0;
    break;
  case 'text':
    value = document.getElementById(widget.id).value;
    answer = ( value === widget.answer) ? 1 : 0;
    console.log(value + ' '+widget.answer+' '+answer);
    break;
  default:
    // Do nothing  
  }

  return [answer,value];
}

function updateDisplay(ID) {
  var button_html='';
  var str = dialog[ID].html;
  for (var i = 0; i < dialog[ID].widgets.length; i++ ) {
    button_html = createWidget(ID,dialog[ID].widgets[i]);
    str = str.replace(new RegExp('__'+dialog[ID].widgets[i].type+'__'),button_html);
  }
  document.getElementById(dialog[ID].element).innerHTML = str;

  // People
  switch (dialog[ID].people) {
  case 'boy':
    people = '<div style="width:200px; overflow: hidden;"><img src="../img/people.png"  width="400px"></img></div>'
    break;
  case 'girl':
    people = '<div style="width:200px; overflow: hidden;"><img src="../img/people.png"  style = "margin-left:-200px;" width="400px"></img></div>'
    break;
  }
  document.getElementById('people').innerHTML=people;

  // Background
  var background = '';
  if (dialog[ID].background != undefined && dialog[ID].background.length > 1) {
    background = '<img src="'+dialog[ID].background+'"></img>';
  }
  document.getElementById('scene').innerHTML=background;

  logpath();
}

function createWidget(ID,widget) {
  var str='';
  switch (widget.type) {
  case 'button':
    str += '<a class="right_button" href="javascript:void(0)" ';
    str += widget.event+'="checkAnswer(';
    str += '{ID:\''+ID+'\',type:\'button\'}';
    str += ')">'+widget.title+'</a>'; 
    break;
  case 'numeric':
    str = '<input type="text" id="'+widget.id+'"  size="8" value="'+widget.title+'" onkeyup="this.value=this.value.replace(/[^\\d.]/,\'\')"></input>';
    break;
  case 'select':
    str = '<select id="'+widget.id+'" ';
    if (widget.event !== undefined) {
      str += widget.event+'="checkAnswer({ID:\''+ID+'\',type:\'select\',element:\''+widget.id+'\'})"';
    }
    str +='>';
    for (var i =0; i < widget.options.length; i++) {
      str += '<option value="'+widget.options[i]+'">'+widget.options[i]+'</option>';
    }
    str +='</select>';
    break;
  case 'submit':
    str += '<a class="right_button" href="javascript:void(0)" ';
    str += widget.event+'="checkAnswer(';
    str += '{ID:\''+ID+'\',type:\'submit\'}';
    str += ')">'+widget.title+'</a>'; 
    break;
  case 'text':
    str = '<input type="text" id="'+widget.id+'" size="8" value="'+widget.title+'"></input>';
    break;
  case 'value':
    break;
  default:
    // Do nothing
  }

  return str;
}

function logpath() {
  var str='<ul>';
  for (var i in path) {
    str +=  '<li>'+path[i].ID + '[';
    for (var j in path[i].answers) {
      str += path[i].answers[j] +', ';
    }
    str += '] </li>';
  }
  str +='</ul>';
  document.getElementById('log').innerHTML = str;

}
