function hacer(){

  //obtenTzid es una promesa, aquí la estamos declarando.
  var obtenTzid = new Promise(
  
    function(resolve, reject){
      
      fetch('https://onlinesim.ru/api/getNum.php?apikey=ba4948c08e3d1494b4d11c437a29c663&service=WhatsApp&country=7')
      .then(response => response.json())
      .then(data => 
        {if(data.response == 1)
        { console.log("Si obtuvo un servicio...");
          resolve("OK!")}
        else 
        {
          console.log("No se obtuvo el servicio...");
          reject(Error("It broke"))}
        })
        
    });

  //obtenNumero es una promesa, aquí la estamos declarando.
  var obtenNumero = new Promise(
  
    function(resolve, reject){
      
      fetch('http://onlinesim.ru/api/getState.php?apikey=ba4948c08e3d1494b4d11c437a29c663&tzid='+data.tzid)
      .then(response => response.json())
      .then(data => 
        {if(data.response == 1)
        { console.log("Éste segundo Si se resolvió...");
          resolve("OK!")}
        else 
        {
          console.log("Éste segundo No se resolvió...");
          reject(Error("It broke"))}
        })
        
    });

  //Ejecución General...
  obtenTzid.then(
    function(result) {
    //Si ésta promesa se cumple, entonces...
    console.log(result); // "Stuff worked!"
    //"Aquí ejecutará la promesa de obtenNumero..."
    }, 
    //Si ésta promesa no se logra cumplir, entonces...
    function(err) {
    console.log(err); // Error: "It broke"
    console.log("It broke...")
  });


  
    
}

document.getElementById("submit_mint").onclick = hacer;