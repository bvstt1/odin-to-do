
function saveToStorage(name, object){
    localStorage.setItem(name, JSON.stringify(object));
    return console.log(localStorage.getItem(name));
}

export {saveToStorage}