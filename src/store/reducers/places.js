import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
    placeList: [],
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ADD_PLACE:
        return { 
            ...state, 
            placeList: [...state.placeList, {name: payload, id: Date.now().toString(), image: { uri: 'https://images.livemint.com/img/2021/04/07/600x338/20210406088L_1617795467207_1617795487848.jpg' }}]
        }

    case DELETE_PLACE: 
        return {
            ...state,
            placeList: state.placeList.filter((p) => p.id !== payload),
        }

    default:
        return state
    }
}
