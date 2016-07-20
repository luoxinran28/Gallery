'use strict';

var nodemailer = require('nodemailer');

exports.sendMail = function sendMail(req, res) {
	var info = req.body;

	// create reusable transporter object using the default SMTP transport
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'lumindontech@gmail.com',
			pass: 'lumindon@108'
		}
	});

	// setup e-mail data with unicode symbols
	var mailOptions = {
		from: info.fullname + '<' + info.email + '>',
		to: 'lumindontech@gmail.com',
		subject: '[Lumindon] An User Message',
		text: 'Got a message from: <' + info.fullname + '> Message:' + info.message,
		html: '<p>Got a message from: <<strong>' + info.fullname + '</strong>></p> <br><br><p>Message:' + info.message + '<p>'
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			res.status(500).send("Internal server error.");
			console.log(error);
		} else {
			console.log(200);
			res.status(200).send("success");
		}

	});
};