const ukUniversities = [
  ["Durham University", 1],
  ["Kings Education", 2],
  ["University of Leeds", 3],
  ["University of Bath", 4],
  ["University of York", 5],
  ["University of East Anglia", 6],
  ["University of Exeter", 7],
  ["Newcastle University", 8],
  ["University of Sussex", 9],
  ["University of Nottingham", 10],
  ["University of Surrey", 11],
  ["Queen Mary University of London", 12],
  ["University of Sheffield", 13],
  ["University of Bristol", 14],
  ["University of Reading", 15],
  ["University of Southampton", 16],
  ["De Montfort University", 17],
  ["University of Kent", 18],
  ["University of Liverpool", 19],
  ["University for the Creative Arts", 20],
  ["University of Essex", 21],
  ["Northumbria University", 22],
  ["Cardiff University", 23],
  ["Bournemouth University", 24],
  ["University of Leicester", 25],
  ["Sheffield Hallam University", 26],
  ["Birmingham City University", 27],
  ["Regent's University London", 28],
  ["Queen's University Belfast", 29],
  ["UWE Bristol", 30],
  ["Manchester Metropolitan University", 32],
  ["Cranfield University", 33],
  ["University of Brighton", 34],
  ["Royal Holloway, University of London", 36],
  ["Aston University", 37],
  ["University of Westminster", 39],
  ["University of Portsmouth", 41],
  ["University of Greenwich", 44],
  ["Kingston University London", 47],
  ["University of Huddersfield", 48],
  ["Middlesex University London", 49],
  ["Bangor University", 50],
  ["Oxford Brookes University", 51],
  ["University of Plymouth", 52],
  ["University of Lincoln", 53],
  ["Norwich University of the Arts", 54],
  ["University of Sunderland", 55],
  ["University of Hull", 56],
  ["SOAS University of London", 57],
  ["Goldsmiths, University of London", 58],
  ["Coventry University", 59],
  ["Liverpool John Moores University", 60],
  ["London Metropolitan University", 61],
  ["St Mary's University, Twickenham", 62],
  ["Heriot-Watt University", 66],
] as const;

const australianUniversities = [
  "UNSW Sydney",
  "University of Sydney",
  "Monash University",
  "University of Melbourne",
  "Australian National University",
  "University of Queensland",
  "University of Technology Sydney",
  "University of Western Australia",
  "Macquarie University",
  "Deakin University",
  "Queensland University of Technology",
  "University of Wollongong",
  "Curtin University",
  "La Trobe University",
  "RMIT University",
] as const;

const usaUniversities = [
  "Northeastern University",
  "University of Connecticut",
  "Baylor University",
  "Auburn University",
  "University of Utah",
  "University of Illinois Chicago",
  "University of Kansas",
  "University of South Carolina",
  "University of Arizona",
  "Gonzaga University",
  "Washington State University",
  "Oregon State University",
  "George Mason University",
  "Saint Louis University",
  "University of Dayton",
] as const;

const newZealandUniversities = [
  "University of Auckland",
  "Auckland University of Technology",
  "University of Otago",
  "Victoria University of Wellington",
  "University of Canterbury",
  "University of Waikato",
  "Massey University",
  "Lincoln University",
] as const;

function createLogoList(country: string, universities: readonly string[]) {
  return universities.map((name, index) => ({
    name,
    src: `/assets/home/universities/${country}/logo-${String(index + 1).padStart(2, "0")}.webp`,
  }));
}

const ukLogos = ukUniversities.map(([name, assetIndex]) => ({
  name,
  src: `/assets/home/universities/uk/logo-${String(assetIndex).padStart(2, "0")}.webp`,
}));
const australianLogos = createLogoList("australia", australianUniversities);
const usaLogos = createLogoList("usa", usaUniversities);
const newZealandLogos = createLogoList("new-zealand", newZealandUniversities);

export const universityCountries = [
  { id: "uk", label: "United Kingdom", logos: ukLogos },
  { id: "australia", label: "Australia", logos: australianLogos },
  { id: "usa", label: "USA", logos: usaLogos },
  { id: "singapore", label: "Singapore", logos: [] },
  { id: "new-zealand", label: "New Zealand", logos: newZealandLogos },
  { id: "malaysia", label: "Malaysia", logos: [] },
  { id: "canada", label: "Canada", logos: [] },
] as const;

export type UniversityCountry = (typeof universityCountries)[number];
