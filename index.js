
const classes = ["Guerreiro", "Mago", "Monge", "Ninja"]

class heroProfile{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    attack(){
        if(this.tipo == classes[0]){
            console.log(`O ${this.nome} atacou usando sua Espada.`)
        }
        else if(this.tipo == classes[1]){
            console.log(`O ${this.nome} atacou usando Magia.`)
        }
        else if(this.tipo == classes[2]){
            console.log(`O ${this.nome} atacou usando Artes Marciais.`)
        }
        else if(this.tipo == classes[3]){
            console.log(`O ${this.nome} atacou usando Shirike.`)
        }
    }
}

let hero = new heroProfile("Matheus", 22, "Guerreiro")

hero.attack()

