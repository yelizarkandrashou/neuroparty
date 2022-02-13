import styled from '@emotion/styled';

export const Container = styled.div<{ backgroundImage: string | undefined }>`
  background-image: ${(props) => `url("${props.backgroundImage}")`};
  display: flex;
  justify-content: center;
  border-radius: 33px;
  border: 5px solid #1c1c1c;
  height: 320px;
  background-size: contain;
  position: relative;
  width: 100%;
`;

export const Overlay = styled.div<{ isOk: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 10001;
  opacity: 0.5;
  border-radius: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.isOk ? '#073000' : 'radial-gradient(65.05% 65.05% at 50% 50%, #073000 16.15%, #291F05 63.54%, #520B0B 100%)'};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  z-index: 10001;
  color: white;
`;
