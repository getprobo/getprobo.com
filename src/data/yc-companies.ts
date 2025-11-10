import BlaxelLogo from "../assets/companies/blaxel.png";
import WhalyLogo from "../assets/companies/whaly.png";
import AirweaveLogo from "../assets/companies/airweave.png";
import AlturLogo from "../assets/companies/altur.png";
import FinntLogo from "../assets/companies/finnt.png";
import GolfLogo from "../assets/companies/golf.png";
import ReboltLogo from "../assets/companies/rebolt.png";
import WolfiaLogo from "../assets/companies/wolfia.png";
import VybeLogo from "../assets/companies/vybe.png";

export interface YCombinatorCompany {
  logo: ImageMetadata;
  badge: string;
  name: string;
  href: string;
  height: number;
}

export const YCombinatorCompanies: YCombinatorCompany[] = [
  {
    logo: BlaxelLogo,
    badge: "X25",
    name: "Blaxel",
    href: "https://blaxel.ai/",
    height: 24,
  },
  {
    logo: WhalyLogo,
    badge: "S21",
    name: "Whaly",
    href: "https://whaly.io/",
    height: 38,
  },
  {
    logo: AirweaveLogo,
    badge: "X25",
    name: "Airweave",
    href: "https://airweave.ai/",
    height: 24,
  },
  {
    logo: AlturLogo,
    badge: "S25",
    name: "Altur",
    href: "https://www.altur.io/en",
    height: 24,
  },
  {
    logo: FinntLogo,
    badge: "W22",
    name: "Finnt",
    href: "https://www.finnt.com/",
    height: 24,
  },
  {
    logo: GolfLogo,
    badge: "X25",
    name: "Golf",
    href: "https://golf.dev",
    height: 24,
  },
  {
    logo: FinntLogo,
    badge: "W21",
    name: "Axolo",
    href: "https://axolo.co/",
    height: 24,
  },
  {
    logo: FinntLogo,
    badge: "F25",
    name: "Everest",
    href: "https://everestmanagedai.com/",
    height: 24,
  },
  {
    logo: ReboltLogo,
    badge: "W25",
    name: "Rebolt",
    href: "https://www.rebolt.ai/",
    height: 24,
  },
  {
    logo: FinntLogo,
    badge: "S25",
    name: "Stockline",
    href: "https://www.stockline.ai/",
    height: 24,
  },
  {
    logo: WolfiaLogo,
    badge: "S22",
    name: "Wolfia",
    href: "https://www.wolfia.com/",
    height: 24,
  },
  {
    logo: VybeLogo,
    badge: "X25",
    name: "Vybe",
    href: "https://www.vybe.build/",
    height: 24,
  }
];
