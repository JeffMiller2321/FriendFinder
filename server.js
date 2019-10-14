var express = require("express");

var path = require("path");

require("./routing/apiRoutes")(app);

require("./routing/htmlRoutes")(app);

