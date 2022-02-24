const overlay = document.getElementById("overlay");
const img = document.querySelector(".before");
const imgContainer = document.querySelector(".img-container");

const getProducts = async () => {
  const getProducts2 = await fetch("./fotos.json");
  const products = await getProducts2.json();

  products.map((e) => {
    const contenedor = document.getElementById("container-products");
    const divHijo = document.createElement("DIV");
    divHijo.id = e.id;
    const img = document.createElement("IMG");
    img.src = e.img;
    divHijo.appendChild(img);
    divHijo.classList.add("product-card");
    contenedor.appendChild(divHijo);

    if(e.modelo) {
      const p = document.createElement("P")
      p.innerHTML = `Modelo: ${e.modelo}`
      p.classList.add("text-card")
      divHijo.appendChild(p)
    }

    divHijo.addEventListener("click", modal);

    function modal() {
      overlay.classList.toggle("overlay");
      const image = document.createElement("IMG");
      const boton = document.createElement("BUTTON");
      boton.innerHTML = "<i class='fas fa-times'></i>";
      image.src = e.img;
      boton.classList.toggle("button-img");
      image.classList.toggle("img");
      imgContainer.appendChild(boton);
      imgContainer.appendChild(image);

      boton.addEventListener("click", () => {
        overlay.classList.toggle("overlay");
        boton.classList.toggle("button-img");
        image.classList.toggle("img");
        imgContainer.removeChild(image);
        imgContainer.removeChild(boton);
      });
    }
    console.log(e);
  });
};

getProducts();
