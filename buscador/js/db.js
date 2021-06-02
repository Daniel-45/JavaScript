const coches = [
	{
		marca: 'Seat',
		modelo: 'Ibiza',
		anio: 2020,
		precio: 16000,
		puertas: 4,
		color: 'Gris',
		transmision: 'manual'
	},
	{
		marca: 'Seat',
		modelo: 'León',
		anio: 2020,
		precio: 26000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		anio: 2020,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 4',
		anio: 2020,
		precio: 42000,
		puertas: 4,
		color: 'Negro',
		transmision: 'manual'
	},
	{
		marca: 'BMW',
		modelo: 'X7',
		anio: 2020,
		precio: 101000,
		puertas: 4,
		color: 'Negro',
		transmision: 'manual'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A4', 
        anio: 2019, 
        precio: 40000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico' 
	},
	{ 
        marca: 'Audi', 
        modelo: 'A7', 
        anio: 2020, 
        precio: 65000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'manual' 
	},
	{ 
        marca: 'Audi', 
        modelo: 'R8', 
        anio: 2020, 
        precio: 164000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'manual' 
    },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		anio: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Ford',
		modelo: 'Mustang',
		anio: 2020,
		precio: 45000,
		puertas: 2,
		color: 'Negro',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A6', 
        anio: 2020, 
        precio: 35000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico' 
    },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		anio: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes-Benz',
		modelo: 'Clase C',
		anio: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes-Benz',
		modelo: 'Clase C',
		anio: 2020,
		precio: 42000,
		puertas: 4,
		color: 'Negro',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes-Benz',
		modelo: 'CLS',
		anio: 2020,
		precio: 70000,
		puertas: 4,
		color: 'Negro',
		transmision: 'manual'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		anio: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ 
        marca: 'Ford', 
        modelo: 'Mustang', 
        anio: 2019, 
        precio: 40000, 
        puertas: 2, 
        color: 'Rojo', 
        transmision: 'manual' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		anio: 2020,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A3', 
        anio: 2017, 
        precio: 55000, 
        puertas: 2, 
        color: 'Negro', 
        transmision: 
        'manual' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		anio: 2020,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes-Benz',
		modelo: 'Clase C',
		anio: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		anio: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Ford', 
        modelo: 'Mustang', 
        anio: 2017, 
        precio: 35000, 
        puertas: 2, 
        color: 'Negro', 
        transmision: 'manual' 
	},
	{ 
        marca: 'Ford', 
        modelo: 'Mondeo', 
        anio: 2020, 
        precio: 30000, 
        puertas: 4, 
        color: 'Azul', 
        transmision: 'manual' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		anio: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		anio: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		anio: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes-Benz',
		modelo: 'Clase C',
		anio: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A4', 
        anio: 2016, 
        precio: 30000, 
        puertas: 4, 
        color: 'Azul', 
        transmision: 'automatico' 
    }
];
