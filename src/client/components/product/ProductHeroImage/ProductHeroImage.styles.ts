import { css, keyframes } from '@emotion/css';

export const container = () => css`
  opacity: 1;
  position: relative;
  transition-duration: 300ms;
  transition-property: opacity;
  transition-timing-function: linear;

  &:hover {
    opacity: 0.8;
  }
`;

export const image = () => css`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;
export const hiddenImage = () => css`
  display: none;
`;

const pulse = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
`;

export const skeleton = () => css`
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: ${pulse} 1.2s ease-in-out infinite;
`;

export const overlay = () => css`
  align-items: flex-start;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0, transparent);
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 30%;
  justify-content: flex-end;
  left: 0;
  padding: 16px 24px;
  position: absolute;
  right: 0;
`;

export const title = () => css`
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 1.125rem; // mobile size

  @media (min-width: 1024px) {
    font-size: 1.5rem; // desktop size
  }
`;

export const description = () => css`
  color: #ffffff;
  margin-top: 8px;
  font-size: 0.875rem; // mobile size

  @media (min-width: 1024px) { 
    font-size: 1rem; // desktop size
  }
`;
