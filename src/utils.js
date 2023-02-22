const uniqueID = () => {
    let id = "";
    for (let i = 0; i < 9; i++) {
        id += Math.floor(Math.random() * 9);
    }
    return id;
};

export { uniqueID };
