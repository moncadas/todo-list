let cont = 0

function addItems () {
    const textBox = document.getElementById('textBox')

    if (textBox.value !== '') {
        const entry = document.createElement('li') 
        entry.id = cont
        const container = document.createElement('div')        

        const checkBox = document.createElement('INPUT')
        checkBox.setAttribute('type', 'checkbox')
        checkBox.setAttribute('onclick', 'taskDone(' + cont + ')')
        container.appendChild(checkBox)        

        const note = document.createTextNode(textBox.value)  
        container.appendChild(note) 

        const del = document.createElement('INPUT')
        del.setAttribute('type', 'button')
        del.setAttribute('value', 'X')              
        del.setAttribute('onclick', 'deleteLI(' + cont + ')')        
        del.id = 'delButton'        
        container.appendChild(del)

        entry.appendChild(container)
    
        const list = document.getElementById('list')
        list.appendChild(entry)
    
        textBox.value = ''
        cont++
    }    
}

function clearList() {
    const list = document.getElementById('list')
    list.innerHTML = ''    
}

function deleteLI(itemId) {
    const list = document.getElementById('list')
    const itemToRemove = document.getElementById(itemId)
    list.removeChild(itemToRemove)    
}

function taskDone(itemId) {
    const itemToCheck = document.getElementById(itemId)

    if (itemToCheck.style.textDecoration === 'line-through') {
        itemToCheck.style.textDecoration = 'none'
        itemToCheck.style.color = 'black'
    } else {
        itemToCheck.style.textDecoration = 'line-through'
        itemToCheck.style.color = 'gray'
        itemToCheck.style.order = 100        
    }
   
}