import { useContext, createContext, useState, useEffect } from "react";

const width_height_context = createContext({width: 0, height: 0});

function WidthHeightProvider({children}:{children: JSX.Element}) {
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    const getWidthHeight = ()=>{
        const w = window.innerWidth;
        const h = window.innerHeight;

        setWidth(w);
        setHeight(h);
    };

    useEffect(()=>{
        window.addEventListener("load", getWidthHeight);
        window.addEventListener("resize", getWidthHeight);

        return ()=>{window.removeEventListener("load",getWidthHeight);
                    window.removeEventListener("resize",getWidthHeight);
                }
    },[]);
    
  return (
    <width_height_context.Provider value={{width: width, height: height}}>
        {children}
    </width_height_context.Provider>
  )
}

export default WidthHeightProvider;

export const useWidthHeightContext = ()=>{
    return useContext(width_height_context);
};
