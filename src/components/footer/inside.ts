import * as List from "../../assets/icons/List";

interface IMediaLink {
  icon: keyof typeof List;
  description: string;
  link: string;
}

interface ImediaLinks {
  title: string;
  links: IMediaLink[];
}

export const mediaLinks: ImediaLinks[] = [
  {
    title: "Social media",
    links: [
      {
        icon: "WhatsAppFooter",
        description: "+998-90-507-07-07",
        link: "#contact",
      },
      {
        icon: "WhatsAppFooter",
        description: "+998-99-462-45-58",
        link: "#contact",
      },
      {
        icon: "linkedIn",
        description: "@kortexvizyon",
        link: "https://www.linkedin.com/in/so1ov/",
      },
      {
        icon: "Facebook",
        description: "@kortexvizyon",
        link: "https://www.linkedin.com/in/so1ov/",
      },
    ],
  },
  {
    title: "Contacts",
    links: [
      {
        icon: "Phone",
        description: "+998-90-507-07-07",
        link: "tel:+998905070707",
      },
      {
        icon: "Phone",
        description: "+998-99-462-45-58",
        link: "tel:+998994624558",
      },
      {
        icon: "Mail",
        description: "kortexvizyon@mail.ru",
        link: "mailto:kortexvizyon@mail.ru",
      },
      {
        icon: "Location",
        description:
          "Farg'ona viloyati, Buvayda tumani, Buvayda tumanining shaharchalari Kelajak ko'chasi",
        link: "#location",
      },
    ],
  },
];
