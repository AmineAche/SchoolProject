/*Connection au doc pr recuperer les infos*/ 

var xhr = new XMLHttpRequest();
    method = "GET",
    url = "stops.txt",
    xhr.open(method, url, true);

    xhr.onreadystatechange = function () {
      if(xhr.readyState === 4 && xhr.status === 200) {
        //processData();
        var allText = this.responseText;
        //var allTextLines = allText.split(/\r\n|\n/);
        //let oe = JSON.stringify(allText);
        localStorage.setItem("allText",allText);
        //console.log(xhr.responseText);
      }
    };
    xhr.send();
    allText = localStorage.getItem("allText");
    //console.log(allText);


/*Au chargement recupere 15 noms de stations aleatoires et les met dans une array*/
function processData() {
  allText = localStorage.getItem("allText");
  var allTextLines = allText.split(/\r\n|\n/);
  var jeveux = [];

  for (var nbr_stations=1; nbr_stations <= 15; nbr_stations++) {
    const aleatoire = Math.floor(Math.random()*allTextLines.length);
      console.log(aleatoire);
      var data = allTextLines[aleatoire].split(',');
      var ok = data[2];
      //console.log(ok);
      var oe = jeveux.push(ok);
  }
  

  console.log(jeveux);
  localStorage.setItem("stations",JSON.stringify(jeveux));
  // alert(lines);
}


/*Lance la fonction processdata au demarrage*/

document.addEventListener('DOMContentLoaded', function() {
  processData();
  //oe();
});


function game() {
  document.getElementById('intro').hidden = true;
  document.getElementById('quiz').hidden = false;
  //var re = localStorage.getItem("re");
    //window.setTimeout(truc(re), 15000);
    //console.log();
    //re++;
    //setTimeout(, 1500);
    truc();
    //setTimeout(console.log("ok"), 50000)
    //localStorage.setItem("re",re);
  //var seriesRestants= series.slice(0);

}
var j = 1;
localStorage.setItem("j", j);

function truc() {
  var j = localStorage.getItem("j");
 // var x = 0;
  var series = JSON.parse(localStorage.getItem("stations"));
  console.log(j);
  var answer_txt = document.getElementById('answers');
  //var answers = series[x];
  answer_txt.innerHTML = "";
  var span = document.createElement('span');
    //for (var j= 1; j < 15; j++) {
      var ok = document.createTextNode(series[j]);
      console.log(ok);
      //const ok = series[j];
      var div = document.createElement('div');
      div.appendChild(ok);
      answer_txt.appendChild(div);
      j++;
      localStorage.setItem("j", j);
      if (j < 15) {
        window.setTimeout(truc(), 50000);
        //window.setTimeout(window.alert, 2*1000);
      }
  //}
}

