import paletteFile from "./palette.json";

// if this fails, it's because the json file is not formatted correctly
const palette = paletteFile as Palette;

export interface Palette {
  bgDark: string;
  bgLight: string;
  bgNormal: string;
  fgDark: string;
  fgLight: string;
  fgNormal: string;
  accents: Accent[];
}

export interface Accent {
  primary: string;
  secondary: string;
  neutral: string;
  name: string;
}

export function setPalette(): Error | void {
  //todo - make a function that sets css variables for the stuff in palette.json
  return new Error("Not implemented");
}
