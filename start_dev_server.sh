#!/bin/bash

# start dev server
cd api
cp .env.example .env
npm i
npm start
cd ..
cd ui
npm i
cp .env.example .env
npm start