#!/bin/bash

echo "Building the project..."
npm run build

echo "Build completed. Files are in the 'out' directory."
echo "To deploy manually:"
echo "1. Go to your GitHub repository settings"
echo "2. Navigate to Pages section"
echo "3. Set source to 'Deploy from a branch'"
echo "4. Select 'gh-pages' branch and '/ (root)' folder"
echo "5. Click Save"

echo ""
echo "Or you can manually upload the contents of the 'out' directory to your web server."
