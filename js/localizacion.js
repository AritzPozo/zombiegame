var localizacion={
    nombre:"",
    foto:"",
    objetos:[],
    huecosZombieOcupados:0,
    huecosSupervivientesOcupados:[],
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
            x=0;
            for(i=0;i<game.listaLocalizaciones[li]['huecosSupervivientes']-game.listaLocalizaciones[li]['huecosSupervivientesOcupados'].length;i++){
                hs+="<div class='huechs'></div>";
                x++;
            }
            for(i=0;i<game.listaLocalizaciones[li]['huecosSupervivientesOcupados'].length;i++){
                    hs+="<div class='huechs huechsl'>"+game.listaLocalizaciones[li]['huecosSupervivientesOcupados'][i]+"</div>";
                    x++;
            }
            hz="";
            for(i=0;i<game.listaLocalizaciones[li]['huecosZombie']-game.listaLocalizaciones[li]['huecosZombieOcupados'];i++){
                hz+="<div class='huechz'></div>";
                x++;
            }
            for(i=0;i<game.listaLocalizaciones[li]['huecosZombieOcupados'];i++){
                hz+="<div class='huechz huechzl'>z</div>";
                    x++;
            }                         
            locaDesk="<div class='locabox' onclick='superviviente.mover("+(li)+")'><h2>"+game.listaLocalizaciones[li].nombre+"</h2>"+
            "Spr.:"+hs+"<br/>"+
            "Zmb:"+hz+
            "</div>"
            $("#columnaLocalizaciones").append(locaDesk);
        }
    }
}