function header(){
    $.ajax({
        url: "parts/header.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}