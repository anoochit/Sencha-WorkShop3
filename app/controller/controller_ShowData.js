Ext.define('WorkShop3.controller.controller_ShowData', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            ref_view_FormAdd: 'wg_view_FormAdd',
            ref_view_FormEdit: 'wg_view_FormEdit',
            ref_view_ShowData_bnt_Add: 'wg_view_ShowData #bnt_Add',
            ref_view_ShowData_list_ShowData: 'wg_view_ShowData #list_ShowData'
        },

        control: {
            ref_view_ShowData_bnt_Add: {
                tap: 'FNC_bnt_Add'
            },

            ref_view_ShowData_list_ShowData: {
                itemtap: 'FNC_bnt_list_ShowData'
            }
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function () {
        console.log('--> Controller Show Data');
    },

    FNC_bnt_Add: function () {
        console.log('--> Add button tap');
        var _view = this.getRef_view_FormAdd();

        // clear FormAdd
        _view.setValues({
            txt_name: '',
            txt_surname: '',
            txt_nickname: ''

        });

        Ext.Viewport.animateActiveItem(_view, {type: 'slide'});

    },

    FNC_bnt_list_ShowData: function (list, index, target, record) {
        console.log(record.data);
        var _view = this.getRef_view_FormEdit();
        _view.setRecord(record);
        _view.setValues({
            'txt_name': record.data.f_name,
            'txt_surname': record.data.f_surname,
            'txt_nickname': record.data.f_nickname
        });

        console.log('--> Show Form Edit');
        Ext.Viewport.animateActiveItem(_view, {type: 'slide'});
    }


});
