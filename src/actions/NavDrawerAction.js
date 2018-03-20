import { GRID_DATA, LIST_DATA } from '../utils/constants'
export default function changeToGrid(value) {

    return (dispatch) => {
        dispatch(changeStyle(value))

    }
}

function changeStyle(value) {
    return {
        type: value = 0
            ? LIST_DATA
            : GRID_DATA,
        value

    }
}  