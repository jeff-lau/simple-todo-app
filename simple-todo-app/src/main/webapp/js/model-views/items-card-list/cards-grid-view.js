YUI.add('cards-grid-view', function(Y){
	
	
	Y.Handlebars.registerPartial('card', Y.Template.loadTemplate({templateName: 'items-card'}));
	
	var CardView = Y.Base.create('cardView', Y.View, [], {
	
		template: Y.Template.loadTemplate({templateName: 'cards-grid'}), 
		
	    events: {
	        'div.cardDiv' : { click: 'selectCard' }
	    },
		
		render : function(){
			var data = {cards : this.get('modelList').toJSON()};
			var html = this.template(data);
			this.get('container').setHTML(html);
		},
		
		selectCard : function(e){
			alert(e.target.get('id'));
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
	requires: ['node', 'model', 'view', 'template-loader']
});