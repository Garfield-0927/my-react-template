import React, { useState } from 'react';

import './home.less';

interface IProp {
    title: string;
}

export default function Home(props: IProp) {
    const [count, setCount] = useState(0);

    return (
        <div className="home-container">
            <div>Home Page</div>
            <p className="count-number">
                In {props.title} page, you clicked <span>{count}</span> times
            </p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Click Me
            </button>
        </div>
    );
}
