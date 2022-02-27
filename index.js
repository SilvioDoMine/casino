import express from 'express'
import path from 'path'

const app = express()
const port = 5000
const directory = path.resolve();;

console.log(path.join(directory, 'node_modules/three/examples/jsm'));

app.use(express.static('public'));
app.use('/build/', express.static(path.join(directory, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(directory, 'node_modules/three/examples/jsm')));
app.use('/client', express.static(path.join(directory, 'src/client')));

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`)
})