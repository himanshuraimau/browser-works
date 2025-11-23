'use client'

import { motion } from 'framer-motion'

export function RendererInternals() {
    return (
        <div className="flex flex-col items-center justify-center py-8">
            <div className="relative w-full max-w-3xl h-96 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-border p-6 overflow-hidden">

                {/* Process Container */}
                <div className="absolute inset-4 border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-lg pointer-events-none">
                    <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold px-2 py-0.5 rounded">
                        Renderer Process (PID: 102)
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 h-full pt-4">

                    {/* Main Thread */}
                    <div className="col-span-1 flex flex-col gap-2">
                        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm h-full relative overflow-hidden">
                            <div className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2 border-b pb-1">Main Thread</div>
                            <div className="space-y-2 text-[10px] text-slate-500">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                                    <span>Parse HTML</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                                    <span>Calc Styles</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: '1s' }} />
                                    <span>Layout</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '1.5s' }} />
                                    <span>Execute JS</span>
                                </div>
                            </div>

                            {/* Busy Indicator */}
                            <motion.div
                                className="absolute bottom-2 right-2 w-4 h-4 border-2 border-slate-300 border-t-blue-500 rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </div>

                    {/* Worker Threads */}
                    <div className="col-span-1 flex flex-col gap-4 justify-center">
                        {/* Compositor Thread */}
                        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                            <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-1">Compositor</div>
                            <p className="text-[10px] text-muted-foreground">
                                Takes layers and arranges them. Handles scrolling & animations.
                            </p>
                        </div>

                        {/* Raster Threads */}
                        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                            <div className="text-sm font-bold text-green-600 dark:text-green-400 mb-1">Rasterizer</div>
                            <p className="text-[10px] text-muted-foreground">
                                Turns vector data (draw calls) into actual pixels (bitmaps).
                            </p>
                            <div className="grid grid-cols-4 gap-1 mt-2">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="w-full h-2 bg-green-100 dark:bg-green-900/30 rounded-sm overflow-hidden">
                                        <motion.div
                                            className="h-full bg-green-500"
                                            initial={{ width: "0%" }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* GPU Process (External) */}
                    <div className="col-span-1 flex flex-col justify-center">
                        <div className="bg-slate-800 text-white p-4 rounded-xl shadow-lg border border-slate-700 relative">
                            <div className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md">
                                GPU Process
                            </div>
                            <div className="text-center mb-4">
                                <div className="text-2xl mb-1">🎨</div>
                                <div className="font-bold">GPU</div>
                            </div>
                            <div className="space-y-2">
                                <motion.div
                                    className="h-16 bg-slate-700 rounded-lg overflow-hidden relative"
                                >
                                    {/* Simulated Frame Buffer */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"
                                        animate={{ x: ["-100%", "100%"] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono">
                                        Frame Buffer
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Arrows */}
                        <svg className="absolute inset-0 pointer-events-none w-full h-full">
                            <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                    <path d="M0,0 L0,6 L9,3 z" fill="#94a3b8" />
                                </marker>
                            </defs>
                            {/* Main -> Compositor */}
                            <path d="M 220 100 Q 250 100 270 120" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="4" />

                            {/* Compositor -> Raster */}
                            <path d="M 330 180 L 330 210" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

                            {/* Raster -> GPU */}
                            <path d="M 400 250 Q 450 250 480 200" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="4" />
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    )
}
