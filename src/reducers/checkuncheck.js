const initialState = false;

const checkUncheck = (state = initialState,action) =>{
    switch(action.type){
        case "CHECK" : return state = true;
        case "UNCHECK" : return state = false;
        default: return state;
    }
}

export default checkUncheck;