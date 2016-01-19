/**
 * This view is an example list of people.
 */
Ext.define('QuickLook.view.main.MainPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlist',

    requires: [
        'QuickLook.store.Personnel',
        'QuickLook.view.main.MainController',
        'QuickLook.view.main.List',
        'QuickLook.view.main.Configuration'

    ],
    controller: 'main', 
    
    // layout: 'accordion',
    // frame: true,
    
    defaults: {
        bodyPadding: 10,
    },
    listeners: {
        afterrender: 'teste'
    },  
    layout: {
        type: 'hbox',
        pack: 'start',
        // align: 'stretch'
    },
    items: [{
        flex: 1,
        xtype: 'panel',
        reference: 'accordion',
        margin: '0 10 0 0',
        items: [{        
            xtype: 'list',
            reference: 'accordion',
            me: this,

        },{
            xtype: 'button',
            text: 'Save',
            margin: '20 10 0 0',
            handler: function() {
                // alert('You clicked the button!');
                console.log(me)
                panel = me.getView()
                refs = panel.getReferences()
                grid = refs.configuration
                grid.saveStore()

            }
        },{
            xtype: 'button',
            text: 'submit',
            margin: '20 10 0 0',
            handler: function() {
                alert('You clicked the button!');

            }
        }],
        title: ' &nbsp',
        frame: true,

    },{
        flex: 1,
        xtype: 'panel',
        reference: 'panelgrid',
        items: [{        
            xtype: 'config',
            reference: 'configuration',
            me: this,

        }],
        title: ' &nbsp',
        frame: true,

    }],
    // listeners: {
    //     afterrender: 'render'
    // }
    
});


