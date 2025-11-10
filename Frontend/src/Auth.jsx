// src/Auth.jsx
import React, { useState } from 'react';
import { Eye, EyeOff, Trash2, Recycle, User, Mail, Lock, UserPlus } from 'lucide-react';
import LightRays from './LightRays';

export default function TrashTraceAuth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Login form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Sign up form state
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('worker');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('handleLoginSubmit fired', { email, password });
    // Fake frontend-only login
    localStorage.setItem('trashtrace_user', JSON.stringify({ email, role: selectedRole || 'user' }));
    // Redirect to home (router in App.jsx checks for this key)
    window.location.href = '/';
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Sign up attempt:', { fullName, email, password, role: selectedRole });
    // Fake signup -> auto-login for frontend demo
    localStorage.setItem('trashtrace_user', JSON.stringify({ email, name: fullName, role: selectedRole }));
    window.location.href = '/';
  };

  // Quick demo login helper
  const quickLogin = (role) => {
    const demoEmail = role === 'worker' ? 'worker@demo.com' : 'user@demo.com';
    localStorage.setItem('trashtrace_user', JSON.stringify({ email: demoEmail, role }));
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      backgroundImage: "url('/vecteezy_recycling-concept-recycle-sign-for-ecological-zero-waste_25876330.jpeg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Dark overlay for better contrast — ignore pointer events so form is clickable */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-emerald-900/30 pointer-events-none"></div>

      {/* Light rays effect (non-interactive) */}
      <div className="absolute inset-0 pointer-events-none">
        <LightRays raysOrigin="top-left" />
      </div>

      {/* Decorative floating recycle icons (already non-interactive) */}
      <div className="absolute top-20 right-20 opacity-20 pointer-events-none animate-pulse">
        <Recycle className="w-32 h-32 text-emerald-300" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10 pointer-events-none" style={{animationDelay: '1s'}}>
        <Trash2 className="w-24 h-24 text-emerald-400" />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Hero text */}
          <div className="text-white space-y-8 px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 backdrop-blur-sm flex items-center justify-center border border-emerald-400/30">
                <Recycle className="w-8 h-8 text-emerald-300" />
              </div>
              <h1 className="text-4xl font-bold text-emerald-100">TRASH TRACE</h1>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Smart Garbage Management Made Simple
            </h2>
            
            <p className="text-lg text-white/80 max-w-lg leading-relaxed">
              Efficiently track waste collection workers, manage trash complaints, and assign tasks in real-time. Transform your city's waste management with intelligent tracking and seamless coordination.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20">
                <p className="text-3xl font-bold text-emerald-300">24/7</p>
                <p className="text-sm text-white/70">Complaint Tracking</p>
              </div>
              <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20">
                <p className="text-3xl font-bold text-emerald-300">Real-time</p>
                <p className="text-sm text-white/70">Worker Assignment</p>
              </div>
            </div>
          </div>

          {/* Right side - Auth form with glassmorphic effect */}
          <div className="backdrop-blur-2xl bg-white/5 rounded-3xl shadow-2xl border border-white/10 p-10 relative overflow-hidden">
            {/* Subtle gradient overlay (non-interactive) */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Form content */}
            <div className="relative z-10">
              {/* Title */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {isSignUp ? 'Create Account' : 'Welcome Back'}
                </h2>
                <p className="text-white/70 text-sm">
                  {isSignUp ? 'Join the waste management system' : 'Sign in to manage waste operations'}
                </p>
              </div>

              <form onSubmit={isSignUp ? handleSignUpSubmit : handleLoginSubmit}>
                {/* Full Name input (Sign up only) */}
                {isSignUp && (
                  <div className="mb-5">
                    <label className="block text-white/90 text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 pl-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent transition-all"
                        placeholder="John Doe"
                        required
                      />
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                    </div>
                  </div>
                )}

                {/* Email input */}
                <div className="mb-5">
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent transition-all"
                      placeholder="user@email.com"
                      required
                    />
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                  </div>
                </div>

                {/* Role selection (Sign up only) */}
                {isSignUp && (
                  <div className="mb-5">
                    <label className="block text-white/90 text-sm font-medium mb-2">
                      Role
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedRole('user')}
                        className={`py-3 px-4 rounded-xl border transition-all duration-300 flex items-center justify-center gap-2 ${
                          selectedRole === 'user'
                            ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300'
                            : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
                        }`}
                      >
                        <Trash2 size={18} />
                        Worker
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedRole('worker')}
                        className={`py-3 px-4 rounded-xl border transition-all duration-300 flex items-center justify-center gap-2 ${
                          selectedRole === 'worker'
                            ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300'
                            : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
                        }`}
                      >
                        <Recycle size={18} />
                        User
                      </button>
                    </div>
                  </div>
                )}

                {/* Password input */}
                <div className="mb-5">
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 pl-12 pr-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent transition-all"
                      placeholder="••••••••"
                      required
                    />
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password input (Sign up only) */}
                {isSignUp && (
                  <div className="mb-5">
                    <label className="block text-white/90 text-sm font-medium mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-3 pl-12 pr-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent transition-all"
                        placeholder="••••••••"
                        required
                      />
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                )}

                {/* Remember & Forgot (Login only) */}
                {!isSignUp && (
                  <div className="flex items-center justify-between text-sm mb-6">
                    <label className="flex items-center text-white/80 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded bg-white/10 border-white/20 mr-2"
                      />
                      Remember me
                    </label>
                    <button type="button" className="text-emerald-300 hover:text-emerald-200 transition-colors">
                      Forgot password?
                    </button>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 mb-6 flex items-center justify-center gap-2"
                >
                  {isSignUp ? (
                    <>
                      <UserPlus size={20} />
                      Create Account
                    </>
                  ) : (
                    'Sign In to Dashboard'
                  )}
                </button>
              </form>

              {/* Quick Access (Login only) */}
              {!isSignUp && (
                <>
                  {/* Divider */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/20"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 text-white/60 bg-transparent">Quick Access</span>
                    </div>
                  </div>

                  {/* Role-based login options */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <button
                      type="button"
                      onClick={() => quickLogin('worker')}
                      className="py-3 px-4 backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Trash2 size={18} />
                      Worker
                    </button>
                    <button
                      type="button"
                      onClick={() => quickLogin('user')}
                      className="py-3 px-4 backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Recycle size={18} />
                      User
                    </button>
                  </div>
                </>
              )}

              {/* Switch between login and signup */}
              <p className="text-center text-white/70 text-sm">
                {isSignUp ? (
                  <>
                    Already have an account?{' '}
                    <button 
                      type="button"
                      onClick={() => setIsSignUp(false)}
                      className="text-emerald-300 hover:text-emerald-200 font-medium transition-colors underline"
                    >
                      Sign In
                    </button>
                  </>
                ) : (
                  <>
                    Need an account?{' '}
                    <button 
                      type="button"
                      onClick={() => setIsSignUp(true)}
                      className="text-emerald-300 hover:text-emerald-200 font-medium transition-colors underline"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
