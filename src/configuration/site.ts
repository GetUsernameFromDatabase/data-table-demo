export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}

export type SiteConfig = {
  name: string;
  mainNav: NavItem[];
};

export const siteConfig: SiteConfig = {
  name: "Data Table Demo",
  mainNav: [],
};
