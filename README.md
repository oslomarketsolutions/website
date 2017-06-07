Development environment requirements

* git
* Node and NPM
* Mongodb

# Build and run

```
git clone  <root git clone git@git.osl.manamind.com:oms/www.git
cd www/client
nvm use
npm install 
sudo mongod
node keystone.js 
```

NB! If you get problem with clodinary first time setting up WWW. 
scp www@demo16.manamind.com:webapps/client/.env .  

* Deployment
**