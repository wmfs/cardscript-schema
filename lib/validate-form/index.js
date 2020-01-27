const schema = require('../schema.json')
const validator = require('jsonschema').validate
const formatters = require('./formatters')

module.exports = function validateForm (formDefinition, options = {}) {
  const result = validator(formDefinition, schema)

  const formatter = options.format ? formatters[options.format] : formatters.simple

  if (!formatter) throw new Error(`Unknown format '${options.format}'`)

  return formatter(result)
}
