module.exports = (sequelize, Sequelize) => {

    const Producto = sequelize.define("producto", {
        nombre: {
            type: Sequelize.STRING
        },
        stock: {
            type: Sequelize.INTEGER
        },
        precio: {
            type: Sequelize.FLOAT
        }
        
    });
    return Producto;
};