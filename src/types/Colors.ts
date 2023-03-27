export interface ColorMode {
  background: string;
  text: string;
  controls: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
}

export const DarkMode: ColorMode = {
  background: "#1F1F31",
  text: "#FFFFFF",
  controls: "#F1778B",
  color1: "#F0A967",
  color2: "#FDFF8A",
  color3: "#E287CE",
  color4: "#44EB9F",
};

export const LightMode: ColorMode = {
  background: "#F7E7CE",
  text: "#7E6859",
  controls: "#7E6859",
  color1: "#7E6859",
  color2: "#7E6859",
  color3: "#7E6859",
  color4: "#7E6859",
};
