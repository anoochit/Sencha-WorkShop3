// d e a c
Ext.define('WorkShop3.view.view_FormEdit', {

    extend: 'Ext.form.Panel',
    alias: 'widget.wg_view_FormEdit',

    requires: ['Ext.TitleBar', 'Ext.form.FieldSet', 'Ext.field.Text'],

    config: {
        //html: 'form add',

        items: [
            {

                xtype: 'titlebar',
                title: 'Form Edit',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        itemId: 'bnt_Back',
                        align: 'left',
                        ui: 'back'
                    },
                    {
                        xtype: 'button',
                        text: 'Remove',
                        itemId: 'bnt_Remove',
                        align: 'right',
                        ui: 'decline'
                    }
                ]

            },
            {
                xtype: 'fieldset',
                title: 'title',
                instructions: 'instructions',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'txt_name',
                        label: 'Name',
                        placeHolder: 'your name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'txt_surname',
                        label: 'Surname',
                        placeHolder: 'your surname'
                    },
                    {
                        xtype: 'textfield',
                        name: 'txt_nickname',
                        label: 'Nickname',
                        placeHolder: 'your nickname'
                    },
                    {
                        xtype: 'button',
                        text: 'Update',
                        ui: 'confirm',
                        itemId: 'bnt_Update'
                    }

                ]
            }
        ]

    }

});