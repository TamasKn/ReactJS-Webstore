import CartItem from "../../Components/CartItem/CartItem";

export const addItemToCart = (prevItems, newItem) => {
    const existingItem = prevItems.find(item => item.id == newItem.id)

    if(existingItem) {
        return prevItems.map(item => item.id == newItem.id
            ? {...item, quantity: item.quantity + 1}
            : item
        )
    }

    return [...prevItems, { ...newItem, quantity:1 }]
}

export const removeCartItem = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === itemToRemove.id)

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== itemToRemove.id)
    }

    return cartItems.map(item => item.id === itemToRemove.id 
        ? {...item, quantity: item.quantity - 1}
        : item
    )
}