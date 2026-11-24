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

let carrito = [];
let ventasLocales = [];
let pisosDiv = document.querySelector(".pisos");
let Principal = document.querySelector(".Principal");
let Nav_Piso1 = document.querySelector(".nav-item1");
let Nav_Piso2 = document.querySelector(".nav-item2");
let Nav_Piso3 = document.querySelector(".nav-item3");
let totales = document.querySelector(".totales");
let home = document.querySelector(".home");
let carritoLink = document.getElementById("enlace-carrito");
let contenedorCarrito = document.getElementById("contenedor-carrito");

for (let i = 0; i < CentroComercial.length; i++) {
    let locales = CentroComercial[i][1];
    for (let j = 0; j < locales.length; j++) {
        let id = (i + 1) * 100 + (j + 1);
        ventasLocales.push([id, i + 1, j + 1, locales[j][0], 0, 0]);
    }
}

Nav_Piso1.addEventListener("click", function() { mostrarPiso(1); });
Nav_Piso2.addEventListener("click", function() { mostrarPiso(2); });
Nav_Piso3.addEventListener("click", function() { mostrarPiso(3); });
totales.addEventListener("click", function() { mostrartotales(); });
home.addEventListener("click", function() { mostrarPiso(); });
carritoLink.addEventListener("click", function() { mostrarCarrito(); });

actualizarNavbar();
mostrarPiso();

// Cuando llamo a mostrarPiso el parametro es el piso que quiero mostrar, y en caso de no enviar parametro, muestra todos los pisos
function mostrarPiso(piso) {

    Principal.style.display = "flex";
    contenedorCarrito.style.display = "none";
    Principal.innerHTML = `
        <h1 class="text-center w-100">
            Bienvenido a su Centro comercial preferido!!
        </h1>`;

    if (!piso) {
        for (let j = 0; j < CentroComercial.length; j++) {
            let locales = CentroComercial[j][1];
            for (let i = 0; i < locales.length; i++) {
                let local = locales[i];
                let divLocal = document.createElement("div");
                divLocal.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4", "text-center", "local");

                divLocal.innerHTML = `
                    <img
                        src="./Img/Piso${j + 1}/${local[0]}/${local[2]}"
                        alt="${local[0]}"
                        class="img-fluid"
                    >`;

                divLocal.addEventListener("click", function() { mostrarLocal(j + 1, i + 1); });
                Principal.appendChild(divLocal);
            }
        }

    } else {

        Principal.innerHTML = "";
        let ContenidoPiso = CentroComercial[piso - 1][1];

        for (let i = 0; i < ContenidoPiso.length; i++) {
            let local = ContenidoPiso[i];
            let divLocal = document.createElement("div");
            divLocal.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4", "text-center", "local");
            divLocal.innerHTML = `<img src="./Img/Piso${piso}/${local[0]}/${local[2]}" alt="${local[0]}" class="img-fluid"> `;
            divLocal.addEventListener("click", function() { mostrarLocal(piso, i + 1); });
            Principal.appendChild(divLocal);
        }
    }
}

function mostrarLocal(piso, NumeroLocal) {

    Principal.style.display = "flex";
    contenedorCarrito.style.display = "none";

    let local = CentroComercial[piso - 1][1][NumeroLocal - 1];
    let Nombre = local[0];
    let Productos = local[1];
    Principal.innerHTML = `
        <h1 class="text-center mb-4 w-100">${Nombre}</h1>
        <div class="row g-4 w-100" id="contenedorProductos"></div>`;
    let contenedorProductos = document.getElementById("contenedorProductos");

    for (let i = 0; i < Productos.length; i++) {
        let producto = Productos[i];
        let divProducto = document.createElement("div");
        divProducto.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3");

        divProducto.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="./Img/Piso${piso}/${Nombre}/${producto[3]}" class="card-img-top imagen-producto" alt="${producto[0]}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${producto[0]}</h5>
                    <p>Precio: $${producto[1].toLocaleString("es-CO")}</p>
                    <p> Disponibles: <strong id="stock-${i}">${producto[2]}</strong></p>
                    <div class="mt-auto d-flex gap-2">
                        <button class="btn btn-primary flex-fill" id="agregar-${i}"> Agregar </button>
                        <button class="btn btn-danger flex-fill" id="quitar-${i}"> Quitar </button>
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

    let productos = CentroComercial[piso - 1][1][local - 1][1];
    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];
        if (producto[0] === nombre) {
            if (producto[2] <= 0) {
                alert("No hay suficiente stock del producto.");
                return;
            }
            producto[2]--;
            let encontrado = false;
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

    let productos = CentroComercial[piso - 1][1][local - 1][1];
    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];
        if (producto[0] === nombre) {
            for (let j = 0; j < carrito.length; j++) {
                if (carrito[j][0] === nombre && carrito[j][4] === piso && carrito[j][5] === local) {

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

function mostrarCarrito() {

    Principal.style.display = "none";
    contenedorCarrito.style.display = "block";

    actualizarCarrito();
}

function actualizarCarrito() {

    let listaCarrito = document.getElementById("lista-carrito");
    let totalCarrito = document.getElementById("total-carrito");
    listaCarrito.innerHTML = "";
    let total = 0;

    if (carrito.length === 0) {
        listaCarrito.innerHTML = `
            <li class="list-group-item text-center">
                Tu carrito está vacío.
            </li>`;
    }

    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        let subtotal = producto[1] * producto[2];
        total += subtotal;
        let elemento = document.createElement("li");
        elemento.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

        elemento.innerHTML = `
            <div>
                <strong>${producto[0]}</strong>
                <p class="mb-1"> Precio: $${producto[1].toLocaleString("es-CO")} </p>
                <p class="mb-1"> Cantidad: ${producto[2]} </p>
                <p class="mb-1"> Subtotal: $${subtotal.toLocaleString("es-CO")} </p>
                <small> Piso ${producto[4]} - Local ${producto[5]} </small>
            </div>
            <button class="btn btn-danger btn-sm"> Quitar </button> `;

        elemento.querySelector("button").addEventListener("click", function() {
            quitarProducto(producto[4], producto[5], producto[0]);
        });

        listaCarrito.appendChild(elemento);
    }
    totalCarrito.textContent = total.toLocaleString("es-CO");

    let botonCompra = document.getElementById("finalizar-compra");
    if (!botonCompra) {
        botonCompra = document.createElement("button");
        botonCompra.id = "finalizar-compra";
        botonCompra.classList.add("btn", "btn-success", "w-100", "mt-3");
        botonCompra.textContent = "Finalizar compra";
        botonCompra.addEventListener("click", finalizarCompra);
        contenedorCarrito.appendChild(botonCompra);
    }
    botonCompra.disabled = carrito.length === 0;
}

function actualizarNavbar() {
    let totalUnidades = 0;
    for (let i = 0; i < carrito.length; i++) {
        totalUnidades += carrito[i][2];
    }

    let contador = document.getElementById("cantidad-carrito");
    if (contador) {
        contador.textContent = totalUnidades;
    }
}

document.getElementById("vaciar-carrito").addEventListener("click", function() {

    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        let productos = CentroComercial[producto[4] - 1][1][producto[5] - 1][1];
        for (let j = 0; j < productos.length; j++) {
            if (productos[j][0] === producto[0]) { productos[j][2] += producto[2]; break; }
        }
    }
    carrito = [];
    actualizarNavbar();
    actualizarCarrito();
});

function finalizarCompra() {

    if (carrito.length === 0) { alert("El carrito está vacío."); return; }

    let confirmar = confirm("¿Desea confirmar y finalizar la compra?");

    if (!confirmar) { return; }

    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        let subtotal = producto[1] * producto[2];
        let idLocal = producto[4] * 100 + producto[5];
        for (let j = 0; j < ventasLocales.length; j++) {
            if (ventasLocales[j][0] === idLocal) {
                ventasLocales[j][4] += subtotal;
                ventasLocales[j][5] += producto[2];
                break;
            }
        }
    }
    generarFactura(carrito);
    carrito = [];
    actualizarNavbar();
    actualizarCarrito();
    alert("¡Compra realizada correctamente!");
}

function mostrartotales() {

    Principal.style.display = "block";
    contenedorCarrito.style.display = "none";
    Principal.innerHTML = `
        <h1 class="text-center mb-4">Consultas de ventas</h1>
        <div class="row g-3 mb-4">
            <div class="col-12 col-md-4">
                <div class="card p-3 shadow-sm h-100">
                    <h5>Total recolectado</h5>
                    <h3 id="totalCentro">$0</h3>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="card p-3 shadow-sm h-100">
                    <h5>Local con mayor venta</h5>
                    <h4 id="mayorVenta">-</h4>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="card p-3 shadow-sm h-100">
                    <h5>Local con menor venta</h5>
                    <h4 id="menorVenta">-</h4>
                </div>
            </div>
        </div>
        <h3 class="mb-3">Ventas por local</h3>
        <div class="table-responsive">
            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Piso</th>
                        <th>Local</th>
                        <th>Total vendido</th>
                        <th>Unidades vendidas</th>
                    </tr>
                </thead>
                <tbody id="tablaVentas"></tbody>
            </table>
        </div>
        <hr class="my-4">
        <h3 class="mb-3">Consultar venta de un local</h3>
        <div class="input-group mb-3">
            <input type="number" id="idLocalConsulta" class="form-control" placeholder="Ingrese el ID del local">
            <button class="btn btn-primary" id="consultarLocal">Consultar</button>
        </div>
        <div id="resultadoConsulta"></div>`;

    let totalCentro = 0;
    let mayor = ventasLocales[0];
    let menor = ventasLocales[0];
    let tabla = document.getElementById("tablaVentas");

    for (let i = 0; i < ventasLocales.length; i++) {
        let venta = ventasLocales[i];
        totalCentro += venta[4];
        if (venta[4] > mayor[4]) { mayor = venta; }
        if (venta[4] < menor[4]) { menor = venta; }
        tabla.innerHTML += `<tr>
                                <td>${venta[0]}</td>
                                <td>${venta[1]}</td>
                                <td>${venta[3]}</td>
                                <td>
                                    $${venta[4].toLocaleString("es-CO")}
                                </td>
                                <td>${venta[5]}</td>
                            </tr> `;
    }
    document.getElementById("totalCentro").textContent = "$" + totalCentro.toLocaleString("es-CO");
    if (mayor[4] != 0) {
        document.getElementById("mayorVenta").textContent = mayor[3] + " ($" + mayor[4].toLocaleString("es-CO") + ")";
    } else {
        document.getElementById("mayorVenta").textContent = "-";

    }
    document.getElementById("menorVenta").textContent = menor[3] + " ($" + menor[4].toLocaleString("es-CO") + ")";

    document.getElementById("consultarLocal").addEventListener("click", function() {
        let id = Number(document.getElementById("idLocalConsulta").value);
        consultarVentaLocal(id);
    });
}

function consultarVentaLocal(id) {

    let encontrado = false;
    let resultado = document.getElementById("resultadoConsulta");
    resultado.innerHTML = "";

    for (let i = 0; i < ventasLocales.length; i++) {
        let venta = ventasLocales[i];
        if (venta[0] === id) {
            resultado.innerHTML = `<div class="card shadow-sm p-3">
                                    <h4>${venta[3]}</h4>
                                    <hr>
                                    <p><strong>ID del local:</strong>${venta[0]}</p>
                                    <p><strong>Piso:</strong>${venta[1]}</p>
                                    <p><strong>Número de local:</strong>${venta[2]}</p>
                                    <p><strong>Total vendido:</strong>$${venta[4].toLocaleString("es-CO")}</p>
                                    <p><strong>Unidades vendidas:</strong>${venta[5]}</p>
                                    </div>`;
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        resultado.innerHTML = `<div class="alert alert-danger">
                                    No existe ningún local con el ID ${id}.
                                </div>`;
    }
}

function generarFactura(carrito) {

    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let fecha = new Date();
    let total = 0;
    let nombre = prompt("Ingrese el nombre");
    let nit = prompt("Ingrese el nit/cc");
    let factura = "---------- FACTURA DE VENTA --------\n";
    factura += "Centro Comercial\n";
    factura += "Fecha: " + fecha.toLocaleDateString("es-CO") + "\n";
    factura += "Hora: " + fecha.toLocaleTimeString("es-CO") + "\n";
    factura += "----------- CLIENTE --------\n";
    factura += "Nombre: " + nombre + "\n";
    factura += "Documento: " + nit + "\n";
    factura += "----------- PRODUCTOS --------\n";
    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        let subtotal = producto[1] * producto[2];
        let nombreLocal = CentroComercial[producto[4] - 1][1][producto[5] - 1][0];
        total += subtotal;
        factura += "Producto: " + producto[0] + "\n";
        factura += "Local: " + nombreLocal + "\n";
        factura += "Cantidad: " + producto[2] + "\n";
        factura += "Precio: $" + producto[1].toLocaleString("es-CO") + "\n";
        factura += "Subtotal: $" + subtotal.toLocaleString("es-CO") + "\n";
        factura += "--------------------------------\n";
    }
    factura += "----------- TOTALES --------\n";
    factura += "Iva: $" + total * 0.019 + "\n";
    factura += "TOTAL: $" + (total + (total * 0.019)).toLocaleString("es-CO");
    factura += "\n¡Gracias por su compra!";
    alert(factura);
}