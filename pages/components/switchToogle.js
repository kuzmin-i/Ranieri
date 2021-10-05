import { useState } from "react";
import Switch from "react-switch";

const SwitchToogle = ({tabs}) => {
    const [checked, setChecked] = useState(0);
    const handleChange = nextChecked => {
      setChecked(nextChecked);
    };

    let states = tabs.map((key, i) => {
        let selected = ''
        if(checked === i) {
            selected = ' selected'
        }

        return (
            <div key={"switcher__btn" + selected} className={"switcher__btn" + selected} onClick={() => setChecked(i)}>{key}</div>
        )
    })
    
  
    return (
        
            <div className="switcher">
                { states }
            </div>
         
    );
  };

  export default SwitchToogle