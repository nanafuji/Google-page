// Exercise 1
var afficherBox = document.getElementById('principal');

afficherBox.onclick = function() {
  document.getElementById("id_cache").className="";
  afficherBox.className="hide";
}

//Exercise 2

var look = document.forms["googleform"].text_search;
var click = document.forms["googleform"].click_button;

click.onclick = function () {
   var value = look.value.trim();
   if (value != "" ) {
       var objectToSearch = value.replace(/( )+/g, "+");
       document.location.href="https://www.google.fr/#q=" + objectToSearch;
   }
   else {
   }
}

