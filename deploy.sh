#!/bin/bash

# Exit the script if any command fails
set -e

# Define your source directory (the folder where the static files are stored)
OUTPUT_DIR=".output/public"

# Step 1: Create or switch to orphan 'gh-pages' branch
git checkout --orphan gh-pages

# Step 2: Remove all tracked files
echo "Removing all tracked files..."
git rm -rf .

# Step 3: Copy the .gitignore from the main branch to preserve ignore rules
echo "Copying .gitignore from main branch..."
git checkout main -- .gitignore

# Step 4: Copy content from the .output/public directory
echo "Copying content from $OUTPUT_DIR..."
cp -r $OUTPUT_DIR/* .

# Step 5: Add all files from the public folder and the .gitignore to staging
git add .

# Step 6: Commit the changes
git commit -m "Deploy to GitHub Pages"

# Step 7: Force push to the 'gh-pages' branch on the remote
git push origin gh-pages --force

# Step 8: Switch back to the main branch
git checkout main

echo "Deployment to GitHub Pages completed!"
