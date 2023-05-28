import { useEffect, useState } from "react";
import "./Popup.scss";
import "../../../_App.scss";
import {RxCross1} from "react-icons/rx";

function Popup() {
    const [hr, setHr] = useState<number>(19);
    const [min, setMin] = useState<number>(59);
    const [sec, setSec] = useState<number>(15);

    //for hide/show popup
    const [hide, setHide] = useState<boolean>(false);

    const makeHideTrue = ()=>{
        setHide(true);
    };

    const updateHr = ()=>{
        setHr(hr-1);
    };

    const updateMin = ()=>{
        setMin(min - 1);
    };

    const updateSec = ()=>{
        setSec(sec - 1);
    };

    
    const resetHr = ()=>{
        setHr(19);
        setMin(59);
        setSec(59);
    };
    
    const resetMin = ()=>{
        setMin(59);
        updateHr();
    };

    const resetSec = ()=>{
        setSec(59);
        updateMin();
    };

    useEffect(()=>{
        const interval = setTimeout(updateSec, 1000);
        
        //when time becomes negative conditions
        if(sec < 0){
            resetSec();
        }

        if(min < 0){
            resetMin();
        }

        if(hr < 0){
            resetHr();
        }

        return ()=>{clearInterval(interval)};
    },[sec]);

  return (
    <div id="popup" style={{display: hide? "none":"block"}}>

      <div>

        <div>

            <span className="first">
                It's your lucky day
            </span>

            <span className="middle">
                Take an extra day to save — courses from $9.99 ends tonight!
            </span>

            <p className="last">
                <span> Ends in </span>
                <span className="hr"> {hr}h </span> 
                <span className="min">{min}m </span> 
                <span className="sec">{sec}s. </span>
            </p>

        </div>

        <span className="remove" onClick={makeHideTrue}>
            <RxCross1 />
        </span>

      </div>

    </div>
  )
}

export default Popup
