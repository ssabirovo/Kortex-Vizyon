export const Langs = ["EN", "UZ", "РУ", "TR"];

interface linksProps {
  address: string;
  content: string;
  page: string;
}

export const links: linksProps[] = [
  { page: "/", address: "#main", content: "navbar.homeBtn" },
  { page: "/", address: "#products", content: "navbar.productBtn" },
  { page: "/", address: "#contact", content: "navbar.contactBtn" },
];
