class View {
    constructor(_element){
		this._element = _element
	}

    template(){
        throw new Error("Template precisa ser sobreescrito")
    }
    
    _update(model){
		console.log(model)
		this._element.innerHTML = this.template(model)
	}
}