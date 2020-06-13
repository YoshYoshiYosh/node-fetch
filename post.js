const fetch = require('node-fetch');

(async () => {
  const body = {
    data: {
      age: 25,
      height: 176,
      weight: 65,
      hobby: 'movie'
    }
  };

	const response = await fetch('http://127.0.0.1:8000',{
    method: 'POST',
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'},
  })
	const text = await response.text();

	console.log(text);
})();