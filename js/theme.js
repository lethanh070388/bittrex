(function(exports) {
    var themeChanger = {
      settings: {
        wrapper: $('.wrapper'),
        buttons: $('.controls button'),
        toggle: $('.control-toggle'),
        group: $('.control-button-group')
      },
      
      init: function () {
        var _self = this;
        this.settings.buttons.on('click', function () {
          var $node = $(this),
              theme = $node.data('theme');
          _self.settings.wrapper.removeClass().addClass('wrapper ' + theme);
          _self.settings.buttons.removeAttr('disabled');
          $node.attr('disabled', true);
        });
        this.settings.toggle.on('click', function () {
          _self.settings.group.toggleClass("show");
        });
      }
    };
    
    themeChanger.init();
  }(window));