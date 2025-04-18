
/// <reference types="vite/client" />

// Declare spline-viewer as a valid HTML element
declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        url?: string;
      },
      HTMLElement
    >;
  }
}

// Declare the Spline Viewer as a module for potential future imports
declare module '@splinetool/viewer';
