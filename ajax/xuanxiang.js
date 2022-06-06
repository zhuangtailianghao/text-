$(function(){
    let obj;
    $.ajax({
        // 获取路径
        url:"xuan.json",
        // get类型
        type:"GET",
        dataType: "json",
        // 是否异步
        async: false,
        success: function (d) {
            obj = d;
     }
    })

    for(let i=0;i<obj.src.length;i++){
        $("#imgList img").eq(i).attr("src",obj.src[i]);     
    } 

    for(let i=0;i<obj.src.length;i++){
       $("#navDiv a").eq(i).click(function(){
         $("#imgList img").eq(i).css("zIndex","5");
    }) 
}
})