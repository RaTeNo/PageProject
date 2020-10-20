$(function() {
	$("input[type='checkbox']").change(function() {
        if(this.checked) {
            $(this).parent().parent().parent().addClass("active");
        } 
        else{
        	$(this).parent().parent().parent().removeClass("active");
        }    
    });

    $("input[type='radio']").change(function() {
    	console.log(123);
    	$("input[type='radio']").parent().removeClass("active");
        if(this.checked) {
            $(this).parent().addClass("active");
        }        
    });

})