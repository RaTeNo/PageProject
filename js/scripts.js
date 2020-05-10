$(function() {
	$("input[type='checkbox']").change(function() {
        if(this.checked) {
            $(this).parent().parent().parent().addClass("active");
        } 
        else{
        	$(this).parent().parent().parent().removeClass("active");
        }    
    });

})