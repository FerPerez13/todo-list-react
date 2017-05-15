#! /bin/bash

npm run build

cd build

zip -r form.zip bundle.js images index.html main.css properties.json

mv form.zip "$@"
