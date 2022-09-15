import { onMount, Component, on, createEffect } from 'solid-js';
import maplibregl, { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { css } from 'solid-styled-components';
import { getViewState } from './App';
import { MapTilerAPIKey } from './MapTilerAPIKey';

export const MapLibre: Component = () => {
  let maplibreContainer: HTMLElement;
  let map: Map;

  createEffect(
    on(getViewState, () => {
      console.log(getViewState());
      map?.jumpTo({
        center: [getViewState().longitude, getViewState().latitude],
        zoom: getViewState().zoom,
        bearing: getViewState().bearing,
        pitch: getViewState().pitch,
      });
    })
  );

  onMount(async () => {
    map = new maplibregl.Map({
      container: maplibreContainer,
      style:
        'https://api.maptiler.com/maps/7f6a9f46-d4d3-4ba7-8e18-ae73917f1a7b/style.json?key=' +
        MapTilerAPIKey,
      interactive: false,
    });
  });

  return (
    <div>
      <div
        ref={(r) => {
          maplibreContainer = r;
        }}
        class={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        `}
      />
    </div>
  );
};
