/**
 * This view is an example list of people.
 */
Ext.define('Quicklook.view.main.Apps', {
    extend: 'Ext.panel.Panel',
    xtype: 'apps',    
    items:[{
        xtype: 'panel',        
        width: 650,
        
        items:[{
            xtype: 'component',
            html: '<h2>Et harum quidem rerum facilis</h2><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            buttonAlign: 'right',
            buttons: [{
                 xtype: 'button',
                 formBind: true,
                 itemId: 'btnLogin',
                 text: 'READ MORE',
            }]
        }]  
  
    },{
        xtype: 'panel',        
        width: 650,
        
        items:[{
            xtype: 'component',
            html: '<h2>Et harum quidem rerum facilis</h2><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            buttonAlign: 'right',
            buttons: [{
                 xtype: 'button',
                 formBind: true,
                 itemId: 'btnLogin',
                 text: 'READ MORE',
            }]
        }]  
  
    },{
        xtype: 'panel',        
        width: 650,
        
        items:[{
            xtype: 'component',
            html: '<h2>Et harum quidem rerum facilis</h2><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            buttonAlign: 'right',
            buttons: [{
                 xtype: 'button',
                 formBind: true,
                 itemId: 'btnLogin',
                 text: 'READ MORE',
            }]
        }]  
  
    }]
    });
