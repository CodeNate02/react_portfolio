const stringReducer = (df = '', id='') => (state = df, action:any) => {
    switch(action.type){
        case 'SET': return action.payload;
    }
    return state;
}
export default stringReducer;