// d e a c
Ext.define('WorkShop3.view.view_ShowData', {

    extend: 'Ext.Container',
    requires: ['Ext.dataview.List'],
    alias: 'widget.wg_view_ShowData',

    config: {

        layout: 'fit',

        items: [
            {
                xtype: 'titlebar',
                title: 'Show Data',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        text: 'Add',
                        itemId: 'bnt_Add'
                    }
                ]

            },
            {
                xtype: 'list',
                store: 'store_MainApp',
                itemTpl: '{f_name} {f_surname} {f_nickname}',
                onItemDisclosure: true,
                emptyText: 'No Data',
                itemId: 'list_ShowData'
            }
        ]

    }

});