import { DireflowComponent } from "direflow-component";
import MenuList from "./MenuList";

export const menuListApp = "menu-component"

export default DireflowComponent.create({
  component: MenuList,
  configuration: {
    tagname: menuListApp,
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