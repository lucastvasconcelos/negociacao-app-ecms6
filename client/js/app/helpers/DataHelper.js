class DataHelper{
    constructor(){
        throw new Error("não pode instanciar essa porra")
    }
    static textoParaData(data){
        return new Date(...data.split('-').map((item,indice) => item - indice%2 ))
    }
    static dataParaTexto(data){
        return `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`
    }
}