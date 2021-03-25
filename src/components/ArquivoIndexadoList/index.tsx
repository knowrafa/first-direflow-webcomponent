import { DireflowComponent } from "direflow-component";
import ArquivoIndexadoList from "./ArquivoIndexadoList";


export default DireflowComponent.create({
  component: ArquivoIndexadoList,
  configuration: {
    tagname: "arquivo-indexado-component",
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