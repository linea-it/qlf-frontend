/**
 * This view is an example list of people.
 */
Ext.define('QuickLook.view.main.List', {
    extend: 'Ext.panel.Panel',
    xtype: 'list',

    requires: [
        'QuickLook.store.Personnel',
    

    ],
    
    layout: 'accordion',
    // frame: true,
    
    defaults: {
        bodyPadding: 10,
    },   

    items: [],
    listeners: {
        afterrender: 'render'
    }
    
});
