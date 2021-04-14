// const { codegen } = require('swagger-axios-codegen')
const { codegen } = require('../../dist/index.js')

codegen({
  methodNameMode: 'operationId',
  source: require('../../swagger.test.json'),
  // remoteUrl: 'http://localhost:44307/swagger/v1/swagger.json',
  outputDir: 'services',
  fileName: 'indexv3.ts',
  strictNullChecks: false,
  modelMode: 'interface'
})
