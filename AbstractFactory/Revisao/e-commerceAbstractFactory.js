// PRODUTOS ABSTRATOS (ABSTRAÇÃO)

class ProdutoA {
    descricao() {
        throw new Error("descricao() deve ser implementado!");
    }
}

class ProdutoB {
    descricao() {
        throw new Error("descrição() deve ser implementado!");
    }
}

// PRODUTOS CONCRETOS

class EletronicoProdutoA extends ProdutoA {
    descricao() {
        console.log("ProdutoA eletronico.");
    }
}

class EletronicoProdutoB extends ProdutoB {
    descricao() {
        console.log("ProdutoB eletronico.");
    }
}

class ModaProdutoA extends ProdutoA {
    descricao() {
        console.log("ProdutoA moda.");
    }
}

class ModaProdutoB extends ProdutoB {
    descricao() {
        console.log("ProdutoB moda.");
    }
}

// FABRICA ABSTRATA

class FabricaEcommerce {
    criarProdutoA() {
        console.log("Deve ser implementado!");
    }

    criarProdutoB() {
        console.log("Deve ser implementado!");
    }

    implementar() {
        const pa = this.criarProdutoA();
        const pb = this.criarProdutoB();
        pa.descricao();
        pb.descricao();
    }
}

// FABRICA CONCRETA

class FabricaEletronica extends FabricaEcommerce {
    criarProdutoA() {
        return new EletronicoProdutoA();
    }

    criarProdutoB() {
        return new EletronicoProdutoB();
    }
}

class FabricaModa extends FabricaEcommerce {
    criarProdutoA() {
        return new ModaProdutoA();
    }

    criarProdutoB() {
        return new ModaProdutoB();
    }
}

// USO

const eletronico = new FabricaEletronica();
eletronico.implementar();

const moda = new FabricaModa();
moda.implementar();