import fs from 'fs';

export default function getAllGroups() {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/groups.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      const parsed = JSON.parse(data);
      resolve(parsed);
    });
  });
}
