'use strict';

var str = "";

  var input = document.getElementsByTagName("input")[0];

  var span = document.getElementsByTagName("span")[0];
  input.oninput = function(evt) {
    var val = this.value;
    if (val.length > str.length) {
    
      str += val.charAt(val.length - 1);
    } else {
    
      str = str.substr(0, val.length);
    }
    
    this.value =
      val.substr(0, val.length - 1).replace(/./g, "*") +
      val.charAt(val.length - 1);
	  
    var len = this.value.length;
    setTimeout(() => {

      if (this.value.length == len) {

        this.value = this.value.replace(/./g, "*");
      }
    }, 1000);
    span.innerHTML = str;
  };