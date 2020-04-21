# Boilerplate
My custom website boilerplate. A simple grid and minimal aesthetic which can easily be customized or changed.

## Dependencies
* [node](https://nodejs.org/en/)
* [sass](https://sass-lang.com/)
* gulp
  * `sudo npm install gulp-cli -g`


### How to use
overwrite files as needed

edit package.json to include relevant info

Browser Sync defaults to:
http://localhost:3000/

### Initializing
The following is implemented in boiler-script.sh for those who like working less
```
npm init -y
npm install --save-dev gulp gulp-sass browser-sync gulp-autoprefixer gulp-sourcemaps
```
When you're ready to start working:
```
gulp watch
```
