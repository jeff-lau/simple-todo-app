YUI.add('cards-grid-view', function(Y){
	
	
	Y.Handlebars.registerPartial('card', Y.Template.loadTemplate({templateName: 'items-card'}));
	
	var GridView = Y.Base.create('gridView', Y.View, [Y.View.NodeMap], {
	
		template: Y.Template.loadTemplate({templateName: 'cards-grid'}), 
		
	    initializer : function(){
	    },
	    
		render : function(){
			var modelList = this.get('modelList');
			for (var i = 0; i < modelList.size(); i++){
				var v = new Y.simpleTodo.CardView({model : modelList.item(i)});
				this.get('container').appendChild(v.render().get('container'));
			}
			return this;
		}
	}, {
		ATTRS : {
		    container: {
		    	value : Y.one('#cardsContainer')
		    }
		}
	});
	
	return Y.namespace('simpleTodo').CardsGridView = GridView;
	
	
}, '0.0.1', {
	requires: ['node', 'model', 'view', 'template-loader', 'card-view', 'view-node-map']
});