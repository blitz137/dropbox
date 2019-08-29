const Dropbox = require("dropbox");
const dbx = new Dropbox({
	accessToken: 'XrnXFzbAqt8AAAAAAAAAPJ0I0oGXaqT--Wvy2usfpVR4yGZO_2DJfRsBOa3QMJUx ',
	fetch
})

dbx.filesListFolder({
	path:''
}).then(res => console.log(res))