var sample=0;
var joker=false;
var emptybubble={'x':0,'y':0};
var result=[];

var data=[
{
  title: 'Short-Wave-Sensitive Opsin - Homo sapiens - OPN1SW - mRNA',
  location: '7',
  md5: '558064753584d941ea4840ec6ec4996f'
},
{
  title: 'Short-Wave-Sensitive Opsin - Homo sapiens - OPN1SW - mRNA',
  location: '7',
  md5: '65c7daeab92ad6313481ffbfdf284814'
},
{
  title: 'Medium-Wave-Sensitive Opsin - Homo sapiens - OPN1MW - mRNA',
  location: 'x',
  md5: '4417958a2c7d1b2c90bbced12ad331ef'
},
{
  title: 'Long-Wave-Sensitive Opsin - Homo sapiens - OPN1LW - mRNA',
  location: 'x',
  md5: '2323a88d56c8d44031ad49f2752d0611'
}
];


function doIt() {
  console.log(data);
  console.log(sessionStorage.getItem("opsin0"));

  if (sessionStorage.getItem("opsin0")!=null)
    result.push(sessionStorage.getItem("opsin0"));
  if (sessionStorage.getItem("opsin1")!=null)
    result.push(sessionStorage.getItem("opsin1"));
  if (sessionStorage.getItem("opsin2")!=null)
    result.push(sessionStorage.getItem("opsin2"));

  displayResult();
}

function checkIntegrity() {

  var text = document.getElementById("seq").value.toLowerCase().trim();
  var loc  = document.getElementById("loc").value.toLowerCase().trim();
  console.log(text);
  text = text.replace(/(\r\n|\n|\r)/gm,"");
  // console.log(text);
  console.log(YaMD5.hashStr(text) );
  var md5 = YaMD5.hashStr(text);
  var i = 0;
  var stop = false;
  var done = false;
  while (!stop && i < data.length ) {
    if (data[i].md5 === md5 && data[i].location === loc) {
      for (var j=0;j<result.length;j++)
        if (result[j] == i) done = true;
      if (!done) {
        result.push(i);
        sessionStorage.setItem("opsin"+(result.length-1),i);
      }
      console.log('answer '+i);
      stop = true;
    }
    i++;
  }
  console.log(result);
  displayResult();

 
}

function displayResult() {
  var display='<ul>';
  for (var i=0; i<result.length;i++) {
    display+='<li>'+data[result[i]].title+'</li>';
  }
  display+='</ul>';
  document.getElementById("result").innerHTML=display;
  document.getElementById("seq").value="Enter your sequence (only one sequence in FASTA format without title)"

  if (result.length == 3 ) {
    document.getElementById('chat').innerHTML='<p>Right!! Two genes are located on the same chromosome ... and they are close together as shown in the region of this chromosome map (from Ensembl)<img src="ensembl_map.png" width="700px"></img></p>'+
      '<p>These results suggest a gene duplication... We have to focus on these two genes to follow their evolution in the next mini-games... </p>'+
      '<p>Click <a href="trekking.php">here</a> to go to the next mini-game</p>';
  }

}



