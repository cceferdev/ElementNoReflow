const lista = document.getElementById('lista')
const arrayItem = ["item 1","item 2","item 3",];

// primera alternativa para crear el fragment
// const frag = document.createDocumentFragment()
// segunda alternativa de crear el fragment
   const fragment = new DocumentFragment()
// las dos formas hacen lo mismo

arrayItem.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item

    // frag.appendChild(li) //el appendchild hace que todo se incorpore haci abajo
   
    const childNode = fragment.firstChild //Seleccionamos el primer hijo del nodo
    console.log(item, childNode)
    fragment.insertBefore(li, childNode)
})
lista.appendChild(fragment) //empujando despues del forEach

