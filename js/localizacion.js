var localizacion={
    nombre:"",
    foto:"",
    objetos:[],
    huecosZombieOcupados:0,
    huecosSupervivientesOcupados:0,
    huecosSupervivientes:0,
    huecosZombie:0,
    ruido:0,
    generar: function(nombre,huecosSuper,huecosZombie){
       localizacion.nombre=nombre; 
       localizacion.huecosSupervivientes=huecosSuper;
       localizacion.huecosZombie=huecosZombie;
     
       game.listaLocalizaciones.push({
            nombre:localizacion.nombre,
            foto:localizacion.foto,
            objetos:localizacion.objetos,
            huecosSupervivientes:localizacion.huecosSupervivientes,
            huecosZombie:localizacion.huecosZombie,
            ruido:localizacion.ruido,
            huecosZombieOcupados:localizacion.huecosZombieOcupados,
            huecosSupervivientesOcupados:localizacion.huecosSupervivientesOcupados,
        });
        localizacion.setDibujarLocalizaciones();
    },
    setLocalizacion: function(obj){
            localizacion.nombre=obj['nombre'];
            localizacion.foto=obj['foto'];
            localizacion.objetos=obj['objetos'];
            localizacion.huecosSupervivientes=obj['huecosSupervivientes'];
            localizacion.huecosZombie=obj['huecosZombie'];
            localizacion.ruido=obj['ruido'];
            huecosZombieOcupados.ruido=obj['huecosZombieOcupados'];
            huecosSupervivientesOcupados.ruido=obj['huecosSupervivientesOcupados'];

    },
    setDibujarLocalizaciones: function(){
        $("#columnaLocalizaciones").html("");
        for(li=0;li<game.listaLocalizaciones.length;li++){
            hs="";
            for(i=0;i<localizacion.huecosSupervivientes;i++){
                /*if(game.listaLocalizaciones[li].huecosSupervivientesOcupados>i){
                    hs+="<div class='huechs'>x</div>";
                }else{*/
                    hs+="<div class='huechs'></div>";
              //  }
            }
            hz="";
            for(i=0;i<localizacion.huecosZombie;i++){
               /* if(game.listaLocalizaciones[li].huecosZombieOcupados>i){
                    hz+="<div class='huechz'>x</div>";
                }else{*/
                    hz+="<div class='huechz'></div>";
                //}
                
            }              
            locaDesk="<div class='locabox' onclick='superviviente.mover("+(li)+")'><h2>"+game.listaLocalizaciones[li].nombre+"</h2>"+
            "Spr.:"+hs+"<br/>"+
            "Zmb:"+hz+
            "</div>"
            $("#columnaLocalizaciones").append(locaDesk);
        }
    }
}