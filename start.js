const { exec } = require("child_process");

// webpack serve --mode development --open & nodemon server/server.js

exec("nodemon server/server.js");
exec("webpack serve --mode development --open");
