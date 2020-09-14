import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: '12'},
                {id: 2, message: 'It is my first project!', likeCount: '25'}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            ],
            newMessageText: ''
        },
        sideBar: {
            friendName: [
                {id: 1, name: 'Aleksandr'},
                {id: 2, name: 'Dashka'},
                {id: 3, name: 'Alex'},
                {id: 4, name: 'Timoha'},
                {id: 5, name: 'Kirill'},
                {id: 6, name: 'Tihon'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { // {TYPE: 'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
};

window.store = store;
export default store;