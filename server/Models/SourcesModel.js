const Sequelize = require('sequelize');
const dbConfig = require('../Database');
const Category = require('./CategoriesModel');
const Country = require('./CoutriesModel');
const Language = require('./LanguagesModel');
const News = require('./NewsModel');

module.exports =  Source = dbConfig.define('source', {
        source_id: {
            type: Sequelize.STRING,
            unique: true
        },
        name: {
            type: Sequelize.STRING,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        description: {
            type: Sequelize.STRING,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        url: {
            type: Sequelize.STRING,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        category: {
            type: Sequelize.STRING,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        language: {
            type: Sequelize.STRING,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        country: {
            type: Sequelize.STRING,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    }    
)
    Source.hasMany(Category);
    Source.hasMany(Country);
    Source.hasMany(Language);
    Source.hasMany(News);

Source.sync({force: true}).then(()=>{
    console.log('Sources up to date');
})