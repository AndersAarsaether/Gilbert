export interface Theme {
  backgroundColor: string;
  foregroundColor: string;
  fontColor: string;
  fontContrastColor: string;
  controlColor: string;
  extraColor1: string;
  extraColor2: string;
  extraColor3: string;
  extraColor4: string;
}

export const DarkMode: Theme = {
  backgroundColor: "#1F1F31",
  foregroundColor: "#353546",
  fontColor: "#FFFFFF",
  fontContrastColor: "#000000",
  controlColor: "#F1778B",
  extraColor1: "#F0A967",
  extraColor2: "#FDFF8A",
  extraColor3: "#E287CE",
  extraColor4: "#44EB9F",
};

export const LightMode: Theme = {
  backgroundColor: "#F7E7CE",
  foregroundColor: "#DFCEB7",
  fontColor: "#7E6859",
  fontContrastColor: "#FFFFFF",
  controlColor: "#7E6859",
  extraColor1: "#7E6859",
  extraColor2: "#7E6859",
  extraColor3: "#7E6859",
  extraColor4: "#7E6859",
};
