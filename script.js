var iScrollPos = 0;
	 
$(window).scroll(function () {
 var iCurScrollPos = $(this).scrollTop();
   // alert(iCurScrollPos);
    
    if(iCurScrollPos>340){
        //$("#mnu").fadeIn(3000);
        $('#mnu').css("position" ,"fixed");
        
    }else{
        $('#mnu').css("position" ,"absolute"); 
    }
 /*if (iCurScrollPos > 80) {
	        alert("up");
	    } else {
            alert("dwn");
	       //Scrolling Up
	    }
	 */   iScrollPos = iCurScrollPos;
    
    
    
	});