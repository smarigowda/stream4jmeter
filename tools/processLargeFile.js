var fs = require('fs');
var util = require('util');
var stream = require('stream');
var es = require("event-stream");

var ws = fs.createWriteStream('./out4.txt');
var lineNr = 1;
var max = 0;
var min = 9999;
var lineCount = 0;

s = fs.createReadStream('./samplecsv.csv')
    .pipe(es.split())
    .pipe(es.mapSync(function(line){

        // pause the readstream
        s.pause();
        lineNr += 1;

        (function(){
            // process line here and call s.resume() when rdy
            // logMemoryUsage(lineNr);
            //console.log(line.split(',')[1]);
            var elapsed = line.split(',')[1];
            var intElapsed = parseInt(elapsed);
            lineCount++;
            if ( intElapsed > max ) { max = intElapsed; console.log('MAX = ' + max); }
            if ( intElapsed < min ) { min = intElapsed; console.log('--MIN = ' + min); }
            // ws.write(line);
            // resume the readstream
            s.resume();
        })();
    }).on('error', function(){
        console.log('Error while reading file.');

    }).on('end', function(){
        console.log('Read entirefile.')
        console.log('Total lines = ' + lineCount);
    })
);
