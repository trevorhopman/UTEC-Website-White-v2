"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Send } from "lucide-react"

const quickReplies = [
  "Schedule a consultation",
  "Learn about IT services",
  "Get a quote",
  "Speak with someone",
]

let sharedAudioContext: AudioContext | null = null
let chimePendingAfterGesture = false
let audioUnlockListenersAttached = false

function getSharedAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null
  const AC =
    window.AudioContext ||
    (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!AC) return null
  if (!sharedAudioContext || sharedAudioContext.state === "closed") {
    sharedAudioContext = new AC()
  }
  return sharedAudioContext
}

/** Short, soft two-tone ping — uses one shared context (must be running after a user gesture). */
function scheduleSubtleChime(ctx: AudioContext) {
  const t0 = ctx.currentTime + 0.02
  const master = ctx.createGain()
  master.connect(ctx.destination)
  master.gain.setValueAtTime(0.0001, t0)
  master.gain.exponentialRampToValueAtTime(0.2, t0 + 0.02)
  master.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.22)

  const a = ctx.createOscillator()
  a.type = "sine"
  a.frequency.setValueAtTime(1005, t0)
  a.connect(master)
  a.start(t0)
  a.stop(t0 + 0.13)

  const b = ctx.createOscillator()
  b.type = "sine"
  b.frequency.setValueAtTime(1315, t0 + 0.04)
  b.connect(master)
  b.start(t0 + 0.04)
  b.stop(t0 + 0.19)
}

/** Browsers block audio until the user interacts; we queue the chime if needed. */
function tryPlaySubtleNotificationChime() {
  if (typeof window === "undefined") return
  const ctx = getSharedAudioContext()
  if (!ctx) return

  const play = () => {
    try {
      scheduleSubtleChime(ctx)
    } catch {
      // ignore
    }
  }

  if (ctx.state === "running") {
    chimePendingAfterGesture = false
    play()
    return
  }

  void ctx
    .resume()
    .then(() => {
      if (ctx.state === "running") {
        play()
        chimePendingAfterGesture = false
      } else {
        chimePendingAfterGesture = true
      }
    })
    .catch(() => {
      chimePendingAfterGesture = true
    })
}

function attachAudioUnlockListeners() {
  if (typeof window === "undefined" || audioUnlockListenersAttached) return
  audioUnlockListenersAttached = true

  const unlock = () => {
    const ctx = getSharedAudioContext()
    if (!ctx) return
    void ctx.resume().then(() => {
      if (!chimePendingAfterGesture || ctx.state !== "running") return
      chimePendingAfterGesture = false
      try {
        scheduleSubtleChime(ctx)
      } catch {
        // ignore
      }
    })
  }

  for (const type of ["pointerdown", "keydown", "touchstart"] as const) {
    window.addEventListener(type, unlock, { passive: true, capture: true })
  }
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi there! I'm here to help. Would you like to schedule a free IT consultation or learn more about our services?",
    },
  ])

  // Unlock path: most browsers require a click/tap/key before Web Audio can play.
  useEffect(() => {
    attachAudioUnlockListeners()
  }, [])

  // Reveal chatbot, open panel, and chime after 10 seconds on the page
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      setIsOpen(true)
      tryPlaySubtleNotificationChime()
    }, 10_000)

    return () => clearTimeout(timer)
  }, [])

  const handleSendMessage = () => {
    if (!message.trim()) return

    setMessages((prev) => [...prev, { from: "user", text: message }])
    setMessage("")

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Thanks for reaching out! One of our technology advisors will be happy to help. You can call us at (734) 996-0466 or schedule a free consultation. How else can I assist you?",
        },
      ])
    }, 1000)
  }

  const handleQuickReply = (reply: string) => {
    setMessages((prev) => [...prev, { from: "user", text: reply }])

    setTimeout(() => {
      let response = ""
      if (reply.includes("consultation")) {
        response = "Great! I can help you schedule a free IT consultation. What's the best time for you? You can also call us directly at (734) 996-0466."
      } else if (reply.includes("IT services")) {
        response =
          "We offer Managed IT Services (including security), Audio Visual solutions for meeting rooms and signage, Cloud Solutions, and Office Technology. Which area would you like to learn more about?"
      } else if (reply.includes("quote")) {
        response = "I'd be happy to help you get a quote. Our team will need to understand your current setup. Would you like to schedule a free assessment?"
      } else {
        response = "Of course! You can reach our team at (734) 996-0466. We're available Monday through Friday, 8am to 5pm EST."
      }
      setMessages((prev) => [...prev, { from: "bot", text: response }])
    }, 1000)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] max-w-[380px] animate-in fade-in slide-in-from-bottom-4 duration-300 sm:w-[380px]">
          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between bg-[#1E1A1C] px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ED1E24]">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">UTEC Support</p>
                  <p className="text-xs text-gray-400">We typically reply instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[300px] overflow-y-auto bg-gray-50 p-4">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        msg.from === "user"
                          ? "bg-[#ED1E24] text-white"
                          : "bg-white text-gray-700 shadow-sm"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Replies */}
              {messages.length === 1 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="rounded-full border border-[#ED1E24] px-3 py-1.5 text-xs font-medium text-[#ED1E24] transition-all hover:bg-[#ED1E24] hover:text-white"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 bg-white p-4">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-[#ED1E24] focus:outline-none focus:ring-1 focus:ring-[#ED1E24]"
                />
                <button
                  onClick={handleSendMessage}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ED1E24] text-white transition-transform hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative h-14 w-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen
            ? "bg-gray-600 hover:bg-gray-700"
            : "bg-[#ED1E24] hover:bg-[#d91a1f] animate-in fade-in zoom-in duration-500"
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <>
            <MessageCircle className="h-6 w-6 text-white" />
            {/* Notification dot */}
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-white"></span>
            </span>
          </>
        )}
      </Button>
    </div>
  )
}
