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
            me = this           
            Ext.Ajax.request({
                url: "/qlf-frontend/ws/test.json",               
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
                    for(var chave in obj) {
                        if (chave != 'name'){
                            for(var info in obj[chave]){
                                for (var result in obj[chave][info]){
                                    if (result != 'name'){
                                        if (isInArray(obj[chave][info].name, listaAux) != true){
                                            listaAux.push(obj[chave][info].name)
                                            lista.push(
                                                {
                                                    "title": obj[chave][info].name,
                                                    items: [{                                                        
                                                        xtype: 'fieldcontainer',
                                                        // fieldLabel: 'Toppings',
                                                        // defaultType: 'checkboxfield',
                                                        layout: 'hbox',
                                                        items:[]
                                                        }
                                                    ]
                                                }
                                            )
                                        }
                                        for (var step in obj[chave][info][result]){
                                            for (var name in obj[chave][info][result][step]){
                                                if (isInArray(obj[chave][info][result][step].name, listaAuxSteps) != true){
                                                    listaAuxSteps.push(obj[chave][info][result][step].name)
                                                    if (obj[chave][info][result][step].checked == 'True'){
                                                        check = 'true'

                                                    }else{
                                                        check = ''
                                                    }                                                    
                                                    lista[lista.length - 1].items[0].items.push(
                                                        {
                                                            xtype     : 'checkboxfield',
                                                            boxLabel  : obj[chave][info][result][step].name,
                                                            name      : obj[chave][info][result][step].name,                                                                    
                                                            // id        : obj[chave][info][result][step].name,
                                                            checked   : check,
                                                            margin: '0 0 0 10',
                                                        }
                                                    )
                                                    
                                                    configuration = obj[chave][info][result][step].configuration
                                                    // console.log(typeof configuration)
                                                    if (typeof configuration !== 'undefined'){
                                                        lista[lista.length - 1].items[0].items.push(
                                                            {
                                                                xtype: 'button',
                                                                iconCls: 'x-fa fa-cog',                                                                
                                                                tooltip: 'Configuration',
                                                                margin: '8 10 0 10',
                                                                padding : '0 0 1 0',
                                                                handler: function() {
                                                                    // alert('You clicked the button!');
                                                                    // console.log(me)
                                                                    me.setConfiguration()
                                                                }
                                                                    
                                                            }
                                                        )
                                                    }
                                                }                                                
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    data = lista;            
                    accordionPanel.add(data);                    
                }
            })            
        },
        setConfiguration: function() {
            // console.log("onSelectReleaseField(%o, %o. %o)", release, field, combo);

            var refs = this.getReferences();
                // conf = refs.Configuration;
                // storeDI = gridDI.getStore();
           
            console.log(this)
            teste = this.getStore('personnel')
            console.log(teste)
            
        }

});
