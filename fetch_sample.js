function hacer(){
fetch('https://onlinesim.ru/api/getNum.php?apikey=ba4948c08e3d1494b4d11c437a29c663&service=WhatsApp&country=52')
  .then(response => response.json(), console.log("No hay números"))
  .then(data => fetch('http://onlinesim.ru/api/getState.php?apikey=ba4948c08e3d1494b4d11c437a29c663&tzid='+data.tzid))
  .then(response => response.json())
  .then(data => console.log(data))
}

document.getElementById("submit_mint").onclick = hacer;