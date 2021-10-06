import { useState } from "react";

const SwitchToogle = ({tabs}) => {
    const [checked, setChecked] = useState(0);

    let _tabs = []
    
    if(tabs) {
        if(Array.isArray(tabs)) _tabs = [...tabs]
    }

    let states = _tabs.map((key, i) => {
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