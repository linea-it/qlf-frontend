/**
 * This view is an example list of people.
 */
Ext.define('QuickLook.view.main.List', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlist',

    requires: [
        'QuickLook.store.Personnel'
    ],// plugins: 'gridfilters',
    // title: 'Personnel',

    // store: {
    //     type: 'personnel'
    // },
    
    layout: 'accordion',
    // width: 500,
    // height: 400,
    defaults: {
        bodyPadding: 10
    },
    initComponent: function() {
        // console.log(store)
        // Ext.apply(this, {
        //     items: [{
        //         xtype: 'grid',
        //         store: {type: 'personnel'},
        //         title: this.store,
        //         columns: [
        //             { text: 'Name',  dataIndex: 'tasks',
        //             renderer: function(value, metaData, record, rowIndex){                
        //                 console.log(this.store)
        //                 console.log(value)
        //                 // console.log(value.name)
        //                 html = value[0].name +'<br>'+ value[1].name
        //                 // html += '<tr><td>'+value[rowIndex].name+'</td></tr>'
        //                 return html
        //             }
        //         }]
        //     },{
        //         title: 'Accordion Item 2',
        //         html: 'Empty'
        //     }, {
        //         title: 'Accordion Item 3',
        //         html: 'Empty'
        //     }, {
        //         title: 'Accordion Item 4',
        //         html: 'Empty'
        //     }],
        // });
        
        this.callParent();
    },

    items: [],
    listeners: {
        render: function (accordionPanel) {
            // exapmple json response            
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
                                                    console.log(typeof configuration)
                                                    if (typeof configuration !== 'undefined'){
                                                        lista[lista.length - 1].items[0].items.push(
                                                            {
                                                                xtype: 'button',
                                                                iconCls: 'x-fa fa-cog',
                                                                // height: 20,
                                                                // width: 10,
                                                                // text: 'Configuration',
                                                                tooltip: 'Configuration',
                                                                margin: '8 10 0 10',
                                                                padding : '0 0 1 0'
                                                                    
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
                    // for (var l in listaAux){
                    //     console.log(listaAux[l])
                    //     lista.push({"title": listaAux[l]})
                    // }

                    // {
                    //     boxLabel  : 'Artichoke Hearts',
                    //     name      : 'topping',
                    //     inputValue: '2',
                    //     checked   : true,
                    //     id        : 'checkbox2'
                    // }
                    console.log(lista)

                    data = lista;            
                    accordionPanel.add(data);
                    console.log(accordionPanel)
                }
            })            
        }
    }
   
        
    

    // columns: [
    //     { text: 'Name',  dataIndex: 'tasks',
    //     renderer: function(value, metaData, record, rowIndex){
    //         // url = "/VP/getViewProcessCon?process_id="+record.data.process_id
    //         // html = '<a alt="Product log" href="'+url+'" target="_blank">' +record.data.process_id +'</a> <font style="font-weight:bold;">'+record.data.display_name+': </font><br>'
    //         // html += '<table><tr><td style="white-space: initial">' + record.data.atributos.Comments[0]['Submission Comment']  + '</td></tr></table>'
    //         console.log(rowIndex)
    //         console.log(value)
    //         // console.log(value.name)
    //         html = value[0].name +'<br>'+ value[1].name
    //         // html += '<tr><td>'+value[rowIndex].name+'</td></tr>'
    //         return html
    //     } 
    //     },
    //     // { text: 'Email', dataIndex: 'email', flex: 1 },
    //     // { text: 'Phone', dataIndex: 'telefone', flex: 1 },
    //     // { text: 'Idade', dataIndex: 'idade', flex: 1, filter: 'number' },
    //     // { text: 'Data de Criação', dataIndex: 'criado_em', flex: 1 },
    //     // {text: 'Cpf', dataIndex: 'cpf', flex: 1 }
    // ],
    // listeners: {
    //     select: 'onItemSelected'
    // }
});
