// PRODUTOS ABSTRATOS

class Arma {
    mostrarArma() {
        throw new Error("Deve ser sobrescrito!");
    }
}

class Habilidade {
    mostrarHabilidade() {
        throw new Error("Deve ser sobrescrito!");
    }
}

// PRODUTOS CONCRETOS

class HeroiArma extends Arma {
    mostrarArma() {
        console.log("Arma do heroi!");
    }
}

class HeroiHabilidade extends Habilidade {
    mostrarHabilidade() {
        console.log("Habilidade do heroi!");
    }
}

class VilaoArma extends Arma {
    mostrarArma() {
        console.log("Arma do vilão!");
    }
}

class VilaoHabilidade extends Habilidade {
    mostrarHabilidade() {
        console.log("Habilidade do vilão!");
    }
}

// FABRICA ABSTRATA

class FabricaJogo {
    criarArma() {
        throw new Error("Deve ser sobrescrito!");
    }

    criarHabilidade() {
        throw new Error("Deve ser sobrescrito!");
    }

    implementar() {
        const a = this.criarArma();
        const h = this.criarHabilidade();
        a.mostrarArma();
        h.mostrarHabilidade();
    }
}

// FABRICAS CONCRETAS

class FabricaHeroi extends FabricaJogo {
    criarArma() {
        return new HeroiArma();
    }

    criarHabilidade() {
        return new HeroiHabilidade();
    }
}

class FabricaVilao extends FabricaJogo {
    criarArma() {
        return new VilaoArma();
    }

    criarHabilidade() {
        return new VilaoHabilidade();
    }
}

// USO

const heroi = new FabricaHeroi();
heroi.implementar();

const vilao = new FabricaVilao();
vilao.implementar();