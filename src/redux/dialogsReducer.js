const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Aleksandr'},
        {id: 2, name: 'Dashka'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Timoha'},
        {id: 5, name: 'Kirill'},
        {id: 6, name: 'Tihon'}
    ],
    messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'What?'},
        {id: 4, message: 'What is this?'},
        {id: 5, message: 'Good night'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {
                    id: state.messagesData.length,
                    message: action.newMessage
                }],
            };
        default:
            return state;
    }
};

export const addMessage= (newMessage) => ({type: ADD_MESSAGE, newMessage});

export default dialogsReducer;