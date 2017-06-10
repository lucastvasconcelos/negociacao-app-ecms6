class NegociacaoController {
    constructor(){
        let $ = document.querySelector.bind(document)
        this._inputData = $("#data")
        this._inputQuant = $("#quantidade")
        this._inputValor = $("#valor")
        this._listaNegociacao = new ListaNegociacoes()
        this._negociacaoView = new NegociacoesView($("#negociacaoView"))
        this._mensagem = new Mensagem()   
        this._mensagemView = new MensagemView($(".mensagemView")) 
    }        
    adiciona(event){
        event.preventDefault()
        this._listaNegociacao.adiciona(this._criaNegociacao())
        this._mensagem.texto = "Mensagem adicionada com sucesso"
        this._limpaFormulario()
        this._negociacaoView._update(this._listaNegociacao)
        this._mensagemView._update(this._mensagem)
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