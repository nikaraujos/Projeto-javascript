class infoPersonagem {
    constructor (personagemNome, personagemIdade, personagemTipo){
        this.personagemNome = personagemNome
        this.personagemIdade = personagemIdade
        this.personagemTipo = personagemTipo
    }
    selecionar(){
        let personagemAtaque = "";

            if(this.personagemTipo === "mago"){
                personagemAtaque = "magia"
            }
            else if(this.personagemTipo === "guerreiro;"){
                personagemAtaque === "espada"
            }
            else if(this.personagemTipo === "monge"){
                personagemAtaque = "artes marciais"
            }
            else{personagemAtaque = "shuriken"}

            console.log(`${this.personagemNome}, o ${this.personagemTipo} atacou usando ${personagemAtaque}`)
    }
}

let apresentarPersonagem = new infoPersonagem("Dragao Guerreiro", 400, "monge")

apresentarPersonagem.selecionar()