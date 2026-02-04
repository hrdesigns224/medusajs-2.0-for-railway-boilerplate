# 17 Collectables Storefront - Quick Start Guide

## 🎉 What's Been Updated

Your Medusa.js storefront has been completely overhauled with a premium sports card collectibles theme!

## 🎨 Visual Changes at a Glance

### Navigation Bar
- **Before**: White background with generic "Medusa Store" branding
- **After**: Dark slate (almost black) with gold gradient "17 COLLECTABLES" logo
  - Sticky navigation that stays visible while scrolling
  - Hover effects with amber/gold accents
  - Increased height for more premium feel

### Hero Section
- **Before**: Basic gray background with deployment message
- **After**: Stunning gradient hero with:
  - Dark slate to indigo gradient background
  - Animated background patterns
  - Large, bold headline: "Collect the Legends" with animated gold text
  - Professional description highlighting authentication and rare collectibles
  - Two prominent CTA buttons (Browse Collection, Featured Cards)
  - Trust badges showing: 100% Authenticated, Fast Shipping, Expert Grading
  - Layered gradients creating depth

### Footer
- **Before**: Generic Medusa links
- **After**: Sports card-focused resources:
  - Card Grading Guide
  - Authentication info
  - Collector Tips
  - Updated copyright to "17 Collectables"

### Typography
- **Display Font**: Oswald (bold, athletic, perfect for sports)
- **Body Font**: Poppins (clean, modern, easy to read)
- **Accent Font**: Bebas Neue (for special highlights)

### Color Scheme
**Primary Colors:**
- Dark Slate (#0f172a) - Backgrounds
- White (#ffffff) - Text
- Amber/Gold (#fbbf24, #fcd34d) - Accents and highlights
- Indigo (#4f46e5, #6366f1) - Secondary accents
- Purple (#9333EA) - Rare items

**Card Rarity Colors (ready to use):**
- Gold: #FFD700
- Silver: #C0C0C0
- Bronze: #CD7F32
- Rare: #9333EA (Purple)
- Legendary: #F59E0B (Amber)

## 🚀 Installation & Setup

1. **Extract the ZIP file**
   ```bash
   unzip storefront-17-collectables.zip
   cd storefront
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**
   Create a `.env.local` file with your Medusa backend URL:
   ```env
   NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
   NEXT_PUBLIC_BASE_URL=http://localhost:8000
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   Visit http://localhost:8000 to see your new storefront!

## 📝 Files Modified

Here's what was changed:

1. **src/app/[countryCode]/(main)/page.tsx**
   - Updated page title and meta description

2. **src/modules/layout/templates/nav/index.tsx**
   - Dark navigation bar
   - Gold gradient logo
   - Enhanced hover states

3. **src/modules/home/components/hero/index.tsx**
   - Complete hero redesign
   - Gradient backgrounds
   - Trust indicators
   - CTA buttons

4. **src/modules/layout/templates/footer/index.tsx**
   - Updated branding
   - Sports card resources
   - New footer links

5. **src/styles/globals.css**
   - Custom font imports
   - Card shine effect
   - Typography enhancements

6. **tailwind.config.js**
   - Custom color palette for card rarities

7. **package.json**
   - Updated package name and description

8. **src/modules/layout/components/cart-dropdown/index.tsx**
   - Updated cart button styling to match theme

## 🎯 Next Steps to Personalize Further

### 1. Add Your Logo
Replace the text logo with an image:
- Create a logo file (SVG recommended)
- Save to `public/logo.svg`
- Update nav component to use `<img>` instead of text

### 2. Update Favicon
Replace `public/favicon.ico` with your 17 Collectables icon

### 3. Configure Product Categories
Add sports-specific categories in your Medusa admin:
- Baseball Cards
- Basketball Cards
- Football Cards
- Hockey Cards
- Graded Cards
- Autographed Memorabilia

### 4. Customize the Featured Products Section
The homepage shows featured collections - make sure to:
- Create collections in Medusa admin
- Add high-quality product images
- Set featured products

### 5. Set Up Payment & Shipping
Configure in your Medusa backend:
- Payment providers (Stripe, PayPal)
- Shipping options
- Tax settings

## 💡 Design Features You Can Use

### Card Shine Effect
Add a holographic shine to product images:
```jsx
<div className="card-shine">
  <img src="/path-to-card.jpg" alt="Card" />
</div>
```

### Rarity Badge Colors
Use the custom colors for rarity indicators:
```jsx
<span className="bg-card-gold text-black px-3 py-1 rounded">Gold</span>
<span className="bg-card-rare text-white px-3 py-1 rounded">Rare</span>
<span className="bg-card-legendary text-black px-3 py-1 rounded">Legendary</span>
```

### Gradient Text
Create eye-catching headlines:
```jsx
<h1 className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
  Your Text Here
</h1>
```

## 🔧 Troubleshooting

**Issue**: Fonts not loading
**Solution**: Make sure you have internet connection for Google Fonts CDN

**Issue**: Styles look different
**Solution**: Clear your browser cache and rebuild:
```bash
rm -rf .next
npm run dev
```

**Issue**: Navigation not sticky
**Solution**: Check that you haven't modified the `sticky top-0` classes

## 📞 Support Resources

- **Medusa Docs**: https://docs.medusajs.com
- **Medusa Discord**: Join for community support
- **Tailwind CSS Docs**: https://tailwindcss.com

## ✨ What Makes This Design Special

1. **Bold Color Choices**: Dark theme with gold accents creates immediate premium feel
2. **Athletic Typography**: Oswald font family perfect for sports branding
3. **Depth & Layers**: Multiple gradient overlays create visual interest
4. **Trust Signals**: Authentication badges build credibility
5. **Interactive Elements**: Hover states and animations enhance user experience
6. **Responsive Design**: Looks great on mobile, tablet, and desktop

## 🎨 Design Philosophy

This storefront is designed to convey:
- **Premium Quality**: Dark colors, gold accents, premium typography
- **Authenticity**: Trust badges, professional presentation
- **Excitement**: Bold gradients, animated elements
- **Collectibility**: Rarity colors, special effects for valuable items

---

**Ready to launch?** Your 17 Collectables storefront is set up and ready to showcase premium sports cards and memorabilia!

For questions about the customization, refer to the `17-COLLECTABLES-CUSTOMIZATION.md` file included in the zip.

Good luck with your sports card business! 🏆⚾🏀🏈
