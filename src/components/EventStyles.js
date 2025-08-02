import styled from "styled-components";

export const EventWrapper = styled.div`
  background: #f9d9b7;
  border: 2px solid #f09738ff;
  padding: 10px 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    background: #ffe2c7;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1rem;
  color: #333;
  transition: color 0.3s ease;

  ${EventWrapper}:hover & {
    color: #000;
  }
`;

export const IconWrapper = styled.div`
  color: #b95f2d;
  min-width: 20px;
  display: flex;
  justify-content: center;
  transition: color 0.3s ease;

  ${EventWrapper}:hover & {
    color: #e2691d;
  }
`;
