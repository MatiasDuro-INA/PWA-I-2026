// consultas a bases de datos
// API
// 

async function llamarApi(){

    // let respuesta 

    // fetch("https://thesimpsonsapi.com/api/characters")
    // .then(resp => resp.json())
    // .then(data => {
    //     respuesta = data.results
    // })

    // console.log(respuesta);
    

    const resp = await fetch("https://thesimpsonsapi.com/api/characters")

    const data = await resp.json()
    console.log(data.results[0].name);
    

}

llamarApi()