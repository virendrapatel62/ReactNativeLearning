// sendNotificationCLI.js
const admin = require('firebase-admin');
const readline = require('readline');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const targetToken = `eEAbbGOSRLy-l84ycv3RjW:APA91bFrOXAZuGdvSjvmt1wRwhoVIFW81RMiJu4uxGee3DOK9Y_Wx0sAiGSnHIKdbxhCKjS2Nh1SBWYwBdls9SS57k1AnMeO_USMl-4h-PetPqmjtrpEmYk`;

async function sendNotification(type = 'todo', id = 1) {
  let message;

  if (type === 'product') {
    message = {
      token: targetToken,
      notification: {
        title: 'New Product Alert!',
        body: 'Check out the latest T90 shoes!',
      },
      data: {
        screenType: 'ProductDetails',
        id: String(id),
      },
    };
  } else if (type === 'todo') {
    message = {
      token: targetToken,
      notification: {
        title: 'Todo overdew!',
        body: 'Your todo #1 has overdew!',
      },
      data: {
        screenType: 'TodoDetails',
        id: String(id),
      },
    };
  }

  try {
    const response = await admin.messaging().send(message);
    console.log('✅ Successfully sent message:', response);
  } catch (error) {
    console.error('❌ Error sending message:', error);
  }
}

// sendNotification('todo', 10);
sendNotification('product', 10);
