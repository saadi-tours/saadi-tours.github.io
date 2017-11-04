var fs = require('fs');

var filename = './images-template.html';
var data = '<!-- Begin gallery -->\n';

fs.readdirSync('img/gallery').forEach(file => {
	if (file !== '.DS_Store') {
		data += '<div class="col-lg-4 col-md-6 col-xs-6 thumb">\n'
			+ '	<div class="thumbnail">\n'
			+ '		<img class="img-responsive" src="img/gallery/'
			+ file
			+ '" alt="">\n'
			+ '	</div>\n'
			+ '</div>\n';
	}
});

data += '<!-- End gallery -->'

createFile(filename);

function createFile(filename) {
	fs.open(filename,'r',function(err, fd){
		if (err) {
			fs.writeFile(filename, data, function(err) {
				if(err) {
					console.log(err);
				}
				console.log("The file was saved!");
			});
		} else {
			fs.writeFile(filename, data, function(err) {});
		}
	});
}