// About page content (Figma frame 13092:20524). Copy is from the Figma file.
// "Lorem ipsum" / "Lorem alo" / "Dolor Amet" are Figma placeholders, kept until PEP supplies copy.

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export const intro = {
  eyebrow: 'What PEP Does',
  headline: 'PEP is a nonpartisan watchdog organization.',
  body: "PEP believes in ethical prosecution, and in accountability when that standard isn't met. We're building the data, the stories, and the public case to change the law.",
  // Photo collage. Positions are Figma coordinates inside the collage box (see About/Intro.astro).
  collage: [
    { src: '/assets/about/about-intro-2.jpg', alt: 'PEP founder Iris Eytan speaking at a hearing', width: 547, height: 365, tab: { label: 'Lorem alo', tone: 'purple' } },
    { src: '/assets/about/about-intro-1.jpg', alt: 'PEP staff speaking to reporters outside a courthouse', width: 1280, height: 720, tab: { label: 'Lorem alo', tone: 'pink' } },
    { src: '/assets/about/about-intro-3.jpg', alt: 'PEP team members walking together outside', width: 1800, height: 1012, tab: { label: 'Lorem alo', tone: 'blue' } },
  ],
};

export const quoteM = {
  text: 'It has not been possible to sue prosecutors — even for intentional misconduct — since a 1976 Supreme Court decision that gave them absolute immunity. This is a shield that police, doctors, and other attorneys don’t have.',
};

export const pillars = [
  { tone: 'orange', title: 'Transparency &\nDocumentation', body: 'Building the searchable record of prosecutorial misconduct — court orders, case files, and sanction data — that no one else has assembled.' },
  { tone: 'pink', title: 'Public\nEducation', body: 'Making accessible, in plain language, what prosecutors do, what absolute immunity is, and why it matters to everyone.' },
  { tone: 'blue', title: 'Legislative\nWork', body: 'Turning the evidence into policy — a civil cause of action that lets people hold prosecutors accountable.' },
  { tone: 'purple', title: 'Legal\nResearch', body: 'Developing the doctrine, the data analysis, and the practitioner-grade materials behind the case for accountability.' },
];

export const wins = {
  eyebrow: 'The Wins',
  heading: 'Our track record',
  nextLabel: 'Next win',
  // Placeholder slides. Phase 2: these come from the CMS.
  items: [
    { tag: 'Dolor Amet', title: 'Lorem ipsum dolor sit amet, consectetur', body: lorem, cta: { label: 'Read Article', href: '#' }, image: { src: '/assets/about/about-win-slide.jpg', alt: '', width: 1025, height: 683 } },
    { tag: 'Dolor Amet', title: 'Lorem ipsum dolor sit amet, consectetur', body: lorem, cta: { label: 'Read Article', href: '#' }, image: { src: '/assets/about/about-thumb-1.jpg', alt: '', width: 1620, height: 628 } },
    { tag: 'Dolor Amet', title: 'Lorem ipsum dolor sit amet, consectetur', body: lorem, cta: { label: 'Read Article', href: '#' }, image: { src: '/assets/about/about-thumb-2.jpg', alt: '', width: 1800, height: 1350 } },
    { tag: 'Dolor Amet', title: 'Lorem ipsum dolor sit amet, consectetur', body: lorem, cta: { label: 'Read Article', href: '#' }, image: { src: '/assets/about/about-thumb-3.jpg', alt: '', width: 535, height: 482, fit: 'contain' } },
  ],
};

export const quoteL = {
  text: 'A quote could go here eiusmod tempor incididunt ut labore et dolore.',
  attribution: 'First and last name, title',
};

// Portraits are 720×959; `focus` is the vertical object-position (%) that reproduces Kelsey's crop in the 351×354 frame.
const person = (name, title, file, focus = 50) => ({ name, title, image: { src: `/assets/team/${file}.jpg`, width: 720, height: 959, focus } });

export const team = {
  heading: 'Our Team',
  sub: 'The people behind PEP.',
  groups: [
    { heading: 'Our Team', people: [
      person('Iris Eytan', 'Founder and CEO', 'team-iris-eytan'),
      person('Cat Ordoñez', 'Director of Policy', 'team-cat-ordonez'),
      person('Rachel Roberts', 'Director of Data Strategy', 'team-rachel-roberts', 38),
      person('Zoe Goldberg', 'Director of Marketing & Growth', 'team-zoe-goldberg'),
      person('Paige Searer', 'Director of Finance', 'team-paige-searer'),
      person('Beatrice Hayward', 'Content Producer', 'team-beatrice-hayward', 38),
    ]},
    { heading: 'Board of Directors', people: [
      person('Iris Eytan', 'Founder and CEO', 'team-iris-eytan'),
      person('Jane Fisher-Bryialsen', 'Board of Director', 'board-jane-fisher-bryialsen', 38),
      person('Renay Lynch', 'Board of Director', 'board-renay-lynch', 53),
    ]},
    { heading: 'Advisory Board', people: [
      person('Frank Quattrone', 'Advisory Board', 'advisory-frank-quattrone'),
      person('Brendan Sullivan', 'Advisory Board', 'advisory-brendan-sullivan', 42.5),
      person('Don Siegelman', 'Advisory Board', 'advisory-don-siegelman', 50),
      person('Clark Neily', 'Advisory Board', 'advisory-clark-neily', 47.7),
      person('Samuel Gross', 'Advisory Board', 'advisory-samuel-gross', 50),
      person('Alicia Cepeda Maule', 'Advisory Board', 'advisory-alicia-cepeda-maule', 44.4),
      person('Rob Cary', 'Advisory Board', 'advisory-rob-cary', 50),
      person('Rebecca Brown', 'Advisory Board', 'advisory-rebecca-brown', 50),
      person('Korey Wise', 'Advisory Board', 'advisory-korey-wise', 50),
      person('Ellen Yaroshefsky', 'Advisory Board', 'advisory-ellen-yaroshefsky', 38),
      person('Jabbar Collins', 'Advisory Board', 'advisory-jabbar-collins', 50),
    ]},
  ],
};

export const structure = {
  eyebrow: 'Lorem ipsum',
  heading: 'PEP Structure',
  sub: 'Protect Ethical Prosecutors is comprised of two corporate entities – PEP and the PEP Foundation. Donations to either organization are welcomed and encouraged, and all funds will be used to promote prosecutorial ethics.',
  entities: [
    { tone: 'purple', title: 'PEP Foundation', cta: { label: 'Donate to PEP Foundation', href: '/donate#foundation' },
      body: 'The PEP Foundation (501(c)(3)) supports the advocacy and education efforts of Protect Ethical Prosecutors. Its work centers on public education, research, and awareness around prosecutorial ethics and the harm caused when those standards fail. Donations to the PEP Foundation are tax deductible. Because federal law restricts the activities of organizations that receive tax-deductible donations, the Foundation does not fund or conduct lobbying.' },
    { tone: 'pink', title: 'PEP', cta: { label: 'Donate to PEP', href: '/donate' },
      body: 'PEP (501(c)(4)) funds and executes all lobbying efforts on behalf of Protect Ethical Prosecutors, pursuing policy and legislative change that holds prosecutors to ethical standards. Donations to PEP are not tax deductible, which is what allows PEP to advocate directly for legislative reform without restrictions.' },
  ],
};

export const closingLinks = [{ label: 'Contact us', href: '/contact' }];
