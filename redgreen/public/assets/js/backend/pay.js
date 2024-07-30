define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'pay/index' + location.search,
                    add_url: 'pay/add',
                    edit_url: 'pay/edit',
                    del_url: 'pay/del',
                    multi_url: 'pay/multi',
                    table: 'pay',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'out_trade_no', title: __('Out_trade_no')},
                        {field: 'pay_amount', title: __('Pay_amount'), operate:'BETWEEN'},
                        {field: 'pay_applydate', title: __('Pay_applydate')},
                        {field: 'datetime', title: __('Datetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'users_id', title: __('Users_id')},
                        {field: 'pay_productname', title: __('Pay_productname')},
                        {field: 'trade_state', title: __('Trade_state'), searchList: {"NOTIFYED":__('Trade_state notifyed'),"SUCCESS":__('Trade_state success'),"NOTPAY":__('Trade_state notpay')}, formatter: Table.api.formatter.normal},
                        {field: 'users.username', title: __('Users.username')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});