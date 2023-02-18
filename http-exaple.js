const { get } = require("https");

get("https://google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(chunk.toString());
  });
  res.on('end',()=>{
    console.log("No more data..")
  })
});
