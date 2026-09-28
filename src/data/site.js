// Site-wide content. Change the nav once here and every page updates.
// Phase 2: these objects are what Sanity will supply at build time.

export const site = {
  name: 'Protect Ethical Prosecutors',
  short: 'PEP',
  description:
    "Absolute immunity shields prosecutors from being sued for misconduct, even when it's intentional and it destroys a life. PEP is a nonpartisan watchdog building the data, the stories, and the public case to change that.",
  year: 2026,
};

// Primary nav (header + slide-down menu). Donate is a pill, so it's kept separate.
export const nav = [
  { label: 'Issue', href: '/issue' },
  { label: 'Evidence', href: '/evidence' },
  { label: 'Stories', href: '/stories' },
  { label: 'About PEP', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Take Action', href: '/take-action' },
];
export const donate = { label: 'Donate', href: '/donate' };

// Footer link columns (Figma "Footer" component 13089:385)
export const footer = {
  blurb: 'A nonpartisan watchdog building the data, the stories, and the public case for prosecutorial accountability.',
  columns: [
    { key: 'learn', title: 'Learn', links: [
      { label: 'The Issue', href: '/issue' },
      { label: 'The Evidence', href: '/evidence' },
      { label: 'Stories', href: '/stories' },
    ]},
    { key: 'act', title: 'Act', links: [
      { label: 'Take Action', href: '/take-action' },
      { label: 'Report Misconduct', href: '/take-action#report' },
      { label: 'Donate', href: '/donate' },
    ]},
    { key: 'about', title: 'About', links: [
      { label: 'About PEP', href: '/about' },
      { label: 'News & Resources', href: '/resources' },
      { label: 'Contact', href: '/contact' },
    ]},
    { key: 'doctrine', title: 'The Doctrine', links: [
      { label: 'What is absolute immunity', href: '/issue#absolute-immunity' },
      { label: 'The power of prosecutors', href: '/issue#power' },
    ]},
    { key: 'misconduct', title: 'Types of Misconduct', links: [
      { label: 'Hiding evidence', href: '/issue#hiding-evidence' },
      { label: 'Destroying evidence', href: '/issue#destroying-evidence' },
      { label: 'Fabricating evidence', href: '/issue#fabricating-evidence' },
      { label: 'False testimony', href: '/issue#false-testimony' },
      { label: 'Charging without probable cause', href: '/issue#charging' },
      { label: 'Improper arguments to the jury', href: '/issue#improper-arguments' },
      { label: 'Discrimination in jury selection', href: '/issue#jury-selection' },
    ]},
    { key: 'fails', title: 'Why Accountability Fails', links: [
      { label: 'Criminal prosecution', href: '/issue#criminal-prosecution' },
      { label: 'Professional discipline', href: '/issue#discipline' },
      { label: 'Court sanctions', href: '/issue#sanctions' },
      { label: 'Elections & firing', href: '/issue#elections' },
    ]},
  ],
};
