// SINGLETON

class Licence {
    constructor() {
        if (Licence.instance) {
            return Licence.instance;
        }

        this.valida = false;
        Licence.instance = this;
    }

    static getInstance() {
        if (!Licence.instance) {
            Licence.instance = new Licence();
        }

        return Licence.instance;
    }

    validarChave(chave) {
        if (chave === "abc123") {
            this.valida = true;
            console.log("Licença Valida!")
        } else {
            this.valida = false;
            console.log("Licença inválida!");
        }
    }
}

// USO

const licenca1 = Licence.getInstance();
licenca1.validarChave("3342");

const licenca2 = Licence.getInstance();
licenca2.validarChave("abc123");

console.log(licenca1 === licenca2);