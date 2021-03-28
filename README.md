# React Assignment

This project contains both API server and UI application. You can find API project in `api` directory and Front-end project in `ui` directory.


## Start dev server
Please run the below command to run both API and UI server.
```
cd api
cp .env.example .env
npm i
npm start
cd ..
cd ui
npm i
cp .env.example .env
npm start
```

Or, you can open enter below command in two different terminals.


```
sh start_dev_server.sh
sh start_ui_server.sh
```
You can also change the `.env` variables as per your need. **Please make sure to use your unused ports to run these servers.**

