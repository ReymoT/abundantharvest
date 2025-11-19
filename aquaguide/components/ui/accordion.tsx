"use client"

import React from "react"

type Item = {
  id?: string
  title: string
  content: React.ReactNode
}

export default function Accordion({
  items,
  allowMultiple = false,
}: {
  items: Item[]
  allowMultiple?: boolean
}) {
  const [openIndexes, setOpenIndexes] = React.useState<number[] | number | null>(
    null
  )

  const isOpen = (index: number) => {
    if (allowMultiple && Array.isArray(openIndexes)) return openIndexes.includes(index)
    if (!allowMultiple && typeof openIndexes === "number") return openIndexes === index
    return false
  }

  function toggle(index: number) {
    if (allowMultiple) {
      setOpenIndexes((prev) => {
        const arr = Array.isArray(prev) ? [...prev] : []
        const found = arr.indexOf(index)
        if (found >= 0) arr.splice(found, 1)
        else arr.push(index)
        return arr
      })
    } else {
      setOpenIndexes((prev) => (prev === index ? null : index))
    }
  }

  return (
    <div className="w-full max-w-3xl">
      {items.map((item, i) => {
        const panelId = item.id ?? `accordion-panel-${i}`
        const btnId = `accordion-btn-${i}`
        const open = isOpen(i)

        return (
          <div key={panelId} className="border-b last:border-b-0">
            <h3>
              <button
                id={btnId}
                aria-controls={panelId}
                aria-expanded={open}
                className="w-full px-4 py-3 text-left flex items-center justify-between gap-4 bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={() => toggle(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    toggle(i)
                  }
                }}
              >
                <span className="text-lg font-medium text-gray-700">{item.title}</span>
                <svg
                  className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`px-4 overflow-hidden transition-all duration-200 text-gray-700 ${
                open ? "py-4 max-h-[1000px]" : "py-0 max-h-0"
              }`}
            >
              <div className="prose prose-sm text-gray-700">{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
