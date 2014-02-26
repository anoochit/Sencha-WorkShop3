Ext.define('WorkShop3.controller.controller_FormAdd', {
    extend: 'Ext.app.Controller',

    config: {
        // reference from and buttons
        refs: {
            ref_view_ShowData: 'wg_view_ShowData',
            ref_view_FormAdd: 'wg_view_FormAdd',
            ref_view_FormAdd_bnt_Back: 'wg_view_FormAdd #bnt_Back',
            ref_view_FormAdd_bnt_Save: 'wg_view_FormAdd #bnt_Save'
        },
        // control & event calling
        control: {
            ref_view_FormAdd_bnt_Back: {
                tap: 'FNC_bnt_Back'
            },
            ref_view_FormAdd_bnt_Save: {
                tap: 'FNC_bnt_Save'
            }

        }
    },

    //called when the Application is launched, remove if not needed
    launch: function () {
        console.log('--> Controller form add');
    },

    // back button tap
    FNC_bnt_Back: function () {
        console.log('--> Back button tap');
        var _viewShowData = this.getRef_view_ShowData();
        Ext.Viewport.animateActiveItem(_viewShowData, {type: 'flip'});
    },

    // save button tap
    FNC_bnt_Save: function () {
        console.log('--> Save button tap');

        // get values from a from
        var _view = this.getRef_view_FormAdd();
        var _values = _view.getValues();
        console.log(_values);

        // put value to store
        var _record = Ext.create('WorkShop3.model.model_MainApp');
        _record.set('f_name', _values.txt_name);
        _record.set('f_surname', _values.txt_name);
        _record.set('f_nickname', _values.txt_nickname);

        console.log(_record);

        // save record
        var _store = Ext.getStore('store_MainApp');
        _store.add(_record);
        _store.sync();

        // back to show data
        var _viewShowData = this.getRef_view_ShowData();
        Ext.Viewport.animateActiveItem(_viewShowData, {type: 'flip'});

    }

});
