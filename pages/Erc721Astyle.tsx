 import styled,{keyframes} from "styled-components";

 export const  Pulse =  keyframes` 
          0% { opacity: 0 }
          100% { opacity: '100%'} 
          `;
  export const MintButton = styled.button`
    appearance: none;
    border: none;
    font-family: SFRounded, ui-rounded, "SF Pro Rounded";
    background-image: linear-gradient(to right, #3898FF, #7A70FF);
    display: inline-flex;
    line-height: 1;
    font-size: 16px;
    font-weight: 700;
    height: 35px;
    padding: 0 24px;
    border-radius: 9999px;
    align-items: center;
    color: white;
    transition: all ease 100ms;
    
    &:not(:disabled):hover {
        transform: scale(1.04)
      }

    &[data-mint-loading="true"] {
        background: rgba(22, 25, 31, 0.24);
      }

    &[data-mint-started="true"] {
      background-image: linear-gradient(270deg, #FF6257, #FF5CA0);
      position: relative;
    }

    &[data-mint-started="true"]::after {
      animation-name: ${Pulse};
      animation-duration: 500ms;
      animation-direction: alternate;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      background-color: #FF6257;
      border-radius: inherit;
      bottom: 0;
      content: ' ';
      left: 0;
      position: absolute;
      import styled,{keyframes} from "styled-components";

      right: 0;
      top: 0;
      }      
  `;

  export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 700px;
  margin: 0 auto;
  `;


export const MintContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 30px;
`;