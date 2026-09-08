import React from 'react';

export default function PageLoader() {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center p-8" role="status" aria-label="Loading page">
      <div className="w-9 h-9 border-3 border-indigo-600/20 border-t-indigo-600 rounded-full animate-spin"></div>
      <span className="mt-3 text-xs font-semibold text-slate-400 tracking-wide uppercase">Loading...</span>
    </div>
  );
}
