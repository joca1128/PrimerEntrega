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

function mostrarCursos(cursos1){
    let i=0;
    timer1=setInterval(
        function(){            
            console.log(cursos1[i]);  
            if (i===cursos1.length-1){clearInterval(timer1);} 
            i++;     
        },2000);
}

mostrarCursos(cursos);  

