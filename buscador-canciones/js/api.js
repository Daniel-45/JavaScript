import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {

                if (resultado.lyrics) {
                    const { lyrics } = resultado;
    
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `${this.cancion} de ${this.artista}`;
                } else {
                    UI.divMensajes.textContent = `No hay resultados para ${this.cancion} de ${this.artista}`;
                    UI.divMensajes.classList.add('alerta', 'error');

                    setTimeout(() => {
                        UI.divMensajes.textContent = '';
                        UI.divMensajes.classList.remove('alerta', 'error');
                    }, 3000);
                }
            })
    }
}

export default API;