// Acting as a cache to avoid re-render the component every time if a value changes

import { createSelector } from 'reselect'

const selectCart = state => state.cart
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accQty, item) => accQty + item.quantity, 0)
)

export const selectCartToggle = createSelector(
    [selectCart],
    cart => cart.hidden
)