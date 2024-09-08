let reduxState = {
    count: 0,
    name: "Ahsan",
    age: "23"
};
function reducer(state, action) {
    if (action.type === "post/increment") return {
        ...state,
        count: state.count + 1
    };
    else if (action.type === "post/decrement") return {
        ...state,
        count: state.count - 1
    };
    else if (action.type === "post/incrementBy") return {
        ...state,
        count: state.count + action.payload
    };
    return state;
}
reduxState = reducer(reduxState, {
    type: "post/increment"
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: "post/increment"
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: "post/decrement"
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: "post/incrementBy",
    payload: 10
});
console.log(reduxState);

//# sourceMappingURL=index.672d4772.js.map
