import { data } from '@/app/data'
import { useState } from 'react'

export const useData = () => {
    const [index, setIndex] = useState(0)

    const switchData = (): void => {
        if (index === data.length - 1) {
            setIndex(0)
            return
        }
        setIndex(prev => prev + 1)
    }

    return [data[index]['text'], switchData] as const
}