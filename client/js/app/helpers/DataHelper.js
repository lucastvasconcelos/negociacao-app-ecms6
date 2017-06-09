class DataHelper{
    static textoParaData(data){
        return new Date(...data.split('-').map((item,indice) => item - indice%2 ))
    }
    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
    }
}