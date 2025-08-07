document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: user, password: pass })
  });

  const data = await response.json();

  if (data.token) {
    localStorage.setItem("token", data.token);
    window.location.href = "/pages/citas.html";
  } else {
    alert("Credenciales inválidas");
  }
});

