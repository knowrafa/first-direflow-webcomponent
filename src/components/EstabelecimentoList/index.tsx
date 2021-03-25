import { DireflowComponent } from "direflow-component";
import EstabelecimentoList from "./EstabelecimentoList";

export default DireflowComponent.create({
  component: EstabelecimentoList,
  configuration: {
    tagname: "estabelecimento-component",
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
