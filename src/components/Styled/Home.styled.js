
import styled from "styled-components";

 const SearchBar=styled.input`
 border:2px solid #e2d1c3;
 margin: auto;
align-items: center;
display: flex;
border-radius:20px;
text-align:center;
 `;
 const SearchedForm = styled.form`
   margin-top:4px;
   margin-bottom:4px;

`;
const SearchButtn = styled.button``;

 const Parent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 20px;
  width: 90vw;
`;



export { SearchButtn, Parent,SearchBar, SearchedForm };