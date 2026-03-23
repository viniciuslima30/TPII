// SINGLETON

class RegistroAcademicoCentral {
    constructor() {
        if (RegistroAcademicoCentral.instance) {
            return RegistroAcademicoCentral.instance;
        }

        this.value = 0;
        RegistroAcademicoCentral.instance = this;
    }

    increment() {
        this.value++;
        console.log(`Value: ${this.value}`);
    }
}

// PROTOTYPE

class Aluno {
    constructor(nome, idade, curso, unidade, periodo) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.unidade = unidade;
        this.periodo = periodo;
    }

    clone() {
        return new Aluno(
            this.nome,
            this.idade,
            this.curso,
            this.unidade,
            this.periodo
        );
    }
}

// GERENCIAMENTO

class GerenciarAlunos {
    constructor() {
        this.alunos = [];
    }

    // adiciona aluno já pronto
    addAluno(aluno) {
        this.alunos.push(aluno);
    }

    // cria aluno a partir de um protótipo
    addAlunoFromPrototype(prototipo, nome, idade) {
        const aluno = prototipo.clone();
        aluno.nome = nome;
        aluno.idade = idade;
        this.alunos.push(aluno);
    }

    listarAlunos() {
        console.log(this.alunos);
    }
}

// CLIENTE

// Singleton
const siga1 = new RegistroAcademicoCentral();
const siga2 = new RegistroAcademicoCentral();

console.log("Singleton funciona?", siga1 === siga2); // true

// Protótipo base
const alunoPrototipo = new Aluno(
    null,
    null,
    "Desenvolvimento de Software Multiplataforma",
    "FATEC Luigi Papaiz",
    "Noturno"
);

// Gerenciador
const gerenciador = new GerenciarAlunos();

// Criando alunos a partir do protótipo
gerenciador.addAlunoFromPrototype(alunoPrototipo, "João", 20);
gerenciador.addAlunoFromPrototype(alunoPrototipo, "Maria", 22);

// Listando alunos
gerenciador.listarAlunos();

// Testando clone original
console.log("CLONE ORIGINAL:");
console.log(alunoPrototipo.clone());
