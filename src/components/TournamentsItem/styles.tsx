import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
    height : 150px;
    width : calc(30% - 10px);
    background: #1F1F1F;
    padding : 17px;
    margin-top: 10px;
    
    h6{
        margin:5px;
    }
    
    border-radius : 5px;

    button{
        margin-top : 5px;
        margin-left: 5px;
    }
    @media (max-width: 979px) {
        width: calc((100% - 80px)/2);
      }
    @media (max-width: 590px) {
        width: calc(100% - 10px);
    }
   
`;

export const ContainerWrapper = styled.div`
p{
        margin:5px;
}
`