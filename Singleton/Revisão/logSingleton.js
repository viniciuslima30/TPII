// SINGLETON

class Log {
    constructor() {
        if (Log.instance) {
            return Log.instance;
        }

        this.valor = "Log";
        Log.instance = this;
    }

    static getInstance() {
        if (!Log.instance) {
            Log.instance = new Log();
        }
        return Log.instance;
    }

    log(mensagem) {
        console.log("Log: " + mensagem);
    }
}

// USO

const log1 = Log.getInstance();
log1.log("Logado");

const log2 = Log.getInstance();
log2.log("Logado");

console.log(log1 === log2);