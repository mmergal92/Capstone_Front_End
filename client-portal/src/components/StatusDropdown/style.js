import styled from "styled-components";

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;
export const StyledSelect = styled.select`
  max-width: 25%;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 15px;
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;
export const StyledButton = styled.input`
  max-width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #657180;
  color: white;
  padding: 0.5rem;
  border-radius: 15px;
  border: 1px solid white;
`;