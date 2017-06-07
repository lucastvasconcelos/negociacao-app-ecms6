class NegociacaoController {
    constructor(){
        let $ = document.querySelector.bind(document)
        this.inputData = $("#data")
        this.inputQuant = $("#quantidade")
        this.inputValor = $("#valor")

    }        
    adiciona(event){
        event.preventDefault()
        let cl = console.log
        
        cl(this.inputData.value)
        cl(this.inputQuant.value)
        cl(this.inputValor.value)
    }
}