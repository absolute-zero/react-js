let initialState = {
    friendName: [
        {id: 1, name: 'Aleksandr'},
        {id: 2, name: 'Dashka'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Timoha'},
        {id: 5, name: 'Kirill'},
        {id: 6, name: 'Tihon'}
    ]
};

const sideBarReducer = (state= initialState, action) => {
    return state;
};

export default sideBarReducer;