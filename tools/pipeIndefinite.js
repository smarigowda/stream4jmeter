var Readable = require('stream').Readable;
var rs = Readable();

var readCount = 0;

rs._read = function () {
    if ( readCount++ >= 100) return rs.push(null);

    setTimeout(function () {
        rs.push('readCount= ' + readCount + ',');
    }, 100);
};

rs.pipe(process.stdout);

process.on('exit', function () {
    console.error('\n_read() called ' + readCount + ' times');
});

process.stdout.on('error', process.exit);
