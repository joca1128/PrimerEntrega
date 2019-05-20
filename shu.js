const fs=require('fs');
const opciones={
    id:{
        demand:true
    },
    nombre:{
        demand:true
    },
    cedula:{
        demand:true
    }
}
let cursos=[{
    id:10000001,
    nombre:"Fundamentos de HTML",
    duracion:"Tiene una duración de 4 semanas",
    valor:250000
},
{
    id:10000002,
    nombre:"Fundamentos de CSS",
    duracion:"Tiene una duración de 4 semanas",
    valor:250000
},
{
    id:10000003,
    nombre:"Fundamentos de JavaScript",
    duracion:"Tiene una duración de 4 semanas",
    valor:250000
},
{
    id:10000004,
    nombre:"Avanzados de HTML",
    duracion:"Tiene una duración de 7 semanas",
    valor:250000
},
{
    id:10000005,
    nombre:"Avanzados de JavaScript",
    duracion:"Tiene una duración de 7 semanas",
    valor:250000
}]

function buscarCurso(id){
    for(i=0;i<cursos.length;i++){
        if(id===cursos[i].id){
            console.log(cursos[i]);
            return cursos[i];
        }
    }
    if(i===cursos.length){
        console.log("No existe este Curso");
        return false;
    }
}

function mostrarCurso(){
    for(i=0;i<cursos.length;i++){      
            console.log(cursos[i]);
    }
}

function escribir(curso,cedula,nombre,cursos){
    texto=curso+" "+cedula+" "+nombre+", el id del curso es "+cursos.id+" con nombre "
    +cursos.nombre+" "+cursos.duracion+" y tiene un valor de "+cursos.valor;
    fs.writeFile("archivo.txt",texto,(err)=>{
        if (err) throw (err);
        console.log("Se ha escrito en el archivo");
    });
}
const insc=         require('yargs')
                    .command('inscribir','Inscripcion',opciones,function(yargs){
                        let a=buscarCurso(yargs.id);
                        if(a!==false){
                            escribir(yargs.id,yargs.cedula,yargs.nombre,a);
                        }
                        
                    })
                    .command('$0','nada',opciones,function(yargs){
                        mostrarCurso();
                    })
                    .argv


