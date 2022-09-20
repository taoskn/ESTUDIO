// Destructuring de Objetos

const producto = {
	nombre: "Monitor 20 Pulgadas",
	precio: 300,
	disponible: true
}

const { disponible } = producto;

console.log(disponible);

// Destructuring de Arreglos / arrays

const numeros = [10, 20, 30, 40, 50];

// const [primero, segundo, tercero] = numeros;

// Para mas especifico por el tercero"

const [ , , tercero] = numeros;

console.log(tercero);

const [ primero, ...terceroclonado] = numeros;

// Para trabajar en react.

console.log(terceroclonado);

/*
----------------------------------------------
----------------------------------------------
				forEach
----------------------------------------------
----------------------------------------------
*/


const carrito = [
	{ nombre: "Television", precio: 100},
	{ nombre: "Television 20P", precio: 200},
	{ nombre: "Television 40p", precio: 400},
	{ nombre: "Television 60p", precio: 600},
	]

for(let i = 0; i = carrito.length, i++){
	console.log(´${carrito[i].nombre} = Precio: ${carrito[i].precio}´);
	}
	carrito.forEach( function(producto) {
		console.log(´${producto.nombre} = Precio: ${producto.precio}´);
	})
	

/*
----------------------------------------------
----------------------------------------------
			.map
----------------------------------------------
----------------------------------------------
*/

	const nuevoArreglo1 = carrito.map( function(producto) {
		return ´${producto.nombre} = Precio: ${producto.precio}´;
	})

	const nuevoArreglo2 = carrito.forEach( function(producto) {
		return ´${producto.nombre} = Precio: ${producto.precio}´;
	})

console.log(nuevoArreglo1);
// Con .map, Crea un nuevo arreglo y forEach No. 
console.log(nuevoArreglo2);


/*
----------------------------------------------
----------------------------------------------
			Preguntas de trabajo.
----------------------------------------------
----------------------------------------------
*/

sumar();
function sumar() {
	console.log( 2 + 2 );
}

sumar2();
const sumar2 = function(){
	console.log( 3 + 3 );
}

/*La segunda function ( Fuction Expression ) 
No se ejecuta por que la variable se define despues 
de la llamada
*/


/*
----------------------------------------------
----------------------------------------------
			ArrowFunctions
----------------------------------------------
----------------------------------------------
*/

const reproductor = {
	cancion: "",
	reproducir: id => console.log (`Repronduciendo cancion con el id ${id}`),
	pausar: () => console.log(`Pausando...`),
	borrar: id => console.log(`Borrando cancion... ${id}`)



	/*
	----------------------------------------------
	----------------------------------------------
				Set y Get
	----------------------------------------------
	----------------------------------------------
	*/

	set nuevaCancion(cancion){
		this.cancion = cancion;
		console.log(`Añadiendo cancion ${cancion}`)
	}
	get obtenerCancion() {
		console.log(`${this.cancion}`)
	}

	reproductor.nuevaCancion = "Banners";
	reproductor.obtenerCancion;

	/* No hace falta poner nuevaCancion(), porque esta la funcion SET Y GET, podemos agregar directamente con el igual, objetos.*/

}

	/*
	----------------------------------------------
	----------------------------------------------
		If mas parecido a lo formal/trabajo.
	----------------------------------------------
	----------------------------------------------
	*/


const puntuaje = 600;

function revisarPuntuaje() {
	if(puntaje > 500) {
		console.log ("Excelente!!");
		return;
	}
	if(puntaje > 300) {
	console.log ("Buen puntaje... Felicidades!!");
	return;
	}
}

	/*
	----------------------------------------------
	----------------------------------------------
		Operador Ternario IF.
	----------------------------------------------
	----------------------------------------------
	*/


const autenticado = true;
const puedepagar = true;

	console.log(autenticado ? "Si se realizo la compra" : "No se realizo la compra");

	console.log(autenticado && puedepagar ? "Si se realizo la compra" : "No se realizo la compra");

	console.log(autenticado ? puedepagar ? "Si esta autenticado y Si puede pagar." : "Si esta autenticado pero no puede pagar" : "No esta autenticado");

	/*Con el "?" es como el IF, y los ":" es como el else, El "?" tambien es como el if-else*/


		/*
	----------------------------------------------
	----------------------------------------------
				Forloop
	----------------------------------------------
	----------------------------------------------
	*/


/* Break */

	for(let i = 0; i <= 10; i++){
		if(i === 5){
			console.log("Este el numero final: " + i)
			break;
		}
		console.log(`Numero: ${i}`)
	}


/* Continue */

	for(let i = 0; i <= 10; i++){
	if(i === 5){
		console.log("Este el numero final: " + i)
		continue;
	}
		console.log(`Numero: ${i}`)
	}


const carrito = [
	{ nombre: "Television", precio: 100},
	{ nombre: "Television 20P", precio: 200, descuento = true},
	{ nombre: "Television 40p", precio: 400},
	{ nombre: "Television 60p", precio: 600, descuento = true},
	]


/*Ejemplo de como podriamos usar el "Continue" */

for(let i = 0; i <= 10; i++){
	if(carrito[i].descuento){
		console.log(`El articulo ${carrito[i].nombre} Tiene descuento Ahora!`)
		continue;
	}
	console.log(carrito[i].nombre)
}


	/*
	----------------------------------------------
	----------------------------------------------
				FIZZ BUZZ 
	----------------------------------------------
	----------------------------------------------
	*/

	// Fizz buzz - 100 numeros

	// 3 6 9 12 ... Fizz
	// 5 10 15 20 ... Buzz
	// 15 30 45 ... FizBuzz

	for(let i = 1; i < 100; i++){
		if ( i % 3 === 0 && i % 5 === 0){
			console.log(`${i} FizzBuzz`);
		}else if (i % 3 === 0){
			console.log(`${i} Fizz`);
		}else if (i % 5 === 0){
			console.log(`${i} Buzz`)
		}
	}

	/* Modulo de 3, 5, Es todo dividio por el ese numero da 0. */


	/*
	----------------------------------------------
	----------------------------------------------
				WHILE
	----------------------------------------------
	----------------------------------------------
	*/

	let i = 1
	while ( i <= 10){
		console.log(`${i}`)
		i++;
	}

	/*
	----------------------------------------------
	----------------------------------------------
				DO-WHILE
	----------------------------------------------
	----------------------------------------------
	*/
	let i = 1;

	do {
		console.log(`${i}`)
		i++;
	} while (i < 100);{
		i++;
	} // Condicion
	

	/*
	----------------------------------------------
	----------------------------------------------
				FOR-OF
	----------------------------------------------
	----------------------------------------------
	*/

	const carrito = [
	{ nombre: "Television", precio: 100},
	{ nombre: "Television 20P", precio: 200, descuento = true},
	{ nombre: "Television 40p", precio: 400},
	{ nombre: "Television 60p", precio: 600, descuento = true},
	]

	const pendientes = ["Tarea", "Comer", "Trabajar", "Estudiar Javascript"];

	for ( let pendiente of pendientes){
		console.log(pendiente);
	}

	for ( let producto of carrito) {
		console.log(producto.nombre)
	}

/* Una forma mas facil de iterar por el array o el objeto, 
en vez de un for o while o .forEach o .map */


	/*
	----------------------------------------------
	----------------------------------------------
				FOR-IN
	----------------------------------------------
	----------------------------------------------
	*/

	const automovil = {
		modelo: "Camaro",
		year: 1969,
		motor: "6.0"
	}

	for ( let propiedad in automovil){
	console.log(`${automovil[propiedad]}`);
	}

	/*itera por los valores, "Camaro", 1969, "6.0".*/

	for ( let propiedad in automovil){
	console.log(`${propiedad}`);
	}

	/*Itera por los indices, modelo, year, motor.*/

	/*-------MAS DIFICIL PERO mismo valor.------------*/

	for ( let [llave, valor] of Object.entries(automovil) ){
		console.log(llave);
		console.log(valor);
	}



	/*
	----------------------------------------------
	----------------------------------------------
				.reduce
	----------------------------------------------
	----------------------------------------------
	*/

	const carrito = [
		{ nombre: "Television", precio: 100 },
		{ nombre: "Television 20P", precio: 200, descuento : true },
		{ nombre: "Television 40p", precio: 400 },
		{ nombre: "Television 60p", precio: 600, descuento : true },
	]

	let total = 0;
	carrito.forEach( producto => total += producto.precio);
	console.log(total);

	let resultado = carrito.reduce ( (total, producto) => total + producto.precio, 0);
	console.log(resultado);


	/*
	----------------------------------------------
	----------------------------------------------
				.filter
	----------------------------------------------
	----------------------------------------------
	*/

	let resultado;

	resultado = carrito.filter ( (producto) => producto.precio > 400 );
		/* Producto es mayor a y filtra a los mayores de 400. */

	resultado = carrito.filter ( (producto) => producto.precio < 600 );
		/* Producto es menor a y filtra a los menores de 600. */

	resultado = carrito.filter ( (producto) => producto.nombre !== "Television" );
		/* Filtra a todos menos al inidicado */


	/*
	----------------------------------------------
	----------------------------------------------
				.find
	----------------------------------------------
	----------------------------------------------
	*/

	const carrito = [
		{ nombre: "Television", precio: 100 },
		{ nombre: "Television 20P", precio: 200, descuento : true },
		{ nombre: "Television 40p", precio: 400 },
		{ nombre: "Television 60p", precio: 600, descuento : true },
	]

	const resultado = carrito.find( producto => producto.precio === "100");
	/* Retorna y la guarda en la variable "resultado", pero solo retorna con la primera condicion conrfirmada.*/
	/* Solo retorna 1 */


	/*
	----------------------------------------------
	----------------------------------------------
				.some, .every
	----------------------------------------------
	----------------------------------------------
	*/

	const resultado = carrito.some( producto => producto.precio < 500);
	/* Devuelve con tal de que cumpla la condicion 1 */ /*True*/

	const resultado = carrito.every( producto => producto.precio < 500);
	/* Devuelvo si todos cumplen la condicion */ /*True*/


	/*
	----------------------------------------------
	----------------------------------------------
				.concat
	----------------------------------------------
	----------------------------------------------
	*/

	const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
	const meses2 = ["Junio", "Julio", "Agosto", "Septiembre"];
	const meses3 = ["Octubre", "Noviembre", "Diciembre"];

	//.concat
	const resultado = meses.concat(meses2, meses3)
	const resultado = meses.concat(meses2, meses3, "Y yo.")

	//spread operator
	const resultado2 = [...meses3, ...meses, ...meses2];


	/*
	----------------------------------------------
	----------------------------------------------
				.querySelector("")
	----------------------------------------------
	----------------------------------------------
	*/

	/* Captura el primer id o clase que encuentra  */
	const card = document.querySelector(".card")

	/* Anidado por puntos como Css */
	const info = document.querySelector(".container .info")

	/* nth-child(2) */
	const segundocard = document.querySelector(".container .card:nth-child(2)");
	/* Estaria selecionando la segunda tarjeta de las clases de card existentes */



	/*
	----------------------------------------------
	----------------------------------------------
				.innerText // Si el css - visibility es hidden, no se lograra capturar.
				.textContent // Trae todo el texto.
				.innerHtml // Trae todo el html dentro de esa etiqueta padre-hijo.
	----------------------------------------------
	----------------------------------------------
	*/

	const resultado = document.querySelector(".container h1")
	// El espacio entre .container y h1 es para entrar al hijo del container.

	console.log(resultado.innerText);
	console.log(resultado.textContent);
	console.log(resultado.innerHtml);

	const resultado = document.querySelector(".container h1").textContent = "Hola mundo."


	const nuevoresultado = "Hola mundo"
	const resultado = document.querySelector(".container h1").textContent = nuevoresultado;



	/*
	----------------------------------------------
	----------------------------------------------
				.style
	----------------------------------------------
	----------------------------------------------
	*/


	let resultado = document.querySelector("h1");

	resultado.style.backgroundColor = "red";

	resultado.classList.add("nueva clase", "nueva clase2");

	resultad.classList.remove("nueva clase");


	// Los ID?


	/*
	----------------------------------------------
	----------------------------------------------
				Traversing the dom
	----------------------------------------------
	----------------------------------------------
	*/


	let resultado = document.querySelector("h1");

	resultado.children[1].children[1].textContent = "Hola mundo."

	console.log(resultado.children[1].children[1].textContent);


	console.log(resultado.parentElement);

	console.log(resultado.nextElementSilbling);

	console.log(resultado.lastElementChild);

	console.log(resultado.firstElementChild);


	/*
	----------------------------------------------
	----------------------------------------------
				remove / en el DOM
	----------------------------------------------
	----------------------------------------------
	*/

	let resultado = document.querySelector(".card");

	resultado.remove();

	// Eliminar por children

	let navegacion = document.querySelector(".navegacion");

	navegacion.removeChild ( navegacion.children[2] );



	/*
	----------------------------------------------
	----------------------------------------------
				Insertar HTML
	----------------------------------------------
	----------------------------------------------
	*/

	let resultado = document.createElement("A");

	resultado.classList.add("Alguna-clase");

	resultado.textContent = "Nuevo Enlace";
	resultado.href = "/google.com.ar";
	resultado.tarjet = "_blank";


	console.log(resultado);

	const navegacion = document.querySelector(".navegacion");

	navegacion.appendChild(resultado);


	/* Para colocar mas en especifico : */

	console.log( navegacion.children );
	navegacion.insetBefore( resultado, navegacion.children[1]);



	/*
	----------------------------------------------
	----------------------------------------------
				.contains
	----------------------------------------------
	----------------------------------------------
	*/

	function mostrarfunction(){
		if (navegacion.classList.contains("activo")){
			navegacion.classList.remove("activo");
		}else {
			navegacion.classList.add("activo")
		}
	}

	/* Esta funcion al agregarle una llamada al boton, agregara la palabra activo a la clase "navegacion" y quedara con la clase
	navegacion activo", lo cual nos permite abir o cerrar una pestaña de forma dinamica en el html con un boton. */

	/*
	----------------------------------------------
	----------------------------------------------
				.addEventListener
	----------------------------------------------
	----------------------------------------------
	*/

	const btnFlotante = document.querySelector(".btn-flotante");
	btnFlotante.addEventListener("click", mostrarfunction);

	/* Registra o estara atento  "addEventListener" a la llamada o click de la etiqueta o clase asignada */


	btnFlotante.addEventListener("click", mostrarfunction);

	function mostrarfunction(){
		if (navegacion.classList.contains("activo")){
			navegacion.classList.remove("activo");
			btnFlotante.classList.remove("activo")
		}else {
			navegacion.classList.add("activo")
			btnFlotante.classList.add("activo")
		}
	}

	/* O tambien puede ser con .this */

	btnFlotante.addEventListener("click", mostrarfunction);

	function mostrarfunction(){
		if (navegacion.classList.contains("activo")){
			navegacion.classList.remove("activo");
			this.classList.remove("activo")
		}else {
			navegacion.classList.add("activo")
			this.classList.add("activo")
		}
	}


	/*
	----------------------------------------------
	----------------------------------------------
				.validando
	----------------------------------------------
	----------------------------------------------
	*/


	navegacion.addEventListener("blur", () => {
		console.log("escribiendo..")
	})


	navegacion.addEventListener("input", (e) => {
		console.log(e.target.value)
	})

	navegacion.addEventListener("input", (e) => {
		if (e.target.value === ""){
			console.log("String vacio")
		}
	})