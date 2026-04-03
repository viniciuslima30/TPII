// SINGLETON

class Carrinho {
    constructor() {
        if (Carrinho.instance) {
            return Carrinho.instance;
        }

        this.valor = "carrinho único";
        Carrinho.instance = this;
    }

    static getInstance() {
        if (!Carrinho.instance) {
            Carrinho.instance = new Carrinho();
        }
        return Carrinho.instance;
    }

}

const carrinho1 = Carrinho.getInstance();
const carrinho2 = Carrinho.getInstance();

console.log(carrinho1 === carrinho2);