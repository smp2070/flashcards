export const getLocalStorage = () => JSON.parse(localStorage.getItem('state')) || undefined;
export const setLocalStorage = (state, props) => {
    // let toSave = {};
    // props.forEach(prop => toSave[prop] = state[prop]);
    // localStorage.setItem('state', JSON.stringify(toSave));
    localStorage.setItem('state', JSON.stringify(state));
};