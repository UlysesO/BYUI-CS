var printlist = require('./printlist');

printlist(process.argv[2], process.argv[3], function(err, data) {
    if(err) {
        console.log(err);
    } else {
        //console.log(data.length);
        data.forEach(function(row) {
            console.log(row);
        })
    }
})