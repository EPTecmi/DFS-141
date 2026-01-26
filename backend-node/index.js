const http = require("http")

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })

  if (req.url === '/login' && req.method === 'GET') {
    return res.end(JSON.stringify({ message: "Página de login" }))
  }
  if (req.url === '/login' && req.method === 'POST') {
    let body = {}
    req.on('data', chunk => {
      body = JSON.parse(chunk.toString())
      console.log(body)
    })
    return res.end(JSON.stringify({ 
      message: "Procesando login",
      status: "success",
      id: body.id
    }))
  }

  res.end("Hola mi gente")
  // console.log("algo")
})

server.listen(3000, () => {
  console.log('servidor activo en http://localhost:3000')
})


