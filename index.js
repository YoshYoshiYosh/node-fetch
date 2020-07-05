const fetch = require('node-fetch');

function getJson() {
  return new Promise(resolve => {
    setTimeout(async () => {
      const res = await fetch('https://holidays-jp.github.io/api/v1/date.json').then(res => res.json())
      resolve(res['2021-11-23'])
    }, 3000)
  })
}

const greet = async () => {
  console.log('おやすみ');
  const result = await getJson()
  console.log(result)
  console.log('おはようの直前');
  console.log('おはよう');
};

greet();