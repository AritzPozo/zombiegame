var superviviente={
    nombre:"",
    genre:"",
    profesion:"",
    age:0,
    busqueda:0,
    ataque:0,
    liderazgo:0,
    vidaTot:0,
    vidaAct:0,
    hambre:0,
    aguanteHambre:0,
    inventario:[],
    img:[],
    posicion:0,
    generar: function(){
        maleNames=["John","James","Jacob","Christopher","Joshua","Michael","Jackson","Jayden","Ethan","James","Jacob","Michael","Ethan","Tyler","Aiden","Joshua","Joseph","Noah","Matthew","Anthony","Daniel","Angel","Alexander","Jacob","Michael","Ethan","Jose","Jesus","Joshua","Jacob","Ethan","William","Landon","Joshua","Jackson","Aiden","James","Hunter","Christopher","Daniel","Anthony","Angel","Jacob","David","Alexander","Andrew","Joshua","Christopher","Jose","Alexander","Jacob","William","Ethan","Noah","Gabriel","Joshua","Daniel","Anthony","Elijah","Michael","Ryan","Matthew","Alexander","Jacob","Christopher","William","Anthony","Nicholas","Andrew","Michael","Jacob","William","Christopher","Joshua","Jayden","Anthony","James","John","Ryan","William","Alexander","Michael","John","Christopher","Samuel","Daniel","Kevin","Elijah","James","Jayden","Joshua","Michael","Anthony","Christopher","Daniel","Jacob","Alexander","Matthew","David","William","Christopher","Joshua","Michael","Jacob","Jayden","Ethan","James","Elijah","David","Ethan","Noah","Isaiah","Jayden","Elijah","Joshua","Jacob","Aiden","Tyler","James","Ethan","William","Jacob","Alexander","Logan","Aiden","Carter","Michael","Samuel","Daniel","Alexander","Daniel","Michael","Jacob","Anthony","Ethan","Joshua","Joseph","William","Matthew","Jacob","Ethan","Noah","William","Aiden","Elijah","Alexander","Jackson","Michael","Logan","Ethan","William","Carter","Jackson","Logan","Noah","Jacob","Gavin","Benjamin","Landon","Ethan","Aiden","Jacob","Alexander","William","Gabriel","Jackson","Michael","Logan","Daniel","William","Jacob","James","Ethan","Landon","Brayden","Logan","Aiden","Michael","Noah","Ethan","Christopher","Jacob","Jayden","Michael","William","Landon","Joshua","Christian","Noah","Jacob","Benjamin","Noah","Ethan","Caleb","Gavin","Joshua","Aiden","Logan","Jackson","Jacob","Michael","Ryan","Joshua","William","Christopher","Ethan","Jayden","Andrew","Anthony","Ryan","Michael","Jacob","Matthew","William","John","Jack","Nicholas","Joseph","Alexander","Jacob","Ethan","Michael","Alexander","Logan","Aiden","Noah","Andrew","Joseph","Joshua","Ethan","Alexander","Logan","William","Jacob","Benjamin","Mason","Noah","Samuel","Gavin","William","James","Christopher","Jayden","John","Joshua","Michael","Ethan","Landon","Jacob","Jacob","Ethan","William","Logan","Alexander","Jackson","Chase","Noah","Michael","Andrew","Ethan","Jacob","William","Wyatt","Gabriel","Logan","Brayden","James","Andrew","Hunter","Jacob","Ethan","Logan","Noah","Samuel","Gavin","Alexander","William","Anthony","Carter","Anthony","Daniel","Alexander","Jacob","Michael","Angel","Christopher","Joshua","David","Joseph","Jacob","Owen","Ethan","Logan","Aiden","William","Ryan","Benjamin","Gavin","Jack","Michael","Matthew","Anthony","Christopher","Daniel","Ryan","Joseph","Alexander","Nicholas","Jayden","Isaiah","Daniel","Elijah","Jacob","Joshua","Michael","Noah","Jose","Christopher","Ethan","Michael","Matthew","Anthony","Daniel","Ryan","Joseph","Jayden","Christopher","Jacob","Alexander","William","Joshua","Jacob","Christopher","Ethan","Michael","James","Jayden","Noah","David","Carter","Aiden","Mason","Gavin","Wyatt","Logan","Brody","Landon","Brayden","Ethan","Jacob","Ethan","Michael","Logan","Andrew","William","Noah","Aiden","Joseph","Alexander","Ethan","Jacob","Logan","Michael","William","Aiden","Alexander","James","Noah","Joshua","Ethan","Alexander","Jacob","Logan","Aiden","Benjamin","Noah","Wyatt","Andrew","Daniel","Michael","Ryan","Jacob","Matthew","Joseph","Logan","Anthony","Ethan","Alexander","Nicholas","Luis","Jose","Angel","Carlos","Diego","Sebastian","Gabriel","Kevin","Juan","Adrian","Michael","Jayden","Jacob","Ethan","Anthony","Ryan","Matthew","Noah","Andrew","Jack","William","Joshua","Christopher","Jayden","Jacob","James","Michael","Ethan","John","Noah","Jacob","Mason","Noah","Jackson","Ethan","Logan","Isaac","Carter","Samuel","Gavin","William","Jacob","James","Ethan","Elijah","Joshua","Jackson","Christopher","Noah","Michael","Jose","Jacob","Daniel","Christopher","Joshua","David","Angel","Ethan","Juan","Michael","Ethan","Samuel","William","Jacob","Benjamin","Joshua","Alexander","Andrew","Daniel","Jackson","Noah","Jacob","Benjamin","Logan","Mason","Wyatt","Owen","Ryan","Ethan","Evan","William","Jacob","Ethan","Joshua","Michael","Christopher","James","Matthew","Jayden","Alexander","Ethan","Jacob","Alexander","Daniel","Logan","William","Noah","Aiden","Samuel","Joshua","Jacob","Ethan","Hunter","Landon","Noah","Aiden","James","Brayden","Joshua","Logan","Ethan","Mason","Jacob","Logan","Benjamin","Alexander","Aiden","Gavin","Noah","William","James","Wyatt","Hunter","Jacob","Tyler","Gabriel","Anthony","Joseph","Noah","Christopher"];
        femaleNames=["Emma","Madison","Addison","Ava","Emily","Chloe","Anna","Hannah","Isabella","Elizabeth","Emma","Ava","Abigail","Sophia","Emily","Isabella","Olivia","Elizabeth","Madison","Alyssa","Isabella","Sophia","Emma","Emily","Mia","Abigail","Ava","Samantha","Madison","Elizabeth","Madison","Emma","Addison","Emily","Olivia","Chloe","Ava","Abigail","Isabella","Brooklyn","Isabella","Emily","Sophia","Samantha","Ashley","Natalie","Mia","Emma","Abigail","Ava","Isabella","Olivia","Sophia","Emma","Abigail","Madison","Ava","Elizabeth","Samantha","Emily","Isabella","Olivia","Ava","Emily","Emma","Madison","Sophia","Abigail","Julia","Grace","Ava","Olivia","Madison","Abigail","Emma","Isabella","Emily","Sophia","Alexis","Brianna","Ashley","Chloe","Sophia","Katherine","Emma","Emily","Madison","Olivia","Abigail","Elizabeth","Isabella","Sophia","Emily","Emma","Madison","Olivia","Ava","Abigail","Mia","Brianna","Madison","Emma","Emily","Ava","Olivia","Abigail","Addison","Elizabeth","Isabella","Chloe","Chloe","Isabella","Madison","Mia","Sophia","Ava","Lily","Hailey","Emma","Kayla","Olivia","Emma","Madison","Abigail","Emily","Elizabeth","Sophia","Ava","Alexis","Addison","Olivia","Emily","Isabella","Emma","Sophia","Ava","Abigail","Madison","Mia","Samantha","Emma","Olivia","Ava","Madison","Addison","Abigail","Emily","Sophia","Isabella","Lillian","Emma","Olivia","Ava","Addison","Abigail","Ella","Emily","Grace","Madison","Isabella","Emma","Olivia","Emily","Ava","Madison","Addison","Isabella","Elizabeth","Abigail","Chloe","Madison","Emma","Olivia","Abigail","Addison","Emily","Isabella","Ava","Chloe","Elizabeth","Madison","Ava","Emma","Olivia","Isabella","Addison","Chloe","Emily","Abigail","Alyssa","Emma","Olivia","Madison","Ava","Abigail","Isabella","Emily","Grace","Sophia","Elizabeth","Madison","Emily","Emma","Olivia","Ava","Sophia","Isabella","Abigail","Taylor","Chloe","Ava","Isabella","Olivia","Emma","Sophia","Abigail","Emily","Madison","Grace","Ella","Olivia","Ava","Emma","Madison","Isabella","Sophia","Abigail","Addison","Emily","Alexis","Ava","Olivia","Emma","Sophia","Grace","Isabella","Abigail","Ella","Madison","Addison","Madison","Emma","Addison","Ava","Anna","Olivia","Chloe","Makayla","Taylor","Elizabeth","Emma","Ava","Madison","Olivia","Chloe","Abigail","Sophia","Isabella","Addison","Emily","Madison","Olivia","Emma","Isabella","Chloe","Sophia","Grace","Abigail","Elizabeth","Ava","Ava","Addison","Emma","Olivia","Sophia","Ella","Alexis","Grace","Isabella","Madison","Emily","Isabella","Olivia","Madison","Sophia","Natalie","Samantha","Abigail","Mia","Ava","Emma","Olivia","Ava","Madison","Abigail","Sophia","Isabella","Addison","Hannah","Ella","Isabella","Ava","Sophia","Olivia","Emma","Emily","Madison","Samantha","Sarah","Ashley","Isabella","Alyssa","Nevaeh","Madison","Olivia","Alexis","Mia","Sophia","Ava","Emily","Isabella","Olivia","Sophia","Madison","Ava","Emma","Emily","Abigail","Sarah","Samantha","Emma","Madison","Ava","Emily","Abigail","Olivia","Addison","Elizabeth","Isabella","Hannah","Ava","Emma","Sophia","Addison","Ella","Olivia","Abigail","Chloe","Grace","Lily","Ava","Olivia","Emma","Madison","Isabella","Abigail","Sophia","Addison","Emily","Chloe","Emma","Madison","Addison","Emily","Ava","Olivia","Chloe","Abigail","Isabella","Avery","Olivia","Emma","Ava","Isabella","Emily","Abigail","Sophia","Madison","Elizabeth","Ella","Ava","Olivia","Emma","Madison","Isabella","Abigail","Emily","Sophia","Chloe","Elizabeth","Paola","Genesis","Gabriela","Nicole","Alondra","NA","NA","NA","NA","NA","Ava","Emma","Olivia","Sophia","Isabella","Madison","Abigail","Grace","Mia","Elizabeth","Madison","Emma","Emily","Abigail","Olivia","Isabella","Ava","Elizabeth","Anna","Addison","Emma","Olivia","Addison","Grace","Ava","Alexis","Ella","Isabella","Elizabeth","Madison","Emma","Madison","Abigail","Addison","Emily","Ava","Chloe","Olivia","Isabella","Elizabeth","Emily","Isabella","Abigail","Emma","Madison","Sophia","Mia","Natalie","Ashley","Ava","Olivia","Emma","Abigail","Lily","Elizabeth","Ava","Madison","Addison","Emily","Isabella","Emma","Elizabeth","Ava","Olivia","Emily","Abigail","Lily","Hannah","Isabella","Madison","Emma","Abigail","Madison","Emily","Olivia","Isabella","Sophia","Ava","Elizabeth","Chloe","Olivia","Emma","Ava","Sophia","Emily","Isabella","Abigail","Madison","Chloe","Elizabeth","Emma","Madison","Abigail","Olivia","Emily","Ava","Chloe","Alexis","Addison","Isabella","Ava","Emma","Olivia","Sophia","Isabella","Ella","Emily","Abigail","Addison","Grace","Madison Emma","Taylor","Abigail","Emily","Ava","Ella","Alexis","Addison","Hannah"];
        profesiones=["Cuidador","Policia","Cazador","Vagabundo","Escritor","Profesor","Conserje","Ladr&oacute;n","Banquero","Asesor","Estudiante","Inversor","Cocinero",,"Investigador","Detective","Barrendero","Sectario","M&uacute;sico","Pintor","Soldador","Jardinero","Electricista"];
        gr=Math.random();
        if(gr<=0.5){
            superviviente.genre='<i class="fa fa-mars" aria-hidden="true"></i>';
            var randName = maleNames[Math.floor(Math.random() * maleNames.length)];
        }else{
            superviviente.genre='<i class="fa fa-venus" aria-hidden="true"></i>';
            var randName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
        }
        surnames=["SMITH","JOHNSON","WILLIAMS","JONES","BROWN","DAVIS","MILLER","WILSON","MOORE","TAYLOR","ANDERSON","THOMAS","JACKSON","WHITE","HARRIS","MARTIN","THOMPSON","GARCIA","MARTINEZ","ROBINSON","CLARK","RODRIGUEZ","LEWIS","LEE","WALKER","HALL","ALLEN","YOUNG","HERNANDEZ","KING","WRIGHT","LOPEZ","HILL","SCOTT","GREEN","ADAMS","BAKER","GONZALEZ","NELSON","CARTER","MITCHELL","PEREZ","ROBERTS","TURNER","PHILLIPS","CAMPBELL","PARKER","EVANS","EDWARDS","COLLINS","STEWART","SANCHEZ","MORRIS","ROGERS","REED","COOK","MORGAN","BELL","MURPHY","BAILEY","RIVERA","COOPER","RICHARDSON","COX","HOWARD","WARD","TORRES","PETERSON","GRAY","RAMIREZ","JAMES","WATSON","BROOKS","KELLY","SANDERS","PRICE","BENNETT","WOOD","BARNES","ROSS","HENDERSON","COLEMAN","JENKINS","PERRY","POWELL","LONG","PATTERSON","HUGHES","FLORES","WASHINGTON","BUTLER","SIMMONS","FOSTER","GONZALES","BRYANT","ALEXANDER","RUSSELL","GRIFFIN","DIAZ","HAYES","MYERS","FORD","HAMILTON","GRAHAM","SULLIVAN","WALLACE","WOODS","COLE","WEST","JORDAN","OWENS"]
        var randsName = surnames[Math.floor(Math.random() * surnames.length)];
        superviviente.age=Math.floor(Math.random()*60)+18;
        superviviente.profesion= profesiones[Math.floor(Math.random() * profesiones.length)];
        superviviente.nombre=randName+" "+randsName.toLowerCase();
        superviviente.busqueda=Math.round(Math.random()*5)+1;
        superviviente.ataque=7-superviviente.busqueda;
        superviviente.liderazgo=Math.round(Math.random()*60)+20;

        superviviente.vidaTot=Math.round(Math.random()*3)+2;
        superviviente.hambre=Math.round(Math.random()*3)+2;
        superviviente.aguanteHambre=superviviente.hambre;
        superviviente.vidaAct=superviviente.vidaTot;
        
        game.cntPj++;
        game.cantSuperv++;
        game.supervivientes.push(superviviente.returnData());
        setTimeout(function(){
            superviviente.dibujarpj();
        },500);
    },
    setpj:function(ojb){
            superviviente.nombre=ojb['nombre'];
            superviviente.busqueda=ojb['busqueda'];
            superviviente.ataque=ojb['ataque'];
            superviviente.liderazgonombre=ojb['liderazgo'];
            superviviente.inventario=ojb['inventario'];
            superviviente.img=ojb['img'];
            superviviente.posicion=ojb['posicion'];
            superviviente.vidaAct=ojb['vidaAct'];
            superviviente.vidaTot=ojb['vidaTot'];
            superviviente.profesion=ojb['profesion'];
            superviviente.hambre=ojb['hambre'];
            superviviente.hambre=ojb['aguanteHambre'];
            superviviente.age=ojb['age'];
            superviviente.genre=ojb['genre'];            
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
            vidaAct:superviviente.vidaAct,
            vidaTot:superviviente.vidaTot,
            profesion:superviviente.profesion,
            hambre:superviviente.hambre,
            aguanteHambre:superviviente.aguanteHambre,
            age:superviviente.age,
            genre:superviviente.genre,
        };
    },    
    mover: function(posNueva){
        superviviente.Accionmover(posNueva,0);
    },
    moverSeguro: function(posNueva){
        superviviente.Accionmover(posNueva,1);
        game.accRest++;
    },
    Accionmover: function(posNueva,seguro){
        
        posMoverse=Math.floor(Math.random() * 20) + 1;
        if(posMoverse<=14){
            todoOk=1;
        }else if(posMoverse<=19){
            todoOk=2;
        }else{
            todoOk=0;
        }       
        if(seguro==1) {
            todoOk=1;
        }
        if(todoOk>0){
            if(game.accRest>0){
                    
                
                
                antPos=game.supervivientes[game.pjAct]['posicion'];
                console.log("Anterior posicion: "+antPos);
                if(posNueva!=antPos){
                game.accRest--;
                pj=game.pjAct;
                

                if(antPos==-1){
                    console.log(antPos);
                    
                    console.log(game.supervivientes[game.pjAct].nombre+" se ha movido a "+game.listaLocalizaciones[posNueva].nombre);
                    if(todoOk==2){
                        console.log(game.supervivientes[game.pjAct].nombre+" ha sido mordido y ha recibido un punto de daño.");
                    }
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
                    console.log(game.supervivientes[game.pjAct].nombre+" se ha movido de "+game.listaLocalizaciones[antPos].nombre+" a "+game.listaLocalizaciones[posNueva].nombre);
                    if(todoOk==2){
                        console.log(game.supervivientes[game.pjAct].nombre+" ha sido mordido y ha recibido un punto de daño.");
                    }
                    
                }
                $("#pjidloc"+pj).html(game.listaLocalizaciones[posNueva].nombre);
                newar=[];
                for(ki=0;ki<game.listaLocalizaciones[posNueva]['huecosSupervivientesOcupados'].length;ki++){
                        newar.push(game.listaLocalizaciones[posNueva]['huecosSupervivientesOcupados'][ki]);
                }
                newar.push(game.pjAct)
                game.listaLocalizaciones[posNueva]['huecosSupervivientesOcupados']=newar;
                game.supervivientes[game.pjAct]['posicion']=posNueva;
                if(todoOk==1){
                }else if(todoOk==2){
                    game.supervivientes[game.pjAct].vidaAct--;
                    if(game.supervivientes[game.pjAct].vidaAct<=0){
                       superviviente.serComidoPorPj(game.pjAct,1);
                    }
                }else{
                    todoOk=0;
                    superviviente.serComidoPorPj(game.pjAct,0);
                }                
                }
                
            }
        }
        
        setTimeout(function(){
        localizacion.setDibujarLocalizaciones();
        superviviente.dibujarpj();
        game.mostrarDatos();  
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
    serComido: function(posLocal){
        game.listaLocalizaciones[posLocal]['huecosSupervivientesOcupados'];
        lidmin=99999;
        pjamorir=-1;
        game.cntPj--;
        game.moral--;
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
            game.newGame();
        }        
        setTimeout(function(){
        superviviente.dibujarpj();
        localizacion.setDibujarLocalizaciones();
        game.mostrarDatos();
        },500);
    },
    serComidoPorPj: function(pjamorir,tipoMuerte){
        /*
        Tipo Muerte:
            0 - ha sido zampado
            1 - ha muerto herido
        */
        game.cntPj--;
        game.moral--;
        local=game.supervivientes[pjamorir].posicion;
        if(tipoMuerte==0){
            alert(game.supervivientes[pjamorir].nombre+" ha sido mordido y convertido en zombie.");
            if(local!=-1){
                game.listaLocalizaciones[local].huecosZombieOcupados++;
            }
            localizacion.setDibujarLocalizaciones();
        }else{
            alert("Ha muerto "+game.supervivientes[pjamorir].nombre);
        }
        newar=[];
        if(local!=-1){
            for(sz=0;sz<game.listaLocalizaciones[local]['huecosSupervivientesOcupados'].length;sz++){
                if(game.listaLocalizaciones[local]['huecosSupervivientesOcupados'][sz]!=pjamorir){
                    newar.push(game.listaLocalizaciones[local]['huecosSupervivientesOcupados'][sz]);
                }
            }
        }
        if(local!=-1){
        game.listaLocalizaciones[local]['huecosSupervivientesOcupados']=newar;
        newar=[];
        for(sz=0;sz<game.supervivientes.length;sz++){
            if(sz!=pjamorir){
                newar.push(game.supervivientes[sz]);
            }
        }
        }
        game.supervivientes=newar;
        if(game.supervivientes.length<=0){
            alert("Tu campamento de supervientes no tiene supervivientes. GAME OVER");
            game.newGame();
        }        
        setTimeout(function(){
        superviviente.dibujarpj();
        localizacion.setDibujarLocalizaciones();
        
        },500);
        setTimeout(function(){
            game.mostrarDatos();;
        },1000)
    },
    dibujarpj: function(){
        pjcont="";
        $("#columnaPj").html("");
        for(sz=0;sz<game.supervivientes.length;sz++){
            
            jcnt="<div class='pjbox' id='selpj"+sz+"' onclick='game.selectPj("+sz+")'>"+
            "<div class='pjimg'></div>"+
            "<div class='pjdatos'>"+
            "<b>"+game.supervivientes[sz]['nombre']+"</b><br/>"+
            "<div style='height:20px;'><div style='float:left;width:50%'>"+game.supervivientes[sz].age+" "+game.supervivientes[sz].genre+". "+game.supervivientes[sz].profesion+"</div><div style='float:left;width:50%;color:red;text-align:right'>";
            for(ipj=0;ipj<game.supervivientes[sz].vidaAct;ipj++){
                jcnt=jcnt+'<i class="fa fa-heart" aria-hidden="true"></i> ';
            }
            for(ipj=0;ipj<game.supervivientes[sz].vidaTot-game.supervivientes[sz].vidaAct;ipj++){
                jcnt=jcnt+'<i class="fa fa-heart-o" aria-hidden="true"></i> ';
            } 
            local=game.supervivientes[sz].posicion;         
            if(local==-1){
                localiz="Campamento";
            }else{
                localiz=game.listaLocalizaciones[local].nombre;
            }
            jcnt=jcnt+"</div></div>"+
            "<div style='height:20px;'><div style='float:left;width:50%'><span id='pjidloc"+sz+"'>"+localiz+"</span></div><div style='float:left;width:50%;color:grey;text-align:right'>";
            for(ipj=0;ipj<game.supervivientes[sz].hambre;ipj++){
                jcnt=jcnt+'<i class="fa fa-cutlery" aria-hidden="true"></i> ';
            }            
            for(ipj=0;ipj<game.supervivientes[sz].aguanteHambre-game.supervivientes[sz].hambre;ipj++){
                jcnt=jcnt+'<i class="fa fa-times" aria-hidden="true"></i> ';
            }             
            jcnt=jcnt+"</div></div>"+
            "</div>"+
            "<div class='pjatributos'>"+
            "<div class='tercio'>"+
            '<i class="fa fa-crosshairs" aria-hidden="true"></i> '+game.supervivientes[sz].ataque+
            "</div>"+
            "<div class='tercio'>"+
            '<i class="fa fa-binoculars" aria-hidden="true"></i> '+game.supervivientes[sz].busqueda+            
            "</div>"+
            "<div class='tercio'>"+
            '<i class="fa fa-bolt" aria-hidden="true"></i> '+game.supervivientes[sz].liderazgo+ 
            "</div>"+
            "</div></div>";
            $("#columnaPj").append(jcnt);
        }
        if(game.pjAct!=-1){
            game.selectPj(game.pjAct);
        }
    },
    explorar: function(){
        
        if(game.pjAct!=-1 && game.accRest>0){
            game.accRest--;
            randomExplo=Math.random();
            posMoverse=Math.floor(Math.random() * 20) + 1;
            if(posMoverse<=10){
                todoOk=1;
            }else if(posMoverse<=18){
                todoOk=2;
            }else{
                todoOk=0;
            }  
            if(todoOk>0){
                if(randomExplo>0.7-(game.supervivientes[game.pjAct].busqueda/20)){
                    alert(game.supervivientes[game.pjAct].nombre+" ha descubierto una nueva localdiad");
                    localizacion.generar();
                    game.supervivientes[game.pjAct].posicion=game.listaLocalizaciones.length-1;
                    superviviente.moverSeguro(game.listaLocalizaciones.length-1);
                }else{
                    alert("No ha encontrado nada");
                }
            }
            if(todoOk==1){
                todoOk=1;   
            }else if(todoOk==2){
                todoOk=2;
                game.supervivientes[game.pjAct].vidaAct--;
                if(game.supervivientes[game.pjAct].vidaAct<=0){
                   superviviente.serComidoPorPj(game.pjAct,1);
                }
            }else{
                todoOk=0;
                superviviente.serComidoPorPj(game.pjAct,0);
            }  
            setTimeout(function(){
                game.mostrarDatos();  
                localizacion.setDibujarLocalizaciones();
                superviviente.dibujarpj();
            })          
            
        }
    }
}