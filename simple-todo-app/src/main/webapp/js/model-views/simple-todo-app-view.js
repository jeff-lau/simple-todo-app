YUI.add('simple-todo-app-view', function(Y){
	var SimpleTodoAppView = Y.Base.create('simpleTodoAppView', Y.View, [], {
		
	    // Compiles the User Template into a reusable Handlebars template.
	    template: Y.Template.loadTemplate({templateName: 'simple-todo-app-template'}),
	    
	    events: {
	    },

	    initializer : function(){
		    this.publish('delete-card', {
		    	emitFacade : false
		    });
	    },

	    _attachDrag : function(){
	    	var del = new Y.DD.Delegate({
	            container: this.get('container'), //The common container
	            nodes: '.cardDiv' //The items to make draggable
	        });
	    	
	    	del.dd.plug(Y.Plugin.DDProxy,{
	    		moveOnEnd: false
	    	});
	    	
	    	var drop = new Y.DD.Drop({
	    		node : '#deleteBar'
	    	});
	    	
	    	del.on('drag:start', function(e){
	    		e.target.get('node').setStyle('z-index', 99);
	    		Y.one('#deleteBar').transition({
	    			bottom : '0px',
	    			duration : 0.5
	    		}, function(){
	    			// This is required for the drop target to work, because we are moving the drop target.
	    			drop.sizeShim();
		    	});
	    	});
	    	
	    	del.on('drag:end', function(e){
	    		e.target.get('node').setStyle('z-index', 0);
	    		Y.one('#deleteBar').transition({
	    			bottom : '-70px',
	    			duration : 0.5
	    		});
	    	});


	    	Y.DD.DDM.on('drop:hit', function(e){
	    		this.fire('delete-card', e.drag.get('node').get('id'));
	    	}, this);
	    },

	    
	    render: function () {

	    	var content = this.template({});
	    	var	container = this.get('container');
	    	container.setHTML(content);

	    	var cardsContainer = container.one('#lists-container');

	    	var itemsCardList = new Y.simpleTodo.ItemsCardList();
	    	var that = this;
			itemsCardList.load();
			itemsCardList.after('load', function(e){
				var view = new Y.simpleTodo.CardsGridView({modelList: this});
				cardsContainer.appendChild(view.render().get('container'));
				that.on('simpleTodoAppView:delete-card', function(cardId){
					view.removeCard(cardId);
				});
			});
			
			this._attachDrag();
	    }
	}, {
		ATTRS : {
			container : {
				value : '#app-container'
			}
		}
	});
	
	Y.namespace('simpleTodo').SimpleTodoAppView = SimpleTodoAppView;
}, '0.0.1', {
	requires: ['view', 'template-loader', 'card-edit-view', 'cards-grid-view', 'dd-plugin', 'dd-drop-plugin', 'dd-delegate', 'dd-drop', 'dd-proxy', 'transition']
});

