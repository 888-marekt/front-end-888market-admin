"use client"

import { useEffect, useRef } from "react"

export function LineChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Mock data for the chart
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    const currentWeekData = [10, 15, 12, 8, 15, 20]
    const previousWeekData = [8, 10, 15, 20, 18, 15]

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    // Set dimensions
    const width = canvasRef.current.width
    const height = canvasRef.current.height
    const padding = 40

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#e5e7eb"
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.stroke()

    // Draw labels
    ctx.fillStyle = "#6b7280"
    ctx.font = "12px sans-serif"
    ctx.textAlign = "center"

    // X-axis labels (months)
    const xStep = (width - 2 * padding) / (months.length - 1)
    months.forEach((month, i) => {
      const x = padding + i * xStep
      ctx.fillText(month, x, height - padding + 20)
    })

    // Y-axis labels
    ctx.textAlign = "right"
    const yLabels = ["0", "10M", "20M", "30M"]
    const yStep = (height - 2 * padding) / (yLabels.length - 1)
    yLabels.forEach((label, i) => {
      const y = height - padding - i * yStep
      ctx.fillText(label, padding - 10, y + 4)
    })

    // Draw current week line
    ctx.beginPath()
    ctx.strokeStyle = "#8b5cf6"
    ctx.lineWidth = 2

    const maxValue = 30 // Maximum value in our data
    currentWeekData.forEach((value, i) => {
      const x = padding + i * xStep
      const y = height - padding - (value / maxValue) * (height - 2 * padding)

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.stroke()

    // Draw previous week line
    ctx.beginPath()
    ctx.strokeStyle = "#10b981"
    ctx.lineWidth = 2

    previousWeekData.forEach((value, i) => {
      const x = padding + i * xStep
      const y = height - padding - (value / maxValue) * (height - 2 * padding)

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.stroke()
  }, [])

  return <canvas ref={canvasRef} width={500} height={300} className="w-full h-auto" />
}

export function DonutChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Mock data
    const data = [
      { label: "Direct", value: 38.6, color: "#8b5cf6" },
      { label: "Affiliate", value: 22.5, color: "#3b82f6" },
      { label: "Sponsored", value: 30.8, color: "#6366f1" },
      { label: "E-mail", value: 8.1, color: "#14b8a6" },
    ]

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    // Set dimensions
    const width = canvasRef.current.width
    const height = canvasRef.current.height
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(width, height) / 2 - 20

    // Draw donut chart
    let startAngle = 0
    const total = data.reduce((sum, item) => sum + item.value, 0)

    data.forEach((item) => {
      const sliceAngle = (item.value / total) * 2 * Math.PI

      ctx.beginPath()
      ctx.fillStyle = item.color
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.closePath()
      ctx.fill()

      startAngle += sliceAngle
    })

    // Draw inner circle for donut hole
    ctx.beginPath()
    ctx.fillStyle = "white"
    ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI)
    ctx.fill()

    // Add percentage text in the middle
    ctx.fillStyle = "#111827"
    ctx.font = "bold 16px sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("38.6%", centerX, centerY)
  }, [])

  return <canvas ref={canvasRef} width={200} height={200} className="w-full h-auto" />
}

export function WorldMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    // Draw a simplified world map outline
    ctx.beginPath()
    ctx.fillStyle = "#f3f4f6"
    ctx.fillRect(20, 30, 160, 100)

    // Draw some location dots
    const locations = [
      { x: 60, y: 50 }, // New York
      { x: 40, y: 55 }, // San Francisco
      { x: 150, y: 90 }, // Sydney
      { x: 130, y: 70 }, // Singapore
    ]

    locations.forEach((loc) => {
      ctx.beginPath()
      ctx.fillStyle = "#111827"
      ctx.arc(loc.x, loc.y, 3, 0, 2 * Math.PI)
      ctx.fill()

      ctx.beginPath()
      ctx.fillStyle = "rgba(17, 24, 39, 0.2)"
      ctx.arc(loc.x, loc.y, 8, 0, 2 * Math.PI)
      ctx.fill()
    })
  }, [])

  return <canvas ref={canvasRef} width={200} height={150} className="w-full h-auto" />
}
