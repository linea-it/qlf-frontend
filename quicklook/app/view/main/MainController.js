/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('QuickLook.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    
    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    
    render: function (accordionPanel) {
            // exapmple json response
            panel = this.getView()            
            refs = panel.getReferences()            
            grid = refs.accordion
            me = this           
            Ext.Ajax.request({
                url: "/qlf-frontend/test.json",               
                success: function(response) {
                    var obj = Ext.decode(response.responseText);
                    // console.log(obj)
                    // obj = Ext.decode(responseText),
                    listaAux = []
                    listaAuxSteps = []
                    lista = []
                    function isInArray(value, array) {
                        return array.indexOf(value) > -1;
                    }
                    // console.log('obj ==>(%o)', obj['tasks'])
                    // console.log('obj[tasks].name ==>(%o)', obj.name)
                    grid.setTitle(obj.name)
                    for (var i = 0; i < obj['tasks'].length; i++) {
                        // console.log('obj[tasks][i].name ==>(%o)', obj['tasks'][i].name)
                        lista.push(
                            {
                                "title": obj['tasks'][i].name,
                                items: [{                                                        
                                    xtype: 'fieldcontainer',                                    
                                    layout: 'hbox',
                                    items:[]
                                    }
                                ]
                            }
                        )
                        for (var s = 0; s < obj['tasks'][i].steps.length; s++) {                            
                            lista[lista.length - 1].items[0].items.push(
                                {
                                    xtype     : 'checkboxfield',
                                    boxLabel  : obj['tasks'][i].steps[s].name,
                                    name      : 'teste', 
                                    // id        : obj[chave][info][result][step].name,
                                    checked   : true,
                                    margin: '0 0 0 10',
                                }
                            )
                            configuration = obj['tasks'][i].steps[s].configuration
                            // console.log(typeof configuration)
                            if (typeof configuration !== 'undefined'){
                                lista[lista.length - 1].items[0].items.push(
                                    {
                                        xtype: 'button',
                                        iconCls: 'x-fa fa-cog',                                                                
                                        tooltip: 'Configuration',
                                        margin: '8 10 0 10',
                                        padding : '0 0 1 0',
                                        value : {"args": obj['tasks'][i].steps[s].configuration, "StepName" : obj['tasks'][i].name +'('+ obj['tasks'][i].steps[s].name +')'},//obj[chave][info].StepName + '(' + obj[chave][info][result][step].Name + ')'},                                                       
                                        handler: function() {
                                            // console.log(this.value)
                                            me.setConfiguration(this.value.args, this.value.StepName)
                                        }
                                            
                                    }
                                )
                            }                        
                        };
                    };
                    console.log(lista)                    
                    data = lista;            
                    accordionPanel.add(data);                    
                }
            })            
        },
        getType: function(teste){

            if (teste['type'] == 'choice'){
                console.log("teste(%o)", teste);
                options = teste['options']
                console.log("options(%o)", options);                
                store =  Ext.create('Ext.data.Store', {
                    fields: ['abbr', 'name'],
                    data: options
                })
                name = options[0]['name']                
                grid.setSource({
                abbr: options[0]['name'],                
                },{
                    abbr: {
                        displayName: 'Choose State',
                        editor: Ext.create('Ext.form.ComboBox', {
                            store: store,
                            // readOnly : true,
                            valueField: 'abbr',
                            // displayField: 'name',
                            defaultValue: 'AK'
                        }) 
                    }
                });
                }else{
                    console.log("teste(%o)", teste);
                    grid.setSource(teste)
                }
        },
        teste: function() {
            // console.log("onSelectReleaseField(%o, %o. %o)", release, field, combo);

            var refs = this.getReferences();
                // conf = refs.Configuration;
                // storeDI = gridDI.getStore();
            teste = this.getView()
            console.log(refs)
            // teste = this.getStore('personnel')
            // console.log(teste)
            
        },
        setConfiguration: function(args, StepName) {
            panel = this.getView()            
            refs = panel.getReferences()            
            grid = refs.configuration
            panelgrid = refs.panelgrid
            panelgrid.setTitle(StepName);
            
            console.log("args.length(%o)", args.length);
            if (args.length > 0){
                for (var i = args.length - 1; i >= 0; i--) {
                    // console.log("args[i](%o)", args[i]);
                    teste = args[i]
                    // grid.setSource(args[i]);
                };
            }else{
                grid.setSource(args);
            }
            this.getType(teste)


            // store =  Ext.create('Ext.data.Store', {
            //             fields: ['abbr', 'name'],
            //             data : [
            //                 {"abbr":"AL", "name":"Alabama"},
            //                 {"abbr":"AK", "name":"Alaska"},
            //                 {"abbr":"AZ", "name":"Arizona"}
            //             ]
            //         }),
            
        }

        //     {
        //         parametro_boolean: {

        //         },
        //         parametro_text: {

        //         },
        //         parametro_number: {

        //         },
        //         parametro_data: {

        //         },
        //         parametro_um_valor_multiplas_opcoes: {

        //         },
        //         parametro_multiplos_valores: {
        //             editor:  Ext.create('Ext.ux.form.MultiSelect', {

        //             }
        //         }
        //     }

            // {
            //     type: 'text',
            //     name: 'nomedoparametro_endereco',
            //     display_name: 'Endereco',
            //     allowblank: false // opcional validacao que o usuario pode passar
            //     maxLength: 10
            // },
            // {
            //     type: 'number',
            //     name: 'nomedoparametro_telefone',
            //     display_name: 'Telefone',
            //     // opcionais
            //     allowblank: true,
            //     maxValue: 99,
            //     minValue: 0,
            //     allowDecimals: false,
            // },
            // {
            //     type: 'boolean',
            //     name: 'nomedoparamtro_',
            //     display_name: 'Campo Boolean',
            // },
            // {
            //     type: 'date',
            //     name: 'nomedoparamtro_DataNascimento',
            //     display_name: 'Data Nascimento',
            //     // opcionais
            //     dateFormat: 'yy-mm-dd',
            //     minDate: null,
            //     maxDate: null
            // },
            // {
            //     type: 'choice',
            //     name: 'nomedoparamtro_EstadoCivil',
            //     display_name: 'Estado Civil',
            //     defaultValue: 2
            //     options: [
            //         { 
            //             value: 1,
            //             display_name: 'Solteiro'
            //         },    
            //         { 
            //             value: 2,
            //             display_name: 'Casado'
            //         },                    
            //         { 
            //             value: 3,
            //             display_name: 'Separado'
            //         },
            //         { 
            //             value: 'nomeinternodovalor',
            //             display_name: 'Display na da Opcao'
            //         }
            //     ]
            //     // opcionais
            // },
            // {
            //     type: 'multichoice',
            //     name: 'nomedoparamtro_seriesfavoritas',
            //     display_name: 'Series Favoritas',
            //     options: [
            //         { 
            //             value: 1,
            //             display_name: 'Serie 1'
            //         },    
            //         { 
            //             value: 2,
            //             display_name: 'Serie 2'
            //         },                    
            //         { 
            //             value: 3,
            //             display_name: 'Serie 3'
            //         }
            //     ]
            //     // opcionais
            // },  

            //         //     {
        


});



