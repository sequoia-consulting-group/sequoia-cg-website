import ReactGA from "react-ga4";

const trackingId = "UA-158882003-1";

export const initialize = () => {
  ReactGA.initialize(trackingId);
};

export const pageview = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
