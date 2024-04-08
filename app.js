// const formulario = document.getElementById('formulario')
// const input = document.getElementById
// ('input')
// const listaTarea = document.getElementById('lista-tareas')
// const template = document.getElementById('template').content
// const fragment = document.createDocumentFragment()
// let tareas = {
//     1710525096149: {
//         id: 1710525096149,
//         texto: 'Tarea #1',
//         estado: false
//     },
//     1710525262360: {
//         id: 1710525262360,
//         texto: 'Tarea #2',
//         estado: false
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     pintarTareas()
// })

// listaTarea.addEventListener('click', e => {
//     btnAccion(e)
// })
// // console.log(Date.now());

// formulario.addEventListener('submit', e => { e.preventDefault()
//     console.log(input.value);


//     setTarea(e)
// })

// const setTarea = e => {
//     if (input.value.trim() === ''){
//         console.log('esta vacio')
//         return
//     }
    
//     const tarea = {
//         id: Date.now(),
//         texto: input.value,
//         estado: false
//     }
//     tareas[tarea.id] = tarea 
//     // console.log(tareas)
//     formulario.reset()
//     input.focus()
//     pintarTareas()
// }

// const pintarTareas = () => {
//     listaTarea.innerHTML = ''
//     Object.values(tareas).forEach(tarea => {
//         const clone = template.cloneNode(true)
//         clone.querySelector('p').textContent = tarea.texto
//         clone.querySelectorAll('.fas')[0].dataset.id = tarea.id
//         clone.querySelectorAll('.fas')[1].dataset.id = tarea.id
//         fragment.appendChild(clone)
//     })
//     listaTarea.appendChild(fragment)
// }

// const btnAccion = e => {
//     // console.log(e.target.classList.contains('fa-check-circle'))
//     if(e.target.classList.contains('fa-check-circle')) {

//     }
//     e.stopPropagation()
// }

const formulario = document.getElementById('formulario')
const listaTareas = document.getElementById('lista-tareas')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()
let tareas = {}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('tareas')) {
        tareas = JSON.parse(localStorage.getItem('tareas'))
    }
    pintarTareas()
})

listaTareas.addEventListener('click', (e) => {btnAccion(e)})

formulario.addEventListener('submit', e => {
    e.preventDefault()
    // console.log(e.target[0].value)
    // console.log(e.target.querySelector('input').value)
    setTarea(e)
})

const setTarea = e => {
    const texto = e.target.querySelector('input').value
    
    if (texto.trim() === '') {
        console.log('está vacio')
        return
    }
    const tarea = {
        id: Date.now(),
        texto: texto,
        estado: false
    }
    
    tareas[tarea.id] = tarea
    pintarTareas()

    formulario.reset()
    e.target.querySelector('input').focus()
}

const pintarTareas = () => {
    
    localStorage.setItem('tareas', JSON.stringify(tareas))

    if (Object.values(tareas).length === 0) {
        listaTareas.innerHTML = `
        <div class="alert alert-dark text-center">
        No pending tasks 📜
        </div>
        `
        return
    }
    
    listaTareas.innerHTML = ''

    Object.values(tareas).forEach(tarea => {
        const clone = template.cloneNode(true)
        clone.querySelector('p').textContent = tarea.texto

        if (tarea.estado) {
            clone.querySelectorAll('.fas')[0].classList.replace('fa-check-circle', 'fa-undo-alt')
            clone.querySelector('.alert').classList.replace('alert-warning', 'alert-primary')
            clone.querySelector('p').style.textDecoration = 'line-through'
        }

        clone.querySelectorAll('.fas')[0].dataset.id = tarea.id
        clone.querySelectorAll('.fas')[1].dataset.id = tarea.id
        fragment.appendChild(clone)
    })
    listaTareas.appendChild(fragment)
}

const btnAccion = e => {
    // console.log(e.target.classList.contains('fa-check-circle'))
    if (e.target.classList.contains('fa-check-circle')) {
        tareas[e.target.dataset.id].estado = true
        pintarTareas()
    }

    if (e.target.classList.contains('fa-minus-circle')) {
        // console.log(e.target.dataset.id)
        delete tareas[e.target.dataset.id]
        pintarTareas()
    }

    if (e.target.classList.contains('fa-undo-alt')) {
        tareas[e.target.dataset.id].estado = false
        pintarTareas()
    }

    e.stopPropagation()
}

