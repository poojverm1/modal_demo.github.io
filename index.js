$(document).ready(()=>{

 $("button").click(function(){
        $(".appear").fadeIn();
		 $("body").addClass("white");
		
    });

 $(".button-close").click(function(){
        $(".appear").fadeOut();
      
    });
	
	
 $(".close-one .cross").click(function(){
        $(".appear").fadeOut();
       
    });
	
});