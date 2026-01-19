import white from "/src/assets/images/white.webp";
import fabricWhite from "/src/assets/images/fabric-white.webp";
import camel from "/src/assets/images/camel.webp";
import fabricCamel from "/src/assets/images/fabric-camel.webp";
import yellow from "/src/assets/images/yellow.webp";
import fabricyYellow from "/src/assets/images/fabric-yellow.webp";
import lime from "/src/assets/images/lime.webp";
import fabricLime from "/src/assets/images/fabric-lime.webp";
import grass from "/src/assets/images/grass.webp";
import fabricGrass from "/src/assets/images/fabric-grass.webp";
import beneton from "/src/assets/images/beneton.webp";
import fabricBeneton from "/src/assets/images/fabric-green.webp";
import haki from "/src/assets/images/haki.webp";
import fabricHaki from "/src/assets/images/fabric-haki.webp";
import bottle from "/src/assets/images/bottle.webp";
import fabricBottle from "/src/assets/images/fabric-bottle.webp";
import black from "/src/assets/images/black.webp";
import fabricBlack from "/src/assets/images/fabric-black.webp";
import bordo from "/src/assets/images/bordo.webp";
import fabricBordo from "/src/assets/images/fabric-bordo.webp";
import busya from "/src/assets/images/busya.webp";
import fabricBusya from "/src/assets/images/fabric-busya.webp";
import indigo from "/src/assets/images/indigo.webp";
import fabricIndigo from "/src/assets/images/fabric-indigo.webp";

export interface colorObj {
  name: string;
  code: string;
  hexCode: string;
  cottonUrl: string;
  fabricUrl: string;
}

export const colors: colorObj[] = [
  {
    name: "White",
    code: "d 100-1223(1)",
    hexCode: "#EDE8E1",
    cottonUrl: white,
    fabricUrl: fabricWhite,
  },

  {
    name: "Camel",
    code: "d 100-14100(1)",
    hexCode: "#BB9568",
    cottonUrl: camel,
    fabricUrl: fabricCamel,
  },

  {
    name: "Yellow",
    code: "d 100-464(1)",
    hexCode: "#FFD600",
    cottonUrl: yellow,
    fabricUrl: fabricyYellow,
  },
  {
    name: "Lime",
    code: "d 100-463(1)",
    hexCode: "#FAFF00",
    cottonUrl: lime,
    fabricUrl: fabricLime,
  },
  {
    name: "Grass",
    code: "d 100-80116(1)",

    hexCode: "#16C100",
    cottonUrl: grass,
    fabricUrl: fabricGrass,
  },
  {
    name: "Green",
    code: "d 100-80115(1)",
    hexCode: "#418A35",
    cottonUrl: beneton,
    fabricUrl: fabricBeneton,
  },

  {
    name: "Haki",
    code: "d 100-1561(1)",
    hexCode: "#445C2E",
    cottonUrl: haki,
    fabricUrl: fabricHaki,
  },
  {
    name: "Bottle",
    code: "d 100-1923(1)",
    hexCode: "#1D3C32",
    cottonUrl: bottle,
    fabricUrl: fabricBottle,
  },
  {
    name: "Black",
    code: "d 100-286(2)",
    hexCode: "#000",
    cottonUrl: black,
    fabricUrl: fabricBlack,
  },
  {
    name: "Bordo",
    code: "d 100-1649(1)",
    hexCode: "#5C071E",
    cottonUrl: bordo,
    fabricUrl: fabricBordo,
  },

  {
    name: "Busya",
    code: "d 100-13206(1)",
    hexCode: "#BB3570",
    cottonUrl: busya,
    fabricUrl: fabricBusya,
  },
  {
    name: "Indigo",
    code: "d 100-785(1)",
    hexCode: "#2A4A6E",
    cottonUrl: indigo,
    fabricUrl: fabricIndigo,
  },
];
