class NegociacaoController {
    constructor(){
        let $ = document.querySelector.bind(document)
        this._inputData = $("#data")
        this._inputQuant = $("#quantidade")
        this._inputValor = $("#valor")
        this._listaNegociacao = new ListaNegociacoes()
    }        
    adiciona(event){
        event.preventDefault()
        this._listaNegociacao.adiciona(this._criaNegociacao())
        this._limpaFormulario()
        console.log(this._listaNegociacao)
        this._listaNegociacao.negociacoes.length = 0
        console.log(this._listaNegociacao)
         }

    _criaNegociacao(){
        return new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            this._inputQuant.value,
            this._inputValor.value
        )
    }

    _limpaFormulario(){
        let form = document.querySelector(".form")
        form.reset()
        this._inputData.focus()
    }
}