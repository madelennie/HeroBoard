const initState = {
    projects: [
        {id:'1', title: 'Find the man', content: 'yada yada'},
        {id:'2', title: 'Reach out for maffia', content: 'blah blah'},
        {id:'3', title: 'Demolish cars', content: 'ehh'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    } 
}
 
export default projectReducer;