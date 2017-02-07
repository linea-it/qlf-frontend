Ext.define('Quicklook.view.main.Ccd', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.Table'
    ],

    xtype: 'ccd',
    width: 500,
    height: 400,

    layout: {
        type: 'table',
        columns: 4,
        tableAttrs: {
            style: {
                width: '100%'
            }
        }
    },

    scrollable: true,
    
    defaults: {
        bodyPadding: '15 20',
        border: true
    },
    
    items: [
        {
            html: 'Cell A content',
            margin: '0 10 10 0'
            // rowspan: 2
        },
        {
            html: 'Cell B content',
            margin: '0 10 10 0'

            // colspan: 2
        },
        {
            html: 'Cell C content',
            margin: '0 10 10 0',
            cellCls: 'highlight'
        },
        {
            html: 'Cell D content',
            margin: '0 10 10 0'
        },
        {
            html: 'Cell A content',
            margin: '0 10 10 0'
            // rowspan: 2
        },
        {
            html: 'Cell B content',
            margin: '0 10 10 0'
            // colspan: 2
        },
        {
            html: 'Cell C content',
            margin: '0 10 10 0',
            cellCls: 'highlight'
        },
        {
            html: 'Cell D content',
            margin: '0 10 10 0'
        },
        {
            html: 'Cell A content',
            margin: '0 10 10 0'
            // rowspan: 2
        },
        {
            html: 'Cell B content',
            margin: '0 10 10 0'
            // colspan: 2
        },
        {
            html: 'Cell C content',
            margin: '0 10 10 0',
            cellCls: 'highlight'
        },
        {
            html: 'Cell D content',
            margin: '0 10 10 0'
        },
        {
            html: 'Cell A content',
            margin: '0 10 10 0'
            // rowspan: 2
        },
        {
            html: 'Cell B content',
            margin: '0 10 10 0'
            // colspan: 2
        },
        {
            html: 'Cell C content',
            margin: '0 10 10 0',
            cellCls: 'highlight'
        },
        {
            html: 'Cell D content',
            margin: '0 10 10 0'
        }
    ]
});