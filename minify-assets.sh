#!/bin/bash

# SMZ Education - CSS & JavaScript Minification Script
# This script minifies CSS and JavaScript files for better performance

set -e

echo "⚡ SMZ Education CSS & JS Minification Script"
echo "============================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed.${NC}"
    echo ""
    echo "Please install Node.js and npm from:"
    echo "  https://nodejs.org/"
    exit 1
fi

echo -e "${GREEN}✅ npm found!${NC}"
echo ""

# Check and install required packages
echo "📦 Checking for required packages..."

if ! command -v terser &> /dev/null; then
    echo "Installing terser for JavaScript minification..."
    npm install -g terser
fi

if ! command -v cleancss &> /dev/null; then
    echo "Installing clean-css-cli for CSS minification..."
    npm install -g clean-css-cli
fi

echo -e "${GREEN}✅ All tools ready!${NC}"
echo ""

# Counter for statistics
total_js=0
total_css=0
total_js_savings=0
total_css_savings=0

echo "🔄 Starting minification process..."
echo ""

# ============================================
# Minify JavaScript Files
# ============================================
echo -e "${YELLOW}📜 Minifying JavaScript files...${NC}"
echo ""

for js_file in general/*.js; do
    # Skip if file doesn't exist or is already minified
    [ -f "$js_file" ] || continue
    [[ "$js_file" == *.min.js ]] && continue
    
    # Get filename
    filename=$(basename "$js_file")
    name="${filename%.*}"
    min_file="general/${name}.min.js"
    
    # Skip if minified version already exists and is newer
    if [ -f "$min_file" ] && [ "$min_file" -nt "$js_file" ]; then
        echo "⏭️  Skipping $filename (minified version is up to date)"
        continue
    fi
    
    # Get original file size
    original_size=$(stat -f%z "$js_file" 2>/dev/null || stat -c%s "$js_file" 2>/dev/null)
    
    # Minify JavaScript
    echo "🔄 Minifying: $filename"
    terser "$js_file" -o "$min_file" -c -m 2>/dev/null
    
    if [ $? -eq 0 ]; then
        # Get new file size
        new_size=$(stat -f%z "$min_file" 2>/dev/null || stat -c%s "$min_file" 2>/dev/null)
        
        # Calculate savings
        savings=$((original_size - new_size))
        total_js_savings=$((total_js_savings + savings))
        
        # Calculate percentage
        if [ $original_size -gt 0 ]; then
            percent=$((100 - (new_size * 100 / original_size)))
        else
            percent=0
        fi
        
        echo -e "   ${GREEN}✅ Success!${NC} Saved ${percent}% ($(numfmt --to=iec-i --suffix=B $savings 2>/dev/null || echo "${savings} bytes"))"
        total_js=$((total_js + 1))
    else
        echo -e "   ${RED}❌ Failed to minify $filename${NC}"
    fi
    echo ""
done

# ============================================
# Minify CSS Files
# ============================================
echo -e "${YELLOW}🎨 Minifying CSS files...${NC}"
echo ""

for css_file in general/*.css about/*.css contact/*.css; do
    # Skip if file doesn't exist or is already minified
    [ -f "$css_file" ] || continue
    [[ "$css_file" == *.min.css ]] && continue
    
    # Get filename and directory
    filename=$(basename "$css_file")
    dirname=$(dirname "$css_file")
    name="${filename%.*}"
    min_file="${dirname}/${name}.min.css"
    
    # Skip if minified version already exists and is newer
    if [ -f "$min_file" ] && [ "$min_file" -nt "$css_file" ]; then
        echo "⏭️  Skipping $filename (minified version is up to date)"
        continue
    fi
    
    # Get original file size
    original_size=$(stat -f%z "$css_file" 2>/dev/null || stat -c%s "$css_file" 2>/dev/null)
    
    # Minify CSS
    echo "🔄 Minifying: $css_file"
    cleancss -o "$min_file" "$css_file" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        # Get new file size
        new_size=$(stat -f%z "$min_file" 2>/dev/null || stat -c%s "$min_file" 2>/dev/null)
        
        # Calculate savings
        savings=$((original_size - new_size))
        total_css_savings=$((total_css_savings + savings))
        
        # Calculate percentage
        if [ $original_size -gt 0 ]; then
            percent=$((100 - (new_size * 100 / original_size)))
        else
            percent=0
        fi
        
        echo -e "   ${GREEN}✅ Success!${NC} Saved ${percent}% ($(numfmt --to=iec-i --suffix=B $savings 2>/dev/null || echo "${savings} bytes"))"
        total_css=$((total_css + 1))
    else
        echo -e "   ${RED}❌ Failed to minify $css_file${NC}"
    fi
    echo ""
done

# ============================================
# Summary
# ============================================
echo ""
echo "============================================="
echo "📊 Minification Summary"
echo "============================================="
echo -e "JavaScript files minified: ${GREEN}$total_js${NC}"
echo -e "JavaScript space saved:    ${GREEN}$(numfmt --to=iec-i --suffix=B $total_js_savings 2>/dev/null || echo "${total_js_savings} bytes")${NC}"
echo ""
echo -e "CSS files minified:        ${GREEN}$total_css${NC}"
echo -e "CSS space saved:           ${GREEN}$(numfmt --to=iec-i --suffix=B $total_css_savings 2>/dev/null || echo "${total_css_savings} bytes")${NC}"
echo ""
total_savings=$((total_js_savings + total_css_savings))
echo -e "Total space saved:         ${GREEN}$(numfmt --to=iec-i --suffix=B $total_savings 2>/dev/null || echo "${total_savings} bytes")${NC}"
echo ""

if [ $total_js -gt 0 ] || [ $total_css -gt 0 ]; then
    echo "✨ Minification complete!"
    echo ""
    echo "📝 Next steps:"
    echo "1. Update HTML files to reference .min.js and .min.css files"
    echo "2. Test your website to ensure everything works correctly"
    echo "3. Run Lighthouse to see performance improvements"
    echo ""
    echo "Example HTML updates:"
    echo "  <script defer src=\"/general/main.min.js\"></script>"
    echo "  <link rel=\"stylesheet\" href=\"/general/style.min.css\">"
else
    echo "ℹ️  No new files were minified."
    echo "All files may already be optimized or no compatible files found."
fi

echo ""
