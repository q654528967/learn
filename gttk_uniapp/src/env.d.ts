/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
interface RequestResult extends UniApp.RequestSuccessCallbackResult {
  code: number;
  message: string;
  result: AnyObject;
  success: boolean;
  timestamp: number;
}
