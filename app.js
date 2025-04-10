function agregarTarea() {
  const input = document.getElementById('nuevaTarea');
  const texto = input.value.trim();
  if (texto !== "") {
    const li = document.createElement("li");
    li.textContent = texto;
    document.getElementById("listaTareas").appendChild(li);
    input.value = "";
  }
}