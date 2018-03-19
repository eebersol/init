const nodemailer = require('nodemailer');

class Mailer {
	constructor() {
		this.transporter 	= nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "edouard.ebersoldt@gmail.com",
				pass: "@Flamme1994"
			}
		});
		this.mailOptions = {
			from: "edouard.ebersoldt@gmail.com",
			to: "jennifolive@gmail.com",
			subject: 'COUCOU',
			text: `JE TAIME`,
			html: `FOUFOU`,
		}
		this.transporter.sendMail(this.mailOptions, function(error, info){
			console.log("HELLO");
			if (error) 
				return console.log(error);
			return console.log(`Message sent : `)
		}.bind(this));
	}
}

new Mailer();
