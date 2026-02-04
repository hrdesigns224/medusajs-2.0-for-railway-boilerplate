# 17 Collectables - Storefront Customization Guide

## Overview
This Medusa.js storefront has been customized for **17 Collectables**, a premium sports card and memorabilia business. The design features a bold, modern aesthetic with a sports collectibles theme.

## Key Customizations

### 🎨 Visual Design
- **Color Scheme**: Dark theme with slate grays, indigo, and amber/gold accents
- **Typography**: 
  - Display: Oswald (bold, athletic feel)
  - Body: Poppins (clean, modern)
  - Accent: Bebas Neue (for special highlights)
- **Design Philosophy**: Premium collectibles marketplace with emphasis on authenticity and rarity

### 📦 Files Modified

#### 1. **Navigation** (`src/modules/layout/templates/nav/index.tsx`)
- Dark slate background (slate-950)
- Gold gradient logo text
- Enhanced hover states with amber accents
- Increased header height for more presence
- Premium shadow effects

#### 2. **Hero Section** (`src/modules/home/components/hero/index.tsx`)
- Full-width hero with gradient background (slate to indigo)
- Animated background patterns
- "Collect the Legends" headline with animated gold text
- Call-to-action buttons for browsing collection
- Trust indicators (Authentication, Shipping, Grading)
- Layered gradients for depth

#### 3. **Footer** (`src/modules/layout/templates/footer/index.tsx`)
- Updated branding to "17 Collectables"
- Sports card-specific resource links:
  - Card Grading Guide
  - Authentication
  - Collector Tips
- Updated copyright

#### 4. **Page Metadata** (`src/app/[countryCode]/(main)/page.tsx`)
- SEO-optimized title and description for sports cards
- Focus on premium collectibles and authenticity

#### 5. **Global Styles** (`src/styles/globals.css`)
- Custom font imports (Bebas Neue, Oswald, Poppins)
- Card shine effect utility class
- Enhanced typography hierarchy
- Body font set to Poppins

#### 6. **Tailwind Config** (`tailwind.config.js`)
- Custom color palette for cards:
  - `card-gold`: #FFD700
  - `card-silver`: #C0C0C0
  - `card-bronze`: #CD7F32
  - `card-rare`: #9333EA (purple)
  - `card-legendary`: #F59E0B (amber)

## 🎯 Design Features

### Color Psychology
- **Dark Background**: Premium, sophisticated feel
- **Gold/Amber Accents**: Represents value, rarity, championship
- **Indigo/Purple**: Luxury, collectibility, exclusivity
- **White Text**: High contrast, easy readability

### Interactive Elements
- Hover animations on navigation links
- Card shine effect (can be applied to product cards)
- Smooth gradient transitions
- Shadow effects for depth

### Trust & Credibility
- Authentication badges
- Secure shipping indicators
- Expert grading mentions
- Professional, polished design

## 🚀 Usage Tips

### Customizing Colors
Edit the `tailwind.config.js` file to modify the card rarity colors:
```javascript
colors: {
  card: {
    gold: "#FFD700",      // Modify for your gold cards
    silver: "#C0C0C0",    // Modify for silver tier
    bronze: "#CD7F32",    // Modify for bronze tier
    rare: "#9333EA",      // Modify for rare cards
    legendary: "#F59E0B", // Modify for legendary tier
  },
}
```

### Adding Product Card Effects
Apply the `card-shine` class to product images for a holographic effect:
```jsx
<div className="card-shine">
  <img src="..." alt="Card" />
</div>
```

### Hero CTA Buttons
The hero includes two CTAs that link to:
- `/store` - Main product catalog
- `/store?featured=true` - Featured/rare items

Update these links in `src/modules/home/components/hero/index.tsx` to match your routing.

## 📱 Responsive Design
All customizations maintain responsive design:
- Mobile: Stacked layout, smaller text sizes
- Tablet: Optimized spacing
- Desktop: Full hero experience with all elements

## 🔧 Technical Details

### Dependencies
No new dependencies were added. All styling uses:
- Tailwind CSS (existing)
- Medusa UI components (existing)
- Google Fonts (imported via CSS)

### Performance
- Fonts loaded via Google Fonts CDN
- CSS-only animations (no JavaScript overhead)
- Optimized gradient and shadow usage

## 🎨 Brand Assets Needed

To complete the customization, you may want to add:
1. **Favicon**: Replace `public/favicon.ico` with 17 Collectables logo
2. **OG Images**: Add social sharing images
3. **Product Images**: High-quality sports card photography
4. **Logo SVG**: Consider adding a vector logo for better scaling

## 📝 Next Steps

1. **Add Categories**: Create product categories for different sports
2. **Grading System**: Implement card condition/grading display
3. **Authentication Badges**: Show verified/authenticated indicators
4. **Featured Collections**: Highlight rare or valuable cards
5. **Player/Team Filters**: Advanced filtering for collectors

## 🆘 Support

For Medusa.js specific features and functionality, refer to:
- [Medusa Documentation](https://docs.medusajs.com)
- [Medusa Storefront Docs](https://docs.medusajs.com/starters/nextjs-starter)

## 📄 License

Customizations are provided as-is. Original Medusa.js code retains its MIT license.

---

**17 Collectables** - *Collect the Legends*
