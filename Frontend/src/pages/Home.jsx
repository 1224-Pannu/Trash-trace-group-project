// src/pages/Home.jsx
import React from 'react';
import { TrendingUp, Clock, CheckCircle2, AlertCircle, Leaf, Recycle } from 'lucide-react';
import GradientBlinds from '../components/GradientBlinds';

export default function Home() {
  const sampleComplaints = [
    { id: 'TR-1001', title: 'Overflowing bin near Gate A', status: 'Pending', date: '2025-08-21', location: 'Zone A' },
    { id: 'TR-1000', title: 'Garbage dumping at lane 5', status: 'In Progress', date: '2025-08-20', location: 'Zone B' },
    { id: 'TR-0999', title: 'Broken bin lid', status: 'Resolved', date: '2025-08-18', location: 'Zone C' },
  ];

  return (
    <main className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 p-6 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 w-full h-full opacity-30 z-0">
        <GradientBlinds
          gradientColors={['#10b981', '#14b8a6', '#059669', '#0d9488']}
          angle={45}
          noise={0.15}
          blindCount={25}
          blindMinWidth={35}
          spotlightRadius={0.5}
          spotlightSoftness={0.8}
          spotlightOpacity={1.2}
          mouseDampening={0.05}
          distortAmount={0.8}
          shineDirection="left"
          mixBlendMode="screen"
        />
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/30 mb-4">
            <Recycle className="w-8 h-8 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-emerald-200/80 text-lg">Monitor and manage waste complaints efficiently</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Total Complaints Card */}
          <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-800/50 border border-emerald-500/20 backdrop-blur-xl shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-400/20">
                <TrendingUp className="w-6 h-6 text-blue-300" strokeWidth={2.5} />
              </div>
              <span className="text-xs font-semibold text-blue-300/80 bg-blue-500/10 px-2 py-1 rounded-full">Last 30 days</span>
            </div>
            <h3 className="text-sm font-medium text-slate-300 mb-2">Total Complaints</h3>
            <p className="text-4xl font-bold text-white mb-1">1,234</p>
            <div className="flex items-center gap-1 text-xs text-emerald-400">
              <TrendingUp className="w-3 h-3" />
              <span>in the past month</span>
            </div>
          </div>

          {/* Open Complaints Card */}
          <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-800/50 border border-amber-500/20 backdrop-blur-xl shadow-xl hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-400/20">
                <Clock className="w-6 h-6 text-amber-300" strokeWidth={2.5} />
              </div>
              <span className="text-xs font-semibold text-amber-300/80 bg-amber-500/10 px-2 py-1 rounded-full">Awaiting</span>
            </div>
            <h3 className="text-sm font-medium text-slate-300 mb-2">Open Cases</h3>
            <p className="text-4xl font-bold text-white mb-1">84</p>
            <div className="flex items-center gap-1 text-xs text-amber-400">
              <AlertCircle className="w-3 h-3" />
              <span>Requires attention</span>
            </div>
          </div>

          {/* Resolved Complaints Card */}
          <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-800/50 border border-emerald-500/20 backdrop-blur-xl shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-400/20">
                <CheckCircle2 className="w-6 h-6 text-emerald-300" strokeWidth={2.5} />
              </div>
              <span className="text-xs font-semibold text-emerald-300/80 bg-emerald-500/10 px-2 py-1 rounded-full">All time</span>
            </div>
            <h3 className="text-sm font-medium text-slate-300 mb-2">Resolved</h3>
            <p className="text-4xl font-bold text-white mb-1">1,120</p>
            <div className="flex items-center gap-1 text-xs text-emerald-400">
              <Leaf className="w-3 h-3" />
              <span>91% success rate</span>
            </div>
          </div>
        </div>

        {/* Recent Complaints Section */}
        <section className="bg-gradient-to-br from-slate-800/90 to-slate-800/50 border border-emerald-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-1">Recent Complaints</h2>
              <p className="text-emerald-200/70 text-sm">Latest updates from the field</p>
            </div>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold hover:from-emerald-500 hover:to-teal-500 transition-all duration-200 shadow-lg shadow-emerald-500/30">
              View All
            </button>
          </div>

          <ul className="space-y-4">
            {sampleComplaints.map((c, index) => (
              <li 
                key={c.id} 
                className="group flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl bg-gradient-to-r from-slate-700/40 to-slate-700/20 border border-slate-600/30 hover:border-emerald-500/40 hover:bg-slate-700/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-1 mb-3 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-400 font-mono text-sm font-semibold">{c.id}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400 text-xs">{c.location}</span>
                  </div>
                  <div className="text-white font-semibold text-lg mb-1">{c.title}</div>
                  <div className="text-slate-400 text-sm flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    {c.date}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`text-sm font-bold px-4 py-2 rounded-full border-2 transition-all duration-200 ${
                    c.status === 'Resolved' 
                      ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-lg shadow-emerald-500/20' 
                      : c.status === 'In Progress' 
                      ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-lg shadow-amber-500/20' 
                      : 'bg-red-500/20 border-red-500/50 text-red-300 shadow-lg shadow-red-500/20'
                  }`}>
                    {c.status}
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-lg bg-slate-600/50 hover:bg-slate-600 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Empty state message if needed */}
          {sampleComplaints.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-700/50 mb-4">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
              <p className="text-slate-400">No complaints found</p>
            </div>
          )}
        </section>

        {/* Environmental Impact Footer */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-600/10 to-teal-600/10 border border-emerald-500/20 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 text-emerald-300">
            <Leaf className="w-5 h-5" />
            <p className="text-sm font-medium">
              Together we've helped clean up <span className="font-bold text-white">1,120 locations</span> and made our community greener! 🌱
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
