# Image Optimization Guide for SMZ Education

## 📸 Image Optimization Strategy

Based on Lighthouse analysis, image optimization can save **~1,908 KiB** and significantly improve LCP (Largest Contentful Paint).

---

## 🎯 Priority Images to Optimize

### High Priority (Largest Impact)

#### 1. St. K Michael's School Image

- **Current:** `https://st-k-michaels-school.smzedu.com/assets/images/gallery-24.jpg`
- **Size:** 1,119 KiB
- **Displayed:** 335x284px
- **Actual:** 2048x1567px
- **Potential Savings:** 1,103 KiB (~98% reduction)
- **Target Size:** ~100-150 KiB (WebP)

#### 2. Winterville Rangers Image

- **Current:** `/images/winterville.jpg`
- **Size:** 553 KiB
- **Displayed:** 335x283px
- **Actual:** 1600x1225px
- **Potential Savings:** 537 KiB (~97% reduction)
- **Target Size:** ~50-80 KiB (WebP)

#### 3. Rosda School Image

- **Current:** `https://rosdaschool.smzedu.com/assets/images/gallery/1.jpg`
- **Size:** 152 KiB
- **Displayed:** 341x256px
- **Actual:** 1061x810px
- **Potential Savings:** 137 KiB (~90% reduction)
- **Target Size:** ~30-40 KiB (WebP)

#### 4. SMZ Logo

- **Current:** `/images/SMZ_LOGO__3_-removebg-preview.png`
- **Size:** 65 KiB
- **Displayed:** 27x27px
- **Actual:** 500x500px
- **Potential Savings:** 64 KiB (~98% reduction)
- **Target Size:** ~2-5 KiB (WebP or SVG preferred)

#### 5. Donation Popup Image

- **Current:** `/images/Orange Colorful Shapes and Scribbles Medical Needs GoFundMe Story Image.png`
- **Size:** 251 KiB
- **Displayed:** Variable (popup)
- **Potential Savings:** ~150 KiB
- **Target Size:** ~50-80 KiB (WebP)

---

## 🛠️ Optimization Tools & Methods

### Method 1: Online Tools (Easiest)

#### Squoosh.app (Recommended)

1. Visit: https://squoosh.app
2. Upload your image
3. Settings:
   - Format: **WebP**
   - Quality: **80-85** (good balance)
   - Resize: Match display dimensions (e.g., 335px width)
4. Download optimized image

#### TinyPNG

1. Visit: https://tinypng.com
2. Upload PNG/JPG (max 5MB)
3. Download compressed version
4. Convert to WebP separately

### Method 2: Command Line Tools

#### Using cwebp (WebP)

```bash
# Install cwebp (macOS with Homebrew)
brew install webp

# Convert single image
cwebp -q 80 input.jpg -o output.webp

# Convert with resize
cwebp -q 80 -resize 335 0 input.jpg -o output.webp

# Batch convert all JPGs in directory
for file in *.jpg; do
  cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done
```

#### Using ImageMagick

```bash
# Install ImageMagick
brew install imagemagick

# Resize and convert
convert input.jpg -resize 335x -quality 80 output.webp

# Batch process
mogrify -format webp -resize 335x -quality 80 *.jpg
```

### Method 3: Node.js Script (Automated)

Create `optimize-images.js`:

```javascript
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const imagesDir = "./images";
const outputDir = "./images/optimized";

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Process images
fs.readdirSync(imagesDir).forEach((file) => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(
      outputDir,
      file.replace(/\.(jpg|jpeg|png)$/i, ".webp")
    );

    sharp(inputPath)
      .resize(335, null, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then((info) => console.log(`✓ ${file} → ${info.size} bytes`))
      .catch((err) => console.error(`✗ ${file}:`, err));
  }
});
```

Run:

```bash
npm install sharp
node optimize-images.js
```

---

## 📐 Responsive Image Implementation

### Current Implementation (Needs Update)

```html
<img
  style="height: 16rem;"
  src="/images/winterville.jpg"
  alt="Winterville Rangers"
  width="335"
  height="256"
  loading="lazy"
/>
```

### Optimized Implementation (Recommended)

```html
<picture>
  <source
    srcset="
      /images/winterville-335.webp   335w,
      /images/winterville-670.webp   670w,
      /images/winterville-1005.webp 1005w
    "
    sizes="(max-width: 600px) 100vw, 335px"
    type="image/webp"
  />
  <source
    srcset="
      /images/winterville-335.jpg   335w,
      /images/winterville-670.jpg   670w,
      /images/winterville-1005.jpg 1005w
    "
    sizes="(max-width: 600px) 100vw, 335px"
    type="image/jpeg"
  />
  <img
    src="/images/winterville-335.jpg"
    alt="Winterville Rangers Montessori School - First Montessori partnership in Accra, Ghana"
    width="335"
    height="256"
    loading="lazy"
  />
</picture>
```

### Simpler Implementation (Good Alternative)

```html
<img
  src="/images/winterville.webp"
  srcset="/images/winterville-335.webp 335w, /images/winterville-670.webp 670w"
  sizes="(max-width: 600px) 100vw, 335px"
  alt="Winterville Rangers Montessori School"
  width="335"
  height="256"
  loading="lazy"
/>
```

---

## 🎨 Logo Optimization (SVG Recommended)

The SMZ Logo should ideally be an SVG for perfect scaling:

### Option 1: Convert to SVG (Best)

1. Use https://www.pngtosvg.com/
2. Or recreate in vector editor (Illustrator, Inkscape)
3. Inline SVG in HTML for best performance:

```html
<svg
  width="27"
  height="27"
  viewBox="0 0 500 500"
  aria-label="SMZ Education Logo"
>
  <!-- SVG content here -->
</svg>
```

### Option 2: Optimize PNG

```bash
# Resize logo to exact display sizes
cwebp -q 90 -resize 27 0 SMZ_LOGO__3_-removebg-preview.png -o logo-27.webp
cwebp -q 90 -resize 54 0 SMZ_LOGO__3_-removebg-preview.png -o logo-54.webp  # 2x for retina
```

---

## 📋 Image Optimization Checklist

### For Each Image:

- [ ] Resize to maximum display size
- [ ] Convert to WebP format
- [ ] Keep original as JPG fallback
- [ ] Create 2x version for retina displays
- [ ] Add explicit width/height attributes
- [ ] Use descriptive alt text
- [ ] Implement lazy loading
- [ ] Test on various devices

### Bulk Operations:

```bash
# 1. Backup original images
mkdir images-backup
cp images/*.{jpg,png} images-backup/

# 2. Convert all to WebP
for file in images/*.jpg; do
  cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done

# 3. Create multiple sizes
for file in images/*.webp; do
  # Small (335px)
  cwebp -q 80 -resize 335 0 "$file" -o "${file%.webp}-335.webp"
  # Medium (670px)
  cwebp -q 80 -resize 670 0 "$file" -o "${file%.webp}-670.webp"
  # Large (1005px)
  cwebp -q 80 -resize 1005 0 "$file" -o "${file%.webp}-1005.webp"
done
```

---

## 🌐 CDN Recommendations

For even better performance, consider using a CDN with automatic image optimization:

### Cloudflare Images

- Automatic WebP conversion
- Automatic resizing
- Global CDN
- Cost: ~$5/month for 100k images

### Cloudinary

- Free tier: 25GB storage, 25GB bandwidth
- Automatic optimization
- On-the-fly transformations

### imgix

- URL-based image manipulation
- Automatic format selection
- 1000 images free

### Example with Cloudflare:

```html
<img
  src="https://images.smzedu.com/cdn-cgi/image/width=335,quality=80,format=auto/winterville.jpg"
  alt="Winterville Rangers"
  loading="lazy"
/>
```

---

## 📊 Expected Results

### After Optimization:

- **Total Savings:** ~1,900 KiB
- **Load Time Improvement:** 2-4 seconds faster
- **LCP Improvement:** 30-40% faster
- **Bandwidth Savings:** ~70% per page load
- **Lighthouse Performance:** +15-20 points

### Before vs After:

| Image           | Before       | After      | Savings |
| --------------- | ------------ | ---------- | ------- |
| St. K Michael's | 1,119 KB     | 100 KB     | 91%     |
| Winterville     | 553 KB       | 60 KB      | 89%     |
| Rosda School    | 152 KB       | 35 KB      | 77%     |
| SMZ Logo        | 65 KB        | 3 KB       | 95%     |
| Donation Image  | 251 KB       | 70 KB      | 72%     |
| **Total**       | **2,140 KB** | **268 KB** | **87%** |

---

## 🚀 Implementation Timeline

### Phase 1: High Priority (1-2 hours)

- [ ] Optimize St. K Michael's image
- [ ] Optimize Winterville image
- [ ] Optimize Rosda School image
- [ ] Test on projects page

### Phase 2: Medium Priority (1 hour)

- [ ] Optimize SMZ Logo (all sizes)
- [ ] Optimize donation popup image
- [ ] Create 2x versions for retina

### Phase 3: Complete Optimization (2-3 hours)

- [ ] Optimize all remaining images
- [ ] Implement responsive srcset
- [ ] Create WebP versions
- [ ] Test across all pages

---

## 🔍 Testing After Optimization

### Visual Quality Check:

- [ ] Images look sharp on desktop
- [ ] Images look sharp on mobile
- [ ] No visible compression artifacts
- [ ] Colors are accurate

### Performance Check:

- [ ] Run Lighthouse again
- [ ] Check LCP improvement
- [ ] Verify image loading order
- [ ] Test on slow 3G connection

### Compatibility Check:

- [ ] WebP loads in modern browsers
- [ ] JPG fallback works in old browsers
- [ ] Responsive images load correct size

---

## 📝 Additional Notes

### Browser Support for WebP:

- ✅ Chrome 32+ (2014)
- ✅ Firefox 65+ (2019)
- ✅ Safari 14+ (2020)
- ✅ Edge 18+ (2018)

Coverage: ~97% of users

### Fallback Strategy:

Always provide JPG/PNG fallback:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" />
</picture>
```

---

**Last Updated:** December 25, 2025
**Priority:** HIGH - Biggest performance opportunity
**Estimated Time:** 4-6 hours total
**Expected Improvement:** +20 Lighthouse points
