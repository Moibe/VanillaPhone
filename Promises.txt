function hacer(){
    fetch('https://diamondnode.io/Data.json')
      .then(response => console.log(response), console.log("No hay números"))
      .then(data => console.log(data))
      .then(response => response.json())
      .then(data => console.log(data))
    }
    
    document.getElementById("submit_mint").onclick = hacer;