import express from 'express';
import http from 'http';

const app = express();
const serverHttp = http.createServer(app);

export { serverHttp, app}