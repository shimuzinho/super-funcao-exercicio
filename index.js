let nomes = ["João", "Maria", "Pedro", "Ana", "Carlos", "Laura", "Lucas", "Mariana", "Rafael", "Isabela", "Gustavo", "Juliana", "Fernando", "Carolina", "Rodrigo", "Patrícia", "Diego", "Camila", "Daniel", "Vivian", "Alex", "Eduarda", "Luiz", "Larissa", "Paulo", "Natália", "Felipe", "Vanessa", "Roberto", "Amanda", "Marcos", "Raquel", "Renato", "Tatiana", "Bruno", "Cristina", "Júlio", "Renata", "André", "Lívia", "Leandro", "Simone", "Antônio", "Elaine", "Luana", "José", "Monique", "Silvia", "Marcelo", "A", "Henrique", "Wilian"];

let ordemDecrescente = (nomeA, nomeB) => {
  let tamanhoA = nomeA.length
  let tamanhoB = nomeB.length
  if (tamanhoA > tamanhoB) return -1
  if (tamanhoA < tamanhoB) return 1
  else return 0
}

console.log(nomes.sort(ordemDecrescente))

let ordemAlfabetica = (nomeA, nomeB) => {
  if (nomeA > nomeB) return 1
  if (nomeA < nomeB) return -1
  return 0
}

console.log(nomes.sort(ordemAlfabetica))