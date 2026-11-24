// Aqui vamos a crear el arreglo de pisos que a su vez tiene locales y esos locales productos por posiciones
const CentroComercial = [
    ['Piso1', [
        ["Dollarcity", [
            ["Espatula", 10000, 5, "Espatula.jpg"],
            ["Organizador", 15000, 10, "Organizador.jpg"],
            ["Rallador", 8000, 3, "Rallador.jpg"],
            ["Simoniz", 12000, 12, "Simoniz.jpg"],
            ["Tante", 18000, 1, "Tante.jpg"]
        ], "Dollarcity.png"],
        ["Donde_Sam", [
            ["Asus", 2800000, 10, "Asus.jpg"],
            ["Hp", 1500000, 2, "Hp.jpg"],
            ["Iphone 18", 1500000, 15, "Iphone_18.jpg"],
            ["Samsung", 1200000, 20, "Samsung.jpg"],
            ["Xiaomi", 1000000, 12, "Xiaomi.jpg"]
        ], "Donde_Sam.png"],
        ["Drogueria", [
            ["Acetaminofen", 8000, 200, "Acetaminofen.jpg"],
            ["Dolex", 5500, 80, "Dolex.jpg"],
            ["Ibuprofeno", 7000, 50, "Ibuprofeno.jpg"],
            ["Loratadina", 3800, 30, "Loratadina.jpg"],
            ["Naproxeno", 2300, 100, "Naproxeno.jpg"]
        ], "Drogueria.jpg"],
        ["Fress", [
            ["Artesanal", 3800, 32, "Artesanal.jpg"],
            ["Bocatto", 6700, 20, "Bocatto.jpg"],
            ["Bon Bon Bum", 4200, 15, "Bon_Bon_Bum.jpg"],
            ["Casero", 2800, 25, "Casero.jpg"],
            ["Kulfi", 4600, 10, "Kulfi.png"]
        ], "Fress.png"],
        ["Pandora", [
            ["Anillo", 2000000, 80, "Anillo.jpg"],
            ["Aretes", 800000, 400, "Aretes.jpg"],
            ["Brazalete", 450000, 25, "Brazalete.jpg"],
            ["Charm", 180000, 1000, "Charm.png"],
            ["Collar", 2350000, 400, "Collar.jpg"]
        ], "Pandora.jpg"]
    ]],
    ['Piso2', [
        ["Casa_Shic", [
            ["Traje azul", 1200000, 30, "Traje_azul.jpg"],
            ["Traje negro", 1200000, 18, "Traje_negro.jpg"],
            ["Vestido rosa palido", 1200000, 20, "Vestido_rosa_palido.jpg"],
            ["Vestido verde", 1200000, 25, "Vestido_verde.jpg"],
            ["Vestido vinotinto", 1200000, 40, "Vestido_vinotinto.jpg"]
        ], "Casa_Shic.jpg"],
        ["Estilo360", [
            ["Buso", 110000, 60, "Buso.jpg"],
            ["Camisa", 40000, 80, "Camisa.jpg"],
            ["Camiseta", 35000, 80, "Camiseta.jpg"],
            ["Jean", 140000, 32, "Jean.jpg"],
            ["Pantalon", 110000, 50, "Pantalon.jpg"]
        ], "Estilo360.jpg"],
        ["Nike", [
            ["Air Max", 320000, 160, "Air_Max.jpg"],
            ["Cosmic", 210000, 80, "Cosmic.jpg"],
            ["Dunk Low", 110000, 32, "Dunk_Low.jpg"],
            ["Force", 300000, 100, "Force.jpg"],
            ["Metcon", 200000, 43, "Metcon.jpg"]
        ], "Nike.png"],
        ["Shin", [
            ["Camiseta", 110000, 60, "Camiseta.jpg"],
            ["Demon", 40000, 80, "Demon.jpg"],
            ["Manga", 80000, 800, "Manga.jpg"],
            ["Nezuko", 180000, 320, "Nezuko.jpg"],
            ["One Piece", 110000, 20, "One_Piece.jpg"]
        ], "Shin.png"],
        ["WORLD", [
            ["christian louboutin", 12000000, 38, "christian_louboutin.jpg"],
            ["Gucci hombre", 8000000, 20, "Gucci_hombre.jpg"],
            ["Gucci mujer", 8000000, 20, "Gucci_mujer.jpg"],
            ["Valentino hombre", 10000000, 10, "Valentino_hombre.jpg"],
            ["YSL", 10000000, 19, "YSL.jpg"]
        ], "WORLD.svg"]
    ]],
    ['Piso3', [
        ["GameZone", [
            ["PlayStation 5", 2800000, 15, "PlayStation_5.jpg"],
            ["Xbox Series X", 2500000, 12, "Xbox_Series_X.png"],
            ["Nintendo Switch", 1600000, 20, "Nintendo_Switch.jpg"],
            ["Control PS5", 320000, 35, "Control_PS5.jpg"],
            ["Audifonos Gamer", 180000, 40, "Audifonos_Gamer.jpg"]
        ], "GameZone.jpg"],

        ["TechWorld", [
            ["MacBook Air", 5200000, 8, "MacBook_Air.jpg"],
            ["iPad", 2400000, 15, "iPad.jpg"],
            ["Apple Watch", 1500000, 18, "Apple_Watch.jpg"],
            ["Teclado Mecanico", 250000, 30, "Teclado_Mecanico.jpg"],
            ["Mouse Gamer", 120000, 45, "Mouse_Gamer.jpg"]
        ], "TechWorld.png"],

        ["FitLife", [
            ["Mancuernas", 120000, 40, "Mancuernas.jpg"],
            ["Barra Olimpica", 350000, 12, "Barra_Olimpica.png"],
            ["Caminadora", 1800000, 5, "Caminadora.jpg"],
            ["Bicicleta_Estatica", 950000, 8, "Bicicleta_Estatica.jpg"],
            ["Colchoneta", 65000, 50, "Colchoneta.jpg"]
        ], "FitLife.jpg"],

        ["PetHouse", [
            ["Comida para Perros", 85000, 60, "Comida_Perros.jpg"],
            ["Comida para Gatos", 75000, 55, "Comida_Gatos.jpg"],
            ["Cama para Mascotas", 110000, 25, "Cama_Mascotas.jpg"],
            ["Correa", 35000, 80, "Correa.jpg"],
            ["Juguete de Mascotas", 22000, 100, "Juguete_Mascotas.jpg"]
        ], "PetHouse.png"],

        ["Coffee_Lab", [
            ["Cafe Colombiano", 28000, 100, "Cafe_Colombiano.jpg"],
            ["Maquina de Espresso", 850000, 10, "Maquina_Espresso.jpg"],
            ["Molinillo de Cafe", 180000, 18, "Molinillo_Cafe.jpg"],
            ["Termo", 65000, 45, "Termo.jpg"],
            ["Prensa Francesa", 95000, 25, "Prensa_Francesa.jpg"]
        ], "Coffee_Lab.jpg"]
    ]]
];

// Definimos variables globales
carrito = [];
lateral = document.querySelector(".lateral");
pisosDiv = document.querySelector(".pisos");
Principal = document.querySelector(".Principal");
Nav_Piso1 = document.querySelector(".nav-item1");
Nav_Piso2 = document.querySelector(".nav-item2");
Nav_Piso3 = document.querySelector(".nav-item3");
totales = document.querySelector(".totales");
home = document.querySelector(".home");
carritoLink = document.getElementById("enlace-carrito");
contenedorCarrito = document.getElementById("contenedor-carrito");
Nav_Piso1.addEventListener("click", function() { mostrarPiso(1); });
Nav_Piso2.addEventListener("click", function() { mostrarPiso(2); });
Nav_Piso3.addEventListener("click", function() { mostrarPiso(3); });
totales.addEventListener("click", function() { mostrartotales(); })
home.addEventListener("click", function() { mostrarPiso(); });
carritoLink.addEventListener("click", function() { mostrarCarrito(); });

actualizarNavbar();

mostrarPiso();

function mostrarPiso(piso) {
    Principal.style.display = "flex";
    contenedorCarrito.style.display = "none";
    Principal.innerHTML = "";
    Principal.innerHTML = `<h1>Bienvenido a su Centro comercial preferido!!</h1>`;
    if (!piso) {
        for (let j = 0; j < CentroComercial.length; j++) {
            locales = CentroComercial[j][1];

            for (let i = 0; i < locales.length; i++) {
                local = locales[i];
                divLocal = document.createElement("div");
                // Crear los divs pero con las clases utilizando bootstrap
                divLocal.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4", "text-center", "local");
                divLocal.innerHTML = `
            <img src="./Img/Piso${j+1}/${local[0]}/${local[2]}" alt="${local[0]}" class="img-fluid">
        `;
                divLocal.addEventListener("click", function() {
                    mostrarLocal(j + 1, i + 1);
                });
                Principal.appendChild(divLocal);
            }
        }
    } else {
        if (Principal.hasChildNodes()) {
            Principal.innerHTML = "";
        }
        ContenidoPiso = CentroComercial[piso - 1][1];
        for (let i = 0; i < ContenidoPiso.length; i++) {
            local = ContenidoPiso[i];
            divLocal = document.createElement("div");
            // Crear los divs pero con las clases utilizando bootstrap
            divLocal.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4", "text-center", "local");
            divLocal.innerHTML = `<img src="./Img/Piso${piso}/${local[0]}/${local[2]}" alt="${local[0]}" class="img-fluid">`;
            divLocal.addEventListener("click", function() { mostrarLocal(piso, i + 1); });
            Principal.appendChild(divLocal);
        }
    }
}

function mostrarLocal(piso, NumeroLocal) {

    Principal.style.display = "flex";
    contenedorCarrito.style.display = "none";

    local = CentroComercial[piso - 1][1][NumeroLocal - 1];
    Nombre = local[0];
    Productos = local[1];

    Principal.innerHTML = `
        <h1 class="text-center mb-4">${Nombre}</h1>
        <div class="row g-4" id="contenedorProductos"></div>`;

    contenedorProductos = document.getElementById("contenedorProductos");

    for (let i = 0; i < Productos.length; i++) {

        producto = Productos[i];
        divProducto = document.createElement("div");
        divProducto.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3");

        divProducto.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="./Img/Piso${piso}/${Nombre}/${producto[3]}" class="card-img-top imagen-producto" alt="${producto[0]}">

                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${producto[0]}</h5>
                    <p>Precio: $${producto[1]}</p>
                    <p>Disponibles: <strong id="stock-${i}">${producto[2]}</strong></p>

                    <div class="mt-auto d-flex gap-2">
                        <button class="btn btn-primary flex-fill" id="agregar-${i}">
                            Agregar
                        </button>
                        <button class="btn btn-danger flex-fill" id="quitar-${i}">
                            Quitar
                        </button>
                    </div>
                </div>
            </div>`;

        divProducto.querySelector(`#agregar-${i}`).addEventListener("click", function() {
            agregarProducto(piso, NumeroLocal, producto[0]);
            document.getElementById(`stock-${i}`).textContent = producto[2];
        });

        divProducto.querySelector(`#quitar-${i}`).addEventListener("click", function() {
            quitarProducto(piso, NumeroLocal, producto[0]);
            document.getElementById(`stock-${i}`).textContent = producto[2];
        });

        contenedorProductos.appendChild(divProducto);
    }
}

function agregarProducto(piso, local, nombre) {

    productos = CentroComercial[piso - 1][1][local - 1][1];
    for (let i = 0; i < productos.length; i++) {

        producto = productos[i];
        if (producto[0] === nombre) {
            if (producto[2] <= 0) {
                alert("No hay suficiente stock del producto.");
                return;
            }

            producto[2]--;
            encontrado = false;
            for (let j = 0; j < carrito.length; j++) {
                if (carrito[j][0] === nombre && carrito[j][4] === piso && carrito[j][5] === local) {

                    carrito[j][2]++;
                    encontrado = true;
                    break;
                }
            }

            if (!encontrado) {
                carrito.push([producto[0], producto[1], 1, producto[3], piso, local]);
            }

            actualizarNavbar();
            actualizarCarrito();
            return;
        }
    }
}

function quitarProducto(piso, local, nombre) {

    productos = CentroComercial[piso - 1][1][local - 1][1];
    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];

        if (producto[0] === nombre) {

            for (let j = 0; j < carrito.length; j++) {

                if (carrito[j][0] === nombre && carrito[j][4] === piso && carrito[j][5] === local) {
                    producto[2]++;
                    carrito[j][2]--;

                    if (carrito[j][2] <= 0) { carrito.splice(j, 1); }

                    actualizarNavbar();
                    actualizarCarrito();
                    return;
                }
            }

            alert("Este producto no está en el carrito.");
            return;
        }
    }
}

// Mostrar carrito de compras
function mostrarCarrito() {

    Principal.style.display = "none";
    contenedorCarrito.style.display = "block";

    actualizarCarrito();
}

function actualizarCarrito() {

    listaCarrito = document.getElementById("lista-carrito");
    totalCarrito = document.getElementById("total-carrito");

    listaCarrito.innerHTML = "";

    total = 0;

    if (carrito.length === 0) {
        listaCarrito.innerHTML = `<li class="list-group-item text-center">
                                        Tu carrito está vacío.
                                </li>`;
    }

    for (let i = 0; i < carrito.length; i++) {

        producto = carrito[i];
        subtotal = producto[1] * producto[2];
        total += subtotal;
        let elemento = document.createElement("li");
        elemento.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

        elemento.innerHTML = `<div>
                                <strong>${producto[0]}</strong>
                                <p class="mb-1">Precio: $${producto[1].toLocaleString("es-CO")}</p>
                                <p class="mb-1">Cantidad: ${producto[2]}</p>
                                <p class="mb-1">Subtotal: $${subtotal.toLocaleString("es-CO")}</p>
                                <small>Piso ${producto[4]} - Local ${producto[5]}</small>
                            </div>
                            <button class="btn btn-danger btn-sm">
                                Quitar
                            </button>`;

        elemento.querySelector("button").addEventListener("click", function() { quitarProducto(producto[4], producto[5], producto[0]); });

        listaCarrito.appendChild(elemento);
    }

    totalCarrito.textContent = total.toLocaleString("es-CO");
}

function actualizarNavbar() {

    totalUnidades = 0;
    for (let i = 0; i < carrito.length; i++) {
        totalUnidades += carrito[i][2];
    }

    contador = document.getElementById("cantidad-carrito");
    if (contador) {
        contador.textContent = totalUnidades;
    }
}

document.getElementById("vaciar-carrito").addEventListener("click", function() {

    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        let productos = CentroComercial[producto[4] - 1][1][producto[5] - 1][1];
        for (let j = 0; j < productos.length; j++) {
            if (productos[j][0] === producto[0]) {
                productos[j][2] += producto[2];
                break;
            }
        }
    }

    carrito = [];
    actualizarNavbar();
    actualizarCarrito();
});

// Mostrar totales