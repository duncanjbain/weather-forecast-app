import React from "react";
import styled from "styled-components"

const UnitSuperscript = styled.p`
font-size: 1.25rem;
align-self: flex-start;
`;

const CelsiusFahrenheit = () => {
    return(
        <UnitSuperscript>C | F</UnitSuperscript>
    )
}

export default CelsiusFahrenheit;