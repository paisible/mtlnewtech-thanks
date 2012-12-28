qk.views.home = Backbone.View.extend((function(){

  var obj = {

    initialize : function() {
      this.render();
    },

    render : function() {
      var self = this;
      _.each(this.options, function(option, key){ self[key] = option; });
      this.out = ich.template({ text : "qk Rocks." });
      qk.render.call(this);
      
    },

    events : {
    }

  };

  return obj;

})());