define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'users/scorelog/index' + location.search,
                    add_url: 'users/scorelog/add',
                    edit_url: 'users/scorelog/edit',
                    del_url: 'users/scorelog/del',
                    multi_url: 'users/scorelog/multi',
                    table: 'users_score_log',
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
                        {field: 'users_id', title: __('Users_id')},
                        {field: 'score', title: __('Score')},
                        {field: 'before', title: __('Before')},
                        {field: 'after', title: __('After')},
                        {field: 'memo', title: __('Memo')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'users.username', title: __('Users.username')},
                        {field: 'users.nickname', title: __('Users.nickname')},
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