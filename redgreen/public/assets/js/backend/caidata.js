define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'caidata/index' + location.search,
                    add_url: 'caidata/add',
                    edit_url: 'caidata/edit',
                    del_url: 'caidata/del',
                    yushe_url: 'caidata/yushe',
                    multi_url: 'caidata/multi',
                    table: 'caidata',
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
                        {field: 'game_en', title: __('Game')},
                        {field: 'qishu', title: __('Qishu')},
                        {field: 'result', title: __('Result')},
                        {field: 'status', title: __('Status'), searchList: {"0":__('Status 0'),"1":__('Status 1'),"2":__('Status 2'),"3":__('Status 3')}, formatter: Table.api.formatter.status},
                        {field: 'starttime', title: __('Starttime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        // {field: 'next_qishu', title: __('Next_qishu')},
                        // {field: 'next_time', title: __('Next_time'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate,
                            // formatter: Table.api.formatter.operate
                            formatter:function (value,row,index){
                                var that=$.extend({},this);
                                var table=$(that.table).clone(true);

                                $(table).data("operate-edit",null);//编辑


                                that.table=table;
                                return Table.api.formatter.operate.call(that,value,row,index);

                            },
                            buttons:[
                                {//弹窗
                                    name: 'bet_list',
                                    text:__('注'),
                                    title: __('查看下注详情'),
                                    classname: 'btn btn-xs btn-primary btn-dialog',
                                    icon: 'fa fa-list',
                                    url:function(row) {
                                        //这里手动构造URL
                                        url = "Bet/index?qishu="+row.qishu;
                                        return url;
                                    },
                                },
                                {//弹窗
                                    name: 'yushe',
                                    text:__('预设'),
                                    title: __('预设开奖号码'),
                                    classname: 'btn btn-xs btn-success btn-dialog',
                                    icon: 'fa fa-plus',
                                    url:function(row) {
                                        //这里手动构造URL
                                        url = "Caidata/yushe?qishu="+row.qishu;
                                        return url;
                                    },
                                    hidden:function ($row) {
                                        return $row.status > 0 ? true : false;
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
            // $(document).on("click", ".btn-yushe", function () {
            //     Fast.api.open("Caidata/yushe", "预设",
            //     //     {callback:function(value){
            //     //         //在这里可以接收弹出层中使用`Fast.api.close(data)`进行回传数据
            //     //     }
            //     // }
            //     );

            //     //iframe层
            //     // layer.open({
            //     //     type: 2,
            //     //     title: '预设',
            //     //     shadeClose: true,
            //     //     shade: 0.8,
            //     //     area: ['380px', '90%'],
            //     //     content: 'Caidata/yushe' //iframe的url
            //     // });
            //     // Layer.alert(JSON.stringify(table.bootstrapTable('getSelections')));
            // });
        },
        recyclebin: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    'dragsort_url': ''
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: 'caidata/recyclebin' + location.search,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {
                            field: 'deletetime',
                            title: __('Deletetime'),
                            operate: 'RANGE',
                            addclass: 'datetimerange',
                            formatter: Table.api.formatter.datetime
                        },
                        {
                            field: 'operate',
                            width: '130px',
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.operate,
                            buttons: [
                                {
                                    name: 'Restore',
                                    text: __('Restore'),
                                    classname: 'btn btn-xs btn-info btn-ajax btn-restoreit',
                                    icon: 'fa fa-rotate-left',
                                    url: 'caidata/restore',
                                    refresh: true
                                },
                                {
                                    name: 'Destroy',
                                    text: __('Destroy'),
                                    classname: 'btn btn-xs btn-danger btn-ajax btn-destroyit',
                                    icon: 'fa fa-times',
                                    url: 'caidata/destroy',
                                    refresh: true
                                }
                            ],
                            formatter: Table.api.formatter.operate
                        }
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
        yushe: function () {
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