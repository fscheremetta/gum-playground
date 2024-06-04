// we need this to run in a locaholst context intestead of file
// so that we can run enumerated device (it muste be run in a secury context)

const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname)));
app.listen(3000);
