function Connector(options){
    var opt = $.extend({
       url:"",
       request:{},
       succ:false,
       fail:false
    },options);
    

    $.ajax({
        url:opt.url,
        type:'POST',
        data:{
            request: JSON.stringify(opt.request)
        },
        success:function(json){
            var obj = JSON.parse(json);
            if(obj.success){
                if(opt.succ){
                    opt.succ(obj);
                }else{
                    alert(obj.errmsg);
                }
            }else{
                if(opt.fail){
                    opt.fail(obj);
                }else{
                    alert(obj.errmsg);
                }
            }
        },
        error:function(xhr,msg){
            alert("网络错误");
        }
    });
};




