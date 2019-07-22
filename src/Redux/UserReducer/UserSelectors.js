import { createSelector } from 'reselect'

const userState = state => state.user

export const selectUser = createSelector(
    [userState],
    (user) => user.userData
)