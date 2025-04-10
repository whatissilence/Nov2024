import styled from 'styled-components';
import MyComponent from './MyComponent.jsx'

const COMPANY_COLOR = '#ea5d06';

// const MyOrangeComponent = ({children}) => {
//   return (
//     <div style={{backgroundColor: COMPANY_COLOR}}>
//       {children}
//     </div>
//   )
// }

const MyOrangeComponent = styled.div`
  font-size: 16px;
  padding: 10px 20px;
  background-color: ${COMPANY_COLOR};
  border: 4px solid black;
`;

const ExampleStyledComp = () => {
  return (
    <div>
      <MyOrangeComponent>I'm child I swear!</MyOrangeComponent>


    </div>
  )
}

export default ExampleStyledComp