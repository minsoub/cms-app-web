const fs = require('fs');
const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const getData = (req, res, next) => {
    const routePath = req.route.path;
    const requirePath = `../data/${routePath.split('/:')[0]}`.replace(/\/\//,'/');
    const genData = require(requirePath);
    console.log({genData});
    const jsonData = genData(req, res, next);

    return res.send(jsonData);
}

server.use(middlewares);

server.listen(5555, () => {
    console.log('JSON Server is running >>>>>>>>>> \n');
});

server.get('/v1/api/cms/notice/category', (req, res, next) => getData(req, res, next));
server.get('/v1/api/cms/notice/detail', (req, res, next) => getData(req, res, next));
server.get('/v1/api/cms/notice/list', (req, res, next) => getData(req, res, next));