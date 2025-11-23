'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function ProcessArchitecture() {
    const [mode, setMode] = useState<'single' | 'multi'>('single')
    const [crashed, setCrashed] = useState<boolean>(false)

    const crashTab = () => {
        setCrashed(true)
        setTimeout(() => setCrashed(false), 3000)
    }

    return (
        <div className="flex flex-col items-center gap-6 p-4">
            <div className="flex gap-4">
                <Button
                    variant={mode === 'single' ? 'default' : 'outline'}
                    onClick={() => { setMode('single'); setCrashed(false); }}
                >
                    Single Process (Old)
                </Button>
                <Button
                    variant={mode === 'multi' ? 'default' : 'outline'}
                    onClick={() => { setMode('multi'); setCrashed(false); }}
                >
                    Multi-Process (Chrome)
                </Button>
            </div>

            <div className="relative w-full max-w-2xl h-80 bg-muted/20 rounded-xl border border-border p-4 overflow-hidden">
                {/* OS Layer */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-slate-800 flex items-center justify-center text-slate-200 text-xs font-mono">
                    Operating System (Kernel)
                </div>

                {/* Browser Window */}
                <div className={`relative w-full h-60 bg-white dark:bg-slate-900 rounded-lg shadow-xl border-2 transition-colors duration-300 ${crashed && mode === 'single' ? 'border-red-500 opacity-50' : 'border-slate-200 dark:border-slate-700'}`}>

                    {/* Browser Toolbar */}
                    <div className="h-8 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center px-2 gap-2">
                        <div className="flex gap-1">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 h-5 bg-white dark:bg-slate-900 rounded text-[10px] flex items-center px-2 text-muted-foreground">
                            {crashed && mode === 'single' ? 'Not Responding...' : 'https://browser.arch'}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-4 flex gap-4 h-[calc(100%-2rem)]">
                        {/* Tab 1 (Good) */}
                        <div className="flex-1 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-100 dark:border-blue-800 p-2 relative">
                            <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2">Tab 1: Safe Site</div>
                            <div className="space-y-2">
                                <div className="h-2 w-3/4 bg-blue-200 dark:bg-blue-800 rounded animate-pulse" />
                                <div className="h-2 w-1/2 bg-blue-200 dark:bg-blue-800 rounded animate-pulse" />
                            </div>
                            {/* Process Label */}
                            <div className="absolute bottom-2 right-2 text-[10px] font-mono bg-slate-800 text-white px-1 rounded opacity-50">
                                PID: {mode === 'single' ? '101' : '102'}
                            </div>
                        </div>

                        {/* Tab 2 (Bad) */}
                        <div className="flex-1 bg-red-50 dark:bg-red-900/20 rounded border border-red-100 dark:border-red-800 p-2 relative group cursor-pointer" onClick={crashTab}>
                            <div className="text-xs font-bold text-red-600 dark:text-red-400 mb-2">Tab 2: Buggy Site</div>
                            {crashed ? (
                                <div className="flex flex-col items-center justify-center h-20 text-red-500">
                                    <span className="text-2xl">😵</span>
                                    <span className="text-[10px] font-bold">CRASHED!</span>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-20 text-red-400 hover:text-red-600 transition-colors">
                                    <span className="text-2xl">⚠️</span>
                                    <span className="text-[10px]">Click to Crash</span>
                                </div>
                            )}
                            {/* Process Label */}
                            <div className="absolute bottom-2 right-2 text-[10px] font-mono bg-slate-800 text-white px-1 rounded opacity-50">
                                PID: {mode === 'single' ? '101' : '103'}
                            </div>
                        </div>
                    </div>

                    {/* Single Process Overlay */}
                    {mode === 'single' && (
                        <div className="absolute inset-0 border-4 border-dashed border-purple-400/50 pointer-events-none rounded-lg flex items-center justify-center">
                            <div className="bg-purple-100 dark:bg-purple-900/80 text-purple-800 dark:text-purple-200 text-xs font-bold px-2 py-1 rounded">
                                Single Process (PID: 101)
                            </div>
                        </div>
                    )}
                </div>

                {/* Crash Overlay for Single Process */}
                <AnimatePresence>
                    {crashed && mode === 'single' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-white/80 dark:bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
                        >
                            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-red-200">
                                <div className="text-4xl mb-2">💀</div>
                                <h3 className="text-xl font-bold text-red-600 mb-1">Browser Crashed!</h3>
                                <p className="text-sm text-muted-foreground">In single-process mode, one bad tab kills everything.</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <p className="text-sm text-muted-foreground text-center max-w-md">
                {mode === 'single'
                    ? "In the old model, everything runs in one process. If the buggy tab crashes, the whole browser dies."
                    : "In Chrome's model, each tab has its own process. If the buggy tab crashes, the safe tab (and the browser) stays alive."}
            </p>
        </div>
    )
}
