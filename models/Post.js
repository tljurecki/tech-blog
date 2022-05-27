const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

//define Post model
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        titles: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        post_content: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        user_id: {
            types: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true, 
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;