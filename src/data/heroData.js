// data/heroData.js

export const heroSections = {
  hero1: {
    className: 'full-width-bg',
    bgImage: '/images/hero-section.webp',
    headingLine1: 'Investing in Tomorrow.',
    headingAccent: 'Today.',
    text: 'Our investments focus on innovative models in the consumer, retail, technology and business services industries.',
    buttons: [
      { label: 'Apply', href: '/contact-us/', style: 'gray', icon: '<img src="/images/curve-arrow.svg" alt="Curve arrow">' },
      { label: 'Invest', href: '/contact-us/', style: 'accent', icon: '<img src="/images/daf.svg" alt="Arrow pointing right">' },
    ],
  },
  hero2: {
    className: 'full-width-bg',
    bgImage: '/images/automotive-retail.webp',
    headingLine1: 'We are Building',
    headingAccent: 'The Future of Auto Retail.',
    text: 'Empowering the future of mobility by developing next-generation automotive retail solutions and customer-first experiences.',
    buttons: [
      { label: 'Go on Website', href: 'https://stevensauto.com/', style: 'gray', icon: '<img src="/images/arrow-circle.svg" alt="Arrow in a circle">' },
    ],
  },
  hero3: {
    className: 'full-width-bg',
    bgImage: '/images/philantrophic-foundation.webp',
    headingLine1: 'Stevens Philanthropic',
    headingAccent: 'Foundation',
    text: "The Stevens Foundation allows the pair's diverse philanthropic and charitable interests to converge under one umbrella.",
    buttons: [
      { label: 'Learn More', href: '', style: 'gray', icon: '<img src="/images/arrow-circle.svg" alt="Arrow in a circle">' },
    ],
  },
  hero4: {
    className: 'full-width-bg',
    bgImage: '/images/more-about.webp',
    headingLine1: 'More About',
    headingAccent: 'Stevens Ventures Companies',
    text: "We prefer investments that deal within our core area of expertise. More specifically, this includes online marketing services, financial services, consumer content and publishing, mobile applications, and SMB-focused SAAS models providing marketing, business operations, or technology capabilities.",
    buttons: [
      { label: 'Read More', href: '/about-us/', style: 'gray', icon: '<img src="/images/double-arrow.svg" alt="Double arrow">' },
    ],
  },
  heroAbout: {
    className: 'half-width-bg',
    bgImage: '/images/about-us-hero.jpg',
    headingLine1: 'About',
    headingAccent: 'Us',
    text: "",
    buttons: [],
  },
  heroContact: {
    className: 'half-width-bg',
    bgImage: '/images/about-us-hero.jpg',
    headingLine1: 'Schedule a',
    headingAccent: 'Consultation',
    text: "",
    buttons: [],
  },
  heroResources: {
    className: 'half-width-bg',
    bgImage: '/images/about-us-hero.jpg',
    headingLine1: '',
    headingAccent: 'Resources',
    text: "",
    buttons: [],
  },
};
