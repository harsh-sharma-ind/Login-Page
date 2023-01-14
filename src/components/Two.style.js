import styled from "styled-components";

export const Two = styled.div`

flex: 2;
     
 

box-shadow: 0 0 15px -2px #444444;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin-right: 40px;
margin-top: 40px;
margin-bottom: 40px;

padding: 100px 50px;

& h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 52.8px;
}

& label {
    align-self: flex-start;
    font-size: 18px;
    font-weight: 500;
    line-height: 19.8px;

    margin-top: 12px;

}

& input[type=text],
input[type=password]{
    
    width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
}

& div {
    width:100%; 
    font-size: 18px; 
    font-weight: 400; 
                
    display: flex;
                
    justify-content: space-between;
    align-items: center
}

& a {
    text-decoration: none; 
    color: orange;
}

@media (max-width: 600px) {
    
    
        margin: 10px;
        padding: 20px;
    
`;

export const TandC = styled.span`
  align-self: flex-start;
  font-size: 18px;
  font-weight: 400;

  & a {
    color: orange;
  }
`;

export const Btn = styled.button`
  display: inline-block;
  box-sizing: border-box;
  background-color: #1575a7;
  fill: Solid;
  color: white;
  width: 50%;
  height: 56px;
  margin-top: 70px;
  margin-bottom: 20px;
  border-style: none;
  font-size: 18px;
  font-weight: 500;
`;

export const Register = styled.span`
  font-size: 18px;
  font-weight: 400;

  & a {
    color: orange;
  }
`;
