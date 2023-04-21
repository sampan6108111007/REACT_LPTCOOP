import React from 'react'

type Props = {
    lable:string;
    btnLable?:string;
    onSubmit?: (result:string) => void;
};

// JSX
export default function MyComponent(props: Props) {
    let message = "";
  return (
    <div>
        <form 
        onSubmit={() => {
            if (props.onSubmit){
                props.onSubmit(message);
            }
        }}
            >
            <label>{props.lable}:</label>
            <br />
            <input type="text" name="your_message" id="your_message" 
            onChange={(event) => (message = event.target.value)}
            />
            <br />
            <button >{props.btnLable ? props.btnLable : "OK"}</button>
        </form>
    </div>
  )
}
