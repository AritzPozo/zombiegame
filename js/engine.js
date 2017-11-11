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
        game.accRest=game.cantSuperv;
        game.turnoAct++;
        game.comida=game.comida-(game.cantSuperv+game.cantIndef)/2;
		if(game.comida<0){
			game.hambrunas++;
			game.moral=game.moral-game.hambrunas;
			 alert("Tengo hambre, joputa :(");
			 game.comida=0;
		}
		game.checkMoral();
        
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
        game.moral=0,
        game.comida=6,
        game.comidaEnCampamento=6,
        game.turnoAct=1,
        game.turnosTotales=0,
        game.vertedero=0,
        game.pilaMisAct=0,
        game.cantSuperv=0,//Cantidad supervivientes
        game.cantIndef=0,//Cantidad supervivientes indefensos
        game.accRest=3,//Acciones restantes
        game.hambrunas=0,
        game.supervivientes=[],
        game.listaLocalizaciones=[],
        game.cntPj=0,
        game.pjAct=-1,        
		console.log("Se inicial el juego");
       game.turnosTotales=Math.round(Math.random()*15)+5;
       game.moral=Math.round(Math.random()*10)+5;
       game.generarMision();
       setTimeout(function(){
            
        game.mostrarDatos();  
            localizacion.generarCampamento();

            descubierto=Math.round(Math.random()*4)+1;
            for(kl=0;kl<descubierto;kl++){
                setTimeout(function(){
                    localizacion.generar();
                },500*kl);
            }
            
            pjtots=Math.round(Math.random()*2)+3;
            pjar=[];
            for(ipj=0;ipj<pjtots;ipj++){
                setTimeout(function(){
                    superviviente.generar();
                },500*ipj);
                
                
            }   
            game.listaLocalizaciones[0]['huecosSupervivientesOcupados']=pjar;         
            game.accRest=game.cantSuperv+1;
            //superviviente.dibujarpj();
            game.mostrarDatos();  
         //   localizacion.setDibujarLocalizaciones();
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
			game.newGame();
		}
		
	},
	selectPj: function(selectPj){
        if(selectPj>-1){
            console.log("PJ ACTUAL: "+game.supervivientes[selectPj].nombre)
            game.pjAct=selectPj;
            $(".pjbox").css("border","1px solid black");
            $("#selpj"+selectPj).css("border-left","5px solid red");
            superviviente.setpj(game.supervivientes[selectPj]);
        }
	}
}
