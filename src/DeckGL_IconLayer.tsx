import { IconLayer } from '@deck.gl/layers';
import { getPoints } from './LoadSampleData';

const ICON_MAPPING = {
  marker: { x: 0, y: 0, width: 128, height: 128, mask: true },
};

export const DeckGL_IconLayer = () => {
  return new IconLayer({
    id: 'icon-layer',
    data: getPoints(),
    pickable: true,
    iconAtlas:
      'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
    iconMapping: ICON_MAPPING,
    getIcon: (d) => 'marker',

    sizeScale: 15,
    getPosition: (d: any) => [d.column3, d.column2],
    getSize: (d: any) => 4,
    getColor: (d: any) => [
      Math.random() * 256,
      Math.random() * 0,
      Math.random() * 256,
    ],
  });
};
