$(document).ready(function(){
    $("#language").click(function(){
        if($("#language").val()=="cn"){
                jQuery.i18n.properties({
                    name : 'cn', //资源文件名称
                    path : 'txt/', //资源文件路径
                    mode : 'map', //用Map的方式使用资源文件中的值
                    callback : function() {//加载成功后设置显示内容
                        $('#username').html($.i18n.prop('username'));
                        $('#password').html($.i18n.prop('password'));
                        $('#log').html($.i18n.prop('log'));
                    }
            })
        }else{
                jQuery.i18n.properties({
                    name : 'en', //资源文件名称
                    path : 'txt/', //资源文件路径
                    mode : 'map', //用Map的方式使用资源文件中的值
                    callback : function() {//加载成功后设置显示内容
                        $('#username').html($.i18n.prop('username'));
                        $('#password').html($.i18n.prop('password'));
                        $('#log').html($.i18n.prop('log'));
                    }
            })
        }
    })
});