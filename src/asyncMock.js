const products =[
    {
        id:'1',
        name:'Arreglo de modulo',
        price:5000,
        category:'reparacion',
        img: require('./ImagenAsynMock/cambioModulo.jpg'),
        stock:100,
        description:'Arreglo de cualquier modulo (MO)'
    },
    {        id:'2',
    name:'Cambio de pin de carga',
    price:7000,
    category:'reparacion',
    img: require('./ImagenAsynMock/cambioPin.jpg'),
    stock:100,
    description:'Arreglo de cualquier pin de carga (MO)'},
    {        id:'3',
    name:'Cambio vidrio trasero',
    price:2000,
    category:'reparacion',
    img: require('./ImagenAsynMock/cambioTrasero.jpg'),
    stock:100,
    description:'Arreglo de cualquier vidrio (MO)'},
    {
        id:'4',
        name:'Celular caja sellada samsung',
        price:15000,
        category:'celular',
        img: require('./ImagenAsynMock/Samsunga50.jpg'),
        stock:6,
        description:'Arreglo de cualquier modulo (MO)'
    },
    {        id:'5',
    name:'Vidrio templado',
    price:2000,
    category:'accesorios',
    img: require('./ImagenAsynMock/vidrioTemplado.jpg'),
    stock:50,
    description:'Arreglo de cualquier pin de carga (MO)'},
    {        id:'6',
    name:'Protector HydroGel',
    price:3000,
    category:'accesorios',
    img: require('./ImagenAsynMock/hydrogel.jpg'),
    stock:80,
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

export const getProductsByCategory = async (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter((prod) => prod.category === category);
        resolve(filteredProducts);
      }, 500);
    });
  };