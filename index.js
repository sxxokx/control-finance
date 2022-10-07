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
    
        h4Itens.innerText = `R$ ${Math.abs(element.value)}`
    
        divItens.classList = 'flex gap'
    
        bttItens.classList.add('button-caixa')
        if(element.categoryID === 'Entradas'){
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
    
    
    renderTotal()
    
}

createTabela(insertedValues)


function showItens(){
    const newItens = document.getElementById('inserir-item')
    const ulTela = document.getElementById('itens-tela')
    const modInfo = document.querySelector('.modalInfo')
    const inputM = document.querySelector('.modal-input')
    const modModal = document.getElementById('back-modal')
    modInfo.addEventListener('click', (event) =>{
        
        if(event.target.tagName == "BUTTON"){
            let categoryID = event.target.innerText
            console.log(categoryID)

            let tipoValor = +inputM.value
            if(categoryID == "Saídas"){
                tipoValor = -tipoValor
            }

            newItens.addEventListener('click', (event) =>{
                event.preventDefault()
                id++
               
                const objetoTela = {
                    id: id,
                    value: tipoValor,
                    categoryID: categoryID,
                }
                insertedValues.push(objetoTela)

                console.log(objetoTela)
                ulTela.innerHTML = ""
                 createTabela(insertedValues)
               modModal.remove()
                
            })
        }
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
            }else{
                const itensFiltrados = insertedValues.filter(itens => itens.categoryID == filter)
                

                createTabela(itensFiltrados)
                console.log(itensFiltrados)
            }

            closeItens()
        })
    })
}

function itensFilter(text) {
    const itensFiltrados = insertedValues.filter(itens => itens.categoryID == text)

    return itensFiltrados
}

eventFilter()



function renderTotal (){
   const total = document.getElementById('valor-total')

   let soma =  insertedValues.reduce((acumulador, atual)=> acumulador + atual.value, 0)
    
    total.innerText = `R$ ${soma}`

    

}




/*<h4>Soma dos Valores</h4>
<p id="priceTotal">R$ 1200</p>*/




/** 
 Faltado--
 3- registrar novo valor
 4- remover dados do array
 */