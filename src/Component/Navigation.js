import React, {useState} from "react";
import "../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from '@react-spring/web'
import NavigationMenu from "./NavigationMenu";


function Navigation(){
    const [showMenu, setShowMenu] = useState(false)

    // let menu
    // let menuMask

    // if(showMenu){
    //     menu= 
    //     <div class="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">
    //         The menu
    //     </div>

    //     menuMask=
    //     <div 
    //     class="fixed bg-black-t-50 top-0 left-0 w-full h-full z-50"
    //     onClick={() => setShowMenu(false)}>
            
    //     </div>
    // }

    const maskTransitions = useTransition(showMenu, {
        from: { position:'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      })
    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
      })
    
    

 

    return(
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon
                    icon={ faBars }
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>

           

            {/* {
            maskTransitions((styles, item) =>
                item && 
                <animated.div 
                    style={styles}
                    className="fixed top-0 left-0 z-50 w-full h-full bg-blueGray-t-50"
                    onClick={() => setShowMenu(false)}
                >
                </animated.div>
            )
        } */}
            {
                maskTransitions((props,item,key) =>
                item &&
                <animated.div
                    key={key}
                    style={props}
                    className="fixed bg-black-t-50 top-0 left-0 w-full h-full z-50"
                    onClick={()=> setShowMenu(false)}>
                    
                </animated.div> )
                
             }
             {
                menuTransitions((props,item,key) =>
                item &&
                <animated.div
                key={key}
                style={props}
                className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3">

                 <NavigationMenu 
                 closeMenu={() => setShowMenu(false)}/>   
                </animated.div> )
                
             }
        </nav>
        )
}

export default Navigation;