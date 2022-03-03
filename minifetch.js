function hacer(){
    fetch('https://diamondnode.io/Data.json')
      .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
      .then(data => console.log(data))
      .then(response => response.json())
      .then(data => console.log(data))
    }
    
    document.getElementById("submit_mint").onclick = hacer;