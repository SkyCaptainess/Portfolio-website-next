type experienceDescription = {
  date: string;
  title: string;
  company: string;
  companyURL: string;
  pointers: string[];
}[];

const foodpandaPointers = [
  'Engineered modern applications with a variey of different languages, framework and testing libraries such as React, Typescript, Jest and Cypress.',
  'Collaborated with other engineers to develop and ship new UI features on foodpanda ops portal.',
  'Enhanced APIs periodic tests by reducing test flakiness and implementing reattempts on timeout errors.',
];

const siaecPointers = [
  'Performed composite laminate and aluminium sheet metal repairs.',
  'Applied aircraft systems knowledge during OJTs on A380 & B787 aircraft.',
  'Exposed and familiarized to OEM manuals such as AMM and SRM in AirNav.',
];

export const experiences: experienceDescription = [
  {
    date: 'Oct 2022 - Present',
    title: 'Software Engineer Trainee',
    company: 'foodpanda',
    companyURL: 'https://www.foodpanda.com',
    pointers: foodpandaPointers,
  },
  {
    date: 'Jan 2022 - Sep 2022',
    title: 'Aircraft Engineer Trainee',
    company: 'SIA Engineering Company',
    companyURL: 'https://www.siaec.com',
    pointers: siaecPointers,
  },
];
