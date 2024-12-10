"use client"

import { useData } from '@/hooks/useData'

const IceBreakerCard = () => {
    const [data, switchData] = useData()

    return (
        <div className="w-screen p-4 flex justify-center">
            <div className="card glass shadow-2xl min-h-36 max-h-64 w-full lg:w-2/3">
                <div className="card-body flex flex-col justify-between text-white text-xl p-0 m-6 overflow-auto lg:text-2xl ">
                    <h2>{data}</h2>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-xs glass text-white lg:btn-sm"
                            onClick={switchData}
                        >
                            下一个
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IceBreakerCard