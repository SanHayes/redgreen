define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'daili/index' + location.search,
                    table: 'admin',
                },

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
                        {field: 'id', title: __('代理Id')},
                        {field: 'admin_id', title: __('上级代理Id')},
                        {field: 'username', title: __('代理用户')},
                        {field: 'nickname', title: __('代理昵称')},
                        // {field: 'sum_money', title: __('用户总余额')},

                        {field: 'sum_daili_count', title: __('伞下代理数'),formatter:Controller.api.formatter.sum_daili_count,operate:false},
                        {field: 'sum_user_count', title: __('伞下用户数'),formatter:Controller.api.formatter.sum_user_count,operate:false},
                        {field: 'sum_bet_money', title: __('用户总下注'),
                            formatter: Controller.api.formatter.sum_bet_money,
                            operate:false},
                        {field: 'sum_bet_result', title: __('用户总输赢'), operate:false},
                        {field: 'sum_money_add', title: __('用户总充值'), formatter: Controller.api.formatter.sum_money_add,operate:false},
                        {field: 'sum_money_withdraw', title: __('用户总提现'),formatter: Controller.api.formatter.sum_money_withdraw,operate:false},
                        {field: 'sum_money_money', title: __('用户总充值-总提现'),operate:false},
                        {field: 'sum_bonus_money', title: __('总红包奖励'),formatter:Controller.api.formatter.sum_bonus_money,operate:false},
                        {field: 'sum_task', title: __('总任务奖励'),formatter:Controller.api.formatter.sum_task,operate:false},
                        {field: 'sum_users_fan', title: __('总返佣'),formatter:Controller.api.formatter.sum_users_fan,operate:false},

                        {field: 'sum_admin_money', title: __('管理员变动'),formatter:Controller.api.formatter.sum_admin_money,operate:false},
                        {field: 'money', title: __('余额')},
                        {field: 'b_createtime', title: __('时间'),visible: false,
                            operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime,
                            defaultValue:this.datedate(0)
                        },
                        // {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        // {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'status', title: __('Status'),operate:false,/*searchList: {"hidden":__('隐藏'),"normal":__('正常')},*/ formatter: Table.api.formatter.status},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate,
                            // formatter: Table.api.formatter.operate
                            formatter:function (value,row,index){
                                var that=$.extend({},this);
                                var table=$(that.table).clone(true);

                                $(table).data("operate-edit",null);//编辑
                                $(table).data("operate-del",null);//删除

                                that.table=table;
                                return Table.api.formatter.operate.call(that,value,row,index);

                            },
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
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            },
            formatter: {
                sum_daili_count: function (value, row) {
                    //这里手动构造URL
                    // url = "example/bootstraptable?" + this.field + "=" + value;
                    var times=$("input[name='b_createtime']").val();
                    url = "Daili/index?admin_id="+row.id+"&&b_createtime="+times;
                    //方式一,直接返回class带有addtabsit的链接,这可以方便自定义显示内容
                    return '<a href="' + url + '" class=" btn-addtabs" title="' + __("Search %s", ) + '">' + value + '</a>';
                    //方式二,直接调用Table.api.formatter.addtabs
                    // return Table.api.formatter.addtabs(value, row, index, url);
                },
                sum_user_count: function (value, row) {//伞下用户报表
                    //这里手动构造URL
                    // url = "example/bootstraptable?" + this.field + "=" + value;
                    var times=$("input[name='b_createtime']").val();
                    url = "Bbuser/index?admin_sx_id="+row.id;
                    //方式一,直接返回class带有addtabsit的链接,这可以方便自定义显示内容
                    return '<a href="' + url + '" class=" btn-addtabs" title="' + __("Search %s", ) + '">' + value + '</a>';
                },

                sum_bet_money: function (value, row) {
                    //这里手动构造URL
                   // url = "example/bootstraptable?" + this.field + "=" + value;
                    var times=$("input[name='b_createtime']").val();
                    url = "Bet/index?admin_id="+row.id+"&&createtime="+times;
                    //方式一,直接返回class带有addtabsit的链接,这可以方便自定义显示内容
                    return '<a href="' + url + '" class=" btn-addtabs" title="' + __("Search %s", ) + '">' + value + '</a>';
                    //方式二,直接调用Table.api.formatter.addtabs
                   // return Table.api.formatter.addtabs(value, row, index, url);
                },
                sum_money_add: function (value, row) {
                    //这里手动构造URL
                    // url = "example/bootstraptable?" + this.field + "=" + value;
                    var times=$("input[name='b_createtime']").val();
                    // url = "Money/index?admin_id="+row.id+"&&type=1"+"&&createtime="+times;
                    url = "Users/moneylog?admin_id="+row.id+"&&memo=用户充值"+"&&createtime="+times;
                    //方式一,直接返回class带有addtabsit的链接,这可以方便自定义显示内容
                    return '<a href="' + url + '" class=" btn-addtabs" title="' + __("Search %s", ) + '">' + value + '</a>';
                    //方式二,直接调用Table.api.formatter.addtabs
                    // return Table.api.formatter.addtabs(value, row, index, url);
                },
                sum_money_withdraw: function (value, row) {

                    var times=$("input[name='b_createtime']").val();
                    url = "Money/index?admin_id="+row.id+"&&type=2"+"&&createtime="+times;
                    url = "Users/moneylog?admin_id="+row.id+"&&memo=用户提现"+"&&createtime="+times;
                    //方式一,直接返回class带有addtabsit的链接,这可以方便自定义显示内容
                    return '<a href="' + url + '" class=" btn-addtabs" title="' + __("Search %s", ) + '">' + value + '</a>';
                },
                sum_bonus_money: function (value, row) {
                    var times=$("input[name='b_createtime']").val();
                    url = "Users/moneylog?admin_id="+row.id+"&&memo=注册奖励红包"+"&&createtime="+times;
                    //方式一,直接返回class带有addtabsit的链接,这可以方便自定义显示内容
                    return '<a href="' + url + '" class=" btn-addtabs" title="' + __("Search %s", ) + '">' + value + '</a>';
                },
                sum_users_fan: function (value, row) {
                    var times=$("input[name='b_createtime']").val();
                    url = "Users/moneylog?admin_id="+row.id+"&&memo=返佣"+"&&createtime="+times;
                    //方式一,直接返回class带有addtabsit的链接,这可以方便自定义显示内容
                    return '<a href="' + url + '" class=" btn-addtabs" title="' + __("Search %s", ) + '">' + value + '</a>';
                },
                sum_task: function (value, row) {
                    var times=$("input[name='b_createtime']").val();
                    url = "Task/index?admin_sx_id="+row.id+"&&status=3"+"&&createtime="+times;
                    //方式一,直接返回class带有addtabsit的链接,这可以方便自定义显示内容
                    return '<a href="' + url + '" class=" btn-addtabs" title="' + __("Search %s", ) + '">' + value + '</a>';

                },
                //
                sum_admin_money: function (value, row) {
                    //这里手动构造URL
                    // url = "example/bootstraptable?" + this.field + "=" + value;
                    var times=$("input[name='b_createtime']").val();
                    url = "Users/moneylog?admin_id="+row.id+"&&memo=管理员"+"&&createtime="+times;
                    //方式一,直接返回class带有addtabsit的链接,这可以方便自定义显示内容
                    return '<a href="' + url + '" class=" btn-addtabs" title="' + __("Search %s", ) + '">' + value + '</a>';
                    //方式二,直接调用Table.api.formatter.addtabs
                    // return Table.api.formatter.addtabs(value, row, index, url);
                },
            }
        },
        datedate:function(index){
            var myDate = new Date;
            var year = myDate.getFullYear(); //获取当前年
            var mon = myDate.getMonth() + 1; //获取当前月
            var date = myDate.getDate(); //获取当前日
            var now=year+'-'+mon+"-"+date+" 00:00:00 - "+year+'-'+mon+"-"+date+" 23:59:59";
            return now;

        }

    };
    return Controller;
});