// PIZZA NÃO EXISTE SEM BORDA; SERIA UM CIRCULO DE MASSA

// INTERFACE INDEPENDENTE

class Borda {
  aplicarBorda() {
    throw new Error("Implementar!");
  }
}

// IMPLEMENTAÇÕES CONCRETAS

class BordaCatupiry extends Borda {
  aplicarBorda() {
    return "Borda de Catupiry!";
  }
}

class BordaCreamChesse extends Borda {
  aplicarBorda() {
    return "Borda de CreamChesse!";
  }
}

class BordaTradicional extends Borda {
  aplicarBorda() {
    return "Borda de Tradicional!";
  }
}

// ABSTRAÇÃO

class Pizza {
  constructor(borda, sabor) {
    this.borda = borda; // BRIDGE
    this.sabor = sabor;
  }

  montarPizza() {
    throw new Error("Implementar!");
  }
}

class PizzaBroto extends Pizza {
  montarPizza() {
    console.log("==== Pizza Broto ====");
    console.log("Borda: " + this.borda.aplicarBorda());
    console.log("Sabor: " + this.sabor);
  }
}

class PizzaTradicional extends Pizza {
  montarPizza(sabor, borda) {
    console.log("==== Pizza Tradicional ====");
    console.log("Borda: " + this.borda.aplicarBorda());
    console.log("Sabor: " + this.sabor);
  }
}

class PizzaGrande extends Pizza {
  montarPizza(sabor, borda) {
    console.log("==== Pizza Broto ====");
    console.log("Borda: " + this.borda.aplicarBorda());
    console.log("Sabor: " + this.sabor);
  }
}

// USO

const borda = new BordaCatupiry();

const pizza = new PizzaBroto(borda, "Frango com Catupiry");

pizza.montarPizza();
