const express = require('express');
const next = require('next');
const mongoose = require('mongoose');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const credentials = require('./credentials.js'); 
const serverUrl = ('mongodb://' + credentials.username + ':' + credentials.password + '@ds117545.mlab.com:17545/thinking-thoughts');
const conn = mongoose.createConnection(serverUrl);

const Post = new Schema({ 
    id: ObjectId,
    message: { type: String, match: /[a-z]/ },
    date: { type: Date, default: Date.now }
});

const PostModel = conn.model('Posts', Post); 

app.prepare()
.then(() => {
    const server = express();

    server.get('/posts', (req, res) => {
        PostModel.find({}).exec(function(err, posts){
            if (err) {
                res.render('error', {status: 500});
            } else {
                res.json(posts);
            }
        })
    });

    server.get('*', (req, res) => {
	return handle(req, res);
    });

    server.listen(3000, (err) => {
	if (err) throw err;
	console.log('> Ready on http://localhost:3000');
    });    
})

.catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
});
