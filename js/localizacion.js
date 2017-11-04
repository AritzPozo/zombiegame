var localizacion={
    nombre:"",
    foto:"",
    objetos:[],
    huecosZombieOcupados:0,
    huecosSupervivientesOcupados:[],
    huecosSupervivientes:0,
    huecosZombie:0,
    ruido:0,
    generarCampamento: function(){
        localizacion.nombre="Campamento"; 
        localizacion.huecosSupervivientes="10";
        localizacion.huecosZombie="10";
      
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
    generar: function(){
        randomLoc=Math.random();
        if(randomLoc<0.6){ //viviendas
            nombreLocalziaciones=[
                ["Granja",3,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Granja",3,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],                
                ["Apartamento",1,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Apartamento",1,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Apartamento",1,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Casa adosada",2,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Casa adosada",2,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Casa unifamiliar",2,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Casa unifamiliar",2,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],                
                ["Apartamento",1,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Apartamento",1,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Apartamento",1,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Casa adosada",2,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Casa adosada",2,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Casa unifamiliar",3,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Casa unifamiliar",3,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Mansi&oacute;n",5,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Bloque de pisos derruido",5,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Campamento de supervivientes abandonado",10,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
            ];
        }else if(randomLoc<0.85){ //comercios
            nombreLocalziaciones=[
                ["Tienda de ropa",1,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Tienda de comida",2,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Taller de coches",3,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Tienda de instrumentos",1,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Pescader&iacute;a",1,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Farmacia",2,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Ferreteria",2,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Boca de metro",3,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Parbulario",3,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Colegio",3,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Supermercado",3,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Gasolina",1,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Plaza urbana",4,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
            ] 
        }else{ //edificios institucionales
            nombreLocalziaciones=[
                ["Estaci&oacute;n de metro",5,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Estaci&oacute;n de autobuses",5,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Universidad",15,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Centro de investigaci&oacute;n",10,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Comisaria",5,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Estaci&oacute;n de bomberos",5,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Hipermercado",5,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Ambulatorio",4,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Hospital",10,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Cuartel militar",15,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Mercado",5,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Comisaria",5,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Aeropuerto",15,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Ayuntamiento",4,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
            ];
        }
       localizaElected=nombreLocalziaciones[Math.floor(Math.random() * nombreLocalziaciones.length)];
       localizacion.nombre=localizaElected[0];
       
       tamanoSitio=Math.floor(Math.random() * localizaElected[1]*2)+1;
       localizacion.huecosSupervivientes=tamanoSitio+1;
       localizacion.huecosZombie=tamanoSitio+1;
       
        zombies=Math.round(Math.random()*localizacion.huecosZombie);
        if(zombies==localizacion.huecosZombie){
            zombies--;
        }
       localizacion.huecosZombieOcupados=zombies;
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
            locaDesk="<div class='tercioLoc'><div class='locabox' onclick='superviviente.mover("+(li)+")'><div class='localizacionimg'><div>"+game.listaLocalizaciones[li].nombre+"</div></div>"+
            "Spr.:"+hs+"<br/>"+
            "Zmb:"+hz+"<br/><div>"+
            "<div class='medio'><div class='mboton'>Buscar</div></div>"+
            "<div class='medio'><div class='mboton'>Matar zombies</div></div>"+
            "</div></div></div>";
            $("#columnaLocalizaciones").append(locaDesk);
        }
        locaDesk="<div class='tercioLoc'><div class='locabox' onclick='superviviente.explorar()'><div class='localizacionimg'><div>Explorar la ciudad</div></div>"+
        "</div></div>";
        $("#columnaLocalizaciones").append(locaDesk);
    }
}