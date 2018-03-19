const nodemailer = require('nodemailer');

class Mailer {
	constructor() {
		this.transporter 	= nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "",
				pass: ""
			}
		});
		this.mailOptions = {
			from: "",
			to: "",
			subject: 'Crontab change',
			text: `cron change`,
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
