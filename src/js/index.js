const content = document.getElementById("content");

async function getData() {
    const response = await fetch("http://localhost:3000/getPacientes")
    const data = await response.json();

    console.log(data);
}

getData()