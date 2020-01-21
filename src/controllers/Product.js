const mongoose = require('mongoose')

const Product = require('../models/Product')

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query
    // const products = await Product.find()
    const products = await Product.paginate({}, { page, limit: 10 })
    // primeiro objeto vai os filtros

    return res.json(products)
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id)

    return res.json(product)
  },

  async store(req, res) {
    const { title, description, url  } = req.body
    const product = await Product.create({
      title,
      description,
      url
    })

    return res.json(product)
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }) // com o new retorna o dados atualizado para o product
    return res.json(product)
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id)
    return res.send()
  }
}