import React from 'react';
import Trend from 'react-trend';

const MyComponent = () => <Trend smooth radius={20} strokeWidth={10} width={200} height={150} autoDraw autoDrawDuration={3000} autoDrawEasing="ease-in" gradient={['#0FF', '#F0F', '#FF0']} data={[0, 10, 5, 22, 3.6, 11]} />;

export const Splashscreen: React.FunctionComponent = () => {

    const [isVisible, setIsVisible] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={isVisible ? "contener-splashscreen" : "contener-splashscreen contener-splashscreen-undisplayed"}>
            <div className="splashscreen-wrapper">
                <div className="splashscreen">
                    <p>{MyComponent()}</p>
                    <img src="logo2.png" alt="" className="logo2" />
                </div>
            </div>
        </div>
    );
}