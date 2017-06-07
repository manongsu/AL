//下面用于多图片上传预览功能
function xxw_setImagePreviews() {
    var $index  = $(".xxw_uploadImg").length;
    if($index==4){
        $(".xxw_uploadBtn").css("display","none");
    }
    var docObj = document.getElementById("xxw_input");
    var html = '<div class="xxw_uploadImg"><img id="img'+$index+'" src=""/><i class="fa fa-close"></i></div>';
    $(".xxw_upload").append(html);
    $(".xxw_uploadImg").css("height",$(".xxw_uploadImg").css("width"));
    var imgObjPreview = document.getElementById("img"+$index);
    if (docObj.files && docObj.files[0]) {
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
    }
    return true;
}
$(function () {
    $(document).on("click",".xxw_uploadImg i",function () {
        $(this).parent().remove();
        if($(".xxw_uploadImg").length<5){
            $(".xxw_uploadBtn").css("display","block");
        }
    })
})
