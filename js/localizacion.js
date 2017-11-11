var localizacion={
    nombre:"",
    foto:"",
    calle:"",
    objetos:[],
    huecosZombieOcupados:0,
    huecosSupervivientesOcupados:[],
    huecosSupervivientes:0,
    huecosZombie:0,
    ruido:0,
    generarCampamento: function(){
        localizacion.nombre="Campamento"; 
        localizacion.huecosSupervivientes=10;
        localizacion.huecosZombie=10;
        localizacion.calle="";
        game.listaLocalizaciones.push({
             nombre:localizacion.nombre,
             foto:localizacion.foto,
             objetos:localizacion.objetos,
             huecosSupervivientes:localizacion.huecosSupervivientes,
             huecosZombie:localizacion.huecosZombie,
             ruido:localizacion.ruido,
             calle:"",
             huecosZombieOcupados:localizacion.huecosZombieOcupados,
             huecosSupervivientesOcupados:localizacion.huecosSupervivientesOcupados,
         });
         //localizacion.setDibujarLocalizaciones();
         setTimeout(function(){
            li=0;
            hs="";
            for(i=0;i<game.listaLocalizaciones[li]['huecosSupervivientes'];i++){
                hs+="<div class='huechs'></div>";
                i++;
            }
            hz="";
            for(i=0;i<game.listaLocalizaciones[li]['huecosZombie'];i++){
                hz+="<div class='huechz'></div>";
                i++;
            }                       
            locaDesk="<div class='tercioLoc'><div style='opacty:0' class='locabox' id='localId"+li+"' onclick='superviviente.mover("+(li)+")'><div class='localizacionimg'><div><span>"+game.listaLocalizaciones[li].nombre+"</span><br/>"+game.listaLocalizaciones[li].calle+"</div></div>"+
            "<div  class='casillalista' id='supervivientes"+li+"'>"+hs+"</div>"+
            "<div  class='casillalista' id='zombie"+li+"'>"+hz+"</div><div>"+
            "<div class='medio'><div class='mboton'>Buscar</div></div>"+
            "<div class='medio'><div class='mboton'>Matar zombies</div></div>"+
            "</div></div></div>";
            $("#columnaLocalizaciones").append(locaDesk);
            setTimeout(function(){
                $("#localId"+li).css("opacity",1);
                localizacion.recalcSUperviviente(li);
                localizacion.recalcZombies(li);
            },250);
        },500);
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
                ["Iglesia",3,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Tienda de ropa",1,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Clinica veterinaria",1,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
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
                ["Catedral",5,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Monasterio",5,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
                ["Cementerio",5,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
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
                ["Desguace",4,{armas:0,medicina:0,comida:0,trastos:0,combustible:0,agua:0}],
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
            calle:"",
            calle:localizacion.calle,
            huecosZombieOcupados:localizacion.huecosZombieOcupados,
            huecosSupervivientesOcupados:localizacion.huecosSupervivientesOcupados,
        });
        setTimeout(function(){
            li=game.listaLocalizaciones.length-1;
            hs="";
            for(i=0;i<game.listaLocalizaciones[li]['huecosSupervivientes']-game.listaLocalizaciones[li]['huecosSupervivientesOcupados'].length;i++){
                hs+="<div class='huechs'></div>";
                i++;
            }
            /*for(i=0;i<game.listaLocalizaciones[li]['huecosSupervivientesOcupados'].length;i++){
                    hs+="<div class='huechs huechsl'>"+game.listaLocalizaciones[li]['huecosSupervivientesOcupados'][i]+"</div>";
                    x++;
            }*/
            hz="";
            for(i=0;i<game.listaLocalizaciones[li]['huecosZombie']-game.listaLocalizaciones[li]['huecosZombieOcupados'];i++){
                hz+="<div class='huechz'></div>";
                i++;
            }
            for(i=0;i<game.listaLocalizaciones[li]['huecosZombieOcupados'];i++){
                hz+="<div class='huechz huechzl'>z</div>";
                   i++;
            }                         
            locaDesk="<div class='tercioLoc'><div style='opacty:0' class='locabox' id='localId"+li+"' onclick='superviviente.mover("+(li)+")'><div class='localizacionimg'><div><span>"+game.listaLocalizaciones[li].nombre+"</span><br/>"+game.listaLocalizaciones[li].calle+"</div></div>"+
            "<div class='casillalista' id='supervivientes"+li+"'>"+hs+"</div>"+
            "<div  class='casillalista' id='zombie"+li+"'>"+hz+"</div><div>"+
            "<div class='medio'><div class='mboton'>Buscar</div></div>"+
            "<div class='medio'><div class='mboton'>Matar zombies</div></div>"+
            "</div></div></div>";
            $("#columnaLocalizaciones").append(locaDesk);
            setTimeout(function(){
                $("#localId"+li).css("opacity",1);
                localizacion.recalcSUperviviente(li);
                localizacion.recalcZombies(li);
            },100);
        },500);
    },
    setLocalizacion: function(obj){
            localizacion.nombre=obj['nombre'];
            localizacion.foto=obj['foto'];
            localizacion.objetos=obj['objetos'];
            localizacion.huecosSupervivientes=obj['huecosSupervivientes'];
            localizacion.huecosZombie=obj['huecosZombie'];
            localizacion.ruido=obj['ruido'];
            calle.ruido=obj['calle'];
            huecosZombieOcupados.ruido=obj['huecosZombieOcupados'];
            huecosSupervivientesOcupados.ruido=obj['huecosSupervivientesOcupados'];

    },
    recalcSUperviviente: function(locali){
        li=locali;
        hs=hs;
        for(i=0;i<game.listaLocalizaciones[li]['huecosSupervivientes']-game.listaLocalizaciones[li]['huecosSupervivientesOcupados'].length;i++){
            hs+="<div class='huechs'></div>";
            i++;
        }
        for(i=0;i<game.listaLocalizaciones[li]['huecosSupervivientesOcupados'].length;i++){
                hs+="<div class='huechs huechsl'>"+game.listaLocalizaciones[li]['huecosSupervivientesOcupados'][i]+"</div>";
                i++;
        }
        $("#supervivientes"+locali).html(hs);

    },
    recalcZombies: function(locali){
        li=locali;
        hz="";
        for(ix=0;i<game.listaLocalizaciones[li]['huecosZombie']-game.listaLocalizaciones[li]['huecosZombieOcupados'];ix++){
            hz+="<div class='huechz'></div>";
            ix++;
        }
        for(ix=0;ix<game.listaLocalizaciones[li]['huecosZombieOcupados'];ix++){
            hz+="<div class='huechz huechzl'>z</div>";
               ix++;
        }  
        
        $("#zombie"+locali).html(hz);
    },    
}