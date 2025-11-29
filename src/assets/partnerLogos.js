// Import logo image files
import jhubLogo from './images/partners/JHUB-Logo-transparent.webp';
import jkuatLogo from './images/partners/jkuat-logo-160x160-1.webp';
import afdbLogo from './images/partners/african-dev-bank.svg';
import ictBoardLogo from './images/partners/kenya-ict-board.svg';

// Partner Logos Data
// TO ADD NEW PARTNER LOGOS:
// 1. Add your logo file to: src/assets/images/partners/
// 2. Import it above (like: import newLogo from './images/partners/new-logo.png';)
// 3. Add it to the partnerLogos object below

export const partnerLogos = {
  'jhub-kenya': {
    name: 'JHub Kenya',
    logo: jhubLogo,
    website: 'https://jhub.co.ke',
    description: 'Leading tech hub and innovation center in Kenya'
  },
  
  'jkuat-university': {
    name: 'Jomo Kenyatta University',
    logo: jkuatLogo,
    website: 'https://jkuat.ac.ke',
    description: 'Premier university of agriculture and technology'
  },
  
  'african-dev-bank': {
    name: 'African Development Bank',
    logo: afdbLogo,
    website: 'https://afdb.org',
    description: 'Africa\'s premier development finance institution'
  },
  
  'kenya-ict-board': {
    name: 'Kenya ICT Board',
    logo: ictBoardLogo,
    website: 'https://icta.go.ke',
    description: 'Kenya\'s ICT regulatory and development agency'
  }
};

// Partner configuration - easily add/remove partners here
export const activePartners = [
  'jhub-kenya',
  'jkuat-university', 
  'african-dev-bank',
  'kenya-ict-board'
];

// Utility function to get partner data
export const getPartnerData = (partnerId) => {
  return partnerLogos[partnerId];
};

// Get all active partners
export const getActivePartners = () => {
  return activePartners.map(partnerId => partnerLogos[partnerId]);
};