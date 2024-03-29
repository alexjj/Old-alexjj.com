#!/bin/bash

# minify all .js-files
ls -1 *.js | grep -Ev "min.js$" | while read jsfile; do
	newfile="${jsfile%.*}.min.js"
	echo "$jsfile --> $newfile"
	curl -X POST -s --data-urlencode "input@$jsfile" https://www.toptal.com/developers/javascript-minifier/raw > $newfile
done

# merge all into one single file
rm -f scripts.min.js
cat *.min.js > scripts.min.js
