// Homepage content. Copy comes from the approved wireframe and the Figma file.
// Lorem ipsum is a Figma placeholder, kept until PEP supplies copy.

export const hero = {
  headline: 'The most powerful people in the legal system are the least accountable.',
  accent: "We're changing that.", // set in the background color in Figma (as designed)
  sub: "Absolute immunity shields prosecutors from being sued for misconduct, even when it's intentional and it destroys a life. PEP is a nonpartisan watchdog building the data, the stories, and the public case to change that.",
  image: { src: '/assets/hero.jpg', alt: 'A father holding his young daughter close, cheek to cheek', width: 2400, height: 1207 },
  cta: { label: 'Watch Film', href: '#film' },
};

// Stage slider. `illustration` names a file in src/illustrations (temporary art until Kelsey supplies per-stage imagery).
export const stages = [
  {
    tab: 'Start', eyebrow: 'The anatomy of a case', heading: 'Watch how it happens.',
    body: "When a prosecutor breaks the rules meant to keep a case fair – hiding evidence, using false testimony, charging someone without cause – it's called prosecutorial misconduct. It happens at any stage of a case.",
    href: '/issue', image: { src: '/assets/slide-stage-start.jpg', alt: 'A desk seen from above: keyboard, a manila case folder, a plant and a mouse, rendered in orange halftone', width: 2000, height: 1334 },
  },
  {
    tab: '01: Charging', eyebrow: 'Stage 01 · Charging', heading: 'A prosecutor brings the case.',
    body: 'The prosecutor reviews the police investigation and decides whether to charge, what to charge, and how serious the charges will be. Misconduct here means charging someone without enough evidence to justify it, or piling on additional or harsher charges than the case supports to pressure someone into a plea deal. Charging decisions are made almost entirely behind closed doors.',
    href: '/issue#charging', illustration: 'charging',
  },
  {
    tab: '02: Disclosure', eyebrow: 'Stage 02 · Disclosure', heading: 'The law requires prosecutors to turn over evidence that could help the defense.',
    body: "Misconduct here means hiding, altering, or destroying evidence so the defense can't use it and the jury never hears about it. This is the most common form of prosecutorial misconduct — and the hardest to catch, because what was hidden often stays hidden.",
    href: '/issue#disclosure', illustration: 'disclosure',
  },
  {
    tab: '03: Trial', eyebrow: 'Stage 03 · Trial', heading: "For the small share of cases that go to trial, prosecutors are in the driver's seat.",
    body: "Misconduct here includes discrimination in jury selection, putting on testimony the prosecutor knows is false, pressuring a witness into a version of events that isn't true, or telling a jury things the evidence doesn't support.",
    href: '/issue#trial', illustration: 'trial',
  },
  {
    tab: '04: Conviction', eyebrow: 'Stage 04 · Conviction', heading: 'A conviction can cost someone years – sometimes their whole life.',
    body: 'A conviction can mean prison time — but even without it, the conviction alone can be devastating: a lost job, trouble getting the next one, a lost home, a family pulled apart. By this stage, the damage is already done.',
    href: '/issue#conviction', illustration: 'conviction',
  },
  {
    tab: '05: Appeal', eyebrow: 'Stage 05 · Appeal', heading: 'Occasionally, long after a conviction, a court finds the misconduct and puts it in writing.',
    body: 'Most cases are never reexamined, so most misconduct stays hidden. When a judge does put a finding in writing, it becomes part of the clearest record there is of how pervasive the problem is.',
    href: '/issue#appeal', illustration: 'appeal',
  },
  {
    tab: '06: After', eyebrow: 'Stage 06 · After', heading: 'What happens to the prosecutor?',
    body: "When misconduct is uncovered — the hidden evidence, the lost years, the judge's findings — here's what typically happens to the prosecutor: Nothing. Fewer than 2% of prosecutors who commit misconduct face any professional consequence, even after a court has found a violation.",
    href: '/issue#after', illustration: 'after',
  },
  {
    tab: 'Why?', eyebrow: 'Why?', heading: 'Absolute immunity.',
    body: "Prosecutors can't be sued for misconduct they commit while prosecuting a case — even when it's intentional, and even when it destroys a life. The Supreme Court created absolute immunity in 1976 and has turned down every chance to narrow it since.",
    href: '/issue#absolute-immunity', illustration: 'why',
  },
];

// Stat cards. Sources per the wireframe. (Wireframe says 37% where Figma says ~35% — flagged, not changed.)
export const stats = [
  { prefix: '~', value: 35, suffix: '%', text: 'exonerations involve prosecutorial misconduct', source: 'National Registry of Exonerations, 2021–2025', href: '/evidence#exonerations', colors: { stat: '#E9C7FF', desc: '#F7ECFE', fold: '#9D00FF' } },
  { prefix: '', value: 44, suffix: '%', text: 'wrongful convictions involve hiding evidence that could have helped the defense', source: 'National Registry of Exonerations', href: '/evidence#brady', colors: { stat: '#FF9BC6', desc: '#FFDFDF', fold: '#FF006F' } },
  { prefix: '', value: 70, suffix: '%', text: 'wrongful murder convictions involved official misconduct', source: 'Death Penalty Information Center', href: '/evidence#murder', colors: { stat: '#9ACCFF', desc: '#EAF1FB', fold: '#007BFF' } },
];

export const colorado = {
  headline: 'The problem is national. The record is being built in Colorado.',
  body: "PEP has built the most complete record of prosecutorial misconduct in the country in Colorado. What it shows is not unique to the state. It is what every state would find if it looked. Colorado is also where accountability is closest to reach: 83% of Colorado voters — across the political spectrum — support ending absolute immunity for prosecutors. What gets proven in one state becomes the case for every state. That's why this matters no matter where you live.",
  cta: { label: 'View all evidence', href: '/evidence' },
  image: { src: '/assets/colorado.jpg', width: 1741, height: 724 },
};

export const quote = {
  text: 'The prosecutor is a minister of justice, not merely an advocate.',
  attribution: 'American Bar Association · Model Rules of Professional Conduct, Rule 3.8',
};

export const newsletter = {
  heading: 'Stay in the loop',
  body: 'Stay in the loop. Get PEP updates delivered to your inbox. Unsubscribe anytime.',
};

export const stories = {
  heading: 'Stories',
  sub: 'Real stories by people victimized by prosecutorial misconduct',
  cta: { label: 'Access stories', href: '/stories' },
  items: [
    { year: '2019', name: 'Clarence Moses El', href: '/stories/clarence-moses-el', image: { src: '/assets/story-clarence-moses-el.jpg', width: 1000, height: 1000, fit: 'contain' } },
    { year: '2022', name: 'Barry Morphew', href: '/stories/barry-morphew', image: { src: '/assets/story-barry-morphew.jpg', width: 690, height: 569 } },
    { year: '2021', name: 'Micah Kimball', href: '/stories/micah-kimball', image: { src: '/assets/story-micah-kimball.jpg', width: 447, height: 447, fit: 'zoom-micah' } },
    { year: '2020', name: 'Ray Marshall', href: '/stories/ray-marshall', image: { src: '/assets/story-ray-marshall.jpg', width: 1128, height: 848 } },
  ],
};

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud';
export const whatsNew = {
  heading: "What's new",
  sub: "Two different things, kept distinct: the blog is PEP's own writing — analysis, explainers, and updates from the work. In the news is coverage of prosecutorial misconduct and absolute immunity reported by journalists elsewhere.",
  blog: { heading: 'Blog', cta: { label: 'All posts', href: '/blog' }, posts: [
    { title: 'Lorem Ipsum Dolor Amet', excerpt: lorem, href: '#' },
    { title: 'Lorem Ipsum Dolor Amet', excerpt: lorem, href: '#' },
    { title: 'Lorem Ipsum Dolor Amet', excerpt: lorem, href: '#' },
  ]},
  news: { heading: 'News', cta: { label: 'All coverage', href: '/news' }, posts: [
    { title: 'Lorem Ipsum Dolor Amet', excerpt: lorem, href: '#', tag: 'Dolor Amet' },
    { title: 'Lorem Ipsum Dolor Amet', excerpt: lorem, href: '#', tag: 'Dolor Amet' },
    { title: 'Lorem Ipsum Dolor Amet', excerpt: lorem, href: '#', tag: 'Dolor Amet' },
  ]},
};

export const closing = {
  headline: 'Let’s change our system',
  accent: 'together.',
  body: lorem,
  links: [
    { label: 'Share', href: '/take-action#share' },
    { label: 'Join', href: '/take-action#join' },
    { label: 'Report', href: '/take-action#report' },
    { label: 'Donate', href: '/donate' },
  ],
  image: { src: '/assets/closing-courthouse.jpg', alt: 'Stone columns and pediment of a courthouse against a blue sky', width: 1600, height: 1200 },
};
