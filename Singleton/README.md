📚 Sistema de Registro Acadêmico (Padrões de Projeto)

Este projeto é um exemplo simples em JavaScript que demonstra o uso de dois padrões de projeto:

Singleton
Prototype
🚀 Objetivo

Simular um sistema acadêmico básico onde:

Existe apenas uma instância central de registro (Singleton)
Alunos podem ser criados a partir de um modelo base reutilizável (Prototype)
🧩 Padrões Utilizados
🔹 Singleton — RegistroAcademicoCentral

Garante que exista apenas uma única instância do sistema.

const siga1 = new RegistroAcademicoCentral();
const siga2 = new RegistroAcademicoCentral();

console.log(siga1 === siga2); // true

✔ Mesmo criando dois objetos, ambos apontam para a mesma instância.

🔹 Prototype — Aluno

Permite criar novos alunos a partir de um protótipo base, evitando repetição de dados.

const alunoPrototipo = new Aluno(
    null,
    null,
    "Desenvolvimento de Software Multiplataforma",
    "FATEC Luigi Papaiz",
    "Noturno"
);

Clone de aluno:

const aluno = prototipo.clone();
🛠️ Gerenciamento de Alunos

Classe responsável por armazenar e criar alunos:

addAluno(aluno) → adiciona um aluno já criado
addAlunoFromPrototype(prototipo, nome, idade) → cria aluno a partir do protótipo
📌 Exemplo de Uso
gerenciador.addAlunoFromPrototype(alunoPrototipo, "João", 20);
gerenciador.addAlunoFromPrototype(alunoPrototipo, "Maria", 22);

gerenciador.listarAlunos();
📋 Saída Esperada
Confirmação do Singleton (true)
Lista de alunos criados a partir do protótipo
Exemplo de clone funcionando corretamente
