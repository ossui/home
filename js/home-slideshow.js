var homeSlideIndex = 1;
showDivs(homeSlideIndex);

function plusDivs(n) {
  showDivs(homeSlideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("homeSlides");
  if (n > x.length) {homeSlideIndex = 1}    
  if (n < 1) {homeSlideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[homeSlideIndex-1].style.display = "block";  
}