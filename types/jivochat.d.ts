export {};

declare global {
  interface Window {
    jivo_api?: {
      open: () => void;
      close: () => void;
      [key: string]: unknown;
    };
  }
}