

export class Animal{
nome: string
idade : number

constructor(nome: string, idade: number){
this.nome = nome
this.idade = idade
}


emitirSom(){
    console.log(`O nome do animal é ${this.nome}`)
}
correr(){
    console.log(`${this.idade}`)
}

}
