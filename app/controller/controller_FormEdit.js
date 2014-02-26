Ext.define('WorkShop3.controller.controller_FormEdit', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            ref_view_ShowData: 'wg_view_ShowData',
            ref_view_FormEdit: 'wg_view_FormEdit',
            ref_view_FormEdit_bnt_Back: 'wg_view_FormEdit #bnt_Back',
            ref_view_FormEdit_bnt_Remove: 'wg_view_FormEdit #bnt_Remove',
            ref_view_FormEdit_bnt_Update: 'wg_view_FormEdit #bnt_Update'
        },
        control: {
            ref_view_FormEdit_bnt_Back: {
                tap:'FNC_bnt_Back'
            },
            ref_view_FormEdit_bnt_Remove: {
                tap:'FNC_bnt_Remove'
            },
            ref_view_FormEdit_bnt_Update: {
                tap:'FNC_bnt_Update'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function() {
        console.log('--> Controller Form Edit');
    },

    FNC_bnt_Back: function() {
        console.log('--> Back button');

        var _viewShowData = this.getRef_view_ShowData();
        Ext.Viewport.animateActiveItem(_viewShowData, {type: 'flip'});
    },

    FNC_bnt_Remove: function() {
        console.log('--> Remove button');

        var _view = this.getRef_view_FormEdit();
        var _record = _view.getRecord();
        var _store = Ext.getStore('store_MainApp');

        _store.remove(_record);
        _store.sync();

        var _viewShowData = this.getRef_view_ShowData();
        Ext.Viewport.animateActiveItem(_viewShowData, {type: 'flip'});
    },

    FNC_bnt_Update: function() {
        console.log('--> Update button');

        var _view = this.getRef_view_FormEdit();
        var _values = _view.getValues();
        var _record = _view.getRecord();

        _record.set('f_name',_values.txt_name);
        _record.set('f_surname',_values.txt_surname);
        _record.set('f_nickname',_values.txt_nickname);

        var _store = Ext.getStore('store_MainApp');
        _store.sync();

        var _viewShowData = this.getRef_view_ShowData();
        Ext.Viewport.animateActiveItem(_viewShowData, {type: 'flip'});

    }
});
