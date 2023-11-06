import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  margin-top: -10px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(0, 46, 255, 1); 
  border-radius: 24px; 
  text-decoration: none;
  font-weight: bold;
  padding: 8px 16px;

  &:hover {
    background-color: "rgba(243, 245, 255, 1)";
    color: rgba(0, 46, 255, 1); 
  }

  &.active {
    background-color: ${props => props.activeColor || "rgba(243, 245, 255, 1)"};
    color: rgba(0, 46, 255, 1); 
    border: 1px solid ${props => props.activeColor ||"rgba(243, 245, 255, 1)"};
  }

  @media (max-width: 600px) {
    padding: 0px;
    background-color: transparent;
    color: rgba(12, 12, 12, 1);
    font-weight: 500;
    font-size: 16px;
    border: none;
    &:hover {
    background-color: rgba(12, 12, 12, 1);
    color: rgba(12, 12, 12, 1);
  }
    &.active {
    color: rgba(12, 12, 12, 1);
    font-weight: 600;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    background-color: transparent;
    border: none;
  }
  }
`;
export default StyledLink;
