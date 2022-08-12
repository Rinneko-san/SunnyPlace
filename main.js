function header(){ // Headerを読み込む部分だよ
	$.ajax({
			url: "include/header.html",
			cache: false,
			success: function(html){
					document.write(html);
			}
	});
}