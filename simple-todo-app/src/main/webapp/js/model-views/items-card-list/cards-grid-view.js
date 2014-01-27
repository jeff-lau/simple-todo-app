YUI.add('cards-grid-view', function(Y){
	
	
	Y.Handlebars.registerPartial('card', Y.Template.loadTemplate({templateName: 'items-card'}));
	
	var GridView = Y.Base.create('gridView', Y.View, [Y.View.NodeMap], {
	
		template: Y.Template.loadTemplate({templateName: 'cards-grid'}),

		containerTemplate: '<div></div>',
		
	    initializer : function(){
	    	this.get('modelList').after('remove', this.render, this);
	    	this.get('modelList').after('add', this.render, this);

	    },
	    
	    addCard : function(card){
	    	this.get('modelList').add(card);
	    },
	    
	    removeCard : function(cardId){
	    	var modelList = this.get('modelList');
	    	var toBeRemoved = modelList.getById(cardId);
	    	toBeRemoved.destroy({remove : true}, function(){
	    		modelList.remove(toBeRemoved, {silent : false});
	    	});
	    },
	    
		render : function(){
			var modelList = this.get('modelList');
			this.get('container').setHTML('');
			for (var i = 0; i < modelList.size(); i++){
				var v = new Y.simpleTodo.CardView({model : modelList.item(i)});
				this.get('container').appendChild(v.render().get('container'));
			}
			return this;
		}
	}, {
		ATTRS : {
		}
	});
	
	return Y.namespace('simpleTodo').CardsGridView = GridView;
	
	
}, '0.0.1', {
	requires: ['node', 'model', 'view', 'template-loader', 'card-view', 'view-node-map']
});