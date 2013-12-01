YUI.add('cards-grid-view', function(Y){
	
	var CardView = Y.Base.create('cardView', Y.View, [], {
	
		container : Y.one('.lists-container'),
		template: Y.Template.loadTemplate({templateName: 'cards-grid'}), 
		
		render : function(){
			debugger;
			var data = {cards : this.get('modelList').toJSON()};
			var html = this.template(data);
			this.container.setHTML(html);
		}
		
	});
	
	return Y.namespace('simpleTodo').CardsGridView = CardView;
	
	
}, '0.0.1', {
	requires: ['node', 'model', 'view', 'template-loader']
});