var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('scripts/db.json')

server.use(jsonServer.defaults())
server.use(router)


console.log('Listening at 4000')
server.listen(4000)
