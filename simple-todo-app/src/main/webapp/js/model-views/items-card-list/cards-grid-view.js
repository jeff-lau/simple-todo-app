YUI.add('cards-grid-view', function(Y){
	
	
	Y.Handlebars.registerPartial('card', Y.Template.loadTemplate({templateName: 'items-card'}));
	
	var CardView = Y.Base.create('cardView', Y.View, [], {
	
		template: Y.Template.loadTemplate({templateName: 'cards-grid'}), 
		
	    events: {
	        'div.cardDiv' : { 
	        	click: 'selectCard'
	        }
	        
	    },
	    
	    initializer : function(){
	        var drop = Y.one('#deleteBar').plug(Y.Plugin.Drop);
		    drop.drop.on('drop:hit', function(e) {
		    	console.log('target hit');
		        drop.set('innerHTML', 'You dropped: <strong>' + e.drag.get('node').get('id') + '</strong>');
		    });
	    },
	    
	    attachDrag : function(){
	    	var del = new Y.DD.Delegate({
	            container: this.get('container'), //The common container
	            nodes: '.cardDiv' //The items to make draggable
	        });
		
	    	del.on('drag:start', function(e){
	    		var drop = Y.one('#deleteBar').setStyle('bottom', 0);
	    	});
	    	
	    	del.on('drag:end', function(e){
	    		Y.one('#deleteBar').setStyle('bottom', -70);
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
	requires: ['node', 'model', 'view', 'template-loader', 'card-edit-view', 'dd-drop-plugin', 'dd-delegate']
});