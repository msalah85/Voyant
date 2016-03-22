Ext.define('Voyant.widget.Facet', {
	extend: 'Ext.grid.Panel',
    mixins: ['Voyant.panel.Panel'],
    alias: 'widget.facet',
	statics: {
		i18n: {
		},
		api: {
			stopList: 'auto',
			query: undefined
		}
	},

	config: {
		corpus: undefined
	},
	constructor: function(config) {
        this.callParent(arguments);
        Ext.applyIf(config || {}, {
        	includeTools: [], // don't show tools in header
        	rowLines: false,
        	columnLines: false // ignored?
       
        })
        this.mixins['Voyant.panel.Panel'].constructor.apply(this, [config]);
	},
	
	rowLines: false,
	
    initComponent: function(){

    	if (!this.store) {
    		this.store = new Ext.create("Voyant.data.store.CorpusFacets", {
    			facet: this.facet,
    			parentPanel: this
    		})
    	}

        Ext.applyIf(this, {
        	hideHeaders: true,
        	selType: 'checkboxmodel',
        	columns: [
        	          { renderer: function(value, metaData, record) {return "("+record.getInDocumentsCount()+") "+record.getLabel()}, flex: 1 }
        	]
        });
        this.callParent();
        
        this.on("query", function(src, query) {
        	this.setApiParam("query", query);
        	this.store.loadPage(1);
        	
        })
    },
    
    setCorpus: function(corpus) {
    	this.callParent(arguments)
    	if (this.getStore()) {
        	this.getStore().setCorpus(corpus);
        	this.getStore().load();
    	}
    }
});