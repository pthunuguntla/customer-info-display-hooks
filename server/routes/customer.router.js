module.exports = function (app) {
    const customer = require('../customer')
    app.get('/api/customers', customer.tableData);
}