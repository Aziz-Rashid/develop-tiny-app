import React from 'react'
import './Main.css'
import Logo from './az.gif'
import useWebAnimations from "@wellyshen/use-web-animations";

const Main = () => {
    const sceneryFrames = [
        { transform: 'translateX(-100%)' },
        { transform: 'translateX(0%)' }   
      ]
    const refBackground1 = useWebAnimations({

        keyframes: sceneryFrames,
        timing: {
            easing: 'ease-in-out',
            fill: 'both',
            duration: 5000
          }
    });
    const sceneryFrames2 = [
        { transform: 'translateY(-100%)' },
        { transform: 'translateY(0%)' }   
      ]
    const refBackground2 = useWebAnimations({

        keyframes: sceneryFrames2,
        timing: {
            easing: 'ease-in-out',
            fill: 'both',
            duration: 3000
          }
    });
    const sceneryFrames3 = [
        { transform: 'translateX(100%)' },
        { transform: 'translateX(0%)' }   
      ]
    const refBackground3 = useWebAnimations({

        keyframes: sceneryFrames3,
        timing: {
            easing: 'ease-in-out',
            fill: 'both',
            duration: 3000
          }
    });
    const sceneryFrames4 = [
        { transform: 'translateY(-100%)' },
        { transform: 'translateY(0%)' }   
      ]
    const refBackground4 = useWebAnimations({

        keyframes: sceneryFrames4,
        timing: {
            easing: 'ease-in-out',
            fill: 'both',
            duration: 3000
          }
    });
    return (
        <div>

            <header className="site-header clearfix">
                <nav>
                    <div className="logo" ref={refBackground4.ref}>
                        <h1>Project 4B</h1>
                    </div>
                    <div className="menu" ref={refBackground3.ref}>
                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>AboutUs</li>
                            <li>ContactUs</li>
                        </ul>
                    </div>
                </nav>
                <section>
                    <div className="leftside" ref={refBackground1.ref}>
                        <img src={Logo}  alt="" />
                    </div>
                    <div className="rightside" ref={refBackground2.ref}>
                        <h1>PIAIC</h1>
                        <p> Here we’re using an array containing multiple objects. Each object represents a key from the original CSS. However, unlike CSS, the Web Animations API doesn’t need to explicitly be told the percentages along the animation for each key to appear at. It will automatically divide the animation into equal parts based on the number of keys you give it. This means that a Keyframe object with three keys will play the middle key 50% of the way.</p>
                        <button>Welcome</button>
                    </div>

                </section>

            </header>
        </div>
    )
}

export default Main
