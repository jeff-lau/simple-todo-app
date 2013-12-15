YUI.add('card-view', function(Y){
	var CardView = Y.Base.create('cardView', Y.View, [], {
		
		containerTemplate: '<div></div>',
		
	    // Compiles the User Template into a reusable Handlebars template.
	    template: Y.Template.loadTemplate({templateName: 'items-card'}),
	    
	    model: Y.simpleTodo.ItemsCard,
	    
	    events: {
	        'div.cardDiv' : { 
	        	click: 'selectCard'
	        }
	        
	    },
	    
		selectCard : function(e){
			var modelId = e.target.get('id');
			var view = new Y.simpleTodo.CardEditView({model: this.get('modelList').getById(modelId)});
			view.render();
		},
	    
	    render: function () {
	    	var itemsCard = this.get('model').toJSON();
	        var content = this.template(itemsCard);
	        var	container = this.get('container');
	        container.setHTML(content);
	        return this;
	    }
	}, {
		ATTRS : {
		}
	});
	
	Y.namespace('simpleTodo').CardView = CardView;
}, '0.0.1', {
	requires: ['node', 'event', 'model', 'view', 'template-loader', 'items-card-model']
});

