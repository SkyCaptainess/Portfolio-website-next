type experienceDescription<T> = {
  date: T;
  title: T;
  company: T;
  companyURL: T;
  pointers: T[];
}[];

const foodpandaPointers = [
  'Engineered modern applications with a variety of different languages, framework and testing libraries such as React, Typescript, Jest and Cypress.',
  'Collaborated with other engineers to develop and ship new UI features on foodpanda ops portal.',
  'Enhanced APIs periodic tests by reducing test flakiness by 90% and implementing reattempts on timeout errors.',
  'Involved in setting up Drone CI with bash script as a CI/CD tool to automate unit testing which increased the team’s productivity by ~50%.',
];

const siaecPointers = [
  'Performed composite laminate and aluminium sheet metal repairs.',
  'Applied aircraft systems knowledge during OJTs on A380 & B787 aircraft.',
  'Exposed and familiarized to OEM manuals such as AMM and SRM in AirNav.',
];

export const experiences: experienceDescription<string> = [
  {
    date: 'Oct 2022 - Mar 2023',
    title: 'Software Engineer Trainee',
    company: 'foodpanda',
    companyURL: 'https://www.foodpanda.com',
    pointers: foodpandaPointers,
  },
  {
    date: 'Jan 2022 - Sep 2022',
    title: 'Aircraft Engineer Trainee',
    company: 'SIA Engineering Company',
    companyURL: 'https://www.siaec.com.sg',
    pointers: siaecPointers,
  },
];
