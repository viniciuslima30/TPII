// PRODUTOS ABSTRATOS

class Pagamento {
    processar(valor) {
        throw new Error("processar() deve ser implementado!");
        
    }

    confirmar(valor) {
        throw new Error("confirmar() deve ser implementado!");
        
    }
}

// PRODUTOS CONCRETOS

class CartaoCredito extends Pagamento {
    processar(valor) {
        return `Total de R$ ${valor} no cartão de credito processando...`;
    }

    confirmar(valor) {
        return `Total de R$ ${valor} no cartão de credito confirmado!`;
    }
}

class Pix extends Pagamento {
    processar(valor) {
        return `Total de R$ ${valor} no PIX processando...`;
    }

    confirmar(valor) {
        return `Total de R$ ${valor} no PIX confirmado!`;
    }
}

class Boleto extends Pagamento {
    processar(valor) {
        return `Total de R$ ${valor} no boleto processando...`;
    }

    confirmar(valor) {
        return `Total de R$ ${valor} no boleto confirmado!`;
    }
}

// FABRICA ABSTRATA

class ProcessadorPagamento {
    criarPagamento() {
        throw new Error("criarPagamento() deve ser implementado!");
        
    }

    pagar(valor) {
        const p = this.criarPagamento();
        console.log(p.processar(valor));
        console.log(p.confirmar(valor));
        console.log('-'.repeat(50));
    }
}

// FABRICA CONCRETA

class ProcessadorCartao extends ProcessadorPagamento {
    criarPagamento() {
        return new CartaoCredito();
    }
}

class ProcessadorPix extends ProcessadorPagamento {
    criarPagamento() {
        return new Pix();
    }
}

class ProcessadorBoleto extends ProcessadorPagamento {
    criarPagamento() {
        return new Boleto();
    }
}

// USO

const cartao = new ProcessadorCartao();
cartao.pagar(289.99);

const pix = new ProcessadorPix();
pix.pagar(599.00);

const boleto = new ProcessadorBoleto();
boleto.pagar(125.57);
