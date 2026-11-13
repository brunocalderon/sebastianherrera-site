import { links, type ProfileLink } from "./links";

export type { ProfileLink };

export type SocialLink = {
  type: "INSTAGRAM";
  href: string;
};

export const profile = {
  name: "Sebastian Herrera",
  bio: [
    "**Hyrox Level 2** _Certified Coach_",
    "Co-Founder **NAW Training Lab**",
    "Kinesiólogo | Nike Training Coach",
  ],
  heroImage: "/images/hero-sebastian-herrera.jpg",
  heroAlt: "Sebastian Herrera",
  socials: [
    {
      type: "INSTAGRAM",
      href: "https://www.instagram.com/__sebaherrera/",
    },
  ] satisfies SocialLink[],
  links,
} as const;
