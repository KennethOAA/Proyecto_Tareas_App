export class Tarea {
    constructor(texto,fechaAgendada = null,fechaLimite=null) {
        this.texto = texto;
        this.completada = false;
        this.fechaCreacion = new Date().toISOString();
        this.fechaAgendada = fechaAgendada;
        this.fechaLimite = fechaLimite;
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

    getFechaAgendada() {
        return this.fechaAgendada; 
    }
    setFechaAgendada(fecha) {
        this.fechaAgendada = fecha;
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

    getFechaLimite() {
        return this.fechaLimite;
    }

    setFechaLimite(fecha) {
        this.fechaLimite = fecha;
    }

}