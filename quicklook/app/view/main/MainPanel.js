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
        xtype: 'list',
        margin: '0 10 0 0',
        title: ' &nbsp',
        reference: 'accordion'

    },{
        flex: 1,
        xtype: 'panel',
        reference: 'panelgrid',
        items: [{        
            xtype: 'config',
            reference: 'configuration'

        }],
        title: ' &nbsp',
        frame: true,

    }],
    // listeners: {
    //     afterrender: 'render'
    // }
    
});