/**
 * This view is an example list of people.
 */
Ext.define('QuickLook.view.main.Configuration', {
    extend: 'Ext.grid.property.Grid',
    xtype: 'config',

    requires: [
        'QuickLook.store.Personnel'
    ],
    
    
    scrollable: true,
    // source: {
    //     evtStart: true,
    //     test: false,
    // },
    // sourceConfig: {
    //     evtStart: {
    //         editor: Ext.create('Ext.form.field.Checkbox', {selectOnFocus: true}),
    //         displayName: 'teste1'
    //     },
    //     test: {
    //         editor: Ext.create('Ext.form.field.Checkbox', {selectOnFocus: true}),
    //         displayName: 'teste2'
    //     }
    // }
});
