import { TEAM_1, TEAM_2, TEAM_3, TEAM_4, TEAM_5, TEAM_6 } from "./IMAGES";

interface Team {
  name: string;
  designation: string;
  picture: string;
  url: string;
  id: string;
  profile: string[];
}

export const teams: Team[] = [
  {
    name: "Attahiru Machido",
    designation: "Board Chairman",
    picture: TEAM_1.src,
    url: "/team/1",
    id: "1",
    profile: [],
  },
  {
    name: "Muhammad Sambo",
    designation: "President",
    picture: TEAM_2.src,
    url: "/team/2",
    id: "2",
    profile: [
      `Alhassan Muhammad Sambo – Sambo is a graduate of Kano State University 
of Science and Technology, Wudil with extensive field experience in some 
agro-allied services, Presently, he is saddled with the duty and responsibility to 
administer and resolve all issues covering manufacturing, commodities trading, 
logistics, storage and warehousing, and agro inputs in the agricultural sector. 
Sambo owes 50% of the company shares and he is the chairman of the 
company. `,
    ],
  },
  {
    name: "Nazir Alhassan",
    designation: "Group Managing Director",
    picture: TEAM_3.src,
    url: "/team/3",
    id: "3",
    profile: [
      `Alhassan Nazir Abdulllahi: - A diplomat of both African Union (AU) and 
United Nations (U.N), holds a B.Sc. and Master’s degree in International 
Affairs and Diplomacy from Ahmadu Bello University, Zaria - Kaduna State 
and also, he is duly licensed with the Nigeria College of Aviation Technology 
(NCAT), Zaria as an aviator. Nazir has had a rich exposure in marketing, 
logistics and financial adviser in various capacities from 2007 till date.`,
      `He is widely acclaimed and recognized as an astute manager, with a good 
experience in series of retail marketing, supply and trade management. A crack 
team of equally experienced technocrats and administrators from leading 
manufacturing companies adequately supports him in the running of Boko Agro 
Allied Limited. `,
      `Alhassan Nazir Abdulllahi, as the GMD provides leadership to the executive 
team in running the business, co-ordinates proposals developed by the executive 
committee for consideration by the Board, and also develops the Company’s 
strategy for consideration and approval by the Board. 
He is a distinguished entrepreneur and has managed both Sambo Ventures & 
Supply Company and Boko Agro Allied Nigeria Limited in this capacity since 
their inceptions. `,
    ],
  },
  {
    name: "Ahmad Nuhu",
    designation: "Corporate Affairs",
    picture: TEAM_4.src,
    url: "/team/4",
    id: "4",
    profile: [],
  },
  {
    name: "Bashir Abubakar",
    designation: "Chairman, Board of Trustees",
    picture: TEAM_5.src,
    url: "/team/5",
    id: "5",
    profile: [],
  },
  {
    name: "Umar Dangaza",
    designation: "Europe Liason",
    picture: TEAM_6.src,
    url: "/team/6",
    id: "6",
    profile: [],
  },
];
