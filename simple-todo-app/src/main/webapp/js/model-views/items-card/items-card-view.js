YUI.add('card-edit-view', function(Y){
	var CardView = Y.Base.create('cardView', Y.View, [], {
		
	    // Compiles the User Template into a reusable Handlebars template.
	    template: Y.Template.loadTemplate({templateName: 'items-card'}),
	    
	    model: Y.simpleTodo.ItemsCard,
	    
	    
	    events : {
	    	
	    	
	    },
	    
	    render: function () {

	    	// Retrieves all of the model instance's data as a simple JSON struct.
	        var itemsCard = this.get('model').toJSON();
	        var content = this.template(itemsCard);
	        
	        this.get('container').appendChild(content);
	        return this;
	    }
	});
	
	Y.namespace('simpleTodo').CardView = CardView;
}, '0.0.1', {
	requires: ['node', 'event', 'model', 'view', 'template-loader', 'items-card-model']
});

