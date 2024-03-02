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
    title: "footer.media",
    links: [
      {
        icon: "WhatsAppFooter",
        description: "+998-90-507-07-07",
        link: "https://api.whatsapp.com/send/?phone=%2B998905070707&text&type=phone_number&app_absent=0",
      },
      {
        icon: "WhatsAppFooter",
        description: "+998-99-462-45-58",
        link: "https://api.whatsapp.com/send/?phone=%2B998994624558&text&type=phone_number&app_absent=0",
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
    title: "footer.contacts",
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
        description: "footer.address",
        link: "#location",
      },
    ],
  },
];
