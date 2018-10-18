var api = require('../api');

module.exports  = function(app) {
        
    app.route('/cielo')
        .get(api.dados);          
};