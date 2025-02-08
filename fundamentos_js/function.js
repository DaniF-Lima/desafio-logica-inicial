torrar("pão de forma","Diego")
function torrar(pao, nome, valor=15.99){
    console.log("Torrando pão")
    console.log("torrada feita com " + pao)
    console.log("Preparando para colocar o pão")
    console.log("Finalizando...")
    console.log("Este pedido é para " + nome)
    console.log("O valor total é " + valor)
}


//funcao main é responsavel por chamar outras funcoes
main()

function main(){
    getData()
    checkValues()
    sendToDatabase()
}

function getData(){
    console.log("pegando dados do usuario..")
}

function checkValues(){
    console.log("checando os dados...")
}

function sendToDatabase(){
    console.log("enviando os dados para o Banco de Dados")
}

//exemplo de uso na vida real:
//com interpolação de strings e variaveis em inglês
createStringConnection("db_products", "Diego", "1234")
function createStringConnection(databaseName, user, pass){
    console.log(`connect:DBCONNECT;user${user};pass=${pass};initial_database=${databaseName}`)
}