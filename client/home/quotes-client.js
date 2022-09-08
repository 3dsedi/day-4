function fetchQuote(callback) {
  const uri = 'https://api.kanye.rest/';

  const xhr = new XMLHttpRequest();
  const async = true;

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const json = JSON.parse(xhr.responseText);
      callback(json);
    }
  };
  xhr.open('GET', uri, async);
  xhr.send();
}

module.exports.fetchQuote = fetchQuote;
