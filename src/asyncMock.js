const products =[
    {
        id:'1',
        name:'Arreglo de modulo',
        price:5000,
        category:'reparacion',
        img:'',
        stock:100,
        description:'Arreglo de cualquier modulo (MO)'
    },
    {        id:'2',
    name:'Cambio de pin de carga',
    price:7000,
    category:'reparacion',
    img:'',
    stock:100,
    description:'Arreglo de cualquier pin de carga (MO)'},
    {        id:'3',
    name:'Cambio vidrio trasero',
    price:2000,
    category:'reparacion',
    img:'',
    stock:100,
    description:'Arreglo de cualquier vidrio (MO)'}
]
export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
}
export const getProductById = (productId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}