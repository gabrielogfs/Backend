// middleware que verifica se o usuário está autenticado
function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

module.exports = { checkAuthenticated }