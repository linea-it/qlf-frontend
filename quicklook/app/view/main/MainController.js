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
                    for(var chave in obj) {
                        // console.log('chave ==>(%o)', chave)
                        if (chave != 'name'){
                            for(var info in obj[chave]){
                                // console.log('obj[chave][info].Name ==>(%o)', obj[chave][info].StepName)
                                for (var result in obj[chave][info]){                                    
                                    if (result != 'name'){
                                        // console.log('obj[chave][info][result] ==>(%o)', obj[chave][info][result])
                                        // console.log('obj[chave][info] ==>(%o)', obj[chave][info].StepName)
                                        if (isInArray(obj[chave][info].StepName, listaAux) != true){
                                            listaAux.push(obj[chave][info].StepName)
                                            // console.log('chave ==>(%o)', chave)
                                            // console.log('obj[chave] ==>(%o)', obj[chave])
                                            // console.log('info==>(%o)', info)
                                            // console.log('obj[chave][info] ==>(%o)', obj[chave][info].StepName)
                                            lista.push(
                                                {
                                                    "title": obj[chave][info].StepName,
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
                                            // console.log(typeof(obj[chave][info][result][step]))
                                            if (typeof(obj[chave][info][result][step]) == 'object'){
                                                // console.log('obj[chave][info][result][step].Name ==>(%o)', obj[chave][info][result][step].Name)
                                            }
                                            for (var name in obj[chave][info][result][step]){
                                                if (isInArray(obj[chave][info][result][step].Name+obj[chave][info].StepName, listaAuxSteps) != true){
                                                    listaAuxSteps.push(obj[chave][info][result][step].Name+obj[chave][info].StepName)
                                                    if (obj[chave][info][result][step].checked == 'True'){
                                                        check = 'true'
                                                    }else{
                                                        check = ''
                                                    }
                                                    // console.log('obj[chave][info][result][step] ==>(%o)', obj[chave][info][result][step])                                                  
                                                    lista[lista.length - 1].items[0].items.push(
                                                        {
                                                            xtype     : 'checkboxfield',
                                                            boxLabel  : obj[chave][info][result][step].Name,
                                                            name      : obj[chave][info][result][step].Name,                                                                    
                                                            // id        : obj[chave][info][result][step].name,
                                                            checked   : check,
                                                            margin: '0 0 0 10',
                                                        }
                                                    )
                                                    
                                                    configuration = obj[chave][info][result][step].kwargs
                                                    // console.log(typeof configuration)
                                                    if (typeof configuration !== 'undefined'){
                                                        lista[lista.length - 1].items[0].items.push(
                                                            {
                                                                xtype: 'button',
                                                                iconCls: 'x-fa fa-cog',                                                                
                                                                tooltip: 'Configuration',
                                                                margin: '8 10 0 10',
                                                                padding : '0 0 1 0',
                                                                value : {"args": obj[chave][info][result][step].kwargs, "StepName" :obj[chave][info].StepName + '(' + obj[chave][info][result][step].Name + ')'},                                                       
                                                                handler: function(a, b) {
                                                                    // console.log(this.value)
                                                                    me.setConfiguration(this.value.args, this.value.StepName)
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
            
            // console.log("args.length(%o)", args.length);
            if (args.length > 0){
                for (var i = args.length - 1; i >= 0; i--) {
                    // console.log("args[i](%o)", args[i]);
                    grid.setSource(args[i]);
                };
            }else{
                grid.setSource(args);
            }
        }

});
