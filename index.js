document.getElementById("myButton").addEventListener("click", res);
async function res(){
    let word = document.getElementById('wrd').value;
    const data=await fetch("https://api.dictionaryapi.dev/api/v2/entries/en_US/" + word);
    d= await data.json();
    console.log(d);
    console.log(d[0].meanings[0].definitions[0].definition);
    console.log(d[0].phonetics[0].text);
    let prolink=d[0].phonetics[0].audio;
    document.getElementById("res1").innerHTML=d[0].meanings[0].definitions[0].definition;
    document.getElementById("res2").innerHTML=d[0].phonetics[0].text;
  //  document.getElementById("pro").innerHTML=d[0].phonetics[0].audio;
    var a = document.createElement("a");
    var link = document.createTextNode(prolink);
    a.appendChild(link);
    a.title=prolink;
    a.href = d[0].phonetics[0].audio;
    a.style.fontSize = "20px";
    a.style.margin= "18px";
    document.body.appendChild(a);
}
