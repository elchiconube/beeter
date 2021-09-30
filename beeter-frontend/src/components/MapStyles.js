import styled from 'styled-components';

const StyledMap = styled.div`
  height: 100%;

  .mapboxgl-ctrl.mapboxgl-ctrl-group {
    box-shadow: none;
    border: 1px solid #eff2f7;
  }

  .mapboxgl-ctrl-group button {
    width: 32px;
    height: 32px;
  }

  .mapboxgl-ctrl button.mapboxgl-ctrl-zoom-in .mapboxgl-ctrl-icon {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' data-name='IconPlus' fill='%23747D93'%3E%3Cpath d='M17 7.515a1 1 0 10-2 0V15H7.515a1 1 0 100 2H15v7.485a1 1 0 102 0V17h7.485a1 1 0 100-2H17V7.515z'%3E%3C/path%3E%3C/svg%3E");
    background-size: 20px;
  }

  .mapboxgl-ctrl button.mapboxgl-ctrl-zoom-out .mapboxgl-ctrl-icon {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' data-name='IconMinus' fill='%23747D93'%3E%3Cpath d='M17 15h-2c-.552 0 .747 0 0 0H7.515a1 1 0 100 2H17c.552 0-1 0 0 0h7.485a1 1 0 100-2H17z'%3E%3C/path%3E%3C/svg%3E");
    background-size: 20px;
  }
  .mapboxgl-ctrl-bottom-right .mapboxgl-ctrl:first-child {
    margin: 0px 16px ${({ hasActions }) => (hasActions ? '82px' : 0)} 0px;
  }
`;

const MapStyles = ({ children, hasActions }) => (
  <StyledMap hasActions={hasActions}>{children}</StyledMap>
);

export default MapStyles;
