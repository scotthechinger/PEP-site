// Take Action page content (Figma frame 13122:3377). Copy is from the PEP Website Language Document v8 (source of truth over Figma).
// `tone` picks the accent family: title = tone-300, body = tone-100, fold + arrow = tone-500.

export const intro = {
  eyebrow: 'Take Action',
  headline: 'Absolute immunity lasts because almost no one knows it exists.', // FLAG: Figma-only. v8 gives this page a lead sentence but no headline; kept so the slot isn't empty.
  body: 'Ways to help, from the smallest step to the biggest: share, sign up, report, and donate.', // v8 lead
  cta: { label: 'Contact us', href: '/contact' },
};

// Card CTA labels are Figma's; v8 has none. FLAG: v8 has open questions on where signups route and on the Donate destination.
export const actions = [
  {
    id: 'share', tone: 'orange', title: 'Share',
    body: 'Tell someone else. Most people have never heard of absolute immunity — changing that starts here.',
    cta: { label: 'Download fact sheet', href: '/resources#fact-sheet' },
  },
  {
    id: 'join', tone: 'pink', title: 'Join the\nmovement',
    body: 'Sign up for updates and be part of the push for accountability.',
    cta: { label: 'Sign up for newsletter', href: '#newsletter' },
  },
  {
    id: 'report', tone: 'blue', title: 'Report\nmisconduct',
    body: 'Have you witnessed or experienced prosecutorial misconduct? Tell us.',
    cta: { label: 'Report a misconduct', href: '/report' },
  },
  {
    id: 'donate', tone: 'purple', title: 'Donate',
    body: 'Support the data, the stories, and the case for change.',
    cta: { label: 'Donate to PEP', href: '/donate' },
  },
];

// Closing CTA on this page links to the Issue page only (per Figma).
export const closingLinks = [{ label: 'The Issue', href: '/issue' }];
