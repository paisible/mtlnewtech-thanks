// base router

_.extend(qk, {

	router : Backbone.Router.extend({

	  routes : {
	  	"" : "home"
	  },

	  before: {
	    '.*' : function() {
	        /*if(typeof foo == "undefined"){
	        	Backbone.history.navigate("", true);
	        }*/
	    }
	  },

	  home : function() {
	   	new qk.views.home({ render_type : "foo", el : $("body") });
	  }

	})

});