/**
 * This view is an example list of people.
 */
Ext.define('QuickLook.view.main.List', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlist',

    requires: [
        'QuickLook.store.Personnel',
        'QuickLook.view.main.MainController'
    ],
    controller: 'main', 
    
    layout: 'accordion',
    frame: true,
    
    defaults: {
        bodyPadding: 10,
    },   

    items: [],
    listeners: {
        afterrender: 'render'
    }
    
});
