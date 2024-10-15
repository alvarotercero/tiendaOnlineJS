/*

    GET https://crm-empleados.onrender.com/api/empleados
    - Retorna un array con todos los empleados
    TAREAS:
    - Método getEmpleados
    •- Lanza la petición para la recuperación de todos los empleados
    - Método pintarEmpleado
    - Método pintarTodosEmpleados

*/

const section = document.querySelector('section')

async function cargarDatos() {
    try {
        const response = await fetch('https://crm-empleados.onrender.com/api/empleados')
        const { results } = await response.json()
        console.log(results);

        // PINTAR
        pintarEmpleados(results, section)
    } catch (error) {
        console.log(error);
    }
}
cargarDatos()

function pintarEmpleado(empleado) {
    // Creamos contantes para cada etiqueta HTML que necesitemos
    const article = document.createElement('article')
    const h3 = document.createElement('h3')
    const h2 = document.createElement('h2')
    const Pdepartamento = document.createElement('p')
    const Psalario = document.createElement('p')

    // Agregamos el valor a las constantes que tienen las etiquetas
    h2.textContent = `${empleado.nombre} ${empleado.apellido}`
    h3.textContent = empleado.departamento
    Pdepartamento.textContent = empleado.departamento
    Psalario.textContent = empleado.salario

    article.append(h2, h3, Pdepartamento, Psalario)
    return article
}

function pintarEmpleados(lista, domElement) {
    for (let empleado of lista) {
        const article = pintarEmpleado(empleado)
        domElement.appendChild(article)
    }
}