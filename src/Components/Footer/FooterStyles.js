import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 60px 60px; 
  position: relative;
  width: 100%;
  background-color:black;
  margin: auto;
  
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    flex-direction: column;
    columns:3;
    justify-content: center;
    
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: block;
    text-decoration: none;
    color: #adb6c7;
    font-weight: 200;
    transition:  color .3s ease-in-out;
    margin-bottom: 10px;
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

