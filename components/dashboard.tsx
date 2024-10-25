"use client"

import { useState } from "react"
import {
  Sun,
  ListCheck,
  BookOpen,
  Search,
  Video,
  MessageCircle,
  BookUser,
  X,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const quickLinks = [
  {
    icon: BookOpen,
    title: "Canvas LMS",
    description:
      "Access your LMS portal for assignments, class recordings, and notes.",
    color: "bg-[#4749B3]",
  },
  {
    icon: BookUser,
    title: "Join Live Class",
    description: "Class 7 Math is starting in 1 hour, 35 minutes.",
    color: "bg-[#E66DFF]",
  },
  {
    icon: MessageCircle,
    title: "Contact Teacher",
    description:
      "Click here to contact your teacher for any doubts or concerns.",
    color: "bg-[#6669FE]",
  },
]

const classRecordings = [
  {
    id: 1,
    subject: "Class 7 Math",
    title: "Algebraic Equations",
    date: "24th October, 2024",
    description: "In this class, we covered the basics of algebraic equations and their applications.",
    imageUrl: "/popup.png",
  },
  {
    id: 2,
    subject: "Class 7 Math",
    title: "Inert Gases",
    date: "24th October, 2024",
    description: "We discussed the properties and uses of inert gases in this chemistry lesson.",
    imageUrl: "/popup.png",
  },
  {
    id: 3,
    subject: "Class 7 Science",
    title: "Fundamentals of Organic Chemistry",
    date: "24th October, 2024",
    description: "This class introduced the basic concepts of organic chemistry and molecular structures.",
    imageUrl: "/popup.png",
  },
  {
    id: 4,
    subject: "Class 7 Math",
    title: "Trigonometry 101",
    date: "24th October, 2024",
    description: "We explored the fundamentals of trigonometry and its practical applications.",
    imageUrl: "/popup.png",
  },
]

const classSchedule = [
  {
    id: 1,
    subject: "Class 7, Science",
    type: "Live Class",
    dayAndTime: "Tuesday, 5:00 - 5:50PM",
    day: "Yesterday",
  },
  {
    id: 2,
    subject: "Class 7, Science",
    type: "Live Class",
    dayAndTime: "Wednesday, 4:00 - 4:50PM",
    day: "Today",
  },
  {
    id: 3,
    subject: "Class 7, Science",
    type: "Live Class",
    dayAndTime: "Thursday, 3:00 - 3:50PM",
    day: "Tomorrow",
  },
  {
    id: 4,
    subject: "Class 7, Science",
    type: "Live Class",
    dayAndTime: "Friday, 2:00 - 2:50PM",
    day: "Upcoming",
  },
]

export default function Component() {
  const [selectedRecording, setSelectedRecording] = useState(null)

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Announcements and Schedule Column */}
      <div className="space-y-6">
        {/* Announcements Card */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Announcements</h2>
          <Card className="w-full h-[200px] overflow-auto">
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center space-x-2">
                <Sun className="text-yellow-500 h-5 w-5" />
                <p className="text-sm">
                  On account of Independence Day, August 15th will be a holiday.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <ListCheck className="text-green-500 h-5 w-5" />
                <p className="text-sm">
                  Reminder to finish your assignments and submit them by Monday.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Schedule Card */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Your Class Schedule</h2>
          <Card className="w-full">
            <CardContent className="space-y-4 pt-6">
              {classSchedule.map((schedule, index) => (
                <Card
                  key={schedule.id}
                  className={`relative ${
                    index === 2 ? "bg-[#E66DFF]" : "bg-[#F2F2FF]"
                  } w-full h-[60px] rounded-t-md mb-2`}
                >
                  <CardContent className="flex items-center p-2 h-full">
                    <Video
                      className={`h-5 w-5 mr-2 ${
                        index === 3 ? "text-[#E66DFF]" : "text-[#4749B3]"
                      }`}
                    />
                    <div className="flex-grow overflow-hidden">
                      <h3 className="font-semibold text-sm truncate">
                        {schedule.subject}
                      </h3>
                      <p className="text-xs text-muted-foreground truncate">
                        {schedule.type}
                      </p>
                      <p
                        className={`text-xs ${
                          index === 3 ? "text-[#E66DFF]" : "text-[#4749B3]"
                        } truncate`}
                      >
                        {schedule.dayAndTime}
                      </p>
                    </div>
                    <Badge
                      variant={
                        schedule.day === "Today"
                          ? "default"
                          : schedule.day === "Tomorrow"
                          ? "secondary"
                          : "outline"
                      }
                      className="ml-2 text-xs"
                    >
                      {schedule.day}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Links Card */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Quick Links</h2>
        <Card className="w-full h-[600px] overflow-auto cursor-default bg-n">
          <CardContent className="pt-6">
            <div className="grid gap-4">
              {quickLinks.map((link, index) => (
                <Card
                  key={index}
                  className={`${link.color} text-white transition-colors duration-300 hover:bg-white hover:text-current rounded-2xl group`}
                  style={{
                    width: '346px',
                    height: '170px',
                    gap: '0px'
                  }}
                >
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-center space-x-2">
                      <link.icon className="h-6 w-6" />
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CardTitle className="group-hover:text-black text-xl font-bold">
                        {link.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 items-center flex justify-center">
                    <CardDescription className="text-white/80 group-hover:text-black/80 text-xs items-center flex justify-center">
                      {link.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Class Recordings Card */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Access Class Recordings</h2>
        <Card className="w-full h-[600px] overflow-auto">
          <CardContent className="space-y-4 pt-6">
            <div className="flex flex-col gap-4">
              <div className="relative w-full">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search recordings..."
                  className="pl-8"
                />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Filter by:</span>
                <Button variant="outline" size="sm">
                  All Subjects
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              {classRecordings.map((recording, index) => (
                <Card
                  key={recording.id}
                  className="overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedRecording(recording)}
                >
                  <div className="flex items-center p-3">
                    <div className="flex-grow">
                      <CardDescription  className={`text-xs group-hover:${
                          index === 2 ? "text-[#E66DFF]" : "text-[#4749B3]"
                        }`}>
                        {recording.subject}
                      </CardDescription>
                      <CardTitle
                        className={`text-sm font-bold group-hover:${
                          index === 2 ? "text-[#E66DFF]" : "text-[#4749B3]"
                        }`}
                      >
                        {recording.title}
                      </CardTitle>
                      <div className="mt-4">
                      <p className="text-xs text-gray-500">{recording.date}</p>
                      </div>

                    </div>
                    <div className="flex-shrink-0 ml-2">
                      <img
                        src="/classRB.png"
                        alt="video thumbnail"
                          className="w-20 h-12 object-cover rounded transition duration-300 hover:filter hover:grayscale hover:brightness-75"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Popup for selected recording */}
      {selectedRecording && (
        <div className="fixed inset-0 bg-black min-h-screen bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl bg-[#4749B3]">
            <CardHeader className="relative">
              <CardTitle className="text-white">{selectedRecording.title}</CardTitle>
              <CardDescription className="text-white">{selectedRecording.description}</CardDescription>
              <Button
                className="absolute top-2 right-2"
                variant="ghost"
                size="icon"
                onClick={() => setSelectedRecording(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <img
                src={selectedRecording.imageUrl}
                alt={selectedRecording.title}
                className="w-full h-auto object-cover rounded"
              />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}