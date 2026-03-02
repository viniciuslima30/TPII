// PRODUTOS ABSTRATOS

class Veiculo {
    montar() {
        throw new Error("montar() deve ser implementado!");
        
    }
}

// PRODUTOS CONCRETOS

class Carro extends Veiculo {
    montar() {
        return `Carro montado!`;
    }
}

class Moto extends Veiculo {
    montar() {
        return `Moto montado!`;
    }
}

// FABRICA ABSTRATA

class FabricaVeiculo {
    criarVeiculo() {
        throw new Error("criarVeiculo() deve ser implementado!");
        
    }

    fabricar() {
        const v = this.criarVeiculo();
        console.log(v.montar());
        console.log('-'.repeat(20));
    }
}

// FABRICA CONCRETA

class FabricaCarro extends FabricaVeiculo {
    criarVeiculo() {
        return new Carro();
    }
}

class FabricaMoto extends FabricaVeiculo {
    criarVeiculo() {
        return new Moto();
    }
}

// USO

const carro = new FabricaCarro();
carro.fabricar();

const moto = new FabricaMoto();
moto.fabricar();
