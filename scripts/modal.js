/* Desenvolva sua lógica aqui 
        <section class="modal marg-top">
            <div class="flex itens-center between">
                <h4>Registro de valor</h4>
                <button class="b-close-modal">X</button>
            </div>
            <p  class="flex wrap marg-top color-infM">Digite um valor e em seguida aperte no botão referente ao tipo do valor</p>
            <div class="flex wrap gap colum marg-top">
                <h4>Valor</h4>
                <input class="modal-input" placeholder="00,00" type="number">
            </div>
            <div class="marg-top flex colum gap">
                <h4>tipo de valor</h4>
                <button class="b-type-valor">Entrada</button>
                <button class="b-type-valor">Saída</button>
            </div>
            <div class="marg-top flex itens-center between ">
                <button class="b-modal-cancel">Cancelar</button>
                <button class="b-modal-inserir">Inserir Valor</button>
            </div>
        </section>
*/


function showModalInserir(){

    const bgModal = document.createElement('div')
    const telaModal = document.createElement('section')
    const headModal = document.createElement('div')
    const h4Head = document.createElement('h4')
    const btHead = document.createElement('button')
    const pModal = document.createElement('p')
    const mainModal = document.createElement('div')
    const h4Main = document.createElement('h4')
    const inputMain = document.createElement('input')
    const modalInfo = document.createElement('div')
    const h4Info = document.createElement('h4')
    const btEntrada = document.createElement('button')
    const btSaida = document.createElement('button')
    const footModal = document.createElement('div')
    const btCancel = document.createElement('button')
    const btInserir = document.createElement('button')


    bgModal.classList.add('bg-modal')
    bgModal.id = 'back-modal'

    telaModal.classList = 'tela-modal modal marg-top wrap'

    headModal.classList = 'flex itens-center between'

    h4Head.innerText = 'Registro de valor'

    btHead.classList = 'b-close-modal'
    btHead.innerText = 'X'
    btHead.id = 'close-modal'

    pModal.classList = 'flex wrap marg-top color-infM'
    pModal.innerText = 'Digite um valor e em seguida aperte no botão referente ao tipo do valor.'

    mainModal.classList = 'flex wrap gap colum marg-top'

    h4Main.innerText = 'Valor'

    inputMain.classList = 'modal-input'
    inputMain.type = 'Number'
    inputMain.placeholder = 'R$ 00,00'

    modalInfo.classList = 'marg-top flex colum gap'

    h4Info.innerText = 'Tipo de valor'

    btEntrada.classList = 'b-type-valor'
    btEntrada.innerText = 'Entrada'

    btSaida.classList = 'b-type-valor'
    btSaida.innerText = 'Saída'

    footModal.classList = 'marg-top flex itens-center between'

    btCancel.classList = 'b-modal-cancel'   
    btCancel.innerText = 'Cancelar'  

    btInserir.classList = 'b-modal-inserir'
    btInserir.innerText = 'Inserir valor'

    headModal.append(h4Head, btHead) 
    mainModal.append(h4Main, inputMain)
    modalInfo.append(h4Info, btEntrada, btSaida)
    footModal.append(btCancel, btInserir)
    telaModal.append(headModal, pModal, mainModal, modalInfo, footModal)
    bgModal.appendChild(telaModal)

    return bgModal
}


function showModalNew(){
    const verModal = document.getElementById('registerNew')
    const mainContaier = document.getElementById('main-container')

    verModal.addEventListener('click', (event) =>{
        event.preventDefault()

        const showMore = showModalInserir()
        mainContaier.appendChild(showMore)

        closeModalNew()
    })
}

function closeModalNew(){
    const fecharModal = document.getElementById('close-modal')
    const modModal = document.getElementById('back-modal')

    fecharModal.addEventListener('click', (event) => {
        event.preventDefault()
        modModal.remove()
    })
}
showModalNew()