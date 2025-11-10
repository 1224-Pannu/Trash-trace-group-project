// src/pages/ComplaintRegister.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, MapPin, FileText, Tag, Image as ImageIcon, AlertCircle, CheckCircle2, Trash2 } from 'lucide-react';
import GradientBlinds from '../components/GradientBlinds';

export default function ComplaintRegister() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('garbage');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const complaint = {
      id: 'TR-' + Math.floor(Math.random() * 9000 + 1000),
      title, category, location, description,
    };
    console.log('Submit complaint (frontend only):', complaint, imageFile);
    alert(`Complaint submitted — ID: ${complaint.id}\n(Frontend-only demo)`);
    navigate('/');
  };

  const categoryOptions = [
    { value: 'garbage', label: 'Garbage Dumping', icon: '🗑️' },
    { value: 'overflow', label: 'Overflowing Bin', icon: '📦' },
    { value: 'odor', label: 'Odour Issue', icon: '💨' },
    { value: 'other', label: 'Other', icon: '⚠️' },
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
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/30 mb-4">
            <Trash2 className="w-8 h-8 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            Register Complaint
          </h1>
          <p className="text-emerald-200/80 text-lg">Help us keep the community clean by reporting waste issues</p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 border border-emerald-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/20">
                <CheckCircle2 className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Quick Response</p>
                <p className="text-slate-400 text-xs">Within 24 hours</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 border border-emerald-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <MapPin className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Track Status</p>
                <p className="text-slate-400 text-xs">Real-time updates</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 border border-emerald-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/20">
                <AlertCircle className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Anonymous</p>
                <p className="text-slate-400 text-xs">Your privacy matters</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-800/50 border border-emerald-500/20 p-8 rounded-2xl backdrop-blur-xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Field */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold mb-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                Complaint Title *
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="e.g., Overflowing bin near Gate A"
                className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
              />
              <p className="text-slate-400 text-xs mt-1">Be specific and concise</p>
            </div>

            {/* Category and Location Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Category Field */}
              <div>
                <label className="flex items-center gap-2 text-white font-semibold mb-2">
                  <Tag className="w-4 h-4 text-emerald-400" />
                  Category *
                </label>
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-slate-600/50 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all cursor-pointer"
                  >
                    {categoryOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-slate-800">
                        {opt.icon} {opt.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Location Field */}
              <div>
                <label className="flex items-center gap-2 text-white font-semibold mb-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  Location
                </label>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Street / Landmark / Zone"
                  className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                />
              </div>
            </div>

            {/* Description Field */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold mb-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="5"
                placeholder="Provide detailed information about the issue... (What, Where, When)"
                className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none"
              />
              <p className="text-slate-400 text-xs mt-1">Include any relevant details that can help resolve the issue faster</p>
            </div>

            {/* Photo Upload Field */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold mb-2">
                <ImageIcon className="w-4 h-4 text-emerald-400" />
                Photo Evidence (Optional)
              </label>
              
              {!preview ? (
                <label className="flex flex-col items-center justify-center w-full h-40 rounded-xl border-2 border-dashed border-slate-600/50 bg-slate-700/30 hover:bg-slate-700/50 cursor-pointer transition-all group">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Upload className="w-10 h-10 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                    <p className="text-sm text-slate-300 font-medium">Click to upload image</p>
                    <p className="text-xs text-slate-500">PNG, JPG up to 10MB</p>
                  </div>
                  <input type="file" accept="image/*" onChange={handleImage} className="hidden" />
                </label>
              ) : (
                <div className="relative rounded-xl overflow-hidden border-2 border-emerald-500/30 bg-slate-700/30">
                  <img src={preview} alt="preview" className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <button
                    type="button"
                    onClick={() => { setPreview(null); setImageFile(null); }}
                    className="absolute top-3 right-3 p-2 rounded-lg bg-red-500/80 hover:bg-red-500 text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Image uploaded
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button 
                type="submit" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl text-white font-bold shadow-lg shadow-emerald-500/30 hover:from-emerald-500 hover:to-teal-500 transition-all duration-200 hover:scale-105"
              >
                <CheckCircle2 className="w-5 h-5" />
                Submit Complaint
              </button>
              <button 
                type="button" 
                onClick={() => navigate('/')} 
                className="w-full sm:w-auto px-8 py-3 bg-slate-700/50 hover:bg-slate-700 rounded-xl text-white font-semibold border border-slate-600/50 transition-all duration-200"
              >
                Cancel
              </button>
            </div>

            {/* Help Text */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-emerald-200 text-sm font-medium mb-1">Your complaint matters!</p>
                  <p className="text-emerald-300/80 text-xs">Our team reviews every submission and works to resolve issues promptly. You'll receive a tracking ID once submitted.</p>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            Need immediate assistance? Contact us at <span className="text-emerald-400 font-semibold">support@trashtrace.com</span>
          </p>
        </div>
      </div>
    </main>
  );
}
