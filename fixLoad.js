"use strict";

const FileHound = require('filehound');
const fs = require('fs');

const files = FileHound.create()
    .paths(__dirname + '/static/dist/')
    .discard('node_modules')
    .ext('.js')
    .find();

files.then((filePaths) => {
    filePaths.forEach((filepath) => {
        fs.readFile(filepath, 'utf8', (err, data) => {
            if (!data.match(/import .* from/g)) return
            let newData = data.replace(/(import .* from\s+['"])(.*)(?=['"])/g, '$1$2.js')
            if (err) throw err;
            fs.writeFile(filepath, newData,  (err) => {
                if (err) throw err;
            })
        })

    })
})
