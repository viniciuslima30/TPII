// IMPLEMENTAÇÃO (lado que executa)

// Interface base (contrato)
class TV {
    ligar() {
        throw new Error("Implementar!");
    }
    desligar() {
        throw new Error("Implementar!");
    }
    setCanal(canal) {
        throw new Error("Implementar!");
    }
}

// Implementação concreta 1
class TvSamsung extends TV {
    ligar() {
        console.log("Samsung ligada!");
    }
    desligar() {
        console.log("Samsung desligada!");
    }
    setCanal(canal) {
        console.log("Samsung canal:", canal);
    }
}

// Implementação concreta 2
class TvLG extends TV {
    ligar() {
        console.log("LG ligada!");
    }
    desligar() {
        console.log("LG desligada!");
    }
    setCanal(canal) {
        console.log("LG canal:", canal);
    }
}


// ABSTRAÇÃO (controle)

class ControleRemoto {
    constructor(tv) {
        this.tv = tv; // 🔗 Bridge (ponte)
    }

    ligar() {
        this.tv.ligar();
    }

    desligar() {
        this.tv.desligar();
    }

    trocarCanal(canal) {
        this.tv.setCanal(canal);
    }
}

// Abstração refinada
class ControleAvancado extends ControleRemoto {
    mute() {
        console.log("Mute ativado");
    }
}

// USO

// Escolhe a implementação (TV)
const tv = new TvLG();

// Conecta com a abstração (controle)
const controle = new ControleAvancado(tv);

// Usa normalmente
controle.ligar();
controle.trocarCanal(5);
controle.mute();

// Troca a implementação em tempo de execução
controle.tv = new TvSamsung();
controle.ligar();
controle.trocarCanal(10);