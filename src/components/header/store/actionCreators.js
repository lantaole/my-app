import * as constants from './constants'

export const getData = (data) => ({
    type: constants.SET_DATA,
    data
})