import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'It is my first project!', likeCount: 25}
    ],
    profile: null,
    status: ''
};

it('length post should be incremented', () => {
    let action = addPost(`Hello it's me`);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
    let action = addPost(`Hello it's me`);

    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe(`Hello it's me`);
});

it('after delete post should be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});

