const elements = `
[
  {
    "name": {
      "full": "Hydrogen",
      "latin": "Hydrogenium",
      "short": "H"
    },
    "type": "Other Non-metal",
    "atomic number": 1,
    "atomic weight": 1.008,
    "electron configuration": "1s¹",
    "electrons per shell": "K1",
    "position": {
      "group": 1,
      "period": 1
    },
    "block": "s",
    "discovery": {
      "year": 1766,
      "discoverer": "Henry Cavendish"
    },
    "subatomic particle": {
      "electron": 1,
      "proton": 1,
      "neutron": 0
    }
  },
  {
    "name": {
      "full": "Helium",
      "latin": "Helium",
      "short": "He"
    },
    "type": "Noble Gas",
    "atomic number": 2,
    "atomic weight": 4.002602,
    "electron configuration": "1s²",
     "electrons per shell": "K2",
    "position": {
      "group": 18,
      "period": 1
    },
    "block": "s",
    "discovery": {
      "year": 1868,
      "discoverer": "Sir Edward Frankland, Pierre Janssen, Norman Lockyer"
    },
    "subatomic particle": {
      "electron": 2,
      "proton": 2,
      "neutron": 2 
    }
  },
  {
      "name": {
        "full": "Lithium",
        "latin": "Lithium",
        "short": "Li"
      },
      "type": "Alkali Metal",
      "atomic number": 3,
      "atomic weight": 6.94,
      "electron configuration": "1s² 2s¹",
      "electrons per shell": "K2 L1",
      "position": {
        "group": 1,
        "period": 2
      },
      "block": "s",
      "discovery": {
        "year": 1817,
        "discoverer": "Augustus Matthiessen, Johan August Arfwedson, Robert Wilhelm Bunsen"
      },
      "subatomic particle": {
        "electron": 3,
        "proton": 3,
        "neutron": 4
      }
    },
  {
        "name": {
          "full": "Beryllium",
          "latin": "Beryllium",
          "short": "Be"
        },
        "type": "Alkaline Earth Metal",
        "atomic number": 4,
        "atomic weight": 9.0121831,
        "electron configuration": "1s² 2s²",
        "electrons per shell": "K2 L2",
        "position": {
          "group": 2,
          "period": 2 
        },
        "block": "s",
        "discovery": {
          "year": 1797,
          "discoverer": "Nicolas-Louis Vauquelin, Friedrich Wöhler, Antoine A. B. Bussy"
        },
        "subatomic particle": {
          "electron": 4,
          "proton": 4,
          "neutron": 5
        }
  },
  {
    "name": {
      "full": "Boron",
      "latin": "Borum",
      "short": "B"
    },
    "type": "Metalloid",
    "atomic number": 5,
    "atomic weight": 10.81,
    "electron configuration": "1s² 2s² 2p¹",
    "electrons per shell": "K2 L3",
    "position": {
      "group": 13,
      "period": 2
    },
    "block": "p",
    "discovery": {
      "year": 1808,
      "discoverer": "Joseph Louis Gay-Lussac, Louis-Jacques Thenard, Humphry Davy"
    },
    "subatomic particle": {
      "electron": 5,
      "proton": 5,
      "neutron": 6
    }
  },
  {
    "name": {
      "full": "Carbon",
      "latin": "Carbonium (Carboneum)",
      "short": "C"
    },
    "type": "Other Non-metal",
    "atomic number": 6,
    "atomic weight": 12.011,
    "electron configuration": "1s² 2s² 2p²",
    "electrons per shell": "K2 L4",
    "position": {
      "group": 14,
      "period": 2
    },
    "block": "p",
    "discovery": {
      "year": -3750,
      "discoverer": "Prehistoric"
    },
    "subatomic particle": {
      "electron": 6,
      "proton": 6,
      "neutron": 6
    }
  },
  {
    "name": {
      "full": "Nitrogen",
      "latin": "Nitrogenium",
      "short": "N"
    },
    "type": "Other Non-metal",
    "atomic number": 7,
    "atomic weight": 14.007,
    "electron configuration": "1s² 2s² 2p³",
    "electrons per shell": "K2 L5",
    "position": {
      "group": 15,
      "period": 2
    },
    "block": "p",
    "discovery": {
      "year": 1772,
      "discoverer": "Daniel Rutherford, Antoine Laurent Lavoisier"
    },
    "subatomic particle": {
      "electron": 7,
      "proton": 7,
      "neutron": 7
    }
  },
  {
    "name": {
      "full": "Oxygen",
      "latin": "Oxygenium",
      "short": "O"
    },
    "type": "Other Non-metal",
    "atomic number": 8,
    "atomic weight": 15.999,
    "electron configuration": "1s² 2s² 2p⁴",
    "electrons per shell": "K2 L6",
    "position": {
      "group": 16,
      "period": 2
    },
    "block": "p",
    "discovery": {
      "year": 1774,
      "discoverer": "Joseph Priestley"
    },
    "subatomic particle": {
      "electron": 8,
      "proton": 8,
      "neutron": 8
    }
  },
  {
    "name": {
      "full": "Fluorine",
      "latin": "Fluorum",
      "short": "F"
    },
    "type": "Halogen",
    "atomic number": 9,
    "atomic weight": 18.998403163,
    "electron configuration": "1s² 2s² 2p⁵",
    "electrons per shell": "K2 L7",
    "position": {
      "group": 17,
      "period": 2
    },
    "block": "p",
    "discovery": {
      "year": 1886,
      "discoverer": "Henri Moissan"
    },
    "subatomic particle": {
      "electron": 9,
      "proton": 9,
      "neutron": 10
    }
  },
  {
    "name": {
      "full": "Neon",
      "latin": "Neon",
      "short": "Ne"
    },
    "type": "Noble Gas",
    "atomic number": 10,
    "atomic weight": 20.1797,
    "electron configuration": "1s² 2s² 2p⁶",
    "electrons per shell": "K2 L8",
    "position": {
      "group": 18,
      "period": 2
    },
    "block": "p",
    "discovery": {
      "year": 1898,
      "discoverer": "Sir William Ramsay, Morris William Travers"
    },
    "subatomic particle": {
      "electron": 10,
      "proton": 10,
      "neutron": 10
    }
  },
  {
    "name": {
      "full": "Sodium",
      "latin": "Natrium",
      "short": "Na"
    },
    "type": "Alkali Metal",
    "atomic number": 11,
    "atomic weight": 22.98976928,
    "electron configuration": "1s² 2s² 2p⁶ 3s¹",
    "electrons per shell": "K2 L8 M1",
    "position": {
      "group": 1,
      "period": 3
    },
    "block": "s",
    "discovery": {
      "year": 1807,
      "discoverer": "Humphry Davy"
    },
    "subatomic particle": {
      "electron": 11,
      "proton": 11,
      "neutron": 12
    }
  },
  {
    "name": {
      "full": "Magnesium",
      "latin": "Magnesium",
      "short": "Mg"
    },
    "type": "Alkaline Earth Metal",
    "atomic number": 12,
    "atomic weight": 24.305,
    "electron configuration": "1s² 2s² 2p⁶ 3s²",
    "electrons per shell": "K2 L8 M2",
    "position": {
      "group": 2,
      "period": 3
    },
    "block": "s",
    "discovery": {
      "year": 1755,
      "discoverer": "Joseph Black"
    },
    "subatomic particle": {
      "electron": 12,
      "proton": 12,
      "neutron": 12
    }
  },
  {
    "name": {
      "full": "Aluminium",
      "latin": "Aluminium",
      "short": "Al"
    },
    "type": "Post-transition Metal",
    "atomic number": 13,
    "atomic weight": 26.9815385,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p¹",
    "electrons per shell": "K2 L8 M3",
    "position": {
      "group": 13,
      "period": 3
    },
    "block": "p",
    "discovery": {
      "year": 1825,
      "discoverer": "Hans Christian Ørsted"
    },
    "subatomic particle": {
      "electron": 13,
      "proton": 13,
      "neutron": 14
    }
  },
  {
    "name": {
      "full": "Silicon",
      "latin": "Silicium",
      "short": "Si"
    },
    "type": "Metalloid",
    "atomic number": 14,
    "atomic weight": 28.085,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p²",
    "electrons per shell": "K2 L8 M4",
    "position": {
      "group": 14,
      "period": 3
    },
    "block": "p",
    "discovery": {
      "year": 1824,
      "discoverer": "Jöns Jacob Berzelius"
    },
    "subatomic particle": {
      "electron": 14,
      "proton": 14,
      "neutron": 14
    }
  },
  {
    "name": {
      "full": "Phosphorus",
      "latin": "Phosphorus",
      "short": "P"
    },
    "type": "Other Non-metal",
    "atomic number": 15,
    "atomic weight": 30.973761998,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p³",
    "electrons per shell": "K2 L8 M5",
    "position": {
      "group": 15,
      "period": 3
    },
    "block": "p",
    "discovery": {
      "year": 1669,
      "discoverer": "Hennig Brandt"
    },
    "subatomic particle": {
      "electron": 15,
      "proton": 15,
      "neutron": 16
    }
  },
  {
    "name": {
      "full": "Sulphur",
      "latin": "Sulfur",
      "short": "S"
    },
    "type": "Other Non-metal",
    "atomic number": 16,
    "atomic weight": 32.06,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁴",
    "electrons per shell": "K2 L8 M6",
    "position": {
      "group": 16,
      "period": 3
    },
    "block": "p",
    "discovery": {
      "year": -500,
      "discoverer": "Prehistoric"
    },
    "subatomic particle": {
      "electron": 16,
      "proton": 16,
      "neutron": 16
    }
  },
  {
    "name": {
      "full": "Chlorine",
      "latin": "Chlorum",
      "short": "Cl"
    },
    "type": "Halogen",
    "atomic number": 17,
    "atomic weight": 35.45,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁵",
    "electrons per shell": "K2 L8 M7",
    "position": {
      "group": 17,
      "period": 3
    },
    "block": "p",
    "discovery": {
      "year": 1774,
      "discoverer": "Carl Wilhelm Scheele"
    },
    "subatomic particle": {
      "electron": 17,
      "proton": 17,
      "neutron": 18
    }
  },
  {
    "name": {
      "full": "Argon",
      "latin": "Argon",
      "short": "Ar"
    },
    "type": "Noble Gas",
    "atomic number": 18,
    "atomic weight": 39.948,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶",
    "electrons per shell": "K2 L8 M8",
    "position": {
      "group": 18,
      "period": 3
    },
    "block": "p",
    "discovery": {
      "year": 1894,
      "discoverer": "Lord Rayleigh, Sir William Ramsay"
    },
    "subatomic particle": {
      "electron": 18,
      "proton": 18,
      "neutron": 22
    }
  },
  {
    "name": {
      "full": "Potassium",
      "latin": "Kalium",
      "short": "K"
    },
    "type": "Alkali Metal",
    "atomic number": 19,
    "atomic weight": 39.0983,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹",
    "electrons per shell": "K2 L8 M8 N1",
    "position": {
      "group": 1,
      "period": 4
    },
    "block": "s",
    "discovery": {
      "year": 1807,
      "discoverer": "Humphry Davy"
    },
    "subatomic particle": {
      "electron": 19,
      "proton": 19,
      "neutron": 20
    }
  },
  {
    "name": {
      "full": "Calcium",
      "latin": "Calcium",
      "short": "Ca"
    },
    "type": "Alkaline Earth Metal",
    "atomic number": 20,
    "atomic weight": 40.078,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²",
    "electrons per shell": "K2 L8 M8 N2",
    "position": {
      "group": 2,
      "period": 4
    },
    "block": "s",
    "discovery": {
      "year": 1807,
      "discoverer": "Humphry Davy"
    },
    "subatomic particle": {
      "electron": 20,
      "proton": 20,
      "neutron": 20
    }
  },
  {
    "name": {
      "full": "Scandium",
      "latin": "Scandium",
      "short": "Sc"
    },
    "type": "Transition Metal",
    "atomic number": 21,
    "atomic weight": 44.955908,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹",
    "electrons per shell": "K2 L8 M9 N2",
    "position": {
      "group": 3,
      "period": 4
    },
    "block": "d",
    "discovery": {
      "year": 1879,
      "discoverer": "Lars Fredrik Nilson"
    },
    "subatomic particle": {
      "electron": 21,
      "proton": 21,
      "neutron": 24
    }
  },
  {
    "name": {
      "full": "Titanium",
      "latin": "Titanium",
      "short": "Ti"
    },
    "type": "Transition Metal",
    "atomic number": 22,
    "atomic weight": 47.867,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d²",
    "electrons per shell": "K2 L8 M10 N2",
    "position": {
      "group": 4,
      "period": 4
    },
    "block": "d",
    "discovery": {
      "year": 1791,
      "discoverer": "William Gregor, Lars Fredrik Nilson"
    },
    "subatomic particle": {
      "electron": 22,
      "proton": 22,
      "neutron": 26
    }
  },
  {
    "name": {
      "full": "Vanadium",
      "latin": "Vanadium",
      "short": "V"
    },
    "type": "Transition Metal",
    "atomic number": 23,
    "atomic weight": 50.9415,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d³",
    "electrons per shell": "K2 L8 M11 N2",
    "position": {
      "group": 5,
      "period": 4
    },
    "block": "d",
    "discovery": {
      "year": 1801,
      "discoverer": "Andres Manuel Del Rio, Gabriel Sefström"
    },
    "subatomic particle": {
      "electron": 23,
      "proton": 23,
      "neutron": 28
    }
  },
  {
    "name": {
      "full": "Chromium",
      "latin": "Chromium",
      "short": "Cr"
    },
    "type": "Transition Metal",
    "atomic number": 24,
    "atomic weight": 51.9961,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁵",
    "electrons per shell": "K2 L8 M13 N1",
    "position": {
      "group": 6,
      "period": 4
    },
    "block": "d",
    "discovery": {
      "year": 1780,
      "discoverer": "Nicolas-Louis Vauquelin"
    },
    "subatomic particle": {
      "electron": 24,
      "proton": 24,
      "neutron": 28
    }
  },
  {
    "name": {
      "full": "Manganese",
      "latin": "Manganum",
      "short": "Mn"
    },
    "type": "Transition Metal",
    "atomic number": 25,
    "atomic weight": 54.938044,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁵",
    "electrons per shell": "K2 L8 M13 N2",
    "position": {
      "group": 7,
      "period": 4
    },
    "block": "d",
    "discovery": {
      "year": 1774,
      "discoverer": "Johan Gottlieb Gahn"
    },
    "subatomic particle": {
      "electron": 25,
      "proton": 25,
      "neutron": 30
    }
  },
  {
    "name": {
      "full": "Iron",
      "latin": "Ferrum",
      "short": "Fe"
    },
    "type": "Transition Metal",
    "atomic number": 26,
    "atomic weight": 55.845,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶",
    "electrons per shell": "K2 L8 M14 N2",
    "position": {
      "group": 8,
      "period": 4
    },
    "block": "d",
    "discovery": {
      "year": -2000,
      "discoverer": "Prehistoric"
    },
    "subatomic particle": {
      "electron": 26,
      "proton": 26,
      "neutron": 30
    }
  },
  {
    "name": {
      "full": "Cobalt",
      "latin": "Cobaltum",
      "short": "Co"
    },
    "type": "Transition Metal",
    "atomic number": 27,
    "atomic weight": 58.933194,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁷",
    "electrons per shell": "K2 L8 M15 N2",
    "position": {
      "group": 9,
      "period": 4
    },
    "block": "d",
    "discovery": {
      "year": 1735,
      "discoverer": "Georg Brandt"
    },
    "subatomic particle": {
      "electron": 27,
      "proton": 27,
      "neutron": 32
    }
  },
  {
    "name": {
      "full": "Nickel",
      "latin": "Niccolum",
      "short": "Ni"
    },
    "type": "Transition Metal",
    "atomic number": 28,
    "atomic weight": 58.6934,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁸",
    "electrons per shell": "K2 L8 M16 N2",
    "position": {
      "group": 10,
      "period": 4
    },
    "block": "d",
    "discovery": {
      "year": 1751,
      "discoverer": "Alex Fredrik Cronstedt"
    },
    "subatomic particle": {
      "electron": 28,
      "proton": 28,
      "neutron": 31
    }
  },
  {
    "name": {
      "full": "Copper",
      "latin": "Cuprum",
      "short": "Cu"
    },
    "type": "Transition Metal",
    "atomic number": 29,
    "atomic weight": 63.546,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹⁰",
    "electrons per shell": "K2 L8 M18 N1",
    "position": {
      "group": 11,
      "period": 4
    },
    "block": "d",
    "discovery": {
      "year": -8000,
      "discoverer": "Prehistoric"
    },
    "subatomic particle": {
      "electron": 29,
      "proton": 29,
      "neutron": 35
    }
  },
  {
    "name": {
      "full": "Zinc",
      "latin": "Zincum",
      "short": "Zn"
    },
    "type": "Transition Metal",
    "atomic number": 30,
    "atomic weight": 65.38,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰",
    "electrons per shell": "K2 L8 M18 N2",
    "position": {
      "group": 12,
      "period": 4
    },
    "block": "d",
    "discovery": {
      "year": 1500,
      "discoverer": "Prehistoric"
    },
    "subatomic particle": {
      "electron": 30,
      "proton": 30,
      "neutron": 35
    }
  },
  {
    "name": {
      "full": "Gallium",
      "latin": "Gallium",
      "short": "Ga"
    },
    "type": "Post-transition Metal",
    "atomic number": 31,
    "atomic weight": 69.723,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p¹",
    "electrons per shell": "K2 L8 M18 N3",
    "position": {
      "group": 13,
      "period": 4
    },
    "block": "p",
    "discovery": {
      "year": 1875,
      "discoverer": "Paul-Émile Lecoq de Boisbaudran"
    },
    "subatomic particle": {
      "electron": 31,
      "proton": 31,
      "neutron": 39
    }
  },
  {
    "name": {
      "full": "Germanium",
      "latin": "Germanium",
      "short": "Ge"
    },
    "type": "Metalloid",
    "atomic number": 32,
    "atomic weight": 72.63,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p²",
    "electrons per shell": "K2 L8 M18 N4",
    "position": {
      "group": 14,
      "period": 4
    },
    "block": "p",
    "discovery": {
      "year": 1886,
      "discoverer": "Clemens Alexander Winkler"
    },
    "subatomic particle": {
      "electron": 32,
      "proton": 32,
      "neutron": 41
    }
  },
  {
    "name": {
      "full": "Arsenic",
      "latin": "Arsenicum",
      "short": "As"
    },
    "type": "Metalloid",
    "atomic number": 33,
    "atomic weight": 74.921595,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p³",
    "electrons per shell": "K2 L8 M18 N5",
    "position": {
      "group": 15,
      "period": 4
    },
    "block": "p",
    "discovery": {
      "year": 1250,
      "discoverer": "Saint Albertus Magnus"
    },
    "subatomic particle": {
      "electron": 33,
      "proton": 33,
      "neutron": 42
    }
  },
  {
    "name": {
      "full": "Selenium",
      "latin": "Selenium",
      "short": "Se"
    },
    "type": "Other Non-metal",
    "atomic number": 34,
    "atomic weight": 78.971,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁴",
    "electrons per shell": "K2 L8 M18 N6",
    "position": {
      "group": 16,
      "period": 4
    },
    "block": "p",
    "discovery": {
      "year": 1817,
      "discoverer": "Jöns Jacob Berzelius"
    },
    "subatomic particle": {
      "electron": 34,
      "proton": 34,
      "neutron": 45
    }
  },
  {
    "name": {
      "full": "Bromine",
      "latin": "Bromum",
      "short": "Br"
    },
    "type": "Halogen",
    "atomic number": 35,
    "atomic weight": 79.904,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p5",
    "electrons per shell": "K2 L8 M18 N7",
    "position": {
      "group": 17,
      "period": 4
    },
    "block": "p",
    "discovery": {
      "year": 1826,
      "discoverer": "Carl Jacob Löwig, Antoine Jereome Balard"
    },
    "subatomic particle": {
      "electron": 35,
      "proton": 35,
      "neutron": 45
    }
  },
  {
    "name": {
      "full": "Krypton",
      "latin": "Krypton",
      "short": "Kr"
    },
    "type": "Noble Gas",
    "atomic number": 36,
    "atomic weight": 83.798,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶",
    "electrons per shell": "K2 L8 M18 N8",
    "position": {
      "group": 18,
      "period": 4
    },
    "block": "p",
    "discovery": {
      "year": 1898,
      "discoverer": "Sir William Ramsay, Morris Travers"
    },
    "subatomic particle": {
      "electron": 36,
      "proton": 36,
      "neutron": 48
    }
  },
  {
    "name": {
      "full": "Rubidium",
      "latin": "Rubidium",
      "short": "Rb"
    },
    "type": "Alkali Metal",
    "atomic number": 37,
    "atomic weight": 85.4678,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹",
    "electrons per shell": "K2 L8 M18 N8 O1",
    "position": {
      "group": 1,
      "period": 5
    },
    "block": "s",
    "discovery": {
      "year": 1861,
      "discoverer": "Robert Wilhelm Bunsen, Gustav Kirchhoff"
    },
    "subatomic particle": {
      "electron": 37,
      "proton": 37,
      "neutron": 48
    }
  },
  {
    "name": {
      "full": "Strontium",
      "latin": "Strontium",
      "short": "Sr"
    },
    "type": "Alkaline Earth Metal",
    "atomic number": 38,
    "atomic weight": 87.62,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s²",
    "electrons per shell": "K2 L8 M18 N8 O2",
    "position": {
      "group": 2,
      "period": 5
    },
    "block": "s",
    "discovery": {
      "year": 1790,
      "discoverer": "Adair Crawford, Humphry Davy"
    },
    "subatomic particle": {
      "electron": 38,
      "proton": 38,
      "neutron": 50
    }
  },
  {
    "name": {
      "full": "Yttrium",
      "latin": "Yttrium",
      "short": "Y"
    },
    "type": "Transition Metal",
    "atomic number": 39,
    "atomic weight": 88.90584,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹",
    "electrons per shell": "K2 L8 M18 N9 O2",
    "position": {
      "group": 3,
      "period": 5
    },
    "block": "d",
    "discovery": {
      "year": 1794,
      "discoverer": "Johan Gadolin"
    },
    "subatomic particle": {
      "electron": 39,
      "proton": 39,
      "neutron": 50
    }
  },
  {
    "name": {
      "full": "Zirconium",
      "latin": "Zirconium",
      "short": "Zr"
    },
    "type": "Transition Metal",
    "atomic number": 40,
    "atomic weight": 91.224,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d²",
    "electrons per shell": "K2 L8 M18 N10 O2",
    "position": {
      "group": 4,
      "period": 5
    },
    "block": "d",
    "discovery": {
      "year": 1789,
      "discoverer": "Martin Heinrich Klaproth, Humphry Davy"
    },
    "subatomic particle": {
      "electron": 39,
      "proton": 39,
      "neutron": 50
    }
  },
  {
    "name": {
      "full": "Niobium",
      "latin": "Niobium",
      "short": "Nb"
    },
    "type": "Transition Metal",
    "atomic number": 41,
    "atomic weight": 92.90637,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁴",
    "electrons per shell": "K2 L8 M18 N12 O1",
    "position": {
      "group": 5,
      "period": 5
    },
    "block": "d",
    "discovery": {
      "year": 1801,
      "discoverer": "Charles Hatchett"
    },
    "subatomic particle": {
      "electron": 41,
      "proton": 41,
      "neutron": 52
    }
  },
  {
    "name": {
      "full": "Molybdenum",
      "latin": "Molybdaenum",
      "short": "Mo"
    },
    "type": "Transition Metal",
    "atomic number": 42,
    "atomic weight": 95.95,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁵",
    "electrons per shell": "K2 L8 M18 N13 O1",
    "position": {
      "group": 6,
      "period": 5
    },
    "block": "d",
    "discovery": {
      "year": 1781,
      "discoverer": "Peter Jacob Hjelm"
    },
    "subatomic particle": {
      "electron": 42,
      "proton": 42,
      "neutron": 54
    }
  },
  {
    "name": {
      "full": "Technetium",
      "latin": "Technetium",
      "short": "Tc"
    },
    "type": "Transition Metal",
    "atomic number": 43,
    "atomic weight": "(98)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹",
    "electrons per shell": "K2 L8 M18 N9 O2",
    "position": {
      "group": 7,
      "period": 5
    },
    "block": "d",
    "discovery": {
      "year": 1794,
      "discoverer": "Carlo Perrier, Emilio Segrè"
    },
    "subatomic particle": {
      "electron": 43,
      "proton": 43,
      "neutron": 55
    }
  },
  {
    "name": {
      "full": "Ruthenium",
      "latin": "Ruthenium",
      "short": "Ru"
    },
    "type": "Transition Metal",
    "atomic number": 44,
    "atomic weight": 101.07,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁷",
    "electrons per shell": "K2 L8 M18 N15 O1",
    "position": {
      "group": 8,
      "period": 5
    },
    "block": "d",
    "discovery": {
      "year": 1808,
      "discoverer": "Gottfried Osann, Jędrzej Śniadecki, Karl Karlovich Klaus"
    },
    "subatomic particle": {
      "electron": 44,
      "proton": 44,
      "neutron": 57
    }
  },
  {
    "name": {
      "full": "Rhodium",
      "latin": "Rhodium",
      "short": "Rh"
    },
    "type": "Transition Metal",
    "atomic number": 45,
    "atomic weight": 102.9055,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁸",
    "electrons per shell": "K2 L8 M18 N16 O1",
    "position": {
      "group": 9,
      "period": 5
    },
    "block": "d",
    "discovery": {
      "year": 1794,
      "discoverer": "William Hyde Wollaston"
    },
    "subatomic particle": {
      "electron": 45,
      "proton": 45,
      "neutron": 58
    }
  },
  {
    "name": {
      "full": "Palladium",
      "latin": "Palladium",
      "short": "Pd"
    },
    "type": "Transition Metal",
    "atomic number": 46,
    "atomic weight": 106.42,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 4d¹⁰",
    "electrons per shell": "K2 L8 M18 N18",
    "position": {
      "group":10,
      "period": 5
    },
    "block": "d",
    "discovery": {
      "year": 1803,
      "discoverer": "William Hyde Wollaston"
    },
    "subatomic particle": {
      "electron": 46,
      "proton": 46,
      "neutron": 60
    }
  },
  {
    "name": {
      "full": "Silver",
      "latin": "Argentum",
      "short": "Ag"
    },
    "type": "Transition Metal",
    "atomic number": 47,
    "atomic weight": 107.8682,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d¹⁰",
    "electrons per shell": "K2 L8 M18 N18 O1",
    "position": {
      "group": 11,
      "period": 5
    },
    "block": "d",
    "discovery": {
      "year": -3000,
      "discoverer": "Prehistoric"
    },
    "subatomic particle": {
      "electron": 47,
      "proton": 47,
      "neutron": 61
    }
  },
  {
    "name": {
      "full": "Cadmium",
      "latin": "Cadmium",
      "short": "Cd"
    },
    "type": "Transition Metal",
    "atomic number": 48,
    "atomic weight": 112.414,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰",
    "electrons per shell": "K2 L8 M18 N18 O2",
    "position": {
      "group": 12,
      "period": 5
    },
    "block": "d",
    "discovery": {
      "year": 1817,
      "discoverer": "Friedrich Stromeyer"
    },
    "subatomic particle": {
      "electron": 48,
      "proton": 48,
      "neutron": 64
    }
  },
  {
    "name": {
      "full": "Indium",
      "latin": "Indium",
      "short": "In"
    },
    "type": "Post-transition Metal",
    "atomic number": 49,
    "atomic weight": 114.818,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p¹",
    "electrons per shell": "K2 L8 M18 N18 O3",
    "position": {
      "group": 13,
      "period": 5
    },
    "block": "p",
    "discovery": {
      "year": 1863,
      "discoverer": "Ferdinand Reich, Hieronymus Theoder Richter"
    },
    "subatomic particle": {
      "electron": 49,
      "proton": 49,
      "neutron": 66
    }
  },
  {
    "name": {
      "full": "Tin",
      "latin": "Stannum",
      "short": "Sn"
    },
    "type": "Post-transition Metal",
    "atomic number": 50,
    "atomic weight": 118.71,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p²",
    "electrons per shell": "K2 L8 M18 N18 O4",
    "position": {
      "group": 14,
      "period": 5
    },
    "block": "p",
    "discovery": {
      "year": -3000,
      "discoverer": "Prehistoric"
    },
    "subatomic particle": {
      "electron": 50,
      "proton": 50,
      "neutron": 69
    }
  },
  {
    "name": {
      "full": "Antimony",
      "latin": "Stibium",
      "short": "Sb"
    },
    "type": "Metalloid",
    "atomic number": 51,
    "atomic weight": 118.71,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p³",
    "electrons per shell": "K2 L8 M18 N18 O5",
    "position": {
      "group": 15,
      "period": 5
    },
    "block": "p",
    "discovery": {
      "year": -3000,
      "discoverer": "Prehistoric"
    },
    "subatomic particle": {
      "electron": 51,
      "proton": 51,
      "neutron": 71
    }
  },
  {
    "name": {
      "full": "Tellurium",
      "latin": "Tellurium",
      "short": "Te"
    },
    "type": "Metalloid",
    "atomic number": 52,
    "atomic weight": 127.6,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁴",
    "electrons per shell": "K2 L8 M18 N18 O6",
    "position": {
      "group": 16,
      "period": 5
    },
    "block": "p",
    "discovery": {
      "year": 1783,
      "discoverer": "Franz-Joseph Müller von Reichenstein"
    },
    "subatomic particle": {
      "electron": 52,
      "proton": 52,
      "neutron": 76
    }
  },
  {
    "name": {
      "full": "Iodine",
      "latin": "Iodum",
      "short": "I"
    },
    "type": "Halogen",
    "atomic number": 53,
    "atomic weight": 126.90447,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁵",
    "electrons per shell": "K2 L8 M18 N18 O7",
    "position": {
      "group": 17,
      "period": 5
    },
    "block": "p",
    "discovery": {
      "year": 1811,
      "discoverer": "Bernand Courtois"
    },
    "subatomic particle": {
      "electron": 53,
      "proton": 53,
      "neutron": 74
    }
  },
  {
    "name": {
      "full": "Xenon",
      "latin": "Xenon",
      "short": "Xe"
    },
    "type": "Noble Gas",
    "atomic number": 54,
    "atomic weight": 131.293,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶",
    "electrons per shell": "K2 L8 M18 N18 O8",
    "position": {
      "group": 18,
      "period": 5
    },
    "block": "p",
    "discovery": {
      "year": 1898,
      "discoverer": "Sir William Ramsay, Morris William Travers"
    },
    "subatomic particle": {
      "electron": 54,
      "proton": 54,
      "neutron": 77
    }
  },
  {
    "name": {
      "full": "Caesium",
      "latin": "Caesium",
      "short": "Cs"
    },
    "type": "Alkali Metal",
    "atomic number": 55,
    "atomic weight": 132.90545196,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s¹",
    "electrons per shell": "K2 L8 M18 N18 O8 P1",
    "position": {
      "group": 1,
      "period": 6
    },
    "block": "s",
    "discovery": {
      "year": 1860,
      "discoverer": "Robert Wilhelm Bunsen, Gustav Kirchhoff"
    },
    "subatomic particle": {
      "electron": 55,
      "proton": 55,
      "neutron": 78
    }
  },
  {
    "name": {
      "full": "Barium",
      "latin": "Barium",
      "short": "Ba"
    },
    "type": "Alkaline Earth Metal",
    "atomic number": 56,
    "atomic weight": 137.327,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s²",
    "electrons per shell": "K2 L8 M18 N18 O8 P2",
    "position": {
      "group": 2,
      "period": 6
    },
    "block": "s",
    "discovery": {
      "year": 1808,
      "discoverer": "Humphry Davy"
    },
    "subatomic particle": {
      "electron": 56,
      "proton": 56,
      "neutron": 81
    }
  },
  {
    "name": {
      "full": "Lanthanum",
      "latin": "Lanthanum",
      "short": "La"
    },
    "type": "Lanthanoid",
    "atomic number": 57,
    "atomic weight": 138.90547,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 5d¹",
    "electrons per shell": "K2 L8 M18 N18 O9 P2",
    "position": {
      "group": "n/a",
      "period": 6
    },
    "block": "f",
    "discovery": {
      "year": 1839,
      "discoverer": "Carl Gustaf Mosander"
    },
    "subatomic particle": {
      "electron": 57,
      "proton": 57,
      "neutron": 82
    }
  },
  {
    "name": {
      "full": "Cerium",
      "latin": "Cerium",
      "short": "Ce"
    },
    "type": "Lanthanoid",
    "atomic number": 58,
    "atomic weight": 140.116,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹ 5d¹",
    "electrons per shell": "K2 L8 M18 N19 O9 P2",
    "position": {
      "group": "n/a",
      "period": 6
    },
    "block": "f",
    "discovery": {
      "year": 1803,
      "discoverer": "Wilhelm Hisinger, William Francis Hillebrand, Thomas H. Norton, Jöns Jacob Berzelius"
    },
    "subatomic particle": {
      "electron": 58,
      "proton": 58,
      "neutron": 82
    }
  },
  {
    "name": {
      "full": "Praseodymium",
      "latin": "Praseodymium",
      "short": "Pr"
    },
    "type": "Lanthanoid",
    "atomic number": 59,
    "atomic weight": 140.90766,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f³",
    "electrons per shell": "K2 L8 M18 N21 O8 P2",
    "position": {
      "group": "n/a",
      "period": 6
    },
    "block": "f",
    "discovery": {
      "year": 1885,
      "discoverer": "Baron Carl Auer von Welsbach"
    },
    "subatomic particle": {
      "electron": 59,
      "proton": 59,
      "neutron": 82
    }
  },
  {
    "name": {
      "full": "Neodymium",
      "latin": "Neodymium",
      "short": "Nd"
    },
    "type": "Lanthanoid",
    "atomic number": 60,
    "atomic weight": 144.242,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f⁴",
    "electrons per shell": "K2 L8 M18 N22 O8 P2",
    "position": {
      "group": "n/a",
      "period": 6
    },
    "block": "f",
    "discovery": {
      "year": 1885,
      "discoverer": "Baron Carl Auer von Welsbach"
    },
    "subatomic particle": {
      "electron": 60,
      "proton": 60,
      "neutron": 84
    }
  },
  {
    "name": {
      "full": "Promethium",
      "latin": "Promethium",
      "short": "Pm"
    },
    "type": "Lanthanoid",
    "atomic number": 61,
    "atomic weight": 145,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f⁵",
    "electrons per shell": "K2 L8 M18 N23 O8 P2",
    "position": {
      "group": "n/a",
      "period": 6
    },
    "block": "f",
    "discovery": {
      "year": 1945,
      "discoverer": "Jacob A. Marinsky, Lawrence Glendenin, Charles D. Coryell"
    },
    "subatomic particle": {
      "electron": 61,
      "proton": 61,
      "neutron": 84
    }
  },
  {
    "name": {
      "full": "Samarium",
      "latin": "Samarium",
      "short": "Sm"
    },
    "type": "Lanthanoid",
    "atomic number": 62,
    "atomic weight": 150.36,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f⁶",
    "electrons per shell": "K2 L8 M18 N24 O8 P2",
    "position": {
      "group": "n/a",
      "period": 6
    },
    "block": "f",
    "discovery": {
      "year": 1879,
      "discoverer": "Paul-Émile Lecoq de Boisbaudran"
    },
    "subatomic particle": {
      "electron": 62,
      "proton": 62,
      "neutron": 88
    }
  },
  {
    "name": {
      "full": "Europium",
      "latin": "Europium",
      "short": "Eu"
    },
    "type": "Lanthanoid",
    "atomic number": 63,
    "atomic weight": 151.964,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f⁷",
    "electrons per shell": "K2 L8 M18 N25 O8 P2",
    "position": {
      "group": "n/a",
      "period": 6
    },
    "block": "f",
    "discovery": {
      "year": 1901,
      "discoverer": "Eugène Anatole Demarcay"
    },
    "subatomic particle": {
      "electron": 63,
      "proton": 63,
      "neutron": 89
    }
  },
  {
    "name": {
      "full": "Gadolinium",
      "latin": "Gadolinium",
      "short": "Gd"
    },
    "type": "Lanthanoid",
    "atomic number": 64,
    "atomic weight": 157.25,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f⁷ 5d¹",
    "electrons per shell": "K2 L8 M18 N25 O9 P2",
    "position": {
      "group": "n/a",
      "period": 6
    },
    "block": "f",
    "discovery": {
      "year": 1880,
      "discoverer": "Jean-Charles-Galinard de Marignac"
    },
    "subatomic particle": {
      "electron": 64,
      "proton": 64,
      "neutron": 93
    }
  },
  {
    "name": {
      "full": "Terbium",
      "latin": "Terbium",
      "short": "Tb"
    },
    "type": "Lanthanoid",
    "atomic number": 65,
    "atomic weight": 158.92535,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f⁹",
    "electrons per shell": "K2 L8 M18 N27 O8 P2",
    "position": {
      "group": "n/a",
      "period": 6
    },
    "block": "f",
    "discovery": {
      "year": 1843,
      "discoverer": "Carl Gustaf Mosander"
    },
    "subatomic particle": {
      "electron": 65,
      "proton": 65,
      "neutron": 94
    }
  },
  {
    "name": {
      "full": "Dysprosium",
      "latin": "Dysprosium",
      "short": "Dy"
    },
    "type": "Lanthanoid",
    "atomic number": 66,
    "atomic weight": 162.5,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁰",
    "electrons per shell": "K2 L8 M18 N28 O8 P2",
    "position": {
      "group": "n/a",
      "period": 6
    },
    "block": "f",
    "discovery": {
      "year": 1886,
      "discoverer": "Paul-Émile Lecoq de Boisbaudran"
    },
    "subatomic particle": {
      "electron": 66,
      "proton": 66,
      "neutron": 97
    }
  },
  {
    "name": {
      "full": "Holmium",
      "latin": "Holmium",
      "short": "Ho"
    },
    "type": "Lanthanoid",
    "atomic number": 67,
    "atomic weight": 164.93033,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹¹",
    "electrons per shell": "K2 L8 M18 N29 O8 P2",
    "position": {
      "group": "n/a",
      "period": 6
    },
    "block": "f",
    "discovery": {
      "year": 1878,
      "discoverer": "Marc Delafontaine, Jacques-Louis Soret, Per Teodor Cleve"
    },
    "subatomic particle": {
      "electron": 67,
      "proton": 67,
      "neutron": 98
    }
  },
  {
    "name": {
      "full": "Erbium",
      "latin": "Erbium",
      "short": "Er"
    },
    "type": "Lanthanoid",
    "atomic number": 68,
    "atomic weight": 167.259,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹²",
    "electrons per shell": "K2 L8 M18 N30 O8 P2",
    "position": {
      "group": "n/a",
      "period": 6
    },
    "block": "f",
    "discovery": {
      "year": 1842,
      "discoverer": "Carl Gustaf Mosander"
    },
    "subatomic particle": {
      "electron": 68,
      "proton": 68,
      "neutron": 98
    }
  },
  {
    "name": {
      "full": "Thulium",
      "latin": "Thulium",
      "short": "Tm"
    },
    "type": "Lanthanoid",
    "atomic number": 69,
    "atomic weight": 168.93422,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹³",
    "electrons per shell": "K2 L8 M18 N31 O8 P2",
    "position": {
      "group": "n/a",
      "period": 6
    },
    "block": "f",
    "discovery": {
      "year": 1879,
      "discoverer": "Per Teodor Cleve"
    },
    "subatomic particle": {
      "electron": 69,
      "proton": 69,
      "neutron": 100
    }
  },
  {
    "name": {
      "full": "Ytterbium",
      "latin": "Ytterbium",
      "short": "Yb"
    },
    "type": "Lanthanoid",
    "atomic number": 70,
    "atomic weight": 173.045,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴",
    "electrons per shell": "K2 L8 M18 N32 O8 P2",
    "position": {
      "group": "n/a",
      "period": 6
    },
    "block": "f",
    "discovery": {
      "year": 1878,
      "discoverer": "Jean-Charles-Galinard de Marignac"
    },
    "subatomic particle": {
      "electron": 70,
      "proton": 70,
      "neutron": 103
    }
  },
  {
    "name": {
      "full": "Lutetium",
      "latin": "Lutetium",
      "short": "Lu"
    },
    "type": "Lanthanoid",
    "atomic number": 71,
    "atomic weight": 174.9668,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹",
    "electrons per shell": "K2 L8 M18 N32 O9 P2",
    "position": {
      "group": "n/a",
      "period": 6
    },
    "block": "d",
    "discovery": {
      "year": 1907,
      "discoverer": "Georges Urbain, Charles James"
    },
    "subatomic particle": {
      "electron": 71,
      "proton": 71,
      "neutron": 104
    }
  },
  {
    "name": {
      "full": "Hafnium",
      "latin": "Hafnium",
      "short": "Hf"
    },
    "type": "Transition Metal",
    "atomic number": 72,
    "atomic weight": 178.49,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d2",
    "electrons per shell": "K2 L8 M18 N32 O10 P2",
    "position": {
      "group": 4,
      "period": 6
    },
    "block": "d",
    "discovery": {
      "year": 1923,
      "discoverer": "Dirk Coster, Georg von Hevesy"
    },
    "subatomic particle": {
      "electron": 72,
      "proton": 72,
      "neutron": 106
    }
  },
  {
    "name": {
      "full": "Tantalum",
      "latin": "Tantalum",
      "short": "Ta"
    },
    "type": "Transition Metal",
    "atomic number": 73,
    "atomic weight": 180.94788,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d3",
    "electrons per shell": "K2 L8 M18 N32 O11 P2",
    "position": {
      "group": 5,
      "period": 6
    },
    "block": "d",
    "discovery": {
      "year": 1802,
      "discoverer": "Charles Hatchett"
    },
    "subatomic particle": {
      "electron": 73,
      "proton": 73,
      "neutron": 108
    }
  },
  {
    "name": {
      "full": "Tungsten",
      "latin": "Wolframium",
      "short": "W"
    },
    "type": "Transition Metal",
    "atomic number": 74,
    "atomic weight": 183.84,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d4",
    "electrons per shell": "K2 L8 M18 N32 O12 P2",
    "position": {
      "group": 6,
      "period": 6
    },
    "block": "d",
    "discovery": {
      "year": 1783,
      "discoverer": "Juan José D'Elhuyar, Fausto Elhuyar"
    },
    "subatomic particle": {
      "electron": 74,
      "proton": 74,
      "neutron": 110
    }
  },
  {
    "name": {
      "full": "Rhenium",
      "latin": "Rhenium",
      "short": "Re"
    },
    "type": "Transition Metal",
    "atomic number": 75,
    "atomic weight": 186.207,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d5",
    "electrons per shell": "K2 L8 M18 N32 O13 P2",
    "position": {
      "group": 7,
      "period": 6
    },
    "block": "d",
    "discovery": {
      "year": 1925,
      "discoverer": "Otto Berg, Walter Noddack, Ida Noddack"
    },
    "subatomic particle": {
      "electron": 75,
      "proton": 75,
      "neutron": 111
    }
  },
  {
    "name": {
      "full": "Osmium",
      "latin": "Osmium",
      "short": "Os"
    },
    "type": "Transition Metal",
    "atomic number": 76,
    "atomic weight": 190.23,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d6",
    "electrons per shell": "K2 L8 M18 N32 O14 P2",
    "position": {
      "group": 8,
      "period": 6
    },
    "block": "d",
    "discovery": {
      "year": 1803,
      "discoverer": "Smithson Tennant, William Hyde Wollaston"
    },
    "subatomic particle": {
      "electron": 76,
      "proton": 76,
      "neutron": 114
    }
  },
  {
    "name": {
      "full": "Iridium",
      "latin": "Iridium",
      "short": "Ir"
    },
    "type": "Transition Metal",
    "atomic number": 77,
    "atomic weight": 192.217,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d7",
    "electrons per shell": "K2 L8 M18 N32 O15 P2",
    "position": {
      "group": 9,
      "period": 6
    },
    "block": "d",
    "discovery": {
      "year": 1803,
      "discoverer": "Smithson Tennant"
    },
    "subatomic particle": {
      "electron": 77,
      "proton": 77,
      "neutron": 115
    }
  },
  {
    "name": {
      "full": "Platinum",
      "latin": "Platinum",
      "short": "Pt"
    },
    "type": "Transition Metal",
    "atomic number": 78,
    "atomic weight": 195.084,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s¹ 4f¹⁴ 5d9",
    "electrons per shell": "K2 L8 M18 N32 O17 P1",
    "position": {
      "group": 10,
      "period": 6
    },
    "block": "d",
    "discovery": {
      "year": 1735,
      "discoverer": "Antonio de Ulloa"
    },
    "subatomic particle": {
      "electron": 78,
      "proton": 78,
      "neutron": 117
    }
  },
  {
    "name": {
      "full": "Gold",
      "latin": "Aurum",
      "short": "Au"
    },
    "type": "Transition Metal",
    "atomic number": 79,
    "atomic weight": 196.966569,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s¹ 4f¹⁴ 5d¹⁰",
    "electrons per shell": "K2 L8 M18 N32 O18 P1",
    "position": {
      "group": 11,
      "period": 6
    },
    "block": "d",
    "discovery": {
      "year": -2500,
      "discoverer": "Prehistoric"
    },
    "subatomic particle": {
      "electron": 79,
      "proton": 79,
      "neutron": 118
    }
  },
  {
    "name": {
      "full": "Mercury",
      "latin": "Hydrargyrum",
      "short": "Hg"
    },
    "type": "Transition Metal",
    "atomic number": 80,
    "atomic weight": 200.592,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰",
    "electrons per shell": "K2 L8 M18 N32 O18 P2",
    "position": {
      "group": 12,
      "period": 6
    },
    "block": "d",
    "discovery": {
      "year": -1500,
      "discoverer": "Prehistoric"
    },
    "subatomic particle": {
      "electron": 80,
      "proton": 80,
      "neutron": 121
    }
  },
  {
    "name": {
      "full": "Thallium",
      "latin": "Thallium",
      "short": "Tl"
    },
    "type": "Post-transition Metal",
    "atomic number": 81,
    "atomic weight": 204.38,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p¹",
    "electrons per shell": "K2 L8 M18 N32 O18 P3",
    "position": {
      "group": 13,
      "period": 6
    },
    "block": "p",
    "discovery": {
      "year": 1861,
      "discoverer": "William Crookes"
    },
    "subatomic particle": {
      "electron": 81,
      "proton": 81,
      "neutron": 123
    }
  },
  {
    "name": {
      "full": "Lead",
      "latin": "Plumbum",
      "short": "Pb"
    },
    "type": "Post-transition Metal",
    "atomic number": 82,
    "atomic weight": 207.2,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p²",
    "electrons per shell": "K2 L8 M18 N32 O18 P4",
    "position": {
      "group": 14,
      "period": 6
    },
    "block": "p",
    "discovery": {
      "year": -4000,
      "discoverer": "Prehistoric"
    },
    "subatomic particle": {
      "electron": 82,
      "proton": 82,
      "neutron": 125
    }
  },
  {
    "name": {
      "full": "Bismuth",
      "latin": "Bisemutum",
      "short": "Bi"
    },
    "type": "Post-transition Metal",
    "atomic number": 83,
    "atomic weight": 208.9804,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p³",
    "electrons per shell": "K2 L8 M18 N32 O18 P5",
    "position": {
      "group": 15,
      "period": 6
    },
    "block": "p",
    "discovery": {
      "year": 1400,
      "discoverer": "Prehistoric"
    },
    "subatomic particle": {
      "electron": 83,
      "proton": 83,
      "neutron": 126
    }
  },
  {
    "name": {
      "full": "Polonium",
      "latin": "Polonium",
      "short": "Po"
    },
    "type": "Metalloid",
    "atomic number": 84,
    "atomic weight": "(209)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁴",
    "electrons per shell": "K2 L8 M18 N32 O18 P6",
    "position": {
      "group": 16,
      "period": 6
    },
    "block": "p",
    "discovery": {
      "year": 1898,
      "discoverer": "Marie Curie"
    },
    "subatomic particle": {
      "electron": 84,
      "proton": 84,
      "neutron": 125
    }
  },
  {
    "name": {
      "full": "Astatine",
      "latin": "Astatium",
      "short": "At"
    },
    "type": "Halogen",
    "atomic number": 85,
    "atomic weight": "(210)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁵",
    "electrons per shell": "K2 L8 M18 N32 O18 P7",
    "position": {
      "group": 17,
      "period": 6
    },
    "block": "p",
    "discovery": {
      "year": 1940,
      "discoverer": "Dale R. Corson"
    },
    "subatomic particle": {
      "electron": 85,
      "proton": 85,
      "neutron": 125
    }
  },
  {
    "name": {
      "full": "Radon",
      "latin": "Radon",
      "short": "Rn"
    },
    "type": "Noble Gas",
    "atomic number": 86,
    "atomic weight": "(222)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶",
    "electrons per shell": "K2 L8 M18 N32 O18 P8",
    "position": {
      "group": 18,
      "period": 6
    },
    "block": "p",
    "discovery": {
      "year": 1900,
      "discoverer": "Friedrich Ernst Dorn"
    },
    "subatomic particle": {
      "electron": 86,
      "proton": 86,
      "neutron": 136
    }
  },
  {
    "name": {
      "full": "Francium",
      "latin": "Francium",
      "short": "Fr"
    },
    "type": "Alkali Metal",
    "atomic number": 87,
    "atomic weight": "(223)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s¹",
    "electrons per shell": "K2 L8 M18 N32 O18 P8 Q1",
    "position": {
      "group": 1,
      "period": 7
    },
    "block": "s",
    "discovery": {
      "year": 1939,
      "discoverer": "Marguerite Perey"
    },
    "subatomic particle": {
      "electron": 87,
      "proton": 87,
      "neutron": 136
    }
  },
  {
    "name": {
      "full": "Radium",
      "latin": "Radium",
      "short": "Ra"
    },
    "type": "Alkaline Earth Metal",
    "atomic number": 88,
    "atomic weight": "(226)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s²",
    "electrons per shell": "K2 L8 M18 N32 O18 P8 Q2",
    "position": {
      "group": 2,
      "period": 7
    },
    "block": "s",
    "discovery": {
      "year": 1898,
      "discoverer": "Pierre Curie, Marie Curie"
    },
    "subatomic particle": {
      "electron": 88,
      "proton": 88,
      "neutron": 138
    }
  },
  {
    "name": {
      "full": "Actinium",
      "latin": "Actinium",
      "short": "Ac"
    },
    "type": "Actinoid",
    "atomic number": 89,
    "atomic weight": "(227)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 6d¹",
    "electrons per shell": "K2 L8 M18 N32 O18 P9 Q2",
    "position": {
      "group": "n/a",
      "period": 7
    },
    "block": "f",
    "discovery": {
      "year": 1899,
      "discoverer": "André-Louis Debierne"
    },
    "subatomic particle": {
      "electron": 89,
      "proton": 89,
      "neutron": 138
    }
  },
  {
    "name": {
      "full": "Thorium",
      "latin": "Thorium",
      "short": "Th"
    },
    "type": "Actinoid",
    "atomic number": 90,
    "atomic weight": 232.0377,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 6d²",
    "electrons per shell": "K2 L8 M18 N32 O18 P10 Q2",
    "position": {
      "group": "n/a",
      "period": 7
    },
    "block": "f",
    "discovery": {
      "year": 1829,
      "discoverer": "Jöns Jacob Berzelius"
    },
    "subatomic particle": {
      "electron": 90,
      "proton": 90,
      "neutron": 142
    }
  },
  {
    "name": {
      "full": "Protactinium",
      "latin": "Protactinium",
      "short": "Pa"
    },
    "type": "Actinoid",
    "atomic number": 91,
    "atomic weight": "(231.03588)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f² 6d¹",
    "electrons per shell": "K2 L8 M18 N32 O20 P9 Q2",
    "position": {
      "group": "n/a",
      "period": 7
    },
    "block": "f",
    "discovery": {
      "year": 1913,
      "discoverer": "Oswald Helmuth Göhring, John Arnold Cranston, Alexander Fleck (1st Baron Fleck), Otto Hahn, Lise Meitner, Kasimir Fajans, Frederick Soddy"
    },
    "subatomic particle": {
      "electron": 91,
      "proton": 91,
      "neutron": 140
    }
  },
  {
    "name": {
      "full": "Uranium",
      "latin": "Uranium",
      "short": "U"
    },
    "type": "Actinoid",
    "atomic number": 92,
    "atomic weight": 238.02891,
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f³ 6d¹",
    "electrons per shell": "K2 L8 M18 N32 O21 P9 Q2",
    "position": {
      "group": "n/a",
      "period": 7
    },
    "block": "f",
    "discovery": {
      "year": 1789,
      "discoverer": "Martin Heinrich Klaproth"
    },
    "subatomic particle": {
      "electron": 92,
      "proton": 92,
      "neutron": 146
    }
  },
  {
    "name": {
      "full": "Neptunium",
      "latin": "Neptunium",
      "short": "Np"
    },
    "type": "Actinoid",
    "atomic number": 93,
    "atomic weight": "(237)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁴ 6d¹",
    "electrons per shell": "K2 L8 M18 N32 O22 P9 Q2",
    "position": {
      "group": "n/a",
      "period": 7
    },
    "block": "f",
    "discovery": {
      "year": 1940,
      "discoverer": "Edwin McMillan, Philip Hauge Abelson"
    },
    "subatomic particle": {
      "electron": 93,
      "proton": 93,
      "neutron": 144
    }
  },
  {
    "name": {
      "full": "Plutonium",
      "latin": "Plutonium",
      "short": "Pu"
    },
    "type": "Actinoid",
    "atomic number": 94,
    "atomic weight": "(244)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁶",
    "electrons per shell": "K2 L8 M18 N32 O24 P8 Q2",
    "position": {
      "group": "n/a",
      "period": 7
    },
    "block": "f",
    "discovery": {
      "year": 1940,
      "discoverer": "Arthur C. Wahl, Glenn Seaborg, Joseph William Kennedy"
    },
    "subatomic particle": {
      "electron": 94,
      "proton": 94,
      "neutron": 150
    }
  },
  {
    "name": {
      "full": "Americium",
      "latin": "Americium",
      "short": "Am"
    },
    "type": "Actinoid",
    "atomic number": 95,
    "atomic weight": "(243)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁷",
    "electrons per shell": "K2 L8 M18 N32 O25 P8 Q2",
    "position": {
      "group": "n/a",
      "period": 7
    },
    "block": "f",
    "discovery": {
      "year": 1944,
      "discoverer": "Ralph Arthur James, Leon O. Morgan, Glenn Seaborg, Albert Ghiorso"
    },
    "subatomic particle": {
      "electron": 95,
      "proton": 95,
      "neutron": 148
    }
  },
  {
    "name": {
      "full": "Curium",
      "latin": "Curium",
      "short": "Cm"
    },
    "type": "Actinoid",
    "atomic number": 96,
    "atomic weight": "(247)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁷ 6d¹",
    "electrons per shell": "K2 L8 M18 N32 O25 P9 Q2",
    "position": {
      "group": "n/a",
      "period": 7
    },
    "block": "f",
    "discovery": {
      "year": 1944,
      "discoverer": "Glenn Seaborg, Ralph Arthur James, Albert Ghiorso"
    },
    "subatomic particle": {
      "electron": 96,
      "proton": 96,
      "neutron": 151
    }
  },
  {
    "name": {
      "full": "Berkelium",
      "latin": "Berkelium",
      "short": "Bk"
    },
    "type": "Actinoid",
    "atomic number": 97,
    "atomic weight": "(247)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁹",
    "electrons per shell": "K2 L8 M18 N32 O27 P8 Q2",
    "position": {
      "group": "n/a",
      "period": 7
    },
    "block": "f",
    "discovery": {
      "year": 1949,
      "discoverer": "Stanley Gerald Thompson, Albert Ghiorso, Glenn Seaborg"
    },
    "subatomic particle": {
      "electron": 97,
      "proton": 97,
      "neutron": 150
    }
  },
  {
    "name": {
      "full": "Californium",
      "latin": "Californium",
      "short": "Cf"
    },
    "type": "Actinoid",
    "atomic number": 98,
    "atomic weight": "(251)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁰",
    "electrons per shell": "K2 L8 M18 N32 O28 P8 Q2",
    "position": {
      "group": "n/a",
      "period": 7
    },
    "block": "f",
    "discovery": {
      "year": 1950,
      "discoverer": "Stanley Gerald Thompson, Kenneth Street Jr., Albert Ghiorso, Glenn Seaborg"
    },
    "subatomic particle": {
      "electron": 98,
      "proton": 98,
      "neutron": 153
    }
  },
  {
    "name": {
      "full": "Einsteium",
      "latin": "Einsteium",
      "short": "Es"
    },
    "type": "Actinoid",
    "atomic number": 99,
    "atomic weight": "(252)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹¹",
    "electrons per shell": "K2 L8 M18 N32 O29 P8 Q2",
    "position": {
      "group": "n/a",
      "period": 7
    },
    "block": "f",
    "discovery": {
      "year": 1952,
      "discoverer": "Gregory R. Choppin, Stanley Gerald Thompson, Bernard G. Harvey, Albert Ghiorso"
    },
    "subatomic particle": {
      "electron": 99,
      "proton": 99,
      "neutron": 153
    }
  },
  {
    "name": {
      "full": "Fermium",
      "latin": "Fermium",
      "short": "Fm"
    },
    "type": "Actinoid",
    "atomic number": 100,
    "atomic weight": "(257)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹²",
    "electrons per shell": "K2 L8 M18 N32 O30 P8 Q2",
    "position": {
      "group": "n/a",
      "period": 7
    },
    "block": "f",
    "discovery": {
      "year": 1952,
      "discoverer": "Stanley Gerald Thompson, Gregory R. Choppin, Bernard G. Harvey, Albert Ghiorso"
    },
    "subatomic particle": {
      "electron": 100,
      "proton": 100,
      "neutron": 157
    }
  },
  {
    "name": {
      "full": "Mendelevium",
      "latin": "Mendelevium",
      "short": "Md"
    },
    "type": "Actinoid",
    "atomic number": 101,
    "atomic weight": "(258)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹³",
    "electrons per shell": "K2 L8 M18 N32 O31 P8 Q2",
    "position": {
      "group": "n/a",
      "period": 7
    },
    "block": "f",
    "discovery": {
      "year": 1955,
      "discoverer": "Albert Ghiorso, Glenn Seaborg"
    },
    "subatomic particle": {
      "electron": 101,
      "proton": 101,
      "neutron": 157
    }
  },
  {
    "name": {
      "full": "Nobelium",
      "latin": "Nobelium",
      "short": "No"
    },
    "type": "Actinoid",
    "atomic number": 102,
    "atomic weight": "(259)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴",
    "electrons per shell": "K2 L8 M18 N32 O32 P8 Q2",
    "position": {
      "group": "n/a",
      "period": 7
    },
    "block": "f",
    "discovery": {
      "year": 1958,
      "discoverer": "Torbjørn Sikkeland, John R. Walton, Albert Ghiorso, Glenn Seaborg"
    },
    "subatomic particle": {
      "electron": 102,
      "proton": 102,
      "neutron": 157
    }
  },
  {
    "name": {
      "full": "Lawrencium",
      "latin": "Lawrencium",
      "short": "Lr"
    },
    "type": "Actinoid",
    "atomic number": 103,
    "atomic weight": "(262)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 7p¹",
    "electrons per shell": "K2 L8 M18 N32 O32 P8 Q3",
    "position": {
      "group": "n/a",
      "period": 7
    },
    "block": "d",
    "discovery": {
      "year": 1961,
      "discoverer": "Torbjørn Sikkeland, Almon E. Larsh, Robert M. Latimer, Albert Ghiorso"
    },
    "subatomic particle": {
      "electron": 103,
      "proton": 103,
      "neutron": 159
    }
  },
  {
    "name": {
      "full": "Rutherfordium",
      "latin": "Rutherfordium",
      "short": "Rf"
    },
    "type": "Transition Metal",
    "atomic number": 104,
    "atomic weight": "(267)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d²",
    "electrons per shell": "K2 L8 M18 N32 O32 P10 Q2",
    "position": {
      "group": 4,
      "period": 7
    },
    "block": "d",
    "discovery": {
      "year": 1964,
      "discoverer": "Albert Ghiorso"
    },
    "subatomic particle": {
      "electron": 104,
      "proton": 104,
      "neutron": 163
    }
  },
  {
    "name": {
      "full": "Dubnium",
      "latin": "Dubnium",
      "short": "Db"
    },
    "type": "Transition Metal",
    "atomic number": 105,
    "atomic weight": "(270)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d³",
    "electrons per shell": "K2 L8 M18 N32 O32 P11 Q2",
    "position": {
      "group": 5,
      "period": 7
    },
    "block": "d",
    "discovery": {
      "year": 1967,
      "discoverer": "Albert Ghiorso"
    },
    "subatomic particle": {
      "electron": 105,
      "proton": 105,
      "neutron": 165
    }
  },
  {
    "name": {
      "full": "Seaborgium",
      "latin": "Seaborgium",
      "short": "Sg"
    },
    "type": "Transition Metal",
    "atomic number": 106,
    "atomic weight": "(269)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d⁴",
    "electrons per shell": "K2 L8 M18 N32 O32 P12 Q2",
    "position": {
      "group": 6,
      "period": 7
    },
    "block": "d",
    "discovery": {
      "year": 1967,
      "discoverer": "Albert Ghiorso"
    },
    "subatomic particle": {
      "electron": 106,
      "proton": 106,
      "neutron": 163
    }
  },
  {
    "name": {
      "full": "Bohrium",
      "latin": "Bohrium",
      "short": "Bh"
    },
    "type": "Transition Metal",
    "atomic number": 107,
    "atomic weight": "(270)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d⁵",
    "electrons per shell": "K2 L8 M18 N32 O32 P13 Q2",
    "position": {
      "group": 7,
      "period": 7
    },
    "block": "d",
    "discovery": {
      "year": 1981,
      "discoverer": "Peter Armbruster, Gottfried Munzenburg"
    },
    "subatomic particle": {
      "electron": 107,
      "proton": 107,
      "neutron": 163
    }
  },
  {
    "name": {
      "full": "Hassium",
      "latin": "Hassium",
      "short": "Hs"
    },
    "type": "Transition Metal",
    "atomic number": 108,
    "atomic weight": "(270)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d⁶",
    "electrons per shell": "K2 L8 M18 N32 O32 P14 Q2",
    "position": {
      "group": 8,
      "period": 7
    },
    "block": "d",
    "discovery": {
      "year": 1984,
      "discoverer": "Peter Armbruster"
    },
    "subatomic particle": {
      "electron": 108,
      "proton": 108,
      "neutron": 162
    }
  },
  {
    "name": {
      "full": "Meitnerium",
      "latin": "Meitnerium",
      "short": "Mt"
    },
    "type": "Transition Metal",
    "atomic number": 109,
    "atomic weight": "(278)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d⁷",
    "electrons per shell": "K2 L8 M18 N32 O32 P15 Q2",
    "position": {
      "group": 9,
      "period": 7
    },
    "block": "d",
    "discovery": {
      "year": 1982,
      "discoverer": "Peter Armbruster, Gottfried Munzenburg"
    },
    "subatomic particle": {
      "electron": 109,
      "proton": 109,
      "neutron": 169
    }
  },
  {
    "name": {
      "full": "Darmstadtium",
      "latin": "Darmstadtium",
      "short": "Ds"
    },
    "type": "Transition Metal",
    "atomic number": 110,
    "atomic weight": "(281)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s¹ 5f¹⁴ 6d⁹",
    "electrons per shell": "K2 L8 M18 N32 O32 P17 Q1",
    "position": {
      "group": 10,
      "period": 7
    },
    "block": "d",
    "discovery": {
      "year": 1994,
      "discoverer": "Sigurd Hofmann"
    },
    "subatomic particle": {
      "electron": 110,
      "proton": 110,
      "neutron": 171
    }
  },
  {
    "name": {
      "full": "Roentgenium",
      "latin": "Roentgenium",
      "short": "Rg"
    },
    "type": "Transition Metal",
    "atomic number": 111,
    "atomic weight": "(281)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s¹ 5f¹⁴ 6d¹⁰",
    "electrons per shell": "K2 L8 M18 N32 O32 P18 Q1",
    "position": {
      "group": 11,
      "period": 7
    },
    "block": "d",
    "discovery": {
      "year": 1994,
      "discoverer": "Sigurd Hofmann"
    },
    "subatomic particle": {
      "electron": 111,
      "proton": 111,
      "neutron": 170
    }
  },
  {
    "name": {
      "full": "Copernicium",
      "latin": "Copernicium",
      "short": "Cn"
    },
    "type": "Transition Metal",
    "atomic number": 112,
    "atomic weight": "(285)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰",
    "electrons per shell": "K2 L8 M18 N32 O32 P18 Q2",
    "position": {
      "group": 12,
      "period": 7
    },
    "block": "d",
    "discovery": {
      "year": 1996,
      "discoverer": "Sigurd Hofmann"
    },
    "subatomic particle": {
      "electron": 112,
      "proton": 112,
      "neutron": 173
    }
  },
  {
    "name": {
      "full": "Nihonium",
      "latin": "Nihonium",
      "short": "Nh"
    },
    "type": "Post-transition Metal",
    "atomic number": 113,
    "atomic weight": "(286)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p¹",
    "electrons per shell": "K2 L8 M18 N32 O32 P18 Q3",
    "position": {
      "group": 13,
      "period": 7
    },
    "block": "p",
    "discovery": {
      "year": 2004,
      "discoverer": "Sigurd Hofmann, Kosuke Morita"
    },
    "subatomic particle": {
      "electron": 113,
      "proton": 113,
      "neutron": 173
    }
  },
  {
    "name": {
      "full": "Flerovium",
      "latin": "Flerovium",
      "short": "Fl"
    },
    "type": "Post-transition Metal",
    "atomic number": 114,
    "atomic weight": "(289)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p²",
    "electrons per shell": "K2 L8 M18 N32 O32 P18 Q4",
    "position": {
      "group": 14,
      "period": 7
    },
    "block": "p",
    "discovery": {
      "year": 1998,
      "discoverer": "Sigurd Hofmann"
    },
    "subatomic particle": {
      "electron": 114,
      "proton": 114,
      "neutron": 175
    }
  },
  {
    "name": {
      "full": "Moscovium",
      "latin": "Moscovium",
      "short": "Mc"
    },
    "type": "Post-transition Metal",
    "atomic number": 115,
    "atomic weight": "(289)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p³",
    "electrons per shell": "K2 L8 M18 N32 O32 P18 Q5",
    "position": {
      "group": 15,
      "period": 7
    },
    "block": "p",
    "discovery": {
      "year": 2004,
      "discoverer": "Yuri Oganessian"
    },
    "subatomic particle": {
      "electron": 115,
      "proton": 115,
      "neutron": 174
    }
  },
  {
    "name": {
      "full": "Livermorium",
      "latin": "Livermorium",
      "short": "Lv"
    },
    "type": "Post-transition Metal",
    "atomic number": 116,
    "atomic weight": "(293)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p⁴",
    "electrons per shell": "K2 L8 M18 N32 O32 P18 Q6",
    "position": {
      "group": 16,
      "period": 7
    },
    "block": "p",
    "discovery": {
      "year": 2000,
      "discoverer": "Yuri Oganessian"
    },
    "subatomic particle": {
      "electron": 116,
      "proton": 116,
      "neutron": 177
    }
  },
  {
    "name": {
      "full": "Tennessine",
      "latin": "Tennessine",
      "short": "Ts"
    },
    "type": "Halogen",
    "atomic number": 117,
    "atomic weight": "(293)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p⁵",
    "electrons per shell": "K2 L8 M18 N32 O32 P18 Q7",
    "position": {
      "group": 17,
      "period": 7
    },
    "block": "p",
    "discovery": {
      "year": 2010,
      "discoverer": "Yuri Oganessian"
    },
    "subatomic particle": {
      "electron": 117,
      "proton": 117,
      "neutron": 176
    }
  },
  {
    "name": {
      "full": "Oganesson",
      "latin": "Oganesson",
      "short": "Og"
    },
    "type": "Noble Gas",
    "atomic number": 118,
    "atomic weight": "(294)",
    "electron configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p⁶",
    "electrons per shell": "K2 L8 M18 N32 O32 P18 Q8",
    "position": {
      "group": 18,
      "period": 7
    },
    "block": "p",
    "discovery": {
      "year": 2006,
      "discoverer": "Yuri Oganessian"
    },
    "subatomic particle": {
      "electron": 118,
      "proton": 118,
      "neutron": 176
    }
  }
]`
