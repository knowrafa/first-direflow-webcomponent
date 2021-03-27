/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { name } from "../../package.json";

export default function (appContainerId: string, componentName = name) {
  const webComponent = document.querySelector(componentName);
  // @ts-ignore
  const shadowRoot = webComponent.shadowRoot as ShadowRoot;
  const getContainer = () =>
    shadowRoot.querySelector(`#${appContainerId}`) as HTMLElement;
  return { getContainer, shadowRoot };
}
