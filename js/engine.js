var game={
    moral:0,
    comida:6,
    comidaEnCampamento:6,
    turnoAct:1,
    turnosTotales:0,
    vertedero:0,
    pilaMisAct:0,
    cantSuperv:0,//Cantidad supervivientes
    cantIndef:0,//Cantidad supervivientes indefensos
    accRest:3,//Acciones restantes
	hambrunas:0,
    supervivientes:[],
    listaLocalizaciones:[],
	cntPj:0,
	pjAct:-1,
    generarMisionPrincipal: function(){

    },
    nextRound: function(){
        game.turnoAct++;
        game.comida=game.comida-(game.cantSuperv+game.cantIndef)/2;
		if(game.comida<0){
			game.hambrunas++;
			game.moral=game.moral-game.hambrunas;
			 alert("Tengo hambre, joputa :(");
			 game.comida=0;
		}
		game.checkMoral();
        game.accRest=game.cantSuperv+1;
		game.mostrarDatos();  
        if(game.vertedero>10){
            moral--;
        }
        game.checkMoral();
        for(li=0;li<game.listaLocalizaciones.length;li++){
            for(i=0;i<game.listaLocalizaciones[li]['huecosSupervivientesOcupados'].length;i++){
                if(game.listaLocalizaciones[li]['huecosZombieOcupados']<game.listaLocalizaciones[li]['huecosZombie']){
                    game.listaLocalizaciones[li]['huecosZombieOcupados']++;
                    
                }else{
                    game.listaLocalizaciones[li]['huecosZombieOcupados']=game.listaLocalizaciones[li]['huecosZombie'];
                    superviviente.serComido(li);
                }
            }
        }
        localizacion.setDibujarLocalizaciones();
        if(game.turnoAct==game.turnosTotales || game.supervivientes.length<=0){
            alert("FIN DEL JUEGO");
        }
    },
    newGame: function(){
		console.log("Se inicial el juego");
       game.turnosTotales=Math.round(Math.random()*15)+5;
       game.moral=Math.round(Math.random()*10)+5;
       game.generarMision();
       setTimeout(function(){
            game.mostrarDatos();  
       
			localizacion.generar("Campamento",20,15);
    		localizacion.generar("Hospital",3,3);
        	localizacion.generar("Colegio",3,3);
        	localizacion.generar("Comisaria",3,3);
        	localizacion.generar("Supermercado",3,3);
        	localizacion.generar("Biblioteca",3,3);  
            
            pjtots=Math.round(Math.random()*3)+2;
            pjar=[];
            for(ipj=0;ipj<pjtots;ipj++){
                superviviente.generar();
                pjar.push(ipj);
                
            }   
            game.listaLocalizaciones[0]['huecosSupervivientesOcupados']=pjar;         
            superviviente.dibujarpj();
       },500);

    },
    mostrarDatos: function(){
        $("#moral").html(game.moral);
       $("#supervivientes").html(game.cantSuperv);
       $("#indefensos").html(game.cantIndef);
       $("#turno").html(game.turnoAct+"/"+game.turnosTotales);
       $("#comida").html(game.comida);
	   $("#acciones").html(game.accRest);
    },
    generarMision: function(){
        
    },
	checkMoral:function(){
		if(game.moral<=0){
			alert("Game over");
			$("body").html("GAME OVER, MOTHEFUCKER");
		}
		
	},
	selectPj: function(selectPj){
		console.log("PJ ACTUAL: "+game.supervivientes[selectPj].nombre)
        game.pjAct=selectPj;
        $(".pjbox").css("border","1px solid black");
        $("#selpj"+selectPj).css("border-left","5px solid red");
		superviviente.setpj(game.supervivientes[selectPj]);
	}
}
