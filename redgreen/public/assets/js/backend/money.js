define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'money/index' + location.search,
                    add_url: 'money/add',
                    edit_url: 'money/edit',
                    del_url: 'money/del',
                    multi_url: 'money/multi',
                    table: 'money',
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
                        {field: 'type', title: __('Type'), searchList: {"1":__('Type 1'),"2":__('Type 2')}, formatter: Table.api.formatter.normal},
                        {field: 'users_id', title: __('Users_id')},
                        {field: 'users.nickname', title: __('Users.nickname')},

                        {field: 'money', title: __('Money')},
                        {field: 'withdraw_money', title: __('实际提现金额'),
                            formatter:function (value,row,index){
                                if( row.type=='2'){
                                    return value;
                                }
                                else{
                                    return "--";
                                }
                            }},
                        {field: 'status', title: __('Status'), searchList: {"0":__('Status 0'),"1":__('Status 1'),"2":__('Status 2')}, formatter: Table.api.formatter.status},
                        {field: 'memo', title: __('Memo')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange',
                            // formatter: Table.api.formatter.datetime
                            formatter:function (value,row,index){
                                if(row.status=='0'){
                                   return "未处理";
                                }else{
                                    return Table.api.formatter.datetime(value,row,index);
                                }
                            }
                        },
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate,
                             // formatter: Table.api.formatter.operate

                            formatter:function (value,row,index){
                                var that=$.extend({},this);
                                var table=$(that.table).clone(true);

                                $(table).data("operate-edit",null);//编辑
                                // $(table).data("operate-del",null);//删除
                                if(row.status!='0'){
                                    $(table).data("operate-apply_yes",null);
                                    $(table).data("operate-apply_no",null);
                                }
                                var bank=0;
                                if (row.type=='2'){
                                    if (row.status==0){
                                        bank=1;
                                    }
                                }
                                if (bank==0){
                                    $(table).data("operate-user_bank",null);
                                }
                                that.table=table;
                                return Table.api.formatter.operate.call(that,value,row,index);

                            },
                            buttons:[
                                {//双选
                                    name: 'apply_yes',
                                    text:__('同意'),
                                    title: __('同意用户充值/提现'),
                                    classname: 'btn btn-xs btn-success btn-magic btn-ajax',
                                    icon: 'fa fa-magic',
                                    confirm: '确认吗',
                                    url: 'Money/apply_yes',

                                    success: function (data, ret) {
                                        Layer.alert(ret.msg,function () {
                                            window.location.reload();//刷新
                                        });

                                    },
                                    error: function (data, ret) {
                                        console.log(data, ret);
                                        Layer.alert(ret.msg);
                                        return false;
                                    }
                                },
                                {//弹窗
                                    name: 'apply_no',
                                    text:__('拒绝'),
                                    title: __('拒绝'),
                                    classname: 'btn btn-xs btn-primary btn-dialog',
                                    icon: 'fa fa-list',
                                    url: 'Money/apply_no',
                                    // callback: function (data) {
                                    //     Layer.alert("接收到回传数据：" + JSON.stringify(data), {title: "回传数据"});
                                    // }
                                },

                                {//弹窗
                                    name: 'user_bank',
                                    text:__('银行卡'),
                                    title: __('银行卡'),
                                    classname:'btn btn-xs btn-info btn-dialog',
                                    icon: 'fa fa-newspaper-o',
                                    url:function(row) {
                                        //这里手动构造URL
                                        url = "users/Bank/index?users_id="+row.users_id;
                                        return url;
                                    },

                                },
                            ]
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
        apply_no: function () {
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