var display = document.getElementById('display')

var components = document.querySelectorAll('button');
for (var item of components) {
  item.addEventListener('click', function (e) {
    var btnText = e.target.innerText;
    if (e.target.innerText == 'C') {
      display.innerText = '';
    } else if (e.target.innerText == '=') {
      var evalConvert = eval(display.innerText);
      display.innerText = evalConvert;
    } else {
      display.innerText += btnText;
    }
  })
}
// eval is a build in function in js. eval( "5+4") = 9