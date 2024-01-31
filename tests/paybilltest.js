// Import your npm package
const Rotsi = require('rotsiapi'); 

// Set your API credentials
const username = 'bluezee';
const secretKey = '30b241e1e9459417bee84681d159d181';

// Set additional options if needed
const credentials = {
    secretKey: secretKey,
    username: username,
};

// Create an instance of Rotsi
const rotsiInstance = Rotsi(credentials);

const paybillParams = {
    amount: 10,
    phone: '254745474586',// Replace with a valid phone number
    AccountReference: 'Test',
    recipient: '600000',// Replace with a valid shortcode
};
console.log('Request Body:', JSON.stringify(paybillParams));
console.log("Credentials :",credentials);

rotsiInstance.PAYBILL.initiatePaybill(paybillParams)
    .then(response => {
        console.log('Paybill initiated successfully:', response);
    })
    .catch(error => {
        console.error('Error initiating Paybill : ', error.response ? error.response.data : error.message);
        // console.error("Error 2: ",error.response.data);

    });