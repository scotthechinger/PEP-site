// About page content (Figma frame 13092:20524). Copy is from the PEP Website Language Document v8 (source of truth over Figma); v8 itself notes its About copy still has to be fitted to Kelsey's revised layout.
// "Lorem ipsum" / "Lorem alo" / "Dolor Amet" are Figma placeholders, kept until PEP supplies copy.

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export const intro = {
  eyebrow: 'What PEP Does',
  headline: 'Protect Ethical Prosecutors is a nonpartisan watchdog organization committed to stopping prosecutorial misconduct.', // FLAG: v8 headline is ~2.5× the Figma one; the intro block grows past its 690px design height to hold it.
  body: "PEP believes in ethical prosecution — and in accountability when that standard isn't met. Absolute immunity, a legal doctrine invented by the Supreme Court in 1976, shields prosecutors from civil liability even for intentional misconduct. Unlike police officers, doctors, and other attorneys, prosecutors cannot be sued for the harm they cause. PEP is building the data, the stories, and the public case to change that.", // v8: "PEP will rework the mission paragraph."
  // Photo collage. Positions are Figma coordinates inside the collage box (see About/Intro.astro).
  collage: [
    { src: '/assets/about/about-intro-2.jpg', alt: 'PEP founder Iris Eytan speaking at a hearing', width: 547, height: 365, tab: { label: 'Lorem alo', tone: 'purple' } },
    { src: '/assets/about/about-intro-1.jpg', alt: 'PEP staff speaking to reporters outside a courthouse', width: 1280, height: 720, tab: { label: 'Lorem alo', tone: 'pink' } },
    { src: '/assets/about/about-intro-3.jpg', alt: 'PEP team members walking together outside', width: 1800, height: 1012, tab: { label: 'Lorem alo', tone: 'blue' } },
  ],
};

// FLAG: this quote block is in Figma but not in v8, and v8's intro body now says the same thing. Kept as designed pending a call.
export const quoteM = {
  text: 'It has not been possible to sue prosecutors — even for intentional misconduct — since a 1976 Supreme Court decision that gave them absolute immunity. This is a shield that police, doctors, and other attorneys don’t have.',
};

export const pillars = [
  { tone: 'orange', title: 'Transparency and\ndocumentation', body: 'Building the searchable record of prosecutorial misconduct that no one else has assembled: court orders, case files, and sanction data.' },
  { tone: 'pink', title: 'Public\neducation', body: 'Making accessible, in plain language, what prosecutors do, what absolute immunity is, and why it matters to everyone.' },
  { tone: 'blue', title: 'Legal\nresearch', body: 'Developing the doctrine, the data analysis, and the practitioner-grade materials behind the case for accountability.' },
  { tone: 'purple', title: 'Legislative\nwork', body: 'Turning the evidence into policy: a civil cause of action that lets people hold prosecutors accountable.' },
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

// FLAG: v8 says "Do not populate names beyond what PEP confirms — the public board differs from the internal project team." These are the names in Figma; confirm with PEP.
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

// v8 5.4 — rewritten from the Figma text, which v8 says had the tax logic inverted. Legal characterizations: v8 flags Cat's sign-off as still needed.
export const structure = {
  eyebrow: 'Lorem ipsum', // Figma placeholder; v8 has no eyebrow here
  heading: 'Two organizations, one mission',
  sub: "Protect Ethical Prosecutors is made up of two entities. Federal law limits what an organization can do if it accepts tax-deductible donations, so the work is divided: PEP funds and executes all lobbying, and the PEP Foundation supports advocacy and education. Support for either goes to the same end — promoting prosecutorial ethics and deterring the misconduct that upends people's lives.",
  entities: [
    { tone: 'purple', title: '501(c)(3) · PEP Foundation', cta: { label: 'Donate to PEP Foundation', href: '/donate#foundation' },
      body: 'The Foundation supports the advocacy and education side of the work: building public understanding of what prosecutors do, what ethical standards require, and what happens when those standards fail. Because federal law restricts organizations that accept tax-deductible donations, the Foundation does not fund or conduct lobbying. Gifts are tax deductible.' },
    { tone: 'pink', title: '501(c)(4) · PEP', cta: { label: 'Donate to PEP', href: '/donate' },
      body: 'PEP funds and executes all lobbying on behalf of Protect Ethical Prosecutors, pursuing the policy and legislative change that holds prosecutors accountable. Because that work is unrestricted, gifts to PEP are not tax deductible.' },
  ],
  footnote: "Contact us for Zelle information if you're giving $500 or more.",
};

export const closingLinks = [{ label: 'Contact us', href: '/contact' }];
