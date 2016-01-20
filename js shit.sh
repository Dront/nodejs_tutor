#! /bin/bash

curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install -y nodejs


git clone https://github.com/jpetroff/bootstrap_metal.git
cd bootstrap_metal


sudo npm install -g bower-installer coffee-script


npm i


rm src/vendor/scss/bootstrap/bootstrap-*


# var tmpl = join(dir, code + ".jade") 74 cтрока node_modules/metalsmith-shortcodes/lib/index.js
