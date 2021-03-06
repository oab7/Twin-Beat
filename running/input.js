// Generated by CoffeeScript 1.3.3

/*
This is a class that is used to access the output from the listerners also in this file.
This object is used to simplify access to those listeners
*/


(function() {
  var input;

  window.InputHandler = (function() {

    function InputHandler() {
      this.keys = [];
      this.oldKeys = [];
      this["new"] = false;
    }

    InputHandler.prototype.update = function() {
      this.oldKeys = this.keys.slice(0);
      this.keys = input.keys.slice(0);
      this["new"] = input["new"];
      return input["new"] = false;
    };

    InputHandler.prototype.isKeyDown = function(num) {
      if (this.keys.contains(num)) {
        return true;
      }
      return false;
    };

    InputHandler.prototype.isKeyNewDown = function(num) {
      if ((this.keys.contains(num)) && (!this.oldKeys.contains(num))) {
        return true;
      }
      return false;
    };

    return InputHandler;

  })();

  input = {
    keys: [],
    "new": false
  };

  $(document).keydown(function(e) {
    if (!input.keys.contains(e.keyCode)) {
      input.keys.push(e.keyCode);
    }
    if (!input["new"]) {
      return input["new"] = true;
    }
  });

  $(document).keyup(function(e) {
    return input.keys.splice(input.keys.indexOf(e.keyCode), 1);
  });

}).call(this);
