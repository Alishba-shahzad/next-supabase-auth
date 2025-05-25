'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  const [message, setMessage] = useState("")

  useEffect(() => setMounted(true), [])

  
  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => setMessage(""), 2000)
      return () => clearTimeout(timeout)
    }
  }, [message])

  const handleToggle = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light')
      setMessage("☀️ Light mode enabled")
    } else {
      setTheme('dark')
      setMessage("🌙 Dark mode enabled")
    }
  }

  if (!mounted) {
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    )
  }

  return (
    <>
      {resolvedTheme === 'dark' ? (
        <FiSun onClick={handleToggle} className="text-yellow-400 cursor-pointer" />
      ) : (
        <FiMoon onClick={handleToggle} className="text-sky-800 cursor-pointer" />
      )}

      {message && (
        <div className="fixed top-12 left-1/2 -translate-x-1/2 bg-slate-950 text-white px-4 py-2 rounded-md shadow-lg z-50 text-sm transition-opacity">
          {message}
        </div>
      )}
    </>
  )
}

