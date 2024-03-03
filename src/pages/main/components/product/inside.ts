import white from "/src/assets/images/white.png";
import fabricWhite from "/src/assets/images/fabric-white.png";
import camel from "/src/assets/images/camel.png";
import fabricCamel from "/src/assets/images/fabric-camel.png";
import yellow from "/src/assets/images/yellow.png";
import fabricyYellow from "/src/assets/images/fabric-yellow.png";
import lime from "/src/assets/images/lime.png";
import fabricLime from "/src/assets/images/fabric-lime.png";
import grass from "/src/assets/images/grass.png";
import fabricGrass from "/src/assets/images/fabric-grass.png";
import beneton from "/src/assets/images/beneton.png";
import fabricBeneton from "/src/assets/images/fabric-green.png";
import haki from "/src/assets/images/haki.png";
import fabricHaki from "/src/assets/images/fabric-haki.png";
import bottle from "/src/assets/images/bottle.png";
import fabricBottle from "/src/assets/images/fabric-bottle.png";
import black from "/src/assets/images/black.png";
import fabricBlack from "/src/assets/images/fabric-black.png";
import bordo from "/src/assets/images/bordo.png";
import fabricBordo from "/src/assets/images/fabric-bordo.png";
import busya from "/src/assets/images/busya.png";
import fabricBusya from "/src/assets/images/fabric-busya.png";
import indigo from "/src/assets/images/indigo.png";
import fabricIndigo from "/src/assets/images/fabric-indigo.png";

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
