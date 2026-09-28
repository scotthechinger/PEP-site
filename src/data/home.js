// Homepage content. Copy is from the PEP Website Language Document v8 (9/22, rev. 9/25) — the source of truth over Figma.
// Lorem ipsum is a Figma placeholder, kept until PEP supplies copy. "FLAG:" comments mark where v8 and the Figma layout disagree.

export const hero = {
  eyebrow: 'Protect Ethical Prosecutors', // FLAG: v8 has an eyebrow; the Figma hero has no slot for it. Not rendered.
  headline: 'The most powerful people in the legal system are the least accountable.',
  accent: "We're changing that.", // set in the background color in Figma (as designed)
  sub: "Absolute immunity shields prosecutors from being sued for misconduct, even when it's intentional and it destroys a life. PEP is a nonpartisan watchdog building the data, the stories, and the public case to change that.",
  image: { src: '/assets/hero.jpg', alt: 'A father holding his young daughter close, cheek to cheek', width: 2400, height: 1207 },
  cta: { label: 'Watch the film', href: '/stories#film' },
  // FLAG: v8 has a second button, "Learn more ↓" (scrolls to the slider). Figma has one button. Not rendered.
};

// Block 01. `illustration` names a file in src/illustrations (temporary art until Kelsey supplies per-stage imagery).
// v8 splits Plea from Trial: seven stages + "Why?" (Figma had six + Why). Each stage body is a list of paragraphs; `label` renders as a small mono caption.
export const stageBlock = {
  scrollCue: 'Move through the case',
  heading: 'Absolute immunity in action',
  cta: { label: 'Explore the issue', href: '/issue' },
};

export const stages = [
  {
    tab: 'Start', eyebrow: 'The anatomy of a case', heading: 'Watch how it happens.',
    body: [{ text: "When a prosecutor breaks the rules meant to keep a case fair – like hiding evidence, using false testimony, charging someone without cause – it's called prosecutorial misconduct. It can happen at any stage of a case. Here's what this looks like in action, and what it costs." }],
    href: '/issue', image: { src: '/assets/slide-stage-start.jpg', alt: 'A desk seen from above: keyboard, a manila case folder, a plant and a mouse, rendered in orange halftone', width: 2000, height: 1334 },
  },
  {
    tab: '01: Charging', eyebrow: 'Stage 01 · Charging', heading: 'A prosecutor brings the case.',
    body: [
      { text: "Once police finish investigating a crime — whether or not that includes an arrest — the case goes to a prosecutor. They review what's been gathered and decide whether to charge a person with a crime, and if so, which charges to file and how serious they'll be. Charges are formalized through a complaint, or in some cases a grand jury indictment, where prosecutors present proposed charges and evidence to a grand jury." },
      { label: 'How misconduct shows up here', text: 'Charging someone without enough evidence to justify it, or piling on additional or harsher charges than the case supports to pressure someone into a plea deal. Charging decisions are made almost entirely behind closed doors, and grand jury proceedings are secret by law — which makes misconduct at this stage among the hardest to detect.' },
      { label: 'Example', text: 'In one Colorado case, a grand jury indicted a former law-enforcement investigator. There is no judge and no defense attorney in a grand jury room — only the prosecutor, who decides what the grand jurors see. The charges were later dismissed.' }, // v8 flag: PEP to confirm the facts before publishing
    ],
    href: '/issue#charging', illustration: 'charging',
  },
  {
    tab: '02: Disclosure', eyebrow: 'Stage 02 · Evidence & Disclosure', heading: 'The law requires prosecutors to turn over evidence that could help the defense.',
    body: [
      { text: "A prosecutor's job is to seek justice — and so the law requires them to hand over all evidence, even evidence that cuts against their own case. If they don't, a court can sanction the prosecutor or throw out the case. But only if the defense finds out what was hidden." },
      { label: 'How misconduct shows up here', text: "Hiding, altering, or destroying evidence so the defense can't use it and the jury never hears about it. This is the most common form of prosecutorial misconduct — and the hardest to catch, because what was hidden often stays hidden." },
      { label: 'Example', text: "In one Colorado case, prosecutors presented witnesses who testified that a fire had been set deliberately — without disclosing that the state's own fire expert had already told them the lab results proved no such thing." },
    ],
    href: '/issue#disclosure', illustration: 'disclosure',
  },
  {
    tab: '03: Plea', eyebrow: 'Stage 03 · Plea', heading: 'Most cases never reach a jury, but end in a plea deal.',
    body: [
      { text: "Deciding whether to take a plea isn't just about guilt or innocence. Many people take a deal to get out of jail while they wait for trial, or because the gap between the plea offer and what they'd face if convicted at trial — years, sometimes decades, more — makes the risk feel too high, even when they're innocent. And when evidence that could have helped their case has been hidden, they're making that decision without complete information. Over 90% of criminal convictions are the result of a plea bargain or dismissal, not a trial." },
      { label: 'How misconduct shows up here', text: 'Withholding evidence that could have helped the defense, overstating how strong the case is, or piling on additional charges to pressure someone into taking a deal rather than risking trial.' },
      // v8: EXAMPLE is a placeholder — PEP to supply a plea-stage case.
    ],
    href: '/issue#plea', illustration: 'plea',
  },
  {
    tab: '04: Trial', eyebrow: 'Stage 04 · Trial', heading: "For the small share of cases that go to trial, prosecutors are in the driver's seat.",
    body: [
      { text: "At trial, prosecutors carry the full power of the government — investigators, forensic experts in nearly every field, and agencies like the FBI. Defense teams don't have those resources, and they don't have the evidence unless the prosecutor hands it over. That's exactly why prosecutors are held to a higher standard: the ethics rules call them a \"minister of justice,\" not simply an advocate, whose job is to seek the truth and not just to win. When that power is misused, the whole trial becomes unreliable, and it violates the defendant's constitutional right to a fair trial." },
      { label: 'How misconduct shows up here', text: "Discrimination in jury selection, putting on testimony the prosecutor knows is false, pressuring a witness into a version of events that isn't true, or telling a jury things the evidence doesn't support." },
      { label: 'Example', text: 'In one New York case, the prosecutor swore under oath that no witness had been promised anything for testifying. That was false — all three of the key prosecution witnesses had received benefits.' }, // v8 flag: consent check on this case is open
    ],
    href: '/issue#trial', illustration: 'trial',
  },
  {
    tab: '05: Conviction', eyebrow: 'Stage 05 · Conviction', heading: 'A conviction can cost someone years – sometimes their whole life.',
    body: [
      { text: 'A conviction can mean prison time — but even without it, the conviction alone can be devastating: a lost job, trouble getting the next one, a lost home, a family pulled apart, a professional license taken away, a ruined reputation, and in many cases the stigma of a criminal record that follows a person for life. Victims lose, too. Convicting the wrong person lets the trail go cold and whoever was responsible go free — and if the conviction is ever overturned, the victim has to relive it all, and the public loses faith in the system.' },
      { label: 'How misconduct shows up here', text: 'By this stage, the damage is already done. A conviction locks in the misconduct, starting the clock on years no one can give back. Prosecutors are rarely held responsible, and may even be promoted or elected to higher office for "winning" the conviction.' },
    ],
    href: '/issue#conviction', illustration: 'conviction',
  },
  {
    tab: '06: Appeal', eyebrow: 'Stage 06 · Appeal & Post-Conviction', heading: 'Occasionally, long after a conviction, a court finds the misconduct and puts it in writing.',
    body: [
      { text: "Not every case gets reexamined, and most misconduct is never uncovered. When it is, it can take years — sometimes decades, and appeal after appeal. But when a judge finally does find it, they say so on the record. Those written findings, in the court's own words, are some of the clearest evidence of how pervasive this problem is." },
      // v8: placeholder for surfaceable judicial-order quotes ("Enough is enough." etc.), sourced by district and year.
    ],
    href: '/issue#appeal', illustration: 'appeal',
  },
  {
    tab: '07: After', eyebrow: 'Stage 07 · What happens to the prosecutor', heading: 'What happens to the prosecutor?', // FLAG: v8 gives this panel no headline; the card has a headline slot, so the section title is used.
    body: [
      { text: "When misconduct is uncovered — the hidden evidence, the lost years, the judge's findings — here's what typically happens to the prosecutor:" },
      { beat: 'Nothing.' },
      { text: "Sometimes, it's the opposite: a promotion, an election to higher office, or even a judgeship." },
    ],
    href: '/issue#after', illustration: 'after',
  },
  {
    tab: 'Why?', eyebrow: 'Why?', heading: 'Because of a rule called absolute immunity.',
    body: [{ text: "Invented by the Supreme Court in 1976, absolute immunity means prosecutors can't be sued for misconduct they commit while prosecuting a case. It applies even when a court finds that misconduct was intentional." }],
    href: '/issue#absolute-immunity', illustration: 'why',
  },
];

// Block 02 stat cards (v8 1.3). Source lines live on the card back (the flip); v8 puts the citation on The Evidence page.
export const statsBlock = {
  heading: 'A national problem, by the numbers',
  movement: 'Prosecutorial misconduct is pervasive and harmful', // FLAG: v8 "movement" line; no slot in the Figma stat block. Not rendered.
  cta: { label: 'View the evidence', href: '/evidence' },
};
export const stats = [
  { prefix: '~', value: 37, suffix: '%', text: 'of exonerations involved prosecutorial misconduct.', source: 'Based on 2021–2025 exonerations documented in the National Registry of Exonerations, as of September 18, 2026', href: '/evidence#numbers', colors: { stat: '#E9C7FF', desc: '#F7ECFE', fold: '#9D00FF' } },
  { prefix: '', value: 18, suffix: ' years', text: 'average time served in exonerations involving prosecutorial misconduct.', source: 'Based on 2021–2025 exonerations documented in the National Registry of Exonerations, as of September 18, 2026', href: '/evidence#numbers', colors: { stat: '#FF9BC6', desc: '#FFDFDF', fold: '#FF006F' } },
  { prefix: '', value: 70, suffix: '%', text: 'of death row exonerations involved prosecutorial misconduct.', source: 'Death Penalty Information Center', href: '/evidence#numbers', colors: { stat: '#9ACCFF', desc: '#EAF1FB', fold: '#007BFF' } },
];

export const colorado = {
  headline: 'Data compiled in Colorado paints a picture of the issue.',
  body: [
    'In Colorado, PEP is tracking and documenting prosecutorial misconduct through trial-level cases and court of appeals opinions. What the data shows is not unique to the state, but what every state would find if it looked.',
    'Colorado is also where accountability is closest to reach: 83% of Colorado voters — across the political spectrum — support removing absolute immunity for prosecutors. (PEP polling, January 2026.)',
    'What gets proven in one state becomes the case for every state — including yours.',
  ],
  cta: { label: 'View the evidence', href: '/evidence' },
  image: { src: '/assets/colorado.jpg', width: 1741, height: 724 },
};

export const quote = {
  text: 'The prosecutor is a minister of justice, not merely an advocate.',
  attribution: 'American Bar Association, Model Rules of Professional Conduct, Rule 3.8, Comment [1]',
};

// FLAG: v8 has no copy for the signup band (its 9/23 placeholder audit notes the form appears nowhere in the document). Figma copy kept.
export const newsletter = {
  heading: 'Stay in the loop',
  body: 'Stay in the loop. Get PEP updates delivered to your inbox. Unsubscribe anytime.',
};

export const stories = {
  heading: 'The people harmed by prosecutorial misconduct',
  sub: 'Real cases, told in full — what prosecutors did, what it cost, and what came after.',
  cta: { label: 'Access the stories', href: '/stories' },
  film: { label: 'Watch the film', href: '/stories#film' },
  items: [
    { year: '2019', name: 'Clarence Moses El', href: '/stories/clarence-moses-el', image: { src: '/assets/story-clarence-moses-el.jpg', width: 1000, height: 1000, fit: 'contain' } },
    { year: '2022', name: 'Barry Morphew', href: '/stories/barry-morphew', image: { src: '/assets/story-barry-morphew.jpg', width: 690, height: 569 } },
    { year: '2021', name: 'Micah Kimball', href: '/stories/micah-kimball', image: { src: '/assets/story-micah-kimball.jpg', width: 447, height: 447, fit: 'zoom-micah' } },
    { year: '2020', name: 'Ray Marshall', href: '/stories/ray-marshall', image: { src: '/assets/story-ray-marshall.jpg', width: 1128, height: 848 } },
  ],
};

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud';
export const whatsNew = {
  marker: '04 — From PEP, and from the press', // FLAG: v8 block marker; no slot in Figma. Not rendered.
  heading: "What's new",
  sub: 'The latest coverage of prosecutorial misconduct, from PEP and from news outlets across the country.',
  blog: { heading: 'Blog', sub: 'Written by PEP.', cta: { label: 'All posts', href: '/resources#blog' }, posts: [
    { title: 'Lorem Ipsum Dolor Amet', excerpt: lorem, href: '#' },
    { title: 'Lorem Ipsum Dolor Amet', excerpt: lorem, href: '#' },
    { title: 'Lorem Ipsum Dolor Amet', excerpt: lorem, href: '#' },
  ]},
  news: { heading: 'In the news', sub: 'Written about the issue, elsewhere.', cta: { label: 'All coverage', href: '/resources#news' }, posts: [
    { title: 'Lorem Ipsum Dolor Amet', excerpt: lorem, href: '#', tag: 'Dolor Amet' },
    { title: 'Lorem Ipsum Dolor Amet', excerpt: lorem, href: '#', tag: 'Dolor Amet' },
    { title: 'Lorem Ipsum Dolor Amet', excerpt: lorem, href: '#', tag: 'Dolor Amet' },
  ]},
};

// Block 05 (v8 1.7). FLAG: Figma's headline is "Let's change our system together." with "together." as the accent word; v8's is "Let's change this" with no accent word and no paragraph.
export const closing = {
  headline: "Let's change",
  accent: 'this',
  body: '',
  links: [
    { label: 'Share', href: '/take-action#share', text: 'Tell someone else. Most people have never heard of absolute immunity — changing that starts here.' },
    { label: 'Join the movement', href: '/take-action#join', text: 'Sign up for updates and be part of the push for accountability.' },
    { label: 'Report misconduct', href: '/take-action#report', text: 'Have you witnessed or experienced prosecutorial misconduct? Tell us.' },
    { label: 'Donate', href: '/donate', text: 'Support the data, the stories, and the case for change.' },
  ],
  image: { src: '/assets/closing-courthouse.jpg', alt: 'Stone columns and pediment of a courthouse against a blue sky', width: 1600, height: 1200 },
};
