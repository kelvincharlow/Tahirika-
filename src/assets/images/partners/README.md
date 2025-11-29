# 📁 Partner Logos Setup Guide

## Folder Structure
```
src/assets/images/partners/
├── jhub-kenya.svg
├── jkuat-university.svg
├── african-dev-bank.svg
├── kenya-ict-board.svg
└── your-new-logo.png  ← Add your logo files here
```

## 🖼️ How to Add New Partner Logos

### Step 1: Add Your Logo File
1. **Copy your logo file** to: `src/assets/images/partners/`
2. **Supported formats**: PNG, JPG, SVG, WEBP
3. **Recommended size**: 120x60px or similar aspect ratio
4. **File naming**: Use kebab-case (e.g., `company-name.png`)

### Step 2: Import the Logo
Open `src/assets/partnerLogos.js` and add import:
```javascript
import yourNewLogo from './images/partners/your-logo.png';
```

### Step 3: Add to Partner Data
Add your partner to the `partnerLogos` object:
```javascript
export const partnerLogos = {
  // ... existing partners ...
  
  'your-partner-id': {
    name: 'Your Partner Name',
    logo: yourNewLogo,  ← Use the imported logo
    website: 'https://partner-website.com',
    description: 'Partner description'
  }
};
```

### Step 4: Activate the Partner
Add the partner ID to the active list:
```javascript
export const activePartners = [
  'jhub-kenya',
  'jkuat-university',
  'african-dev-bank',
  'kenya-ict-board',
  'your-partner-id'  ← Add here
];
```

## 🔄 Examples

### Adding PNG Logo
```javascript
// 1. Copy logo to: src/assets/images/partners/microsoft.png
// 2. Import it:
import microsoftLogo from './images/partners/microsoft.png';

// 3. Add to partnerLogos:
'microsoft': {
  name: 'Microsoft',
  logo: microsoftLogo,
  website: 'https://microsoft.com'
}

// 4. Add to activePartners:
export const activePartners = ['jhub-kenya', 'microsoft'];
```

### Adding SVG Logo
```javascript
// 1. Copy logo to: src/assets/images/partners/google.svg  
// 2. Import it:
import googleLogo from './images/partners/google.svg';

// 3. Add to partnerLogos:
'google': {
  name: 'Google',
  logo: googleLogo,
  website: 'https://google.com'
}
```

## ✅ Benefits
- **Clean imports**: No messy base64 data
- **Better performance**: Optimized image loading
- **Easy updates**: Just replace image files
- **Any format**: PNG, JPG, SVG all work
- **Version control**: Track logo changes in git

## 🎯 Quick Start
1. Drop your logo files in `src/assets/images/partners/`
2. Edit `src/assets/partnerLogos.js`
3. Import, add, and activate your logos
4. Done! ✨