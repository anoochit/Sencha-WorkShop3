// d e a c
Ext.define('WorkShop3.view.view_FormAdd', {

    extend: 'Ext.form.Panel',
    alias: 'widget.wg_view_FormAdd',

    requires: ['Ext.TitleBar','Ext.form.FieldSet','Ext.field.Text'],

    config: {
        //html: 'form add',

        items: [
            {

                xtype: 'titlebar',
                title: 'Form Add',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        text: 'back',
                        itemId: 'bnt_Back',
                        align: 'left',
                        ui:'back'
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
                        text: 'Save',
                        ui:'confirm',
                        itemId: 'bnt_Save'
                    }

                ]
            }
        ]

    }

});