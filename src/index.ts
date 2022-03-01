import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 5000;
const directory = path.resolve();

app.use(express.static('public'));
app.use('/build/', express.static(path.join(directory, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(directory, 'node_modules/three/examples/jsm')));
app.use('/client', express.static(path.join(directory, 'dist/client')));

app.get('/uepa', function(req: Request, res: Response) {
    res.send('haha!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});