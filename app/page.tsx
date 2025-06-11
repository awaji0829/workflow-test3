"use client"

import { useState } from "react"
import { Users, BarChart2, FileText, ShoppingCart, Phone, Search, FileCheck, ArrowRight } from "lucide-react"

// Sample data for charts
const lineData = [
  { year: "2019", value: 20000 },
  { year: "2020", value: 25000 },
  { year: "2021", value: 15500 },
  { year: "2022", value: 13500 },
  { year: "2023", value: 18000 },
]

const barData = [
  { name: "장안구", value1: 500, value2: 200 },
  { name: "권선구", value1: 2800, value2: 600 },
  { name: "팔달구", value1: 2700, value2: 400 },
  { name: "영통구", value1: 4000, value2: 800 },
  { name: "세류동", value1: 3800, value2: 500 },
  { name: "매탄동", value1: 3600, value2: 300 },
  { name: "원천동", value1: 1500, value2: 200 },
  { name: "인계동", value1: 3500, value2: 400 },
  { name: "화서동", value1: 3600, value2: 300 },
  { name: "정자동", value1: 1000, value2: 200 },
  { name: "율전동", value1: 700, value2: 100 },
  { name: "서둔동", value1: 2700, value2: 400 },
  { name: "천천동", value1: 1200, value2: 200 },
  { name: "신동", value1: 5000, value2: 1000 },
  { name: "망포동", value1: 4500, value2: 900 },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("인구")

  return (
    <div className="min-h-screen bg-[#0c1b33] text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-12 py-4 border-b border-[#24406e]/30">
        <div className="flex items-center">
          <img src="/placeholder.svg?height=40&width=120" alt="데이터 인사이트랩" className="h-10" />
          <div className="ml-2">
            <div className="font-bold text-lg">데이터 인사이트랩</div>
            <div className="text-xs text-gray-400">Hankyong Data Insight Lab</div>
          </div>
        </div>

        <nav className="flex space-x-8">
          <a href="#" className="px-2 py-1">
            생생 시민소리
          </a>
          <a href="#" className="px-2 py-1 text-[#00c66b]">
            시장 데이터
          </a>
          <a href="#" className="px-2 py-1">
            공공 데이터
          </a>
          <a href="#" className="px-2 py-1">
            분석 보고서
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-12 py-8">
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">시장 데이터</h1>
          <p className="text-sm text-gray-400">우리 지역의 행정과 정책 정보 데이터를 투명하게 확인하세요.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex mb-8 bg-[#152a4f] rounded-lg p-1 w-full">
          <button
            className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "인구" ? "bg-[#00c66b] text-white shadow-sm" : "text-white/80 hover:text-white"
            }`}
            onClick={() => setActiveTab("인구")}
          >
            <Users className="mr-2 h-4 w-4" />
            인구
          </button>
          <button
            className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "경제" ? "bg-[#00c66b] text-white shadow-sm" : "text-white/80 hover:text-white"
            }`}
            onClick={() => setActiveTab("경제")}
          >
            <BarChart2 className="mr-2 h-4 w-4" />
            경제
          </button>
          <button
            className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "교육" ? "bg-[#00c66b] text-white shadow-sm" : "text-white/80 hover:text-white"
            }`}
            onClick={() => setActiveTab("교육")}
          >
            <FileText className="mr-2 h-4 w-4" />
            교육
          </button>
          <button
            className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "교통" ? "bg-[#00c66b] text-white shadow-sm" : "text-white/80 hover:text-white"
            }`}
            onClick={() => setActiveTab("교통")}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            교통
          </button>
          <button
            className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "문화" ? "bg-[#00c66b] text-white shadow-sm" : "text-white/80 hover:text-white"
            }`}
            onClick={() => setActiveTab("문화")}
          >
            <Phone className="mr-2 h-4 w-4" />
            문화
          </button>
          <button
            className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "복지" ? "bg-[#00c66b] text-white shadow-sm" : "text-white/80 hover:text-white"
            }`}
            onClick={() => setActiveTab("복지")}
          >
            <Search className="mr-2 h-4 w-4" />
            복지
          </button>
          <button
            className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "행정" ? "bg-[#00c66b] text-white shadow-sm" : "text-white/80 hover:text-white"
            }`}
            onClick={() => setActiveTab("행정")}
          >
            <FileCheck className="mr-2 h-4 w-4" />
            행정
          </button>
          <button
            className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "환경" ? "bg-[#00c66b] text-white shadow-sm" : "text-white/80 hover:text-white"
            }`}
            onClick={() => setActiveTab("환경")}
          >
            <ArrowRight className="mr-2 h-4 w-4" />
            환경
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-[350px_1fr] gap-6 h-[calc(100vh-280px)]">
          {/* Sidebar */}
          <div className="space-y-1 h-full overflow-y-auto">
            <div className="bg-[#2b3f61] rounded-lg overflow-hidden">
              <div className="flex justify-between items-center px-4 py-3">
                <div className="text-sm text-[#ffffff]">주민등록</div>
                <button className="text-xs text-[#ffffff] hover:text-[#00f07d]">조회</button>
              </div>
              <div className="px-4 py-3 border-t border-[#ffffff]/10">
                <div className="font-medium text-[#ffffff]">주민등록 인구</div>
              </div>
            </div>

            <div className="bg-[#2b3f61] rounded-lg overflow-hidden">
              <div className="flex justify-between items-center px-4 py-3">
                <div className="text-sm text-[#ffffff]">주민등록</div>
                <button className="text-xs text-[#ffffff] hover:text-[#00f07d]">조회</button>
              </div>
              <div className="px-4 py-3 border-t border-[#ffffff]/10">
                <div className="font-medium text-[#ffffff]">동별인구</div>
              </div>
            </div>

            <div className="bg-[#2b3f61] rounded-lg overflow-hidden">
              <div className="flex justify-between items-center px-4 py-3">
                <div className="text-sm text-[#ffffff]">주민등록</div>
                <button className="text-xs text-[#ffffff] hover:text-[#00f07d]">조회</button>
              </div>
              <div className="px-4 py-3 border-t border-[#ffffff]/10">
                <div className="font-medium text-[#ffffff]">동별성비</div>
              </div>
            </div>

            <div className="bg-[#2b3f61] rounded-lg overflow-hidden">
              <div className="flex justify-between items-center px-4 py-3">
                <div className="text-sm text-[#ffffff]">전월비</div>
                <button className="text-xs text-[#ffffff] hover:text-[#00f07d]">조회</button>
              </div>
              <div className="px-4 py-3 border-t border-[#ffffff]/10">
                <div className="font-medium text-[#ffffff]">연령별 전월비 인구</div>
              </div>
            </div>

            <div className="bg-[#2b3f61] rounded-lg overflow-hidden">
              <div className="flex justify-between items-center px-4 py-3">
                <div className="text-sm text-[#ffffff]">세대별</div>
                <button className="text-xs text-[#ffffff] hover:text-[#00f07d]">조회</button>
              </div>
              <div className="px-4 py-3 border-t border-[#ffffff]/10">
                <div className="font-medium text-[#ffffff]">1인 가구 Top5 (매월)</div>
              </div>
            </div>

            <div className="bg-[#2b3f61] rounded-lg overflow-hidden">
              <div className="flex justify-between items-center px-4 py-3">
                <div className="text-sm text-[#ffffff]">세대별</div>
                <button className="text-xs text-[#ffffff] hover:text-[#00f07d]">조회</button>
              </div>
              <div className="px-4 py-3 border-t border-[#ffffff]/10">
                <div className="font-medium text-[#ffffff]">1인 가구 연도별</div>
              </div>
            </div>

            <div className="bg-[#2b3f61] rounded-lg overflow-hidden">
              <div className="flex justify-between items-center px-4 py-3">
                <div className="text-sm text-[#ffffff]">장래인구</div>
                <button className="text-xs text-[#ffffff] hover:text-[#00f07d]">조회</button>
              </div>
              <div className="px-4 py-3 border-t border-[#ffffff]/10">
                <div className="font-medium text-[#ffffff]">시흥시 인구 성장률</div>
              </div>
            </div>

            <div className="bg-[#2b3f61] rounded-lg overflow-hidden">
              <div className="flex justify-between items-center px-4 py-3">
                <div className="text-sm text-[#ffffff]">장래인구</div>
                <button className="text-xs text-[#ffffff] hover:text-[#00f07d]">조회</button>
              </div>
              <div className="px-4 py-3 border-t border-[#ffffff]/10">
                <div className="font-medium text-[#ffffff]">시구군별 장래인구 Top10</div>
              </div>
            </div>

            <div className="bg-[#2b3f61] rounded-lg overflow-hidden">
              <div className="flex justify-between items-center px-4 py-3">
                <div className="text-sm text-[#ffffff]">장래인구</div>
                <button className="text-xs text-[#ffffff] hover:text-[#00f07d]">조회</button>
              </div>
              <div className="px-4 py-3 border-t border-[#ffffff]/10">
                <div className="font-medium text-[#ffffff]">연령별 추계</div>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-6 h-full">
            {/* Line Chart */}
            <div className="bg-[#152a4f] rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">남양주시 최근 5년간 인구 증감</h3>
              <div className="h-[400px] relative">
                <svg width="100%" height="100%" viewBox="0 0 400 300" className="overflow-visible">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="grid" width="80" height="60" patternUnits="userSpaceOnUse">
                      <path d="M 80 0 L 0 0 0 60" fill="none" stroke="#24406e" strokeWidth="1" opacity="0.5" />
                    </pattern>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00c66b" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#00c66b" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>

                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Y-axis labels */}
                  <text x="10" y="20" fill="#a0b4d4" fontSize="12">
                    25k
                  </text>
                  <text x="10" y="80" fill="#a0b4d4" fontSize="12">
                    20k
                  </text>
                  <text x="10" y="140" fill="#a0b4d4" fontSize="12">
                    15k
                  </text>
                  <text x="10" y="200" fill="#a0b4d4" fontSize="12">
                    10k
                  </text>
                  <text x="10" y="260" fill="#a0b4d4" fontSize="12">
                    5k
                  </text>

                  {/* X-axis labels */}
                  <text x="50" y="290" fill="#a0b4d4" fontSize="12">
                    2019
                  </text>
                  <text x="130" y="290" fill="#a0b4d4" fontSize="12">
                    2020
                  </text>
                  <text x="210" y="290" fill="#a0b4d4" fontSize="12">
                    2021
                  </text>
                  <text x="290" y="290" fill="#a0b4d4" fontSize="12">
                    2022
                  </text>
                  <text x="370" y="290" fill="#a0b4d4" fontSize="12">
                    2023
                  </text>

                  {/* Area fill */}
                  <path
                    d="M 60 80 L 140 20 L 220 140 L 300 160 L 380 100 L 380 270 L 60 270 Z"
                    fill="url(#areaGradient)"
                  />

                  {/* Line */}
                  <path
                    d="M 60 80 L 140 20 L 220 140 L 300 160 L 380 100"
                    fill="none"
                    stroke="#00c66b"
                    strokeWidth="3"
                  />

                  {/* Data points */}
                  <circle cx="60" cy="80" r="4" fill="#00c66b" />
                  <circle cx="140" cy="20" r="4" fill="#00c66b" />
                  <circle cx="220" cy="140" r="4" fill="#00c66b" />
                  <circle cx="300" cy="160" r="4" fill="#00c66b" />
                  <circle cx="380" cy="100" r="4" fill="#00c66b" />
                </svg>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-[#152a4f] rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">남양주시 최근 5년간 인구 증감</h3>
              <div className="h-[400px] relative">
                <svg width="100%" height="100%" viewBox="0 0 400 300" className="overflow-visible">
                  {/* Grid lines */}
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Y-axis labels */}
                  <text x="10" y="20" fill="#a0b4d4" fontSize="10">
                    5만
                  </text>
                  <text x="10" y="80" fill="#a0b4d4" fontSize="10">
                    4만
                  </text>
                  <text x="10" y="140" fill="#a0b4d4" fontSize="10">
                    3만
                  </text>
                  <text x="10" y="200" fill="#a0b4d4" fontSize="10">
                    2만
                  </text>
                  <text x="10" y="260" fill="#a0b4d4" fontSize="10">
                    1만
                  </text>
                  <text x="15" y="290" fill="#a0b4d4" fontSize="10">
                    0
                  </text>

                  {/* Bars - Green bars */}
                  <rect x="30" y="250" width="8" height="20" fill="#00c66b" rx="2" />
                  <rect x="50" y="120" width="8" height="150" fill="#00c66b" rx="2" />
                  <rect x="70" y="130" width="8" height="140" fill="#00c66b" rx="2" />
                  <rect x="90" y="70" width="8" height="200" fill="#00c66b" rx="2" />
                  <rect x="110" y="80" width="8" height="190" fill="#00c66b" rx="2" />
                  <rect x="130" y="90" width="8" height="180" fill="#00c66b" rx="2" />
                  <rect x="150" y="180" width="8" height="90" fill="#00c66b" rx="2" />
                  <rect x="170" y="100" width="8" height="170" fill="#00c66b" rx="2" />
                  <rect x="190" y="90" width="8" height="180" fill="#00c66b" rx="2" />
                  <rect x="210" y="220" width="8" height="50" fill="#00c66b" rx="2" />
                  <rect x="230" y="240" width="8" height="30" fill="#00c66b" rx="2" />
                  <rect x="250" y="130" width="8" height="140" fill="#00c66b" rx="2" />
                  <rect x="270" y="210" width="8" height="60" fill="#00c66b" rx="2" />
                  <rect x="290" y="30" width="8" height="240" fill="#00c66b" rx="2" />
                  <rect x="310" y="50" width="8" height="220" fill="#00c66b" rx="2" />

                  {/* Bars - Blue bars */}
                  <rect x="40" y="260" width="8" height="10" fill="#0064b5" rx="2" />
                  <rect x="60" y="200" width="8" height="70" fill="#0064b5" rx="2" />
                  <rect x="80" y="220" width="8" height="50" fill="#0064b5" rx="2" />
                  <rect x="100" y="170" width="8" height="100" fill="#0064b5" rx="2" />
                  <rect x="120" y="190" width="8" height="80" fill="#0064b5" rx="2" />
                  <rect x="140" y="210" width="8" height="60" fill="#0064b5" rx="2" />
                  <rect x="160" y="250" width="8" height="20" fill="#0064b5" rx="2" />
                  <rect x="180" y="220" width="8" height="50" fill="#0064b5" rx="2" />
                  <rect x="200" y="210" width="8" height="60" fill="#0064b5" rx="2" />
                  <rect x="220" y="250" width="8" height="20" fill="#0064b5" rx="2" />
                  <rect x="240" y="260" width="8" height="10" fill="#0064b5" rx="2" />
                  <rect x="260" y="220" width="8" height="50" fill="#0064b5" rx="2" />
                  <rect x="280" y="250" width="8" height="20" fill="#0064b5" rx="2" />
                  <rect x="300" y="70" width="8" height="200" fill="#0064b5" rx="2" />
                  <rect x="320" y="90" width="8" height="180" fill="#0064b5" rx="2" />

                  {/* X-axis labels */}
                  <text x="25" y="310" fill="#a0b4d4" fontSize="8" transform="rotate(-45 30 310)">
                    장안구
                  </text>
                  <text x="45" y="310" fill="#a0b4d4" fontSize="8" transform="rotate(-45 50 310)">
                    권선구
                  </text>
                  <text x="65" y="310" fill="#a0b4d4" fontSize="8" transform="rotate(-45 70 310)">
                    팔달구
                  </text>
                  <text x="85" y="310" fill="#a0b4d4" fontSize="8" transform="rotate(-45 90 310)">
                    영통구
                  </text>
                  <text x="105" y="310" fill="#a0b4d4" fontSize="8" transform="rotate(-45 110 310)">
                    세류동
                  </text>
                  <text x="125" y="310" fill="#a0b4d4" fontSize="8" transform="rotate(-45 130 310)">
                    매탄동
                  </text>
                  <text x="145" y="310" fill="#a0b4d4" fontSize="8" transform="rotate(-45 150 310)">
                    원천동
                  </text>
                  <text x="165" y="310" fill="#a0b4d4" fontSize="8" transform="rotate(-45 170 310)">
                    인계동
                  </text>
                  <text x="185" y="310" fill="#a0b4d4" fontSize="8" transform="rotate(-45 190 310)">
                    화서동
                  </text>
                  <text x="205" y="310" fill="#a0b4d4" fontSize="8" transform="rotate(-45 210 310)">
                    정자동
                  </text>
                  <text x="225" y="310" fill="#a0b4d4" fontSize="8" transform="rotate(-45 230 310)">
                    율전동
                  </text>
                  <text x="245" y="310" fill="#a0b4d4" fontSize="8" transform="rotate(-45 250 310)">
                    서둔동
                  </text>
                  <text x="265" y="310" fill="#a0b4d4" fontSize="8" transform="rotate(-45 270 310)">
                    천천동
                  </text>
                  <text x="285" y="310" fill="#a0b4d4" fontSize="8" transform="rotate(-45 290 310)">
                    신동
                  </text>
                  <text x="305" y="310" fill="#a0b4d4" fontSize="8" transform="rotate(-45 310 310)">
                    망포동
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
