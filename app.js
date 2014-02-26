// app na luk EVa
Ext.application({
    name: 'WorkShop3',
    models: ['model_MainApp'],
    stores: ['store_MainApp'],
    views: ['view_FormAdd','view_ShowData','view_FormEdit'],
    controllers:['controller_FormAdd','controller_ShowData','controller_FormEdit'],

    launch: function() {
        console.log('--> App Start');

        var _viewFormAdd = {
            xtype: 'wg_view_FormAdd'
        };

        var _viewShowData = {
            xtype: 'wg_view_ShowData'
        };

        var _viewFormEdit = {
            xtype: 'wg_view_FormEdit'
        };

        //EVa
        Ext.Viewport.add([_viewShowData,_viewFormAdd,_viewFormEdit]);

    }


});
