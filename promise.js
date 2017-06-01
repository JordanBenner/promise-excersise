var p1 = axios.get(api_url);
var p2 = axios.get(api_url);
var p3 = axios.get(api_url);
var p4 = axios.get(api_url);
var p5 = axios.get(api_url);
Promise.all([p1, p2, p3, p4, p5])
  .then(function (responses) {
    console.log(responses[0].data);
    console.log(responses[1].data);
    console.log(responses[2].data);
    console.log(responses[3].data);
    console.log(responses[4].data);
  });
