import linksJson from "./links.json";

export type ProfileLink = {
  title: string;
  href: string;
  thumbnail: string;
};

/** Edit `links.json` to add, remove, or reorder profile links. */
export const links: ProfileLink[] = linksJson;
