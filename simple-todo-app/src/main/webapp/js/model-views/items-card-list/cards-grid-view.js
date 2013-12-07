YUI.add('cards-grid-view', function(Y){
	
	
	Y.Handlebars.registerPartial('card', Y.Template.loadTemplate({templateName: 'items-card'}));
	
	var CardView = Y.Base.create('cardView', Y.View, [], {
	
		template: Y.Template.loadTemplate({templateName: 'cards-grid'}), 
		
	    events: {
	        'div.cardDiv' : { click: 'selectCard' }
	    },
	    
	    
	    attachDrag : function(){
			var cards = Y.all('.cardDiv');
			cards.each(function(){
				this.plug(Y.Plugin.Drag);
				this.dd.addHandle('.cardDiv');
			});
	    },
	    
	    
		
		render : function(){
			var data = {cards : this.get('modelList').toJSON()};
			var html = this.template(data);
			this.get('container').setHTML(html);
			this.attachDrag();
		},
		
		selectCard : function(e){
			var modelId = e.target.get('id');
			var view = new Y.simpleTodo.CardEditView({model: this.get('modelList').getById(modelId)});
			view.render();
		}
	}, {
		ATTRS : {
		    container: {
		      valueFn: function () {
		        return Y.one('.lists-container');
		      }
		    }
		}
	});
	
	return Y.namespace('simpleTodo').CardsGridView = CardView;
	
	
}, '0.0.1', {
	requires: ['node', 'model', 'view', 'template-loader', 'card-edit-view', 'dd-plugin']
});