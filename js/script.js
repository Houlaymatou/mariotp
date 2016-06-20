/*
@Title-jeux mario
@author Houlaymatou
@date-13/06/2016
*/
$(function(){
		//redescend
		var descente = function(){ $('#mario').stop().animate({top: "-=120"},
			    {   duration: 1000,
					specialEasing: {
					    height: "easeOutBounce"
				        }
			    });
			};
			    //saut
		var saut = function(){$('#mario').stop().animate({top: "+=120"},
				{   duration: 1000,
					specialEasing: {
						 height: "easeOutBounce"
					}
				}, descente());
			};   
			           // mouvement
				    
	    $(document).keydown(function(key) {
		          	//postion des éléments
		    var posMario = $("#mario").position().left;
		    var posPiece = $(".piece").position().left;
		           //intialisation du score
		    var score = 0;
		    switch(parseInt(key.which,10)) {
					// On a appuyé sur la touche de la lettre q pour aller à gauche
				case 81:
					if((posMario) > 10 && (posMario) < 840){
					 $('#mario').css({backgroundImage : "url(images/corriendo2.gif)"}).stop().animate({left: "-=5px"}, 30, 'linear');	
					}
					if((posMario>posPiece-5) && (posMario<posPiece + 5)) {
	                    score++;
	               	    $('#score').html(score);
	               	    $('#audio')[0].play();
	               	    $('.piece').hide();
	                   }
				break;
					// On a appuyé sur la touche de la lettre z pour monter 
				case 90:
		            saut();
				break;
					// On a appuyé sur la touche de la lettre d pour aller à droite
				case 68:
					if((posMario > -10) && (posMario < 805)){
						$('#mario').css({backgroundImage : "url(images/corriendo1.gif)"}).stop().animate({left: "+=5px"},30,'linear');
					  }
	                    console.log(" psition de mario " + posMario);
                        console.log(" psition de la pièce " + posPiece);
                        //collision
	                    if((posMario>posPiece-5) && (posMario<posPiece + 5)) {
	                    score++;
	               	    $('#score').html(score);
	               	    $('#audio')[0].play();
	               	    $('.piece').hide();
	                   }
	              
			    break;	
				}
			});

	});