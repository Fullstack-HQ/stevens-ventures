// data/companiesData.js
export const categories = [
  { label: 'All Companies', filterClass: 'cat-all' },
  { label: 'Automotive Retail', filterClass: 'cat-auto', dataFilter: 'card-auto' },
  { label: 'Technology & Marketing', filterClass: 'cat-tech', dataFilter: 'card-tech' },
  { label: 'Investors', filterClass: 'cat-inv', dataFilter: 'card-inv' },
  { label: 'Rental & Short Term Accommodation', filterClass: 'cat-rent', dataFilter: 'card-rent,card-sta' },
  { label: 'Film', filterClass: 'cat-film', dataFilter: 'card-film' },
];

export const cards = [
  {
    cardClasses: ['card-rent', 'card-sta'],
    categories: [
      { class: 'rent', label: 'Rental Properties' },
      { class: 'sta', label: 'Short Term Accommodation' },
    ],
    bgImage: '/images/card-assets/miami-bg.png',
    logo: '/images/card-assets/miami-logo.svg',
    heading: 'Miami, FL',
    subheading: 'Miami is a vibrant coastal city known for its stunning beaches, dynamic nightlife, and diverse cultural scene.',
    href: '',
  },
  {
    cardClasses: ['card-tech'],
    categories: [
      { class: 'tech', label: 'Technology & Marketing' },
    ],
    bgImage: '/images/card-assets/yodle-bg.png',
    logo: '/images/card-assets/yodle-logo.svg',
    heading: 'Yodle',
    subheading: 'Simply put, we create digital solutions that help businesses thrive. We build results-driven marketing solutions to grow your business.',
    href: 'https://nathanielstevens.com/yodle/',
  },
  {
    cardClasses: ['card-auto'],
    categories: [
      { class: 'auto', label: 'Automotive Retail' },
    ],
    bgImage: '/images/card-assets/lincoln-bg.png',
    logo: '/images/card-assets/lincoln-logo.svg',
    heading: 'Lincoln of Milford',
    subheading: "When you're looking for exceptional new and pre-owned vehicles at the lowest prices around, Lincoln of Milford is the place to go. We have devoted ourselves to helping and serving our customers.",
    href: 'https://stevensauto.com/lincoln-of-milford',
  },
  {
    cardClasses: ['card-tech'],
    categories: [
      { class: 'tech', label: 'Technology & Marketing' },
    ],
    bgImage: '/images/card-assets/tattoopro-bg.png',
    logo: '/images/card-assets/tattoopro-logo.svg',
    heading: 'TattooPro',
    subheading: 'TattooPro provides scheduling, client management, digital forms, payments, and marketing tools for tattoo and piercing studios.',
    href: 'https://tattoopro.io/',
  },
  {
    cardClasses: ['card-auto'],
    categories: [
      { class: 'auto', label: 'Automotive Retail' },
    ],
    bgImage: '/images/card-assets/stevens-auto-group-bg.png',
    logo: '/images/card-assets/stevens-auto-group-logo.svg',
    heading: 'Stevens Auto Group',
    subheading: 'At Stevens Ford, we pride ourselves on offering an extensive inventory of Ford vehicles, from the rugged Ford F-150 to the versatile Ford Escape.',
    href: 'https://stevensauto.com/',
  },
  {
    cardClasses: ['card-tech'],
    categories: [
      { class: 'tech', label: 'Technology & Marketing' },
    ],
    bgImage: '/images/card-assets/punchey-bg.png',
    logo: '/images/card-assets/punchey-logo.svg',
    heading: 'Punchey, Inc',
    subheading: 'Everything owners & operators need to successfully manage and grow their business. We build industry-specific apps that are tailor-designed to help local service businesses succeed.',
    href: 'https://www.punchey.com/',
  },
  {
    cardClasses: ['card-2', 'card-tech'],
    categories: [
      { class: 'tech', label: 'Technology & Marketing' },
    ],
    bgImage: '/images/card-assets/lvs-bg.png',
    logo: '/images/card-assets/lvs-logo.svg',
    heading: 'LVS Digital',
    subheading: 'LVS Digital Marketing helps purpose driven female entrepreneurs avoid burnout, save time creating strategic content and generate more leads while setting their omni-channel marketing strategy on autopilot.',
    href: 'https://lvsdigital.com/',
  },
  {
    cardClasses: ['card-2', 'card-tech'],
    categories: [
      { class: 'tech', label: 'Technology & Marketing' },
    ],
    bgImage: '/images/card-assets/detailpropos-bg.png',
    logo: '/images/card-assets/detailpropos-logo.svg',
    heading: 'DetailPro',
    subheading: 'The Top-Rated System for Attracting, Servicing and Retaining Customers You Have Ambitions, We have the Formula Beautiful Site + Unbeatable Software + Loving Customer Service = Success.',
    href: 'https://detailpropos.com/',
  },
  {
    cardClasses: ['card-2', 'card-auto'],
    categories: [
      { class: 'auto', label: 'Automotive Retail' },
    ],
    bgImage: '/images/card-assets/stevens-collision-bg.png',
    logo: '/images/card-assets/stevens-collision-logo.svg',
    heading: 'Stevens Collision Center',
    subheading: 'We strive to be respectful of your time without any hassle or haggle and to deliver an upfront, comfortable purchase experience!',
    href: 'https://www.stevenscollisioncenter.com/',
  },
  {
    cardClasses: ['card-2', 'card-auto'],
    categories: [
      { class: 'auto', label: 'Automotive Retail' },
    ],
    bgImage: '/images/card-assets/milford-bg.png',
    logo: '/images/card-assets/milford-logo.svg',
    heading: 'Stevens Ford of Milford',
    subheading: 'At Stevens Ford of Milford, we believe that buying a vehicle in Milford should be as straightforward as possible.',
    href: 'https://www.stevensfordmilford.com/',
  },
  {
    cardClasses: ['card-2', 'card-inv'],
    categories: [
      { class: 'inv', label: 'Investors' },
    ],
    bgImage: '/images/card-assets/ventures-bg.png',
    logo: '/images/card-assets/ventures-logo.svg',
    heading: 'Stevens Ventures',
    subheading: 'Stevens Ventures invests in early-stage companies developing practical technology for consumers and businesses.',
    href: 'https://www.stevensventures.com/',
  },
  {
    cardClasses: ['card-2', 'card-rent'],
    categories: [
      { class: 'rent', label: 'Rental Properties' },
    ],
    bgImage: '/images/card-assets/greenwich-bg.png',
    logo: '/images/card-assets/greenwich-logo.svg',
    heading: 'Greenwich, CT',
    subheading: 'Greenwich, CT, is a picturesque town known for its upscale living and beautiful waterfront views. Rich in history and charm, it\'s a favorite spot for New York City commuters.',
    href: '',
  },
  {
    cardClasses: ['card-3', 'card-rent'],
    categories: [
      { class: 'rent', label: 'Rental Properties' },
    ],
    bgImage: '/images/card-assets/nyc-bg.png',
    logo: '/images/card-assets/nyc-logo.svg',
    heading: 'Manhattan, NY',
    subheading: 'Manhattan, NY, is the bustling heart of New York City, famous for its iconic skyline and vibrant culture. Home to Times Square and Central Park, it\'s a global hub of finance, fashion, and entertainment.',
    href: '',
  },
  {
    cardClasses: ['card-3', 'card-sta'],
    categories: [
      { class: 'sta', label: 'Short-Term Accommodations' },
    ],
    bgImage: '/images/card-assets/marthas-bg.png',
    logo: '/images/card-assets/marthas-logo.svg',
    heading: 'Martha\'s Vineyard',
    subheading: 'Martha\'s Vineyard is a charming island off the coast of Massachusetts, known for its sandy beaches and quaint seaside towns.',
    href: 'https://www.mvy.com/',
  },
  {
    cardClasses: ['card-3', 'card-sta'],
    categories: [
      { class: 'sta', label: 'Short-Term Accommodations' },
    ],
    bgImage: '/images/card-assets/sawadee-bg.png',
    logo: '/images/card-assets/sawadee-logo.svg',
    heading: 'Ko Samui',
    subheading: 'Ko Samui is a tropical paradise in Thailand, known for its palm-fringed beaches and vibrant nightlife.',
    href: '',
  },
  {
    cardClasses: ['card-3', 'card-sta'],
    categories: [
      { class: 'sta', label: 'Short-Term Accommodations' },
    ],
    bgImage: '/images/card-assets/kho-pang-bg.png',
    logo: '/images/card-assets/kho-pang-logo.svg',
    heading: 'Kho Pha Ngan',
    subheading: 'Ko Pha Ngan is a Thai island famous for its legendary Full Moon Parties and lush jungle landscapes.',
    href: '',
  },
  {
    cardClasses: ['card-3', 'card-film'],
    categories: [
      { class: 'film', label: 'Films' },
    ],
    bgImage: '/images/card-assets/dead-mans-wire-smaller.jpg',
    logo: '',
    heading: 'Dead Man\'s Wire',
    subheading: 'Dead Man\'s Wire is a 2026 American crime thriller film directed by Gus Van Sant and written by Austin Kolodney, working with historical consultants Alan Berry and Mark Enochs, who together made the 2018 documentary Dead Man\'s Line examining the same events. ',
    href: '',
  },
  {
    cardClasses: ['card-3', 'card-film'],
    categories: [
      { class: 'film', label: 'Films' },
    ],
    bgImage: '/images/card-assets/the-bay-shark.webp',
    logo: '',
    heading: 'The Bay',
    subheading: 'The Bay is a 2026 survival thriller that combines disaster and shark-attack elements as a group of tourists become trapped in a deadly marine environment in Thailand.',
    href: '',
  },
];
