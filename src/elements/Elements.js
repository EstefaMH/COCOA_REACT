import Styled, { css } from 'styled-components'

const Banner  = Styled.div`
    background-image: url(${props => props.background});
    background-repeat : no-repeat;
    background-size: contain;
    width : 100%;
    display: flex;
`;
 




export {Banner}
