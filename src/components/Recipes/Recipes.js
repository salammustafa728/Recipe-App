import React from "react";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";
import styled from "styled-components";


const Cards = styled.div`
 background-color: #DAE2B6;
 border-radius: 20px;
 width: 20vw;
 text-align:center;
 margin-bottom:4px;
`;

const Recipes = (props) => {
  return (
    <>
      <Wrap>
        {props.recipe.map((data, idx) => {
          return (
            <div key={idx}>
              <WrapItem>
                {/* bg='red.200' */}
                <Center w="auto" h="auto">
                  <Cards>
                    <h1>{data.strCategory}</h1>
                    <img src={data.strCategoryThumb} alt={data.strCategory} />
                    <p>{data.strCategoryDescription.slice(0,250)}</p>
                  </Cards>
                </Center>
              </WrapItem>
            </div>
          );
        })}
      </Wrap>
    </>
  );
};

export default Recipes;
