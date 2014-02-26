// d e a c
Ext.define('WorkShop3.store.store_MainApp', {

    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.LocalStorage'],
    config: {

        model: 'WorkShop3.model.model_MainApp',
        autoLoad: true,
        proxy: {
            id: 'WorkShop3-Local-ID',
            type: 'localstorage'
        }
    }

});