import React, { useState } from 'react';
import { Tv2, Settings2, Globe2 } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


interface Channel {
  id: string;
  name: string;
  embedUrl: string;
  logo: string;
}

function App() {
  const channels: Channel[] = [
    {
      id: 'aljazeera',
      name: 'Al Jazeera English',
      embedUrl: 'https://www.youtube.com/embed/bNyUyrR0PHo',
      logo: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'france24',
      name: 'France 24 English',
      embedUrl: 'https://www.youtube.com/embed/VuYzy8IuT0Y',
      logo: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'dw',
      name: 'DW News',
      embedUrl: 'https://www.youtube.com/embed/tZT2MCYu6Zw',
      logo: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    }
  ];

  const [selectedChannel, setSelectedChannel] = useState<Channel>(channels[0]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <Router basename='/Ahmad-Live'>
      <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Tv2 className="w-6 h-6 text-blue-400" />
            <h1 className="text-xl font-bold">Global News Live</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Globe2 className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-400">Live News Hub</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Channel List */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Settings2 className="w-5 h-5 mr-2 text-blue-400" />
              Available Channels
            </h2>
            <div className="space-y-2">
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setSelectedChannel(channel)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedChannel.id === channel.id
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={channel.logo}
                      alt={channel.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-medium">{channel.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Video Player */}
          <div className="lg:col-span-3">
            <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50' : 'aspect-video'}`}>
              <iframe
                src={selectedChannel.embedUrl}
                title={selectedChannel.name}
                className="w-full h-full rounded-lg"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="absolute bottom-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-75 text-white px-3 py-1 rounded-lg text-sm transition-colors"
              >
                {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              </button>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold">{selectedChannel.name}</h2>
              <p className="text-gray-400 mt-2">
                Live Stream • Watching with Global News Live
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 mt-8 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Global News Live. All rights reserved.</p>
          <p className="mt-2">
            Streams are provided by their respective news organizations.
          </p>
        </div>
      </footer>
    </div>
    </Router>
  );
}

export default App;




