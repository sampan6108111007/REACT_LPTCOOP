import React from 'react'
import MyComponent from './components/My_Components';
import BasicButtons from './components/BasicButtons';
import IconLabelButtons from './components/IconLabelButtons';

type Props = {}

export default function App({}: Props) {

  let var1:number = 0;
  let var2:string = "sampan";
  let var3:boolean = false;

  const [state1, setState1] = React.useState(0);

  // function handleUpdateClick() {
  //   alert("1234");
  // }

  // MVVM
  const handleUpdateClick = () =>{
   setState1(state1+1);
  }

  return (
    <div><h3>App</h3>
    <BasicButtons/>
    <IconLabelButtons/>
    <button onClick={handleUpdateClick}>Update</button>
      <div>var1 = {var1}</div>
      <div>var2 = {var2}</div>
      <div>var3 = {var3 ? "sampan" : "Googie"}</div>
      <div>state1 = {state1}</div>
      <MyComponent lable="Password" btnLable="Submit"
      onSubmit={(result) => alert(result)} />
      <MyComponent lable="รหัส"/>

    </div>
  )

  
}