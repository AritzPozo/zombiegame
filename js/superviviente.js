var superviviente={
    nombre:"",
    busqueda:0,
    ataque:0,
    liderazgo:"",
    inventario:[],
    img:[],
    posicion:[],
    generar: function(){
        game.cntPj++;
        superviviente.nombre="Superviviente n"+game.cntPj;
        superviviente.busqueda=Math.round(Math.random()*2)+5;
        superviviente.ataque=6-superviviente.busqueda;
        superviviente.liderazgo=Math.round(Math.random()*20)+60;
        $("#columnaPj").append("<div class='pjbox' onclick='game.selectPj("+game.cntPj+")'>"+superviviente.nombre+"</div>");
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
        if(game.accRest>0){
            	
            console.log(posNueva)
            console.log("La nueva posicion del pj es: "+game.listaLocalizaciones[posNueva].nombre);
            antPos=superviviente.posicion;
            superviviente.posicion=posNueva;
            game.accRest--;
            game.supervivientes[game.pjAct]=superviviente.returnData();
            
        }
        game.mostrarDatos();  
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
            liderazgo:superviviente.liderazgonombre,
            inventario:superviviente.inventario,
            img:superviviente.img,
            posicion:superviviente.posicion,
        };
    }
}