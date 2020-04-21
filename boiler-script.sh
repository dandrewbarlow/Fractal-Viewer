#! /bin/bash
mkdir temp
cd temp
echo "cloning boilerplate"
echo ""
git clone "https://github.com/dandrewbarlow/Boilerplate.git"
echo ""
echo "moving files"
echo ""
mv Boilerplate/* ./../
cd ..
sudo rm -r temp
rm -r .git
echo ""
echo "initializing nodes"
echo ""
npm init -y
npm install --save-dev gulp gulp-sass browser-sync gulp-autoprefixer gulp-sourcemap aos
cp node-modules/aos/src/sass/* scss/
