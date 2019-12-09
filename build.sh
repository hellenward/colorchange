#!/bin/env bash

npm run build
mkdir docs 
cp -r build/* docs