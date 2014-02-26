// d e a c
Ext.define('WorkShop3.model.model_MainApp', {

    extend: 'Ext.data.Model',
    config: {
        identifier: 'uuid',
        fields: [
            { name: 'id', type: 'string'},
            { name: 'f_name', type: 'string'},
            { name: 'f_surname', type: 'string'},
            { name: 'f_nickname', type: 'string'}
        ]
    }

});