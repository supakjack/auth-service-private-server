const query = require('array-query')
const service = require('./../models/service')

module.exports = {
  getInfo: async (req, res, next) => {
    try {
      const name = req.body.name
      const role = req.body.role
      const data = query('name').is(name).and('role').is(role).on(service)
      res.send(data)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
}
