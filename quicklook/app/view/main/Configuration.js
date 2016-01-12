/**
 * This view is an example list of people.
 */
Ext.define('QuickLook.view.main.Configuration', {
    extend: 'Ext.grid.Panel',
    xtype: 'config',

    requires: [
        'QuickLook.store.Personnel'
    ],
    frame: true,
    store: {
        type: 'personnel'
    },
    selModel: {
      selType: 'checkboxmodel',

    }, 
    columns: [
        { text: 'All', dataIndex: 'name' },
        // { text: 'Email', dataIndex: 'email', flex: 1 },
        // { text: 'Phone', dataIndex: 'phone' }
    ]
    // listeners: {
        
    // }
});
