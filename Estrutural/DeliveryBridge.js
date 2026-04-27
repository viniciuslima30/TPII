
// ===============================
// IMPLEMENTAÇÃO (PAGAMENTO)
// ===============================

class MetodoPagamento {
  pagar(valor) {
    throw new Error("Implementar!");
  }
}

class CartaoCredito extends MetodoPagamento {
  pagar(valor) {
    console.log(`R$ ${valor} pago no cartão de crédito.`);
  }
}

class Pix extends MetodoPagamento {
  pagar(valor) {
    console.log(`R$ ${valor} pago via PIX.`);
  }
}

class Boleto extends MetodoPagamento {
  pagar(valor) {
    console.log(`R$ ${valor} pago via boleto.`);
  }
}


// ===============================
// ABSTRAÇÃO (PEDIDO)
// ===============================

class Pedido {
  constructor(comida, valor, metodoPagamento) {
    this.comida = comida;
    this.valor = valor;
    this.metodoPagamento = metodoPagamento; // 🔗 Bridge aqui
  }

  finalizarPedido() {
    throw new Error("Implementar!");
  }
}


// ===============================
// ABSTRAÇÕES REFINADAS
// ===============================

class PedidoSimples extends Pedido {
  finalizarPedido() {
    console.log("==== Pedido Simples ====");
    console.log("Comida:", this.comida);
    this.metodoPagamento.pagar(this.valor);
    console.log("Pedido finalizado com sucesso!");
  }
}

class PedidoExpress extends Pedido {
  finalizarPedido() {
    console.log("==== Pedido Express ====");
    console.log("Comida:", this.comida);
    this.metodoPagamento.pagar(this.valor);
    console.log("Entrega mais rápida selecionada!");
  }
}

class PedidoPremium extends Pedido {
  finalizarPedido() {
    console.log("==== Pedido Premium ====");
    console.log("Comida:", this.comida);
    this.metodoPagamento.pagar(this.valor);
    console.log("Pedido VIP finalizado com benefícios extras!");
  }
}


// ===============================
// USO
// ===============================

// escolhe implementação (pagamento)
const pagamento = new Pix();

// conecta com abstração (pedido)
const pedido = new PedidoPremium(
  "Sushi",
  120,
  pagamento
);

// executa
pedido.finalizarPedido();