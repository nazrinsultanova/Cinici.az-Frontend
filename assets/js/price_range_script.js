function getVals(){
  var parent = this.parentNode;
  var slides = parent.getElementsByClassName("range");
    var slide1 = parseFloat( slides[0].value );
    var slide2 = parseFloat( slides[1].value );
 
  var display_firstElement = parent.getElementsByClassName("rangeValues1")[0];
  var display_secondElement = parent.getElementsByClassName("rangeValues2")[0];
      display_firstElement.innerHTML =  slide1;
      display_secondElement.innerHTML = slide2;
}

window.onload = function(){
  var sliderSections = document.getElementsByClassName("range-slider");
      for( var x = 0; x < sliderSections.length; x++ ){
        var sliders = sliderSections[x].getElementsByClassName("range");
        for( var y = 0; y < sliders.length; y++ ){
          if( sliders[y].type ==="range" ){
                sliders[y].oninput = getVals;
                sliders[y].oninput();
          }
        }
    }
}

 