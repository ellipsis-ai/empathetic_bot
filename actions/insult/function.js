function(someone, ellipsis) {
  const fetch = require("fetch");
const url = "http://quandyfactory.com/insult/json";

fetchInsult().then(ellipsis.success);

function fetchInsult() {
  return new Promise((resolve, reject) => {
    fetch.fetchUrl(url, {}, (error, meta, body) => {
      if (error) {
        reject(error);
      } else if (meta.status == 200) {
        resolve(JSON.parse(body.toString()).insult); 
      } else {
        reject("Error: " + body.toString()); 
      }
    });
  });
}
}
