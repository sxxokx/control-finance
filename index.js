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
        if(element.categoryID === 1){
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
