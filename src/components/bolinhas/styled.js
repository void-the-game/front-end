import styled from 'styled-components'

export const BolinhasMainContainer = styled.div`
  background-color: #000000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`
export const BolinhasContainer = styled.div`
  background-color: ${({ color }) => color};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-shadow: ${({ shadow }) => shadow};

  position: absolute;
  border-radius: 50%;
  animation: pulse 0.7s infinite alternate;

  @keyframes pulse {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
`
