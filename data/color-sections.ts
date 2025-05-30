interface Color {
  name: string;
  hex: string;
  rgb: string;
  hsl: string;
  rgba: string;
}

interface ColorSection {
  title: string;
  colors: Color[];
}

export const colorSections: ColorSection[] = [
  {
    title: "Rojos",
    colors: [
      {
        name: "IndianRed",
        hex: "#CD5C5C",
        rgb: "rgb(205, 92, 92)",
        hsl: "hsl(0, 53%, 58%)",
        rgba: "rgba(205, 92, 92, 1)",
      },
      {
        name: "LightCoral",
        hex: "#F08080",
        rgb: "rgb(240, 128, 128)",
        hsl: "hsl(0, 79%, 72%)",
        rgba: "rgba(240, 128, 128, 1)",
      },
      {
        name: "Salmon",
        hex: "#FA8072",
        rgb: "rgb(250, 128, 114)",
        hsl: "hsl(6, 93%, 71%)",
        rgba: "rgba(250, 128, 114, 1)",
      },
      {
        name: "DarkSalmon",
        hex: "#E9967A",
        rgb: "rgb(233, 150, 122)",
        hsl: "hsl(15, 72%, 70%)",
        rgba: "rgba(233, 150, 122, 1)",
      },
      {
        name: "LightSalmon",
        hex: "#FFA07A",
        rgb: "rgb(255, 160, 122)",
        hsl: "hsl(17, 100%, 74%)",
        rgba: " rgba(255, 160, 122, 1)",
      },
      {
        name: "Crimson",
        hex: "#DC143C",
        rgb: "rgb(220, 20, 60)",
        hsl: "hsl(348, 83%, 47%)",
        rgba: "rgba(220, 20, 60, 1)",
      },
      {
        name: "Red",
        hex: "#FF0000",
        rgb: "rgb(255, 0, 0)",
        hsl: "hsl(0, 100%, 50%)",
        rgba: "rgba(255, 0, 0, 1)",
      },
      {
        name: "FireBrick",
        hex: "#B22222",
        rgb: "rgb(178, 34, 34)",
        hsl: "hsl(0, 67%, 42%)",
        rgba: "rgba(178, 34, 34, 1)",
      },
      {
        name: "DarkRed",
        hex: "#8B0000",
        rgb: "rgb(139, 0, 0)",
        hsl: "hsl(0, 100%, 27%)",
        rgba: "rgba(139, 0, 0, 1)",
      },
    ],
  },
  {
    title: "Rosas",
    colors: [
      {
        name: "Pink",
        hex: "#FFC0CB",
        rgb: "rgb(255,192,203)",
        hsl: "hsl(350, 100%, 88%)",
        rgba: "rgba(255,192,203, 1)",
      },
      {
        name: "LightPink",
        hex: "#FFB6C1",
        rgb: "rgb(255, 182, 193)",
        hsl: "hsl(351, 100%, 86%)",
        rgba: "rgba(255, 182, 193, 1)",
      },
      {
        name: "HotPink",
        hex: "#FF69B4",
        rgb: "rgb(255, 105, 180)",
        hsl: "hsl(330, 100%, 71%)",
        rgba: "rgba(255, 105, 180, 1)",
      },
      {
        name: "DeepPink",
        hex: "#FF1493",
        rgb: "rgb(255, 20, 147)",
        hsl: "hsl(328, 100%, 54%)",
        rgba: "rgba(255, 20, 147, 1)",
      },
      {
        name: "MediumVioletRed",
        hex: "#C71585",
        rgb: "rgb(199, 21, 133)",
        hsl: "hsl(322, 81%, 43%)",
        rgba: "rgba(199, 21, 133, 1)",
      },
      {
        name: "PaleVioletRed",
        hex: "#DB7093",
        rgb: "rgb(219, 112, 147)",
        hsl: "hsl(340, 60%, 65%)",
        rgba: "rgba(219, 112, 147, 1)",
      },
    ],
  },
  {
    title: "Naranjas",
    colors: [
      {
        name: "LightSalmon",
        hex: "#FFA07A",
        rgb: "rgb(255,160,122)",
        hsl: "hsl(17, 100%, 74%)",
        rgba: "rgba(255,160,122, 1)",
      },
      {
        name: "Coral",
        hex: "#FF7F50",
        rgb: "rgb(255,127,80)",
        hsl: "hsl(16, 100%, 66%)",
        rgba: "rgba(255,127,80, 1)",
      },
      {
        name: "Tomato",
        hex: "#FF6347",
        rgb: "rgb(255,99,71)",
        hsl: "hsl(9, 100%, 64%)",
        rgba: "rgba(255,99,71, 1)",
      },
      {
        name: "OrangeRed",
        hex: "#FF4500",
        rgb: "rgb(255,69,0)",
        hsl: "hsl(16, 100%, 50%)",
        rgba: "rgba(255,69,0, 1)",
      },
      {
        name: "DarkOrange",
        hex: "#FF8C00",
        rgb: "rgb(255,140,0)",
        hsl: "hsl(33, 100%, 50%)",
        rgba: "rgba(255,140,0, 1)",
      },
      {
        name: "Orange",
        hex: "#FFA500",
        rgb: "rgb(255,165,0)",
        hsl: "hsl(39, 100%, 50%)",
        rgba: "rgba(255,165,0, 1)",
      },
    ],
  },
  {
    title: "Amarillos",
    colors: [
      {
        name: "Gold",
        hex: "#FFD700",
        rgb: "rgb(255,215,0)",
        hsl: "hsl(51, 100%, 50%)",
        rgba: "rgba(255,215,0, 1)",
      },
      {
        name: "Yellow",
        hex: "#FFFF00",
        rgb: "rgb(255,255,0)",
        hsl: "hsl(60, 100%, 50%)",
        rgba: "rgba(255,255,0, 1)",
      },
      {
        name: "LightYellow",
        hex: "#FFFFE0",
        rgb: "rgb(255,255,224)",
        hsl: "hsl(60, 100%, 94%)",
        rgba: "rgba(255,255,224, 1)",
      },
      {
        name: "LemonChiffon",
        hex: "#FFFACD",
        rgb: "rgb(255,250,205)",
        hsl: "hsl(54, 100%, 90%)",
        rgba: "rgba(255,250,205, 1)",
      },
      {
        name: "LightGoldenrodYellow",
        hex: "#FAFAD2",
        rgb: "rgb(250,250,210)",
        hsl: "hsl(60, 80%, 90%)",
        rgba: "rgba(250,250,210, 1)",
      },
      {
        name: "PapayaWhip",
        hex: "#FFEFD5",
        rgb: "rgb(255,239,213)",
        hsl: "hsl(37, 100%, 94%)",
        rgba: "rgba(255,239,213, 1)",
      },
      {
        name: "Moccasin",
        hex: "#FFE4B5",
        rgb: "rgb(255,228,181)",
        hsl: "hsl(38, 100%, 85%)",
        rgba: "rgba(255,228,181, 1)",
      },
      {
        name: "PeachPuff",
        hex: "#FFDAB9",
        rgb: "rgb(255,218,185)",
        hsl: "hsl(28, 100%, 86%)",
        rgba: "rgba(255,218,185, 1)",
      },
      {
        name: "PaleGoldenrod",
        hex: "#EEE8AA",
        rgb: "rgb(238,232,170)",
        hsl: "hsl(60, 67%, 80%)",
        rgba: "rgba(238,232,170, 1)",
      },
      {
        name: "Khaki",
        hex: "#F0E68C",
        rgb: "rgb(240,230,140)",
        hsl: "hsl(54, 77%, 75%)",
        rgba: "rgba(240,230,140, 1)",
      },
      {
        name: "DarkKhaki",
        hex: "#BDB76B",
        rgb: "rgb(189,183,107)",
        hsl: "hsl(56, 38%, 58%)",
        rgba: "rgba(189,183,107, 1)",
      },
    ],
  },
  {
    title: "Púrpuras",
    colors: [
      {
        name: "Lavender",
        hex: "#E6E6FA",
        rgb: "rgb(230,230,250)",
        hsl: "hsl(240, 67%, 94%)",
        rgba: "rgba(230,230,250, 1)",
      },
      {
        name: "Thistle",
        hex: "#D8BFD8",
        rgb: "rgb(216,191,216)",
        hsl: "hsl(300, 24%, 80%)",
        rgba: "rgba(216,191,216, 1)",
      },
      {
        name: "Plum",
        hex: "#DDA0DD",
        rgb: "rgb(221,160,221)",
        hsl: "	hsl(300, 47%, 75%)",
        rgba: "rgba(221,160,221, 1)",
      },
      {
        name: "Violet",
        hex: "#EE82EE",
        rgb: "rgb(238,130,238)",
        hsl: "hsl(300, 76%, 72%)",
        rgba: "rgba(238,130,238, 1)",
      },
      {
        name: "Orchid",
        hex: "#DA70D6",
        rgb: "rgb(218,112,214)",
        hsl: "hsl(302, 59%, 65%)",
        rgba: "rgba(218,112,214, 1)",
      },
      {
        name: "Fuchsia / Magenta",
        hex: "#FF00FF",
        rgb: "rgb(255,0,255)",
        hsl: "hsl(300, 100%, 50%)",
        rgba: "rgba(255,0,255, 1)",
      },
      {
        name: "MediumOrchid",
        hex: "#BA55D3",
        rgb: "rgb(186,85,211)",
        hsl: "hsl(288, 59%, 58%)",
        rgba: "rgba(186,85,211, 1)",
      },
      {
        name: "MediumPurple",
        hex: "#9370DB",
        rgb: "rgb(147,112,219)",
        hsl: "	hsl(260, 60%, 65%)",
        rgba: "rgba(147,112,219, 1)",
      },
      {
        name: "BlueViolet",
        hex: "#8A2BE2",
        rgb: "rgb(138,43,226)",
        hsl: "	hsl(271, 76%, 53%)",
        rgba: "rgba(138,43,226, 1)",
      },
      {
        name: "DarkViolet",
        hex: "#9400D3",
        rgb: "rgb(148,0,211)",
        hsl: "hsl(282, 100%, 41%)",
        rgba: "rgba(148,0,211, 1)",
      },
      {
        name: "DarkOrchid",
        hex: "#9932CC",
        rgb: "rgb(153,50,204)",
        hsl: "hsl(280, 61%, 50%)",
        rgba: "rgba(153,50,204, 1)",
      },
      {
        name: "DarkMargenta",
        hex: "#8B008B",
        rgb: "rgb(139,0,139)",
        hsl: "hsl(300, 100%, 27%)",
        rgba: "rgba(139,0,139, 1)",
      },
      {
        name: "Purple",
        hex: "#800080",
        rgb: "rgb(128,0,128)",
        hsl: "hsl(300, 100%, 25%)",
        rgba: "rgba(128,0,128, 1)",
      },
      {
        name: "Indigo",
        hex: "#4B0082",
        rgb: "rgb(75,0,130)",
        hsl: "	hsl(275, 100%, 25%)",
        rgba: "rgba(75,0,130, 1)",
      },
      {
        name: "SlateBlue",
        hex: "#6A5ACD",
        rgb: "rgb(106,90,205)",
        hsl: "hsl(248, 53%, 58%)",
        rgba: "rgba(106,90,205, 1)",
      },
      {
        name: "DarkSlateBlue",
        hex: "#483D8B",
        rgb: "rgb(72,61,139)",
        hsl: "hsl(248, 39%, 39%)",
        rgba: "rgba(72,61,139, 1)",
      },
    ],
  },
  {
    title: "Verdes",
    colors: [
      {
        name: "GreenYellow",
        hex: "#ADFF2F",
        rgb: "rgb(173,255,47)",
        hsl: "hsl(84, 100%, 56%)",
        rgba: "rgba(173,255,47, 1)",
      },
      {
        name: "Chartreuse",
        hex: "#7FFF00",
        rgb: "rgb(127,255,0)",
        hsl: "hsl(90, 100%, 50%)",
        rgba: "rgba(127,255,0, 1)",
      },
      {
        name: "LawnGreen",
        hex: "#7CFC00",
        rgb: "rgb(124,252,0)",
        hsl: "hsl(90, 100%, 49%)",
        rgba: "rgba(124,252,0, 1)",
      },
      {
        name: "Lime",
        hex: "#00FF00",
        rgb: "rgb(0,255,0)",
        hsl: "hsl(120, 100%, 50%)",
        rgba: "rgba(0,255,0, 1)",
      },
      {
        name: "LimeGreen",
        hex: "#32CD32",
        rgb: "rgb(50,205,50)",
        hsl: "hsl(120, 60%, 50%)",
        rgba: "rgba(50,205,50, 1)",
      },
      {
        name: "PaleGreen",
        hex: "#98FB98",
        rgb: "rgb(152,251,152)",
        hsl: "hsl(120, 93%, 79%)",
        rgba: "rgba(152,251,152, 1)",
      },
      {
        name: "LightGreen",
        hex: "#90EE90",
        rgb: "rgb(144,238,144)",
        hsl: "hsl(120, 73%, 75%)",
        rgba: "rgba(144,238,144, 1)",
      },
      {
        name: "MediumSpringGreen",
        hex: "#00FA9A",
        rgb: "rgb(0,250,154)",
        hsl: "hsl(157, 100%, 50%)",
        rgba: "rgba(0,250,154, 1)",
      },
      {
        name: "SpringGreen",
        hex: "#00FF7F",
        rgb: "rgb(0,255,127)",
        hsl: "hsl(150, 100%, 50%)",
        rgba: "rgba(0,255,127, 1)",
      },
      {
        name: "MediumSeaGreen",
        hex: "#3CB371",
        rgb: "rgb(60,179,113)",
        hsl: "hsl(147, 50%, 47%)",
        rgba: "rgba(60,179,113, 1)",
      },
      {
        name: "SeaGreen",
        hex: "#2E8B57",
        rgb: "rgb(46,139,87)",
        hsl: "hsl(145, 50%, 36%)",
        rgba: "rgba(46,139,87, 1)",
      },
      {
        name: "ForestGreen",
        hex: "#228B22",
        rgb: "rgb(34,139,34)",
        hsl: "hsl(120, 61%, 34%)",
        rgba: "rgba(34,139,34, 1)",
      },
      {
        name: "Green",
        hex: "#008000",
        rgb: "rgb(0,128,0)",
        hsl: "hsl(120, 100%, 25%)",
        rgba: "rgba(0,128,0, 1)",
      },
      {
        name: "DarkGreen",
        hex: "#006400",
        rgb: "rgb(0,100,0)",
        hsl: "hsl(120, 100%, 20%)",
        rgba: "rgba(0,100,0, 1)",
      },
      {
        name: "YellowGreen",
        hex: "#9ACD32",
        rgb: "rgb(154,205,50)",
        hsl: "hsl(80, 60%, 50%)",
        rgba: "rgba(154,205,50, 1)",
      },
      {
        name: "OliveDrab",
        hex: "#6B8E23",
        rgb: "rgb(107,142,35)",
        hsl: "hsl(80, 60%, 35%)",
        rgba: "rgba(107,142,35, 1)",
      },
      {
        name: "Olive",
        hex: "#808000",
        rgb: "rgb(128,128,0)",
        hsl: "hsl(60, 100%, 25%)",
        rgba: "rgba(128,128,0, 1)",
      },
      {
        name: "DarkOliveGreen",
        hex: "#556B2F",
        rgb: "rgb(85,107,47)",
        hsl: "hsl(82, 39%, 30%)",
        rgba: "rgba(85,107,47, 1)",
      },
      {
        name: "MediumAquamarine",
        hex: "#66CDAA",
        rgb: "rgb(102,205,170)",
        hsl: "hsl(160, 50%, 60%)",
        rgba: "rgba(102,205,170, 1)",
      },
      {
        name: "DarkSeaGreen",
        hex: "#8FBC8F",
        rgb: "rgb(143,188,143)",
        hsl: "hsl(120, 25%, 65%)",
        rgba: "rgba(143,188,143, 1)",
      },
      {
        name: "LightSeaGreen",
        hex: "#20B2AA",
        rgb: "rgb(32,178,170)",
        hsl: "	hsl(177, 70%, 41%)",
        rgba: "rgba(32,178,170, 1)",
      },
      {
        name: "DarkCyan",
        hex: "#008B8B",
        rgb: "rgb(0,139,139)",
        hsl: "hsl(180, 100%, 27%)",
        rgba: "rgba(0,139,139, 1)",
      },
      {
        name: "Teal",
        hex: "#008080",
        rgb: "rgb(0,128,128)",
        hsl: "hsl(180, 100%, 25%)",
        rgba: "rgba(0,128,128, 1)",
      },
    ],
  },
  {
    title: "Azules",
    colors: [
      {
        name: "Aqua / Cyan",
        hex: "#00FFFF",
        rgb: "rgb(0,255,255)",
        hsl: "hsl(180, 100%, 50%)",
        rgba: "rgba(0,255,255, 1)",
      },
      {
        name: "LightCyan",
        hex: "#E0FFFF",
        rgb: "rgb(224,255,255)",
        hsl: "hsl(180, 100%, 94%)",
        rgba: "rgba(224,255,255, 1)",
      },
      {
        name: "PaleTurquoise",
        hex: "#AFEEEE",
        rgb: "rgb(175,238,238)",
        hsl: "hsl(180, 65%, 80%)",
        rgba: "rgba(175,238,238, 1)",
      },
      {
        name: "Aquamarine",
        hex: "#7FFFD4",
        rgb: "rgb(127,255,212)",
        hsl: "hsl(160, 100%, 75%)",
        rgba: "rgba(127,255,212, 1)",
      },
      {
        name: "Turquoise",
        hex: "#40E0D0",
        rgb: "rgb(64,224,208)",
        hsl: "hsl(174, 72%, 56%)",
        rgba: "rgba(64,224,208, 1)",
      },
      {
        name: "MediumTurquoise",
        hex: "#48D1CC",
        rgb: "rgb(72,209,204)",
        hsl: "hsl(178, 60%, 50%)",
        rgba: "rgba(72,209,204, 1)",
      },
      {
        name: "DarkTurquoise",
        hex: "#00CED1",
        rgb: "rgb(0,206,209)",
        hsl: "hsl(181, 100%, 41%)",
        rgba: "rgba(0,206,209, 1)",
      },
      {
        name: "CadetBlue",
        hex: "#5F9EA0",
        rgb: "rgb(95,158,160)",
        hsl: "hsl(182, 25%, 50%)",
        rgba: "rgba(95,158,160, 1)",
      },
      {
        name: "SteelBlue",
        hex: "#4682B4",
        rgb: "rgb(70,130,180)",
        hsl: "hsl(207, 44%, 49%)",
        rgba: "rgba(70,130,180, 1)",
      },
      {
        name: "LightSteelBlue",
        hex: "#B0C4DE",
        rgb: "rgb(176,196,222)",
        hsl: "hsl(214, 41%, 80%)",
        rgba: "rgba(176,196,222, 1)",
      },
      {
        name: "PowderBlue",
        hex: "#B0E0E6",
        rgb: "rgb(176,224,230)",
        hsl: "hsl(187, 52%, 79%)",
        rgba: "rgba(176,224,230, 1)",
      },
      {
        name: "LightBlue",
        hex: "#ADD8E6",
        rgb: "rgb(173,216,230)",
        hsl: "hsl(195, 53%, 79%)",
        rgba: "rgba(173,216,230, 1)",
      },
      {
        name: "SkyBlue",
        hex: "#87CEEB",
        rgb: "rgb(135,206,235)",
        hsl: "hsl(197, 71%, 73%)",
        rgba: "rgba(135,206,235, 1)",
      },
      {
        name: "LightSkyBlue",
        hex: "#87CEFA",
        rgb: "rgb(135,206,250)",
        hsl: "hsl(203, 92%, 75%)",
        rgba: "rgba(135,206,250, 1)",
      },
      {
        name: "DeepSkyBlue",
        hex: "#00BFFF",
        rgb: "rgb(0,191,255)",
        hsl: "hsl(195, 100%, 50%)",
        rgba: "rgba(0,191,255, 1)",
      },
      {
        name: "DodgerBlue",
        hex: "#1E90FF",
        rgb: "rgb(30,144,255)",
        hsl: "hsl(210, 100%, 56%)",
        rgba: "rgba(30,144,255, 1)",
      },
      {
        name: "CornflowerBlue",
        hex: "#6495ED",
        rgb: "rgb(100,149,237)",
        hsl: "hsl(219, 79%, 66%)",
        rgba: "rgba(100,149,237, 1)",
      },
      {
        name: "MediumSlateBlue",
        hex: "#7B68EE",
        rgb: "rgb(123,104,238)",
        hsl: "hsl(249, 80%, 67%)",
        rgba: "rgba(123,104,238, 1)",
      },
      {
        name: "RoyalBlue",
        hex: "#4169E1",
        rgb: "rgb(65,105,225)",
        hsl: "hsl(225, 73%, 57%)",
        rgba: "rgba(65,105,225, 1)",
      },
      {
        name: "Blue",
        hex: "#0000FF",
        rgb: "rgb(0,0,255)",
        hsl: "hsl(240, 100%, 50%)",
        rgba: "rgba(0,0,255, 1)",
      },
      {
        name: "MediumBlue",
        hex: "#0000CD",
        rgb: "rgb(0,0,205)",
        hsl: "hsl(240, 100%, 40%)",
        rgba: "rgba(0,0,205, 1)",
      },
      {
        name: "DarkBlue",
        hex: "#00008B",
        rgb: "rgb(0,0,139)",
        hsl: "hsl(240, 100%, 27%)",
        rgba: "rgba(0,0,139, 1)",
      },
      {
        name: "Navy",
        hex: "#000080",
        rgb: "rgb(0,0,128)",
        hsl: "hsl(240, 100%, 25%)",
        rgba: "rgba(0,0,128, 1)",
      },
      {
        name: "MidnightBlue",
        hex: "#191970",
        rgb: "rgb(25,25,112)",
        hsl: "hsl(240, 64%, 27%)",
        rgba: "rgba(25,25,112, 1)",
      },
    ],
  },
  {
    title: "Marrones",
    colors: [
      {
        name: "Cornsilk",
        hex: "#FFF8DC",
        rgb: "rgb(255,248,220)",
        hsl: "hsl(48, 100%, 93%)",
        rgba: "rgba(255,248,220, 1)",
      },
      {
        name: "BlanchedAlmond",
        hex: "#FFEBCD",
        rgb: "rgb(255,235,205)",
        hsl: "hsl(36, 100%, 90%)",
        rgba: "rgba(255,235,205, 1)",
      },
      {
        name: "Bisque",
        hex: "#FFE4C4",
        rgb: "rgb(255,228,196)",
        hsl: "hsl(33, 100%, 88%)",
        rgba: "rgba(255,228,196, 1)",
      },
      {
        name: "NavajoWhite",
        hex: "#FFDEAD",
        rgb: "rgb(255,222,173)",
        hsl: "hsl(36, 100%, 84%)",
        rgba: "rgba(255,222,173, 1)",
      },
      {
        name: "Wheat",
        hex: "#F5DEB3",
        rgb: "rgb(245,222,179)",
        hsl: "hsl(39, 77%, 83%)",
        rgba: "rgba(245,222,179, 1)",
      },
      {
        name: "BurlyWood",
        hex: "#DEB887",
        rgb: "rgb(222,184,135)",
        hsl: "hsl(34, 57%, 70%)",
        rgba: "rgba(222,184,135, 1)",
      },
      {
        name: "Tan",
        hex: "#D2B48C",
        rgb: "rgb(210,180,140)",
        hsl: "hsl(34, 44%, 69%)",
        rgba: "rgba(210,180,140, 1)",
      },
      {
        name: "RosyBrown",
        hex: "#BC8F8F",
        rgb: "rgb(188,143,143)",
        hsl: "hsl(0, 25%, 65%)",
        rgba: "rgba(188,143,143, 1)",
      },
      {
        name: "SandyBrown",
        hex: "#F4A460",
        rgb: "rgb(244,164,96)",
        hsl: "hsl(28, 87%, 67%)",
        rgba: "rgba(244,164,96, 1)",
      },
      {
        name: "Goldenrod",
        hex: "#DAA520",
        rgb: "rgb(218,165,32)",
        hsl: "hsl(43, 74%, 49%)",
        rgba: "rgba(218,165,32, 1)",
      },
      {
        name: "DarkGoldenrod",
        hex: "#B8860B",
        rgb: "rgb(184,134,11)",
        hsl: "hsl(43, 89%, 38%)",
        rgba: "rgba(184,134,11, 1)",
      },
      {
        name: "Peru",
        hex: "#CD853F",
        rgb: "rgb(205,133,63)",
        hsl: "hsl(30, 59%, 53%)",
        rgba: "rgba(205,133,63, 1)",
      },
      {
        name: "Chocolate",
        hex: "#D2691E",
        rgb: "rgb(210,105,30)",
        hsl: "hsl(25, 75%, 47%)",
        rgba: "rgba(210,105,30, 1)",
      },
      {
        name: "SaddleBrown",
        hex: "#8B4513",
        rgb: "rgb(139,69,19)",
        hsl: "hsl(25, 76%, 31%)",
        rgba: "rgba(139,69,19, 1)",
      },
      {
        name: "Sienna",
        hex: "#A0522D",
        rgb: "rgb(160,82,45)",
        hsl: "hsl(19, 56%, 40%)",
        rgba: "rgba(160,82,45, 1)",
      },
      {
        name: "Brown",
        hex: "#A52A2A",
        rgb: "rgb(165,42,42)",
        hsl: "hsl(0, 59%, 41%)",
        rgba: "rgba(165,42,42, 1)",
      },
      {
        name: "Maroon",
        hex: "#800000",
        rgb: "rgb(128,0,0)",
        hsl: "hsl(0, 100%, 25%)",
        rgba: "rgba(128,0,0, 1)",
      },
    ],
  },
  {
    title: "Blancos",
    colors: [
      {
        name: "White",
        hex: "#FFFFFF",
        rgb: "rgb(255,255,255)",
        hsl: "hsl(0, 0%, 100%)",
        rgba: "rgba(255,255,255, 1)",
      },
      {
        name: "Snow",
        hex: "#FFFAFA",
        rgb: "rgb(255,250,250)",
        hsl: "hsl(0, 100%, 99%)",
        rgba: "rgba(255,250,250, 1)",
      },
      {
        name: "Honeydew",
        hex: "#F0FFF0",
        rgb: "rgb(240,255,240)",
        hsl: "hsl(120, 100%, 97%)",
        rgba: "rgba(240,255,240, 1)",
      },
      {
        name: "MintCream",
        hex: "#F5FFFA",
        rgb: "rgb(245,255,250)",
        hsl: "hsl(150, 100%, 98%)",
        rgba: "rgba(245,255,250, 1)",
      },
      {
        name: "Azure",
        hex: "#F0FFFF",
        rgb: "rgb(240,255,255)",
        hsl: "hsl(180, 100%, 97%)",
        rgba: "rgba(240,255,255, 1)",
      },
      {
        name: "AliceBlue",
        hex: "#F0F8FF",
        rgb: "rgb(240,248,255)",
        hsl: "hsl(208, 100%, 97%)",
        rgba: "rgba(240,248,255, 1)",
      },
      {
        name: "GhostWhite",
        hex: "#F8F8FF",
        rgb: "rgb(248,248,255)",
        hsl: "hsl(240, 100%, 99%)",
        rgba: "rgba(248,248,255, 1)",
      },
      {
        name: "Seashell",
        hex: "#FFF5EE",
        rgb: "rgb(255,245,238)",
        hsl: "hsl(25, 100%, 97%)",
        rgba: "rgba(255,245,238, 1)",
      },
      {
        name: "Beige",
        hex: "#F5F5DC",
        rgb: "rgb(245,245,220)",
        hsl: "hsl(60, 56%, 91%)",
        rgba: "rgba(245,245,220, 1)",
      },
      {
        name: "OldLace",
        hex: "#FDF5E6",
        rgb: "rgb(253,245,230)",
        hsl: "hsl(39, 85%, 95%)",
        rgba: "rgba(253,245,230, 1)",
      },
      {
        name: "FloralWhite",
        hex: "#FFFAF0",
        rgb: "rgb(255,250,240)",
        hsl: "hsl(40, 100%, 97%)",
        rgba: "rgba(255,250,240, 1)",
      },
      {
        name: "Ivory",
        hex: "#FFFFF0",
        rgb: "rgb(255,255,240)",
        hsl: "hsl(60, 100%, 97%)",
        rgba: "rgba(255,255,240, 1)",
      },
      {
        name: "AntiqueWhite",
        hex: "#FAEBD7",
        rgb: "rgb(250,235,215)",
        hsl: "hsl(34, 78%, 91%)",
        rgba: "rgba(250,235,215, 1)",
      },
      {
        name: "Linen",
        hex: "#FAF0E6",
        rgb: "rgb(250,240,230)",
        hsl: "hsl(30, 67%, 94%)",
        rgba: "rgba(250,240,230, 1)",
      },
      {
        name: "LavenderBlush",
        hex: "#FFF0F5",
        rgb: "rgb(255,240,245)",
        hsl: "hsl(340, 100%, 97%)",
        rgba: "rgba(255,240,245, 1)",
      },
      {
        name: "MistyRose",
        hex: "#FFE4E1",
        rgb: "rgb(255,228,225)",
        hsl: "hsl(6, 100%, 94%)",
        rgba: "rgba(255,228,225, 1)",
      },
    ],
  },
  {
    title: "Grises",
    colors: [
      {
        name: "Gainsboro",
        hex: "#DCDCDC",
        rgb: "rgb(220,220,220)",
        hsl: "hsl(0, 0%, 86%)",
        rgba: "rgba(220,220,220, 1)",
      },
      {
        name: "LightGrey",
        hex: "#D3D3D3",
        rgb: "rgb(211,211,211)",
        hsl: "hsl(0, 0%, 83%)",
        rgba: "rgba(211,211,211, 1)",
      },
      {
        name: "Silver",
        hex: "#C0C0C0",
        rgb: "rgb(192,192,192)",
        hsl: "hsl(0, 0%, 75%)",
        rgba: "rgba(192,192,192, 1)",
      },
      {
        name: "DarkGray",
        hex: "#A9A9A9",
        rgb: "rgb(169,169,169)",
        hsl: "hsl(0, 0%, 66%)",
        rgba: "rgba(169,169,169, 1)",
      },
      {
        name: "Gray",
        hex: "#808080",
        rgb: "rgb(128,128,128)",
        hsl: "hsl(0, 0%, 50%)",
        rgba: "rgba(128,128,128, 1)",
      },
      {
        name: "DimGray",
        hex: "#696969",
        rgb: "rgb(105,105,105)",
        hsl: "hsl(0, 0%, 41%)",
        rgba: "rgba(105,105,105, 1)",
      },
      {
        name: "LightSlateGray",
        hex: "#778899",
        rgb: "rgb(119,136,153)",
        hsl: "hsl(210, 14%, 53%)",
        rgba: "rgba(119,136,153, 1)",
      },
      {
        name: "SlateGray",
        hex: "#708090",
        rgb: "rgb(112,128,144)",
        hsl: "hsl(210, 13%, 50%)",
        rgba: "rgba(112,128,144, 1)",
      },
      {
        name: "DarkSlateGray",
        hex: "#2F4F4F",
        rgb: "rgb(47,79,79)",
        hsl: "hsl(180, 25%, 25%)",
        rgba: "rgba(47,79,79, 1)",
      },
      {
        name: "Black",
        hex: "#000000",
        rgb: "rgb(0,0,0)",
        hsl: "hsl(0, 0%, 0%)",
        rgba: "rgba(0,0,0, 1)",
      },
    ],
  },
];
