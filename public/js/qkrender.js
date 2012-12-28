_.extend(qk, {

	render : function(cb){

        var output = this.out || "";
        
        switch(this.render_type){

            case "foo" :
                $("body").append(output);
                break;

            default :
                break;
        }

        if(cb) cb();
	}
});