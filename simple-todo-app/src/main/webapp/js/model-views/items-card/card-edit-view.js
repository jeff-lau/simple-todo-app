YUI.add('card-edit-view', function(Y){
	var CardEditView = Y.Base.create('cardEditView', Y.View, [], {
		
	    // Compiles the User Template into a reusable Handlebars template.
	    template: Y.Template.loadTemplate({templateName: 'card-edit'}),
	    
	    model: Y.simpleTodo.ItemsCard,
	    
	    initializer : function(){ 
		    this.publish('create-card', {
		    	emitFacade : true
		    });
	    },
	    
	    events : {
	    	'#updateCardButton' : {
	    		'click' : 'updateCard'
	    	}
	    },
	    
	    
	    updateCard : function(e){
	    	e.preventDefault();
	    	var title = Y.one('#cardTitle').get('value'); 
	    	var summary = Y.one('#cardSummary').get('value');
	    	var model = this.get('model');
	    	
	    	model.set('name',title);
	    	model.set('summary',summary);
	    	
	    	var isNew = model.isNew();
	    	var that = this;

	    	// Firing after save if ensure the generated ID is synced back to the model.
	    	model.save(null, function(err, response){
	    		if (isNew){
	    			that.fire('create-card', model);
	    		}
	    	});
	    	
	    	 $('#cardEditModal').modal('hide');
	    },
	    
	    
	    render: function () {
	    	// Retrieves all of the model instance's data as a simple JSON struct.
	        var itemsCard = this.get('model').toJSON();
	        var content = this.template(itemsCard);
	        this.get('container').setHTML(content);
	        
	        //JQuery needed to show the bootstrap modal dialog..
	        $('#cardEditModal').modal('show');
	        return this;
	    }
	}, {
		ATTRS : {
			container : {
			     value : '#cardEditModal'
			}
		}
		
	});
	
	Y.namespace('simpleTodo').CardEditView = CardEditView;
}, '0.0.1', {
	requires: ['node', 'event', 'model', 'view', 'template-loader', 'items-card-model']
});

