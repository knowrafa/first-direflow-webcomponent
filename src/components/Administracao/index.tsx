import { DireflowComponent } from "direflow-component";
import Administracao from "./Administracao";

export const administracaoComponentName = "administracao-component"

export default DireflowComponent.create({
  component: Administracao,
  configuration: {
    tagname: administracaoComponentName,
  },
  plugins: [
    {
      name: "font-loader",
      options: {
        google: {
          families: [
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "Noto Sans",
            "sans-serif",
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
            "Noto Color Emoji",
          ],
        },
      },
    },
  ],
});
