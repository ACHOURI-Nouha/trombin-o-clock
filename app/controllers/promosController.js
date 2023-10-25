const promos = require('../../data/promos.json');

const promosController = {

    showPromosList: (req, res) => {
        res.render('promos', {promos});
    }
}

module.exports = promosController;