/**
 * Created by ike on 2016/12/9.
 */
    $(function(){
    $('.log-red').hover(function(){
        $(".login-WeChat",this).toggle();
    });
    $('.login-tabs a').click(function(){
    $(this).addClass('current').siblings().removeClass('current');
    $(".login-page").css("display", "none");
    $(".login-page").eq($(this).index()).css("display", "block")
});
    $(".checkedNum").each(function(i){
    $(this).attr({"id":"checked"+i});
    $(this).next("label").attr("for","checked"+i);
})
})
    function CountSize(){
    $("LabelInfo").each(function(){
        var LabelInfo=$(this).parent().find("label").outerWidth(true);
        $(this).css("width",$(this).parent().width()-LabelInfo-6+"px");
    })
}
