const nodemailer = require('nodemailer');

class Mailer {
	constructor() {
		this.transporter 	= nodemailer.createTransport({
		  service: "gmail",
		  auth: {
		    user: "edouard.ebersoldt@gmail.com",
		    pass: "edcxswqaz1994"
		  }
		});
		this.mailOptions = {
			from: "edouard.ebersoldt@hotmail.fr",
			to: "sai_yes@hotmail.fr",
			subject: 'COUCOU',
			text: `TOUTOU`,
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