
let id = 0
const cleanTypes = (arr) => {
    const typeArr = arr.map(type => {
        id=id + 1;
        return {
            ID: id,
            Nombre: type.name
        }
    })
    return typeArr;
};

module.exports = {
    cleanTypes
}