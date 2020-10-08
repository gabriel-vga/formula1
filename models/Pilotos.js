const db = require('./db')

const Piloto = db.sequelize.define('pilotos', {
    nome: {
        type: db.Sequelize.STRING
    },
    equipe: {
        type: db.Sequelize.STRING
    },
    datanasc: {
        type: db.Sequelize.DATE
    },
    sexo: {
        type: db.Sequelize.STRING
    },
    ncarro: {
        type: db.Sequelize.INTEGER
    }
})

module.exports = Piloto