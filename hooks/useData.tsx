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

const getRandomIndex = (data: Data[], curIndex: number | null): number => {
    let nextIndex: number = Math.floor(Math.random() * data.length)
    while (nextIndex === curIndex) {
        nextIndex = Math.floor(Math.random() * data.length)
    } 
    return nextIndex
}

export const useData = () => {
    const [index, setIndex] = useState<number | null>(null)
    const [history, setHistory] = useState<Record<Data["id"], Data>>({})

    useEffect(() => {
        const storedHistory = getLocalStorage(HISTORY_KEY) as Record<Data["id"], Data> | null
        if (storedHistory !== null) {
            setHistory(storedHistory)
        }
        const initialIndex = getRandomIndex(data, index)
        setIndex(initialIndex)
    }, [])

    const switchData = (): void => {
        const newIndex = getRandomIndex(data, index)
        setIndex(newIndex)
        const newHistory = { ...history, [newIndex]: data[newIndex] }
        setHistory(newHistory)
        setLocalStorage(HISTORY_KEY, newHistory)
    }

    return [index === null ? '' : data[index]['text'], switchData] as const
}