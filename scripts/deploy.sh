#!/bin/bash
# Simple Railway Deployment Script

echo "Installing dependencies..."
npm install

echo "Building the Next.js app..."
npm run build

echo "Starting the app on Railway..."
npm start
