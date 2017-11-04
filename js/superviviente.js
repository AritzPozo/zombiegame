var superviviente={
    nombre:"",
    busqueda:0,
    ataque:0,
    liderazgo:0,
    inventario:[],
    img:[],
    posicion:-1,
    generar: function(){
        
        superviviente.nombre="Superviviente n"+game.cntPj;
        superviviente.busqueda=Math.round(Math.random()*2)+5;
        superviviente.ataque=6-superviviente.busqueda;
        superviviente.liderazgo=Math.round(Math.random()*20)+60;
        
        game.cntPj++;
        game.cantSuperv++;
        return superviviente.returnData();
    },
    setpj:function(ojb){
            superviviente.nombre=ojb['nombre'];
            superviviente.busqueda=ojb['busqueda'];
            superviviente.ataque=ojb['ataque'];
            superviviente.liderazgonombre=ojb['liderazgo'];
            superviviente.inventario=ojb['inventario'];
            superviviente.img=ojb['img'];
            superviviente.posicion=ojb['posicion'];
    },
    mover: function(posNueva){
        console.log("NEW POS:"+posNueva);
        if(game.accRest>0){
            	
            
            
            antPos=game.supervivientes[game.pjAct]['posicion'];
            if(posNueva==antPos){
                alert("Pero tu eres como tonto, no? Como te vas a mover de "+game.listaLocalizaciones[posNueva].nombre+" a "+game.listaLocalizaciones[antPos].nombre+". Te quito la acción por TONTO. En mayusculas.");
                game.accRest--;
            }else{
            game.accRest--;
            pj=game.pjAct;
            

            if(antPos==-1){
                console.log(antPos);
                
                console.log("La nueva posicion del pj es: "+game.listaLocalizaciones[posNueva].nombre);
            }else{
                newar=[];
                for(ki=0;ki<game.listaLocalizaciones[antPos]['huecosSupervivientesOcupados'].length;ki++){
                    console.log(ki+"=>"+game.listaLocalizaciones[antPos]['huecosSupervivientesOcupados'][ki]);
                    if(game.listaLocalizaciones[antPos]['huecosSupervivientesOcupados'][ki]!=game.pjAct){
                        console.log(posNueva)
                        newar.push(game.listaLocalizaciones[antPos]['huecosSupervivientesOcupados'][ki]);
                    }
                }
                game.listaLocalizaciones[antPos]['huecosSupervivientesOcupados']=newar;
                console.log("El personaje se ha movido de "+game.listaLocalizaciones[antPos].nombre+" a "+game.listaLocalizaciones[posNueva].nombre);
                
            }
            newar=[];
            for(ki=0;ki<game.listaLocalizaciones[posNueva]['huecosSupervivientesOcupados'].length;ki++){
                    newar.push(game.listaLocalizaciones[posNueva]['huecosSupervivientesOcupados'][ki]);
            }
            newar.push(game.pjAct)
            game.listaLocalizaciones[posNueva]['huecosSupervivientesOcupados']=newar;
            game.supervivientes[game.pjAct]['posicion']=posNueva;
            }
            
        }
        game.mostrarDatos();  
        setTimeout(function(){
        localizacion.setDibujarLocalizaciones();
        },500);
    },
    limpiar: function(){
        if(game.accRest>0){
            game.vertedero=game.vertedero-3;
            game.accRest--;
        }
    },
    buscar: function(){
        if(game.accRest>0){
            game.accRest--;
        }
    },
    atacar: function(){
        if(game.accRest>0){
            game.accRest--;
        }
    },
    returnData: function(){
        return {
            nombre:superviviente.nombre,
            busqueda:superviviente.busqueda,
            ataque:superviviente.ataque,
            liderazgo:superviviente.liderazgo,
            inventario:superviviente.inventario,
            img:superviviente.img,
            posicion:superviviente.posicion,
        };
    },
    serComido: function(posLocal){
        game.listaLocalizaciones[posLocal]['huecosSupervivientesOcupados'];
        lidmin=99999;
        pjamorir=-1;
        for(sz=0;sz<game.listaLocalizaciones[posLocal]['huecosSupervivientesOcupados'].length;sz++){
            console.log(game.supervivientes[sz]['nombre']+"=>"+game.supervivientes[sz]['liderazgo'])
            if(game.supervivientes[sz]['liderazgo']<lidmin){
                
                lidmin=game.supervivientes[sz]['liderazgo'];
                pjamorir=sz;
            }
        }
        console.log(game.supervivientes[pjamorir]['nombre']+" a muerto");
        newar=[];
        for(sz=0;sz<game.listaLocalizaciones[posLocal]['huecosSupervivientesOcupados'].length;sz++){
            if(game.listaLocalizaciones[posLocal]['huecosSupervivientesOcupados'][sz]!=pjamorir){
                newar.push(game.listaLocalizaciones[posLocal]['huecosSupervivientesOcupados'][sz]);
            }
        }
        game.listaLocalizaciones[posLocal]['huecosSupervivientesOcupados']=newar;
        newar=[];
        for(sz=0;sz<game.supervivientes.length;sz++){
            if(sz!=pjamorir){
                newar.push(game.supervivientes[sz]);
            }
        }
        game.supervivientes=newar;
        if(game.supervivientes.length<=0){
            alert("Tu campamento de supervientes no tiene supervivientes. GAME OVER");
        }        
        setTimeout(function(){
        superviviente.dibujarpj();
        localizacion.setDibujarLocalizaciones();
        },500);
    },
    dibujarpj: function(){
        pjcont="";
        $("#columnaPj").html("");
        for(sz=0;sz<game.supervivientes.length;sz++){
            console.log(game.supervivientes[sz]['nombre']);
            $("#columnaPj").append("<div class='pjbox' onclick='game.selectPj("+sz+")'>"+game.supervivientes[sz]['nombre']+"</div>");
        }
    }
}