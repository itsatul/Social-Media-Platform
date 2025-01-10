import styled from "styled-components";

export const RequesterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin: 12px 0;
`;

export const GroupDiv = styled.div`
  display: flex;
  gap: 12px;
`;

export const RequsterImage = styled.img`
  height: 40px;
  width: 40px;
  background: lightgray;
  border-radius: 50%;
`;

export const AcceptButton = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  background: linear-gradient(102deg, #c468ff, #6e91f6);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
`;

export const CancelButton = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  background: lightgrey;
  color: grey;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
`;

export const PendingButton = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  background: lightgrey;
  color: grey;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
`;
