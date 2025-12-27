#!/bin/bash

# SMZ Education - Image Optimization Script
# This script converts images to WebP format for better performance

set -e

echo "🖼️  SMZ Education Image Optimization Script"
echo "=========================================="
echo ""

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebp is not installed."
    echo ""
    echo "To install on macOS:"
    echo "  brew install webp"
    echo ""
    echo "To install on Ubuntu/Debian:"
    echo "  sudo apt-get install webp"
    echo ""
    echo "To install on other systems, visit:"
    echo "  https://developers.google.com/speed/webp/download"
    exit 1
fi

echo "✅ cwebp found!"
echo ""

# Create backup directory
BACKUP_DIR="images/originals"
if [ ! -d "$BACKUP_DIR" ]; then
    mkdir -p "$BACKUP_DIR"
    echo "📁 Created backup directory: $BACKUP_DIR"
fi

# Quality settings
QUALITY=85
echo "🎨 Using quality setting: $QUALITY%"
echo ""

# Counter for statistics
total_files=0
converted_files=0
skipped_files=0
total_savings=0

echo "🔄 Starting conversion process..."
echo ""

# Process all PNG, JPG, and JPEG files
for img in images/*.{png,jpg,jpeg,PNG,JPG,JPEG}; do
    # Check if file exists (handles case where no files match)
    [ -f "$img" ] || continue
    
    total_files=$((total_files + 1))
    
    # Get filename without extension
    filename=$(basename "$img")
    name="${filename%.*}"
    webp_file="images/${name}.webp"
    
    # Skip if WebP already exists
    if [ -f "$webp_file" ]; then
        echo "⏭️  Skipping $filename (WebP already exists)"
        skipped_files=$((skipped_files + 1))
        continue
    fi
    
    # Get original file size
    original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
    
    # Convert to WebP
    echo "🔄 Converting: $filename"
    cwebp -q $QUALITY "$img" -o "$webp_file" > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        # Get new file size
        new_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null)
        
        # Calculate savings
        savings=$((original_size - new_size))
        total_savings=$((total_savings + savings))
        
        # Calculate percentage
        if [ $original_size -gt 0 ]; then
            percent=$((100 - (new_size * 100 / original_size)))
        else
            percent=0
        fi
        
        echo "   ✅ Success! Saved ${percent}% ($(numfmt --to=iec-i --suffix=B $savings 2>/dev/null || echo "${savings} bytes"))"
        
        # Copy original to backup (optional - uncomment if you want backups)
        # cp "$img" "$BACKUP_DIR/"
        
        converted_files=$((converted_files + 1))
    else
        echo "   ❌ Failed to convert $filename"
    fi
    echo ""
done

echo ""
echo "=========================================="
echo "📊 Conversion Summary"
echo "=========================================="
echo "Total files found:     $total_files"
echo "Files converted:       $converted_files"
echo "Files skipped:         $skipped_files"
echo "Total space saved:     $(numfmt --to=iec-i --suffix=B $total_savings 2>/dev/null || echo "${total_savings} bytes")"
echo ""

if [ $converted_files -gt 0 ]; then
    echo "✨ Optimization complete!"
    echo ""
    echo "📝 Next steps:"
    echo "1. Update HTML to use WebP images with fallbacks"
    echo "2. Test images load correctly on your website"
    echo "3. Consider removing original files after verification"
    echo ""
    echo "Example HTML with fallback:"
    echo "<picture>"
    echo "  <source srcset=\"/images/example.webp\" type=\"image/webp\">"
    echo "  <img src=\"/images/example.png\" alt=\"Description\" loading=\"lazy\" decoding=\"async\">"
    echo "</picture>"
else
    echo "ℹ️  No new files were converted."
    echo "All images may already be optimized or no compatible images found."
fi

echo ""
