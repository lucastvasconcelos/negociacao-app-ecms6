class NegociacoesView {
	constructor(_element){
		this._element = _element
	}

	_template (model){
		return `
			<table class="table table-hover table-bordered">
	        <thead>
	            <tr>
	                <th>DATA</th>
	                <th>QUANTIDADE</th>s
	                <th>VALOR</th>
	                <th>VOLUME</th>
	            </tr>
	        </thead>
	        
	        <tbody>
				${model.negociacoes.map((n) => {
					console.log(n)	
				})}
	        </tbody>
	        
	        <tfoot>
	        </tfoot>
	    </table>
	    `
	}

	_update(model){
		console.log(model)
		this._element.innerHTML = this._template(model)
	}
}	