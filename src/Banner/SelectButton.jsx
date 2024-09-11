import { styled } from "@mui/material/styles";

const SelectButton = ({ children, selected, onClick }) => {
  // Styled component using Material UI v5 `styled` API
  const StyledButton = styled("span")(({ selected }) => ({
    border: "1px solid gold",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    cursor: "pointer",
    backgroundColor: selected ? "gold" : "",
    color: selected ? "black" : "",
    fontWeight: selected ? 700 : 500,
    "&:hover": {
      backgroundColor: "gold",
      color: "black",
    },
    width: "22%",
  }));

  return (
    <StyledButton onClick={onClick} selected={selected}>
      {children}
    </StyledButton>
  );
};

export default SelectButton;
