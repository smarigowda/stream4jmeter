Number.prototype.zeroPad = Number.prototype.zeroPad ||
     function(base){
       var nr = this, len = (String(base).length - String(nr).length)+1;
       return len > 0? new Array(len).join('0')+nr : nr;
    };

function genTime(i) {
	var startTime = new Date();
        startTime.setSeconds(startTime.getSeconds() + i);
        return startTime;
}

function rnd_elapsed() {
	return Math.floor(Math.random() * 10000) + 1;
}

function rnd_latency() {
	return Math.floor(Math.random() * 10000) + 1;
}

function rnd_bytes() {
	return Math.floor(Math.random() * 10000000) + 1;
}

var myArray = ['Login', 'Logout', 'Click_Accept', 'Click_Login', 'Click_Submit'];

console.log('timeStamp,elapsed,label,responseCode,success,bytes,Latency,SampleCount,ErrorCount');

for( i = 0; i < 10000000; i++) {

	var  label = myArray[Math.floor(Math.random() * myArray.length)];
	var elapsed = rnd_elapsed();
	var latency = rnd_latency();
	var bytes = rnd_bytes();

	var mydate = genTime(i);

	var year = mydate.getUTCFullYear();
	var month = mydate.getUTCMonth().zeroPad(10);
	var daynum = mydate.getUTCDate().zeroPad(10);
	var hr = mydate.getUTCHours().zeroPad(10);
	var min = mydate.getUTCMinutes().zeroPad(10);
	var sec = mydate.getUTCSeconds().zeroPad(10);
	var ms = mydate.getUTCMilliseconds().zeroPad(100);


	var datestring = year + '/' + month + '/' + daynum + ' ' + hr + ':' + min + ':' + sec + '.' + ms;
	console.log( datestring + ',' + elapsed + ',' + label + ',200,true,' + bytes + ',' + latency + ',1,0');
}