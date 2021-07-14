/*var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("quote").innerHTML = this.responseText;
    }
    else{
        document.getElementById("quote").innerHTML="Sorry, it seems there was an error, we'll fix it as soon as possible."
    }
  };
  xhttp.open("GET", "https://thatsthespir.it/api", true);
  xhttp.send();*/

  fetch("https://thatsthespir.it/api")
  .then(response => response.json())
  .then(data =>  {
      let quote =data.quote
      let author =data.author
      let photo=data.photo
      let more=data.slug
      document.getElementById("quote").innerText='"'+ quote + '"'
      document.getElementById("author").innerText='-'+author
      document.getElementById("photo").src=photo
      document.getElementById("more").innerHTML=more
  })
  .catch(error=>{
      document.getElementById("error").style.display=''
      document.getElementById("error").innerHTML="Sorry, it seems there was an error, we'll fix it as soon as possible."

  })