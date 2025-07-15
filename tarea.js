export class Tarea {
    constructor(texto) {
        this.texto = texto;
        this.completada = false;
        this.fechaCreacion = new Date().toISOString();
    }


    marcarTareaCompletada() {
        this.completada = true;
    }

    desenmarcarTareaCompletada() {
        this.completada = false;
    }

    verificarAntiguedad() {
        const fechaActual = new Date();
        const fechaCreacion = new Date(this.fechaCreacion);
        const diferenciaDias = Math.floor((fechaActual - fechaCreacion) / (1000 * 60 * 60 * 24));
        return diferenciaDias > 1 ? "Tarea antigua" : "Tarea reciente";
    }


    getTexto() {
        return this.texto;
    }

    setTexto(nuevoTexto) {
        this.texto = nuevoTexto;
    }

    getCompletada() {
        return this.completada;
    }

    setCompletada(estado) {
        this.completada = estado;
    }

    getFechaCreacion() {
        return this.fechaCreacion;
    }

    setFechaCreacion(fecha) {
        this.fechaCreacion = fecha;
    }

}