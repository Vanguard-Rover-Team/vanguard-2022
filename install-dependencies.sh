#!/bin/bash
# This script installs ZeroMQ, Google Protocol Buffers, nvm, NodeJS, npm, and Angular CLI

echo ""
echo ""
echo ""
echo "**************************************************"
echo "Updating apt package information..."
echo "**************************************************"
echo ""
sudo apt update

echo ""
echo ""
echo ""
echo "**************************************************"
echo "Installing ZeroMQ..."
echo "**************************************************"
echo ""
sudo apt install libzmq3-dev

echo ""
echo ""
echo ""
echo "**************************************************"
echo "Installing Google Protocol Buffers..."
echo "**************************************************"
echo ""
sudo apt install protobuf-compiler

echo ""
echo ""
echo ""
echo "**************************************************"
echo "Installing Node Version Manager (nvm)..."
echo "**************************************************"
echo ""
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

echo ""
echo ""
echo ""
echo "**************************************************"
echo "Installing NodeJS..."
echo "**************************************************"
echo ""
sudo apt install nodejs

echo ""
echo ""
echo ""
echo "**************************************************"
echo "Installing npm..."
echo "**************************************************"
echo ""
sudo apt install npm

echo ""
echo ""
echo ""
echo "**************************************************"
echo "Updating NodeJS..."
echo "**************************************************"
echo ""
sudo npm cache clean -f
sudo npm install -g n
sudo n stable

echo ""
echo ""
echo ""
echo "**************************************************"
echo "Installing Angular..."
echo "**************************************************"
echo ""
sudo npm install -g @angular/cli