// SINGLETON

class Cache {
    constructor() {
        if (Cache.instance) {
            return Cache.instance;
        }

        this.dados = {};
        Cache.instance = this;
    }

    static getInstance() {
        if (!Cache.instance) {
            Cache.instance = new Cache();
        }

        return Cache.instance;
    }

    set(chave, valor) {
        this.dados[chave] = valor;
    }

    get(chave) {
        return this.dados[chave];
    }
}

// USO

const cache1 = Cache.getInstance();
cache1.set("usuario", "vinicius");
cache1.set("nivel", 10);

const cache2 = Cache.getInstance();

console.log(cache2.get("usuario"));
console.log(cache2.get("nivel"));

console.log(cache1 === cache2);