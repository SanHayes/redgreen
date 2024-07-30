define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'task/index' + location.search,
                    add_url: 'task/add',
                    edit_url: 'task/edit',
                    del_url: 'task/del',
                    multi_url: 'task/multi',
                    table: 'task',
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
                        {field: 'admin.id', title: __('发布者id')},
                        {field: 'admin.nickname', title: __('发布者昵称')},
                        {field: 'users_id', title: __('Users_id')},
                        {field: 'users.username', title: __('Users.username')},
                        {field: 'users.nickname', title: __('Users.nickname')},
                        {field: 'title', title: __('Title')},
                        {field: 'score', title: __('Score')},
                        {field: 'status', title: __('Status'), searchList: {"1":__('Status 1'),"0":__('Status 0'),"2":__('Status 2'),"3":__('Status 3')}, formatter: Table.api.formatter.status},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},

                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate,
                            buttons:[
                                {//双选
                                    name: 'apply_yes',
                                    text:__('完成'),
                                    title: __('完成'),

                                    classname: 'btn btn-xs btn-success btn-magic btn-ajax',
                                    confirm: '是否已经确定他完成了任务？',
                                    url: 'Task/accomplish',
                                    // visible: false,//显示按钮true  隐藏按钮false
                                    visible:function(row){
                                        if (row.status==2){
                                            return true;
                                        }

                                    },

                                    success: function (data, ret) {
                                        Layer.alert(ret.msg);
                                        window.location.reload();//刷新
                                    },
                                    error: function (data, ret) {
                                        console.log(data, ret);
                                        Layer.alert(ret.msg);
                                        return false;
                                    }
                                }
                            ]



                        }
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
            // 获取选中项
            $(document).on("click", ".btn-arr_add_task", function () {
                Fast.api.open("Task/arr_add_task", "预设",

                );
            });
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        arr_add_task: function () {
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