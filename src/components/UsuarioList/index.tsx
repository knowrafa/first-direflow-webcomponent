import { DireflowComponent } from "direflow-component";
import UsuarioList from "./UsuarioList";

export default DireflowComponent.create({
  component: UsuarioList,
  configuration: {
    tagname: "usuario-component",
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