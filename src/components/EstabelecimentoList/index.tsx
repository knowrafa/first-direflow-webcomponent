import { DireflowComponent } from "direflow-component";
import EstabelecimentoList from "./EstabelecimentoList";

export const estabelecimentoComponentName = "estabelecimento-component"

export default DireflowComponent.create({
  component: EstabelecimentoList,
  configuration: {
    tagname: estabelecimentoComponentName,
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
