"use client"

import { data } from '@/app/data';
import { useState } from 'react';

const IceBreakerCard = () => {
    const [currentIndex, setCurrentIndex] = useState(2);
    return (
        <>
            <div className="stack m-4">
                <div className="card glass shadow-2xl m-4 h-36">
                    <div className="card-body text-white text-xl">
                        <div>{data[currentIndex-2]['text']}</div>
                    </div>
                </div>
                <div className="card glass m-4">
                    <div className="card-body text-white text-xl h-36">
                        <div>{data[currentIndex-1]['text']}</div>
                    </div>
                </div>
                <div className="card glass m-4">
                    <div className="card-body text-white text-xl h-36">
                        <div>{data[currentIndex]['text']}</div>
                    </div>
                </div>
                {/* <div className="card glass m-4">
                    <div className="card-body text-white text-xl h-36">
                        <div>{data[currentIndex+1]['text']}</div>
                    </div>
                </div>
                <div className="card glass m-4">
                    <div className="card-body text-white text-xl h-36">
                        <div>{data[currentIndex+2]['text']}</div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default IceBreakerCard