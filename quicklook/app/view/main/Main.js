/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Quicklook.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Quicklook.view.main.MainPanel',
        'Quicklook.view.main.MainController',
        'Quicklook.view.main.MainModel',
        'Quicklook.view.main.List',
        'Quicklook.view.main.Configuration'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: 'Quick Look'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },
    // listeners: {
    //     afterrender: 'teste'
    // },
    
    items: [{
        title: 'Home',
        iconCls: 'x-fa fa fa-home',
        xtype: 'component',
        id: 'bokeh',
        listeners: {
            afterrender: 'teste'
        }
    },{
        title: 'Configuration',
        iconCls: 'fa-cog',
        width: 500,
        // height: 400,        
        // layout: {
        //     type: 'hbox',
        //     pack: 'start',
        //     // align: 'stretch'
        // },
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            flex: 1,     
            xtype: 'mainlist',
            // title: ' &nbsp',
            margin: '0 10 0 0'
        }]
    }, {
        title: 'Monitor',
        iconCls: 'x-fa fa-desktop',
        bind: {
            html: '{loremIpsum}'
        }
    }, 
    {
        title: 'QA',
        // iconCls: 'fa-users',
        iconCls: 'x-fa fa-line-chart',
        bind: {
            html: '{loremIpsum}'
        }
    }
    // , {
    //     title: 'Settings',
    //     iconCls: 'fa-cog',
    //     bind: {
    //         html: '{loremIpsum}'
    //     }
    // }
    ]
});