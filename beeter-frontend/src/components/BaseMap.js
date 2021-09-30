import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";
import MapStyles from "./MapStyles";
import * as CONSTANTS from "../constants";

const StyledWrapperMap = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
`;

const StyledMap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWxjaGljb251YmUiLCJhIjoiY2tsNHJ6ZXZjMWVjazJ1bzQ2cnN1end2YyJ9.57QV36sN8IQWyTrioAvRsg";

const BaseMap = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    const mapbox = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/elchiconube/cktndu8u7074418pbeyv9k8rv",
      center: [-5.67, 42.85], // starting position [lng, lat]
      zoom: 9, // starting zoom
      minZoom: CONSTANTS.MIN_ZOOM,
      maxZoom: CONSTANTS.MAX_ZOOM,
    });

    initMapConfig(mapbox);

    mapbox.on("load", function () {
      // Add source for admin-1 Boundaries
      mapbox.addSource("admin-1", {
        type: "vector",
        url: "mapbox://mapbox.boundaries-adm1-v3",
      });

      // Add a layer with boundary polygons
      mapbox.addLayer(
        {
          id: "admin-1-fill",
          type: "fill",
          source: "admin-1",
          "source-layer": "boundaries_admin_1",
          paint: {
            "fill-color": "#CCCCCC",
          },
        },
        // This final argument indicates that we want to add the Boundaries layer
        // before the `waterway-label` layer that is in the map from the Mapbox
        // Light style. This ensures the admin polygons will be rendered on top of
        // the
        "waterway-label"
      );
    });

    return () => {
      mapbox.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initMapConfig = (mapbox) => {
    mapbox.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      "bottom-right"
    );
  };

  const listenMapEvents = (mapbox) => {};

  return (
    <MapStyles>
      <StyledWrapperMap>
        <StyledMap ref={mapContainer} style={{ height: "100%" }} />
      </StyledWrapperMap>
    </MapStyles>
  );
};

export default BaseMap;
