// Take Action page content (Figma frame 13122:3377). Copy is from the Figma file.
// `tone` picks the accent family: title = tone-300, body = tone-100, fold + arrow = tone-500.

export const intro = {
  eyebrow: 'Take Action',
  headline: 'Absolute immunity lasts because almost no one knows it exists.',
  body: "It wasn't passed by any legislature, and it can be changed. Every step below helps, whether it takes thirty seconds or you've lived through it.",
  cta: { label: 'Contact us', href: '/contact' },
};

export const actions = [
  {
    id: 'share', tone: 'orange', title: 'Share\nInformation',
    body: 'Tell someone else. Most people have never heard of absolute immunity — changing that starts here.',
    cta: { label: 'Download fact sheet', href: '/resources#fact-sheet' },
  },
  {
    id: 'join', tone: 'pink', title: 'Join the\nMovement',
    body: 'Sign up for updates and be part of the push for accountability.',
    cta: { label: 'Sign up for newsletter', href: '#newsletter' },
  },
  {
    id: 'report', tone: 'blue', title: 'Report\nMisconduct',
    body: 'Have you witnessed or experienced prosecutorial misconduct? Tell us.',
    cta: { label: 'Report a misconduct', href: '/report' },
  },
  {
    id: 'donate', tone: 'purple', title: 'Donate\nto PEP',
    body: 'Support the data, the stories, and the case for change.',
    cta: { label: 'Donate to PEP', href: '/donate' },
  },
];

// Closing CTA on this page links to the Issue page only (per Figma).
export const closingLinks = [{ label: 'The Issue', href: '/issue' }];
