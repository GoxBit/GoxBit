export const CANVAS_CONFIG = {
  minZoom: 0.25,
  maxZoom: 2.5,
  defaultZoom: 0.85,
  focusZoom: 1.25,
  zoomSpeed: 0.0015,
  inertiaDamping: 0.9,
  inertiaCutoff: 0.02,
  gridSpacing: 120,
  worldExtent: 6000,
  node: {
    width: 300,
    height: 190,
    radius: 18,
  },
} as const;
