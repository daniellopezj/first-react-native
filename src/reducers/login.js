export default function login(state = [], action) {
    switch (action.type) {
        case 'LOGIN':
            console.warn(action.payload)
            return action.payload
        case 'CHECK':
            return action.payload
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}