/**
 * This view is an example list of people.
 */
Ext.define('QuickLook.view.main.Configuration', {
    extend: 'Ext.grid.property.Grid',
    xtype: 'config',

    requires: [
        // 'QuickLook.store.Personnel'
    ],


    scrollable: true,
    myStore: '',
    config: {
        mySourceConfig: {},
        mySource: {},
        
    },
    saveStore: function(){
       Ext.Ajax.request({
            url: "/qlf-frontend/pipelines/ql.json",
            success: function(response) {
                var obj = Ext.decode(response.responseText);
            
                console.log(obj)
            }
        });
       console.log('fora', '=', obj)
    },

    
    setConfiguration: function (fields) {
        
        this.store.source = {}
        var me = this,
            sourceConfig = me.getMySourceConfig(),
            source = me.getSource();


        for (var i = 0; i < fields.length ; i++) {
            var field = fields[i],
                name = field.name;            
            if (field.hasOwnProperty('type')){

                var type = field.type;

                switch(type) {
                    case 'select':
                        me.createselect(field);
                        break;
                    case 'multiselect':
                        me.createMultiselect(field);
                        break;
                    case 'text':
                        me.createText(field);
                        break;
                    case 'number':
                        me.createNumber(field);
                        break;
                    case 'date':
                        me.createDate(field);
                        break;
                    default:
                        console.log('NUM SEI');
                }


            } else {
                // Campo automatico só incluir o field no sourceConfig
                // console.log('teste entrou aqui')
                sourceConfig[name] = {
                    displayName: field.displayName
                }
                if (field.hasOwnProperty('default')) {
                    source[name] = field.default;
                }
                else {
                    // a se pensar se e necessario
                    source[name] = '';
                }
            }
        };       
        me.setSource(source, sourceConfig);
    },


    createselect: function (field) {
        // console.log('createselect(%o)', field);

        var me = this,
            sourceConfig = me.getMySourceConfig(),
            source = me.getSource(),
            name = field.name,
            options = Array();

        if (field.hasOwnProperty('options')) {            
            var store = Ext.create('Ext.data.Store', {
                fields: ['value', 'displayName'],
                data: field['options']
            })

            // criar editor
            var editor = Ext.create('Ext.form.ComboBox', {
                store: store,                
                valueField: 'name',
                displayField: 'name',
                editable: false,
                // multiSelect: true,                
            });

            // Adicionar o parametro no sourceConfig
            sourceConfig[name] = {
                displayName: field.displayName,
                editor: editor
            }          
            

            // ------------------ SOURCE ----------------------
            
            if (field.hasOwnProperty('default')) {                
                v = store.getAt(store.find('value', field.default));
                source[name] = v.get('name');
            }
            else {
                // a se pensar se e necessario
                source[name] = '';
            }

        }
        else {
            // erro select tem que ter opcoes
        }

    },
    
    createMultiselect: function (field) {
        // console.log('createselect(%o)', field);

        var me = this,
            sourceConfig = me.getMySourceConfig(),
            source = me.getSource(),
            name = field.name,
            options = Array();

        if (field.hasOwnProperty('options')) {            
            var store = Ext.create('Ext.data.Store', {
                fields: ['value', 'displayName'],
                data: field['options']
            })

            // criar editor
            var editor = Ext.create('Ext.form.ComboBox', {
                store: store,                
                valueField: 'name',
                displayField: 'name',
                editable: false,
                multiSelect: true,                
            });

            // Adicionar o parametro no sourceConfig
            sourceConfig[name] = {
                displayName: field.displayName,
                editor: editor
            }          
            

            // ------------------ SOURCE ----------------------
            
            if (field.hasOwnProperty('default')) {                
                v = store.getAt(store.find('value', field.default));
                source[name] = v.get('name');
            }
            else {
                // a se pensar se e necessario
                source[name] = '';
            }

        }
        else {
            // erro select tem que ter opcoes
        }

    },
    createText: function (field) {
        // console.log('createselect(%o)', field);

        var me = this,
            sourceConfig = me.getMySourceConfig(),
            source = me.getSource(),
            name = field.name;
            sourceConfig[name] = {
                type: 'text'
            }
            source[name] = '';

            

        if (field.hasOwnProperty('default')) {
            source[name] = field.default;
        }
        

    },
    createNumber: function (field) {
        // console.log('createselect(%o)', field);

        var me = this,
            sourceConfig = me.getMySourceConfig(),
            source = me.getSource(),
            name = field.name;
            source[name] = '';
        
       
        sourceConfig[name] = {
                type: 'number',
                editable: false
            }
        

        if (field.hasOwnProperty('default')) {
            source[name] = field.default;
        }
        

    },
    createDate: function (field) {
        // console.log('createselect(%o)', field);

        var me = this,
            sourceConfig = me.getMySourceConfig(),
            source = me.getSource(),
            name = field.name;
            source[name] = '';
        
        console.log('field.dateFormat', '=', field.dateFormat)
        
        sourceConfig[name] = {
                
            editor: Ext.create('Ext.form.field.Date', {selectOnFocus: true}),
            // displayName: 'Start Time'
            dateFormat: 'Y-m-d g:i A'
    
            }        

        if (field.hasOwnProperty('default')) {
            source[name] = field.default;
        }
    },
});
