# express-registered-routes
Print Your Express Application Routes ✨
```ts
import registeredRoutes from 'express-registered-routes'
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
registeredRoutes(app)
```
<img width="319" alt="image" src="https://user-images.githubusercontent.com/73670999/170743774-8c1e64ea-564f-42ce-b8ee-f95b9d6b7d40.png">
