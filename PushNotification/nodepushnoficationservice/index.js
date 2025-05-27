// sendNotificationCLI.js
const admin = require('firebase-admin');
const readline = require('readline');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const targetToken = `cgsbQEfgT6eagRVimVYqUV:APA91bHRnWykZBISKb-QZ_5eheyN1BBLcPH5Tdzv8Pped-dtW2ODccDRnO7G7h6ih1UK2iGEDvLnNhDNrVXzd68jeQwR_xPFsUvFX9ghagj1SBF3sw9s3QA`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function sendNotification() {
  while (true) {
    const title = await askQuestion(
      'Enter notification title (or type "exit" to quit): ',
    );
    if (title.toLowerCase() === 'exit') break;

    const body = await askQuestion('Enter notification body: ');

    const message = {
      token: targetToken,
      notification: {
        title,
        body,
      },
      data: {
        // You can add any custom key-value data here
        customData: 'someData',
      },
    };

    try {
      const response = await admin.messaging().send(message);
      console.log('✅ Successfully sent message:', response);
    } catch (error) {
      console.error('❌ Error sending message:', error);
    }
  }

  rl.close();
  console.log('Exiting...');
}

sendNotification();
