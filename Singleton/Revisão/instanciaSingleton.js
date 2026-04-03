// SINGLETON

class Config {
    constructor() {
        if (Config.instance) {
            return Config.instance;
        }

        this.valor = "configuração";
        Config.instance = this;
    }

    static getInstance() {
        if (!Config.instance) {
            Config.instance = new Config();
        }

        return Config.instance;
    }
}

// USO

const c1 = Config.getInstance();
const c2 = Config.getInstance();

console.log(c1 === c2);
