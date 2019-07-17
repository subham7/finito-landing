const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const compression = require("compression")

var app = express()
var port = process.env.PORT || 8088

app.use(compression())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(express.static(path.join(__dirname, "public")))

app.get("/", function(req, resp) {
  resp.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get("/contact", function(req, resp) {
  resp.sendFile(path.join(__dirname, "public", "contact.html"))
})

// app.get("/:page", function(req, resp) {
//   resp.sendFile(path.join(__dirname, "public", `${req.params.page}.html`))
// })

app.listen(port, function() {
  console.log(`Server started at ${port}`)
})
