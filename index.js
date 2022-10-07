/* Desenvolva sua lógica aqui 
            <li class="itens-Tela flex itens-center between marg-top">
                <h4>R$ 100</h4>
                <div class="flex gap">
                    <button class="button-caixa">Entradas</button> 
                    <button class="b-none"><img src="../../assets/trash.png" alt=""></button>                 
                </div>
            </li>
                
            */

function createTabela(arr){
    arr.forEach(element => {
        const ulTela = document.getElementById('itens-tela')
        const liItens = document.createElement('li')
        const h4Itens = document.createElement('h4')
        const divItens = document.createElement('div')
        const bttItens = document.createElement('button')
        const bttTrash = document.createElement('button')
    
        liItens.classList = "itens-Tela flex itens-center between marg-top"
        //liItens.id = 'li-itens'
    
        h4Itens.innerText = `R$ ${element.value}`
    
        divItens.classList = 'flex gap'
    
        bttItens.classList.add('button-caixa')
        if(element.categoryID[0] === 'Entradas'){
            bttItens.innerText = 'Entrada'           
        }else{
            bttItens.innerText = 'Saída'
        }
    
        bttTrash.classList.add('b-none')
        bttTrash.id = element.id
        bttTrash.innerHTML = '<img src="../../assets/trash.png" alt="">'
    
        divItens.append(bttItens, bttTrash)
        liItens.append(h4Itens, divItens)
        ulTela.appendChild(liItens)
    
    });
    
        
}

createTabela(insertedValues)


function showItens(){
    const newItens = document.getElementById('inserir-item')
    const ulTela = document.getElementById('itens-tela')
    
    newItens.addEventListener('click', (event) =>{
        console.log("clicou")
        event.preventDefault()
        ulTela.innerHTML = ""
         createTabela(insertedValues)
       
        
    })
}

function closeItens(){
    const bttCloseItens = document.querySelectorAll('.b-none')
        
    bttCloseItens.forEach((element) => {

        element.addEventListener('click', (event) => {
            event.preventDefault()
            element.closest("li").remove()
            insertedValues.splice()
        })
    })
}
closeItens()



function eventFilter(){
    const filterButtons = document.querySelectorAll('.buttonNave')
    const mainList = document.getElementById('itens-tela')

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            mainList.innerHTML = ''

            const filter = button.innerText
            
            if(filter === 'Todos'){
                createTabela(insertedValues)
            }

            const filterItens = itensFilter(filter)

            createTabela(filterItens)
            closeItens()
        })
    })
}

function itensFilter(text) {
    const itensFiltrados = insertedValues.filter(itens => itens.categoryID.includes(text))

    return itensFiltrados
}

eventFilter()


function somaPrice (lista){
    //
       let contador = 0
    for(let i = 0; i < lista.length; i++){
        let total = lista[i].value
        contador += total
    }
        return contador
    
    
}
somaPrice(insertedValues)
console.log(somaPrice(insertedValues))


/*<h4>Soma dos Valores</h4>
<p id="priceTotal">R$ 1200</p>*/

function renderTotal (){
    const divValue = document.getElementById('priceTotal')
    const h4Value = document.createElement('h4')
    const pValue = document.createElement('p')

    h4Value.innerText = 'Soma dos valores'

    pValue.innerText = `R$ ${somaPrice(insertedValues)}`

    divValue.append(h4Value, pValue)
    

    return divValue

}
renderTotal()

/** 
 Faltado--
 1-Fidelidade do figma
 3- registrar novo valor
 4- remover dados do array
 */