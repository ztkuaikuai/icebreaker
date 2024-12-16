"use client"

import { data, Data } from '@/app/data'
import { useEffect, useState } from 'react'

const HISTORY_KEY = "history"

const getLocalStorage = (Key: string): unknown | null => {
    let data = localStorage.getItem(Key) ? localStorage.getItem(Key) : null
    if (data !== null) {
        data = JSON.parse(data)
    }
    return data
}

const setLocalStorage = (Key: string, Value: unknown): void => {
    localStorage.setItem(Key, JSON.stringify(Value))
}

const getRandomIndex = (data: Data[], history: Record<Data["id"], Data>): number => {
    let index: number
    do {
        index = Math.floor(Math.random() * data.length)
    } while (history[index] !== undefined)
    return index
}

export const useData = () => {
    // 水合错误：服务端渲染的数据和客户端初始渲染的数据不一致导致
    const [index, setIndex] = useState(0)
    const [history, setHistory] = useState<Record<Data["id"], Data>>({})
    
    useEffect(() => {
        const storedHistory = getLocalStorage(HISTORY_KEY) as Record<Data["id"], Data> | null
        if (storedHistory !== null) {
            setHistory(storedHistory)
        }
    }, [])

    const switchData = (): void => {
        const newIndex = getRandomIndex(data, history)
        setIndex(newIndex)
        const newHistory = { ...history, [newIndex]: data[newIndex] }
        setHistory(newHistory)
        setLocalStorage(HISTORY_KEY, newHistory)
    }

    return [data[index]['text'], switchData] as const
}