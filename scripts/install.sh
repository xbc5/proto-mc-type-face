#!/bin/bash
set -e

if [[ -e "./prototype" ]]; then
   echo "ERROR: ./prototype exists, make sure that it doesn't."
   exit 1
fi

mkdir prototype
cd prototype

echo installing degit globally..
npm i -g degit

echo pulling repo...
degit xbc5/proto-mc-type-face --force

echo installing local deps...
pnpm install

echo preparing user config...
pnpm run init
