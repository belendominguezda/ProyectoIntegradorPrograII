const config = require("../config/config")

module.exports = function(sequelize,DataTypes){
    let alias = "Producto"; //es el nombre del modelo en el controlador
    
    let cols = {
        id: {
            primaryKey: true, 
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        usuario_id: {
            type: DataTypes.INTEGER
        }, 
        nombreProducto: {
            type: DataTypes.STRING
        },
        descripcionProducto: {
            type: DataTypes.STRING
        },
        fechaCarga: {
            type: DataTypes.INTEGER
        },
        comentarios: {
            type: DataTypes.INTEGER
        },
        createdAt:{
            type: DataTypes.DATE
        },
        updatedAt:{
            type: DataTypes.DATE
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    }

    let config = {
        tableName: "tablaUsuarios",
    }

    let Producto = sequelize.define(alias,cols,config);
    //Asociacion tabla de productos con usuario (muchos productos tienen un usuario)
    Producto.associate = function(models){
        Producto.belongsTo(models.Usuario,{
            as: "usuario",
            foreignKey : "usuario_id"
        })
    }

    //Asociacion tabla de productos con la de comentarios (un producto tiene muchos comentarios)
    Producto.associate = function(models){
        Producto.hasMany(models.Comentario, {
            as: "comentario",
            foreignKey: "productos_id"
        })

    }
    return Producto
}