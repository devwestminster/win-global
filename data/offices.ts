export type OfficeLocation = {
  city: string;
  address: string;
  phones: readonly string[];
  email: string;
};

export type CountryOffice = {
  slug: string;
  country: string;
  flag: string;
  website: string;
  locations: readonly OfficeLocation[];
};

export const countryOffices = [
  {
    slug: "pakistan",
    country: "Pakistan",
    flag: "/assets/offices/flag-pakistan.png",
    website: "https://win-ed.com/pakistan/",
    locations: [
      {
        city: "Lahore",
        address:
          "Room 215, Office Block, Siddiq Trade Center, 72 Boulevard Gulberg III, Lahore 54660, Pakistan",
        phones: ["+92-357-82000"],
        email: "pakistan@win-ed.com",
      },
    ],
  },
  {
    slug: "taiwan",
    country: "Taiwan",
    flag: "/assets/offices/flag-taiwan.png",
    website: "https://www.win-ed.com.tw/",
    locations: [
      {
        city: "Taipei",
        address:
          "9th Floor, Block F, No. 68, Lane 4, Roosevelt Road, Zhongzheng District, Taipei 10046, Taiwan (R.O.C.)",
        phones: ["+92-357-82000"],
        email: "ask@win-ed.com.tw",
      },
    ],
  },
  {
    slug: "nigeria",
    country: "Nigeria",
    flag: "/assets/offices/flag-nigeria.png",
    website: "https://win-ed.com/nigeria/",
    locations: [
      {
        city: "Lagos",
        address: "56 Opebi Road, Opebi 101233, Ikeja, Lagos, Nigeria",
        phones: ["+234-806-805-7440", "+234-803-523-6947"],
        email: "nigeria@win-ed.com",
      },
      {
        city: "Abuja",
        address:
          "Shashilga Court, Room 305, 3rd Floor, No. 102 Ahmadu Bello Way, Mabushi, Ndawuse 900108, Abuja, Nigeria",
        phones: ["+234-701-429-2269", "+234-816-720-6516"],
        email: "nigeria@win-ed.com",
      },
    ],
  },
  {
    slug: "india",
    country: "India (New Delhi)",
    flag: "/assets/offices/flag-india.png",
    website: "https://win-ed.com/en/india/",
    locations: [
      {
        city: "Delhi",
        address: "S2, F Block, International Trade Tower, Nehru Place New Delhi 110019 India",
        phones: ["+91 92179 79300"],
        email: "ashish@win-ed.com",
      },
      {
        city: "Srinagar",
        address:
          "Qurashi Manzil, Behind J&K Bank, Jawahar Nagar, Srinagar, J&K 190008, India",
        phones: ["+91 70062 27500"],
        email: "srinagar@win-ed.com",
      },
    ],
  },
  {
    slug: "thailand",
    country: "Thailand",
    flag: "/assets/offices/flag-thailand.png",
    website: "https://win-ed.com/",
    locations: [
      {
        city: "Bangkok",
        address: "4th Floor Zone D MBK Center",
        phones: ["+66 62 592 9348", "+66 61 386 0422", "+66 61 888 4951"],
        email: "ask@win-ed.com",
      },
      {
        city: "Ubon Ratchathani",
        address: "2nd Floor Y Square Mall",
        phones: ["+66 62 592 9348"],
        email: "ask@win-ed.com",
      },
      {
        city: "Chiang Mai",
        address: "Pantip Lifestyle Hub Building, 4th Floor",
        phones: ["+66 62 592 9348"],
        email: "admin@cm.com",
      },
      {
        city: "Khon Kaen",
        address: "2nd Floor True Tower",
        phones: ["+66 62 119 4094"],
        email: "ask@win-ed.com",
      },
    ],
  },
  {
    slug: "bangladesh",
    country: "Bangladesh",
    flag: "/assets/offices/flag-bangladesh.png",
    website: "https://win-ed.com/",
    locations: [
      {
        city: "Dhaka",
        address:
          "Green Regency, House No. 34 (5th Floor), Road No. 10, Block D, Banani, Dhaka, Bangladesh",
        phones: ["+88-0197-0033-288"],
        email: "bangladesh@win-ed.com",
      },
    ],
  },
  {
    slug: "united-kingdom",
    country: "United Kingdom (UK)",
    flag: "/assets/offices/flag-united-kingdom.png",
    website: "https://win-ed.com/",
    locations: [
      {
        city: "London",
        address: "17 Hanover Square, London W1S 1BN, United Kingdom",
        phones: ["+44 20 7277 6666"],
        email: "london@win-ed.com",
      },
    ],
  },
  {
    slug: "turkey",
    country: "Turkey",
    flag: "/assets/offices/flag-turkey.png",
    website: "https://win-ed.com/",
    locations: [
      {
        city: "Istanbul",
        address:
          "Marmara Üniversitesi, Teknopark, C Binası, Eğitim Mah. Hızırbey Cd. No. 118/5, Kat 2, No. 205, 34722 Kadıköy, Istanbul, Turkey",
        phones: ["+90 532 792 90 33"],
        email: "turkey@win-ed.com",
      },
    ],
  },
  {
    slug: "peru",
    country: "Peru",
    flag: "/assets/offices/flag-peru.png",
    website: "https://win-ed.com/",
    locations: [
      {
        city: "Lima",
        address: "Ca. Manuel Olguín 325, Piso 12, Santiago de Surco, Peru",
        phones: ["+51 924 020 123"],
        email: "peru@win-ed.com",
      },
    ],
  },
] as const satisfies readonly CountryOffice[];
