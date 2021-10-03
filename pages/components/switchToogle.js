import { useState } from "react";
import Switch from "react-switch";

const SwitchToogle = () => {
    const [checked, setChecked] = useState(0);
    const handleChange = nextChecked => {
      setChecked(nextChecked);
    };

    let states = ['Перевести', 'Разделить'].map((key, i) => {
        let selected = ''
        if(checked === i) {
            selected = ' selected'
        }

        return (
            <div className={"switcher__btn" + selected} onClick={() => setChecked(i)}>{key}</div>
        )
    })
    
  
    return (
        
            <div className="switcher">
                { states }
            </div>
         
    );
  };

  export default SwitchToogle