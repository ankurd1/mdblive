#!/bin/bash
cp ./node_modules/bootstrap/dist/css/bootstrap.min.css ./build/
cp node_modules/react-bootstrap-table/css/react-bootstrap-table-all.min.css build/
./node_modules/webpack/bin/webpack.js -p --config webpack.prod.config.js
