class NegociacaoController {
    constructor(){
        let $ = document.querySelector.bind(document)
        this._inputData = $("#data")
        this._inputQuant = $("#quantidade")
        this._inputValor = $("#valor")

    }        
    adiciona(event){
        event.preventDefault()
        let negociacao = new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            this._inputQuant.value,
            this._inputValor.value
        )
        console.log(negociacao.data)
        console.log(DataHelper.dataParaTexto(negociacao.data))   
    }
}