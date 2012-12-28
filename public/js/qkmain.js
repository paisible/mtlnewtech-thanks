qk = {};

_.extend(qk, {
	views : {}
});


$(window).load(function(){

	routes = new qk.router();

	Backbone.history.start();

});
