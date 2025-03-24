#!/bin/bash

# Source file
SOURCE="assets/logo.png"

# Output files
magick "$SOURCE" -resize 192x192 android-chrome-192x192.png
magick "$SOURCE" -resize 512x512 android-chrome-512x512.png
magick "$SOURCE" -resize 180x180 apple-touch-icon.png
magick "$SOURCE" -resize 16x16 favicon-16x16.png
magick "$SOURCE" -resize 32x32 favicon-32x32.png
magick "$SOURCE" -resize 150x150 mstile-150x150.png

# Create a multi-resolution favicon.ico
magick "$SOURCE" -define icon:auto-resize=16,32,48 favicon.ico

echo "✅ All icons generated successfully!"
