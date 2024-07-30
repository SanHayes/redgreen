define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'bet/index' + location.search,
                    add_url: 'bet/add',
                    edit_url: 'bet/edit',
                    del_url: 'bet/del',
                    multi_url: 'bet/multi',
                    table: 'bet',
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
                        {field: 'users.username', title: __('Users.username')},
                        // {field: 'admin.admin_id', title: __('代理id'),visible: false},
                        {field: 'qishu', title: __('Qishu')},
                        {field: 'bet_code', title: __('Bet_code'), searchList: {"big":__('Bet_code big'),"small":__('Bet_code small'),"odd":__('Bet_code odd'),"even":__('Bet_code even'),"bigodd":__('Bet_code bigodd'),"bigeven":__('Bet_code bigeven'),"smallodd":__('Bet_code smallodd'),"smalleven":__('Bet_code smalleven'),"green":__('Bet_code green'),"violet":__('Bet_code violet'),"red":__('Bet_code red'),"0":__('Bet_code 0'),"1":__('Bet_code 1'),"2":__('Bet_code 2'),"3":__('Bet_code 3'),"4":__('Bet_code 4'),"5":__('Bet_code 5'),"6":__('Bet_code 6'),"7":__('Bet_code 7'),"8":__('Bet_code 8'),"9":__('Bet_code 9')}, formatter: Table.api.formatter.normal},
                        {field: 'money', title: __('Money'), operate:'BETWEEN'},
                        {field: 'result', title: __('Result'), operate:'BETWEEN'},
                        {field: 'caidata.result', title: __('开奖结果'), operate:false},
                        {field: 'status', title: __('Status'), searchList: {"0":__('Status 0'),"1":__('Status 1'),"2":__('Status 2')}, formatter: Table.api.formatter.status},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'clearingtime', title: __('Clearingtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            //当表格数据加载完成时
            table.on('load-success.bs.table', function (e, data) {
                //这里可以获取从服务端获取的JSON数据
                console.log(data.extend.sum_money);
                //这里我们手动设置底部的值
                $("#sum_money").text(data.extend.sum_money);
                $("#sum_result").text(data.extend.sum_result);
                $("#sum_red_money").text(data.extend.sum_red_money);
                $("#sum_green_money").text(data.extend.sum_green_money);
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