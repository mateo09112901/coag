const typed = new Typed('.typed', {
	strings: [
		'<i class="mascota">Recuerdas la primerea vez que nos vimos?? aun recuerdo la primera vez que cruzamos palabra, la primera sonrisa, la primera salida juntos, las veces que te acompañaba despues del ensayo para que regresaras a tu casa y no te pasara nada malo. Recuerdo mis mental break down que siempre esuchabas de mi sin importar que fuera, venias hasta mi casa a cualquier hora sin importar si solo era para escucharme. Sin ningun previo aviso me fuiste enamorando poco a poco de ti y lo que menos crei que pasaria esta pasando ahora mismo; Estas haciendo en mi vida una de las experiencias mas hermosas que pueden existir, gracias por darme lo mejor de ti y asi hacerme mejor ami. Contigo es mas sencillo hacer las cosas bien mi princesa, contigo quiero todo lo que existe y lo que podamos contruir juntos amor. Recuerdas el primer beso jajaja, ese beso tan sufrido pero tan reconfortante, recuerdas como estaba de nervioso?? jajaja, se que nunca olvidaras eso y no te culpo yo tampoco lo hare. Aun recuerdo cuando me confesaste que estabas enamorada de mi, no puedes llegar a imaginar lo que yo senti, porque aquello que yo pense que jamas pasaria estaba pasando, la chica mas hermosa que he conocido en todos los sentidos posibles estaba enamorada de mi, no podia creerlo y creeme que todavia no puedo creerlo, pero me hace muy feliz y me alegra la vida que tu seas quien me tiene tan loco perdido de amor por ti te amo y te amo y te amo y te amo y te amo y podria decirlo miles de veces pero nunca sera suficiente porque va mas alla de lo que puedes imaginar</i>'
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '♥', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});