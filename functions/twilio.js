const twilio = require('twilio');

const accountSid = 'AC05a3305348f6fb01b63306830b6fbb19';
const authToken = '770674eef05e35a89f09d9263f5c8efe';

module.exports = new twilio.Twilio(accountSid,authToken);
