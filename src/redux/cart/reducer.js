import CartActionTypes from "./action-types"
const initialState = {
    products: [],
    productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            //verifica se o produto ja esta no carrinho
            const productIsAlreadyInCart = state.products.some((product) => product.id === action.payload.id)
            // se ele estiver, aumenta a quantidade em 1
            if (productIsAlreadyInCart) {
                return {
                    ...state, 
                    products: state.products.map((product) => 
                        product.id === action.payload.id ? { ...product, quantity: product.quantity + 1} : product
                    )
                }
            }

            // se ele não estiver, adiciona-lo
            return {
                ...state,
                products: [...state.products, { ...action.payload, quantity: 1}]
            }

        case CartActionTypes.REMOVE_PRODUCT: 
            return {
                ...state, products: [...state.products.filter(product => product.id !== action.payload)]
            }

        case CartActionTypes.INCREASE_QUANTITY: 
            return {
                ...state, 
                products: state.products.map((product) => 
                    product.id === action.payload ? { ...product, quantity: product.quantity + 1} : product
                )         
            }

        case CartActionTypes.DECREASE_QUANTITY:
            return {
                ...state, 
                products: state.products.map((product) => 
                    product.id === action.payload ? { ...product, quantity: product.quantity - 1 } : product
                ).filter(product => product.quantity > 0)         
            }

            // Se a quantidade do meu produto for igual a 0 eu quero retornar o state sem esse produto

            // Se a quantidade for >= 1 eu quero apenas diminuir a quantidade

        default: 
            return state
    }
}

export default cartReducer

            // return {...initialState, products: [...state.products, action.payload]}
            //Isso seria equivalente a products.push(action.payload), só que dessa forma não funcionaria então é só usar o spread operator para dispor todos os dados do array anterior no array atual e colocar a payload logo em seguida