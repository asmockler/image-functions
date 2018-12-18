import fs from 'fs';
import path from 'path';

exports.handler = async function() {
  const imagePath = path.resolve('./images', 'puppy.jpg');

  console.log(imagePath);

  const buffer = fs.readFileSync(imagePath);

  return {
    statusCode: 200,
    body: buffer.toString('base64'),
    headers: {
      'Content-Type': 'image/jpg',
    },
    isBase64Encoded: true,
  };
};
