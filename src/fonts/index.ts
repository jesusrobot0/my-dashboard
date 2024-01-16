import { Poppins } from "next/font/google";
import { Lora } from "next/font/google";
("next/font/google");

export const general = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const title = Lora({
  subsets: ["latin"],
  weight: ["700"],
});
