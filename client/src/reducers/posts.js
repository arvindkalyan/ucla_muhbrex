export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return posts
        case 'CREATE':
            return posts
        default:
            return posts;
    }
}

// const postsReducer = () => {
//     return [
//         {title: "Frat Rat", content: "sae sucks"},
//         {title: "new post", content: "new postie"},
//         {title: "blank space baby", content: "and ill write ur name"}
//     ]
// }

// export default postsReducer