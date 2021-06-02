function fechas() {
    console.log('Fechas con Date');

    const fechaActual = new Date();
    console.log(`${fechaActual}`)

    let fecha = new Date();

    let dia, mes, anio;
    dia = fecha.getDate();
    mes = fecha.getMonth() + 1;
    anio = fecha.getFullYear();

    console.log('Formato día, mes, año');
    console.log(`${dia}-${mes}-${anio}`);
    console.log('Formato mes, día, año');
    console.log(`${mes}-${dia}-${anio}`);
}

fechas();

function fechasMoment() {
    moment.locale('es');

    console.log('Fechas con Moment');
    
    let fecha = new Date();
    
    console.log(`${fecha}`);

    console.log('Formato día, mes, año');


    fecha = moment().format('D-MM-YYYY');

    console.log(`${fecha}`);

    fecha = moment().format('D-MMMM-YYYY');

    console.log(`${fecha}`);

    console.log('Formato día, mes, año, horas, minutos, segundos');

    fecha = moment().format('D-MMMM-YYYY h:mm:ss');

    console.log(`${fecha}`);

    console.log('Formato mes, día, año');

    fecha = moment().format('MM-D-YYYY');

    console.log(`${fecha}`);

    fecha = moment().format('MMMM-D-YYYY');

    console.log(`${fecha}`);

    console.log('Formato año, mes, día');

    fecha = moment().format('YYYY-MM-DD');

    console.log(`${fecha}`);
  
    console.log('Formato completo');

    fecha = moment().format('LLLL');

    console.log(`${fecha}`);

}

fechasMoment();