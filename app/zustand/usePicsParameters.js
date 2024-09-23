'use client'

import { create } from "zustand"


const usePicsParameters = create((set) => ({
    date: null,
    setDate: (date) => set({ date }),
    count: 0,
    setCount: (count) => set({ count }),
    startDate: null,
    setStartDate: (startDate) => set({ startDate }),
    endDate: null,
    setEndDate: (endDate) => set({ endDate }),
    maximizedPicURL: null,
    setMaximizedPicURL: (maximizedPicURL) => set({ maximizedPicURL }),
}))

export default usePicsParameters