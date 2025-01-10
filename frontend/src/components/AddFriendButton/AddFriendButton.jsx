import styled from "styled-components";

const AddFriendButton = styled.button`
  padding: 10px 20px;
  border: 1px solid;
  border-color: #80808083;
  border-radius: 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: black;
  cursor: pointer;
  background: none;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
`;

export default AddFriendButton;
