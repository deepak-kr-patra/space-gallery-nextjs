'use client'

import { create } from 'zustand'


const useScreenWidth = create((set) => ({
    screenWidth: typeof window !== 'undefined' ? window.innerWidth : 1500,
    setScreenWidth: (screenWidth) => set({ screenWidth }),
}))

export default useScreenWidth;