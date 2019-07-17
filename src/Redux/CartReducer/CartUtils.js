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