const Sequelize = require('sequelize');
const dbConfig = require('../Database');

const Source = dbConfig.define('source', {
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

Source.sync().then(()=>{
    console.log('Sources up to date');
})