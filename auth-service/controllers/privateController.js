const jwt = require('jsonwebtoken')
const axios = require('axios')
const userModel = require('./../models/userModel')
module.exports = {
  getInfoService: async (req, res, next) => {
    try {
      const authHeader = req.headers['authorization']
      const bearerToken = authHeader.split(' ')
      const token = bearerToken[1]

      jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        async (err, payload) => {
          if (err) throw err
          const user = await userModel.findById(payload.aud)
          const name = user.services[0].name
          const role = user.services[0].role
          const response = await axios.post('http://localhost:3001/', {
            name,
            role
          })
          const data = response.data
          res.send({ data })
        }
      )
    } catch (error) {
      next(error)
    }
  }
}
