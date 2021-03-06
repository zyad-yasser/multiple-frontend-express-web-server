const express = require('express')
const path = require('path')
const app = express()
const port = 5500

/**
 * Use multiple public folders for multiple apps
 */
app.use('/test-react-app', express.static(path.join(__dirname, 'test-react-app')))
app.use('/test-angular-app', express.static(path.join(__dirname, 'test-angular-app')))

/**
 * Rewrite traffic of nested routes for frontend's router
 */
app.get('/test-angular-app/*', (req, res) =>  res.sendFile(path.resolve('test-angular-app/index.html')));
app.get('/test-react-app/*', (req, res) =>  res.sendFile(path.resolve('test-react-app/index.html')));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})