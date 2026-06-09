import { useState, useEffect, useMemo, useRef } from 'react';
import { motion } from 'motion/react';
import { Home, User, Code, FolderOpen, Mail } from 'lucide-react';
import { MobileControls } from './components/MobileControls';
import { LandscapePrompt } from './components/LandscapePrompt';

// Import project media so Vite includes them in the build
const cbnhsJpg = '/imports/cbnhs-school-portal.jpg';
const cbnhsMp4 = '/imports/cbnhs-school-portal.mp4';
const siopaoJpg = '/imports/siopao-platformergame.jpg';
const siopaoMp4 = '/imports/siopao-platformergame.mp4';
const smartcatchJpg = '/imports/smartcatch.jpg';
const smartcatchMp4 = '/imports/smartcatch.mp4';
const rentaklatJpg = '/imports/rentaklat.jpg';
const rentaklatMp4 = '/imports/rentaklat.mp4';
const kalingappJpg = '/imports/kalingapp.jpg';
const kalingappMp4 = '/imports/kalingapp.mp4';
const kalingappwebJpg = '/imports/kalingappweb.jpg';
const kalingappwebMp4 = '/imports/kalingappweb.mp4';
const videoEditJpg = '/imports/video-editing-skill.jpg';
const videoEditMp4 = '/imports/video-editing-skill.mp4';

type Item = {
  title: string;
  content: string;
  thumbnail?: string;
  video?: string;
};

type Category = {
  id: string;
  title: string;
  icon: any;
  items: Item[];
};

const categories: Category[] = [
  {
    id: 'home',
    title: 'Home',
    icon: Home,
    items: [
      {
        title: 'Welcome',
        content: 'Hello! I\'m a passionate developer focused on creating beautiful and functional web experiences. With expertise in modern web technologies, I bring ideas to life through clean code and intuitive design.'
      }
    ]
  },
  {
    id: 'about',
    title: 'About Me',
    icon: User,
    items: [
      {
        title: 'Profile',
        content: "Hi — I'm Nathaniel Abalos: a code-obsessed tinkerer who turns curiosity (and too much coffee) into usable, delightful web experiences. I build clean, maintainable interfaces by day and mod games for fun by night. Semi-professional, slightly silly, seriously passionate about coding."
      },
      {
        title: 'Background',
        content: 'Started in frontend development and grew into a full-stack generalist. I enjoy tackling performance, UX polish, and pragmatic architecture — with a soft spot for TypeScript and finely tuned dev ergonomics.'
      },
      {
        title: 'Philosophy',
        content: 'Ship early, learn fast, and keep the user smiling. I value readable code, accessibility, and design that respects people — plus a little playful delight when appropriate.'
      },
      {
        title: 'Experience',
        content: 'Worked on production web apps, led small teams, and iterated features from idea to deployment. I focus on building reliable, maintainable products that people enjoy using.'
      }
    ]
  },
  {
    id: 'skills',
    title: 'Skills',
    icon: Code,
    items: [
      {
        title: 'Frontend',
        content: 'React • Vue • Next.js • TypeScript • Tailwind CSS • Motion • WebGL • Redux • GraphQL Client • Responsive Design'
      },
      {
        title: 'Backend',
        content: 'Node.js • Express • PostgreSQL • MongoDB • GraphQL • REST APIs • Authentication • Microservices • WebSockets'
      },
      {
        title: 'Tools & DevOps',
        content: 'Git • Docker • AWS • CI/CD • Jest • Webpack • Vite • Linux • Nginx • Kubernetes'
      },
      {
        title: 'Design',
        content: 'Figma • Adobe XD • UI/UX Design • Design Systems • Prototyping • User Research'
      }
    ]
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: FolderOpen,
    items: [
      {
        title: 'CBNHS School Portal',
        content: 'A school portal demo built with Laravel for persistent data storage and CRUD workflows. It showcases student management, schedules, teacher workflows, authentication, and reporting for administrators.',
        thumbnail: cbnhsJpg,
        video: cbnhsMp4
      },
      {
        title: 'Siopao Platformer (Unity 2D Game)',
        content: 'A 2D platformer game created in Unity, highlighting level design, character movement, and basic physics. Focused on gameplay feel and level pacing.',
        thumbnail: siopaoJpg,
        video: siopaoMp4
      },
      {
        title: 'SmartCatch',
        content: 'SmartCatch is a Laravel-based web and mobile app with AI capability. It uses the camera to detect fish type and identify what kind of fish it is, with a focus on intelligent automation, real-time interactions, and responsive UX.',
        thumbnail: smartcatchJpg,
        video: smartcatchMp4
      },
      {
        title: 'Rentaklat',
        content: 'Rentaklat is an online book renting web app built with Laravel and working data storage. It supports browsing, renting, and managing book records through a clean and practical interface.',
        thumbnail: rentaklatJpg,
        video: rentaklatMp4
      },
      {
        title: 'KalingApp',
        content: 'KalingApp is a mobile learning app for children built with Flutter and Android Studio. It detects a child\'s learning level through gameplay so the app can adapt the learning experience to their progress.',
        thumbnail: kalingappJpg,
        video: kalingappMp4
      },
      {
        title: 'KalingApp Web',
        content: 'KalingApp Web is the account creation site for KalingApp, built with React and Vite. It gives users a clean web onboarding experience before connecting to the mobile learning app.',
        thumbnail: kalingappwebJpg,
        video: kalingappwebMp4
      },
      {
        title: 'Video Editing Reel',
        content: 'I create video shorts, reels, TikTok videos, gameplay highlights, and funny videos using Adobe Premiere Pro, with a focus on clean cuts, transitions, audio syncing, and motion polish.',
        thumbnail: videoEditJpg,
        video: videoEditMp4
      }
    ]
  },
  {
  id: 'others',
  title: 'Others',
  icon: Mail,
  items: [
    {
      title: 'Gaming & Modding',
      content: 'Passionate gamer who enjoys playing and heavily modding games, especially sandbox and RPG titles. I create custom game mods, tweak gameplay systems, and experiment with tools and scripting to enhance game experiences.'
    },
    {
      title: 'Content Creation',
      content: 'I edit and produce gameplay videos, highlights, and cinematic montages for online content. Experienced with video editing workflows, transitions, effects, audio syncing, and creating engaging gaming content for viewers.'
    },
    {
      title: 'Streaming',
      content: 'I stream games online and enjoy interacting with gaming communities while playing, modding, and showcasing projects. Interested in building entertaining and interactive live experiences.'
    },
    {
      title: 'Open Source & Development',
      content: 'I enjoy contributing to open source projects, building tools, experimenting with automation, and continuously learning new technologies related to software and game development.'
    },
    {
      title: 'Photography & Creativity',
      content: 'Interested in photography, visual design, and creative media. I enjoy capturing moments, editing visuals, and combining creativity with technology.'
    },
    {
      title: 'Learning & Mentoring',
      content: 'Always eager to learn new technologies, improve coding skills, and share knowledge with others. I enjoy helping and mentoring junior developers whenever possible.'
    }
  ]
},
  {
    id: 'contacts',
    title: 'Contacts',
    icon: Mail,
    items: [
      {
        title: 'Email',
        content: 'Abalos1599@gmail.cm\n\nFeel free to reach out for collaboration opportunities, project inquiries, or just to say hi!'
      },
      {
        title: 'GitHub',
        content: 'github.com/IKnowNoHowPotato\n\nCheck out my open source contributions and personal projects.'
      },
      {
        title: 'LinkedIn',
        content: 'https://www.linkedin.com/in/nathaniel-abalos-37a850394/\n\nConnect with me professionally for networking and opportunities.'
      },
    ]
  }
];

function XMBBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 5
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-indigo-400 to-blue-500" />

      {/* Darker edges vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)'
        }}
        animate={{
          x: ['100%', '-100%']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white rounded-full will-change-transform"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`
          }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -30, -60]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeOut'
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [enlargedVideo, setEnlargedVideo] = useState<string | null>(null);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const thumbnailRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const currentCategory = categories[activeCategory];
  const currentItem = activeItem !== null ? currentCategory.items[activeItem] : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        if (activeCategory > 0) {
          setActiveCategory(activeCategory - 1);
          setActiveItem(null);
          setEnlargedVideo(null);
        }
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        if (activeCategory < categories.length - 1) {
          setActiveCategory(activeCategory + 1);
          setActiveItem(null);
          setEnlargedVideo(null);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        e.preventDefault();
        if (activeItem !== null && activeItem > 0) {
          setActiveItem(activeItem - 1);
        } else if (activeItem === 0) {
          setActiveItem(null);
        }

        setEnlargedVideo(null);
      } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        e.preventDefault();
        if (activeItem === null) {
          setActiveItem(0);
        } else if (activeItem < currentCategory.items.length - 1) {
          setActiveItem(activeItem + 1);
        }
        setEnlargedVideo(null);
      } else if ((e.key === 'x' || e.key === 'X' || e.key === 'Enter') && activeItem !== null) {
        e.preventDefault();
        const item = currentCategory.items[activeItem];
        if (item.video) {
          if (enlargedVideo === item.video) {
            setEnlargedVideo(null);
          } else {
            setEnlargedVideo(item.video);
          }
        }
      } else if (e.key === 'Escape' && enlargedVideo) {
        e.preventDefault();
        setEnlargedVideo(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCategory, activeItem, currentCategory.items.length]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        // Horizontal scroll
        if (e.deltaX > 0 && activeCategory < categories.length - 1) {
          setActiveCategory(activeCategory + 1);
          setActiveItem(null);
          setEnlargedVideo(null);
        } else if (e.deltaX < 0 && activeCategory > 0) {
          setActiveCategory(activeCategory - 1);
          setActiveItem(null);
          setEnlargedVideo(null);
        }
      } else {
        // Vertical scroll - inverted for natural feel
        if (e.deltaY < 0) {
          if (activeItem === null) {
            setActiveItem(0);
          } else if (activeItem < currentCategory.items.length - 1) {
            setActiveItem(activeItem + 1);
          }
        } else if (e.deltaY > 0) {
          if (activeItem !== null && activeItem > 0) {
            setActiveItem(activeItem - 1);
          } else if (activeItem === 0) {
            setActiveItem(null);
          }

        }
        setEnlargedVideo(null);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeCategory, activeItem, currentCategory.items.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const deltaX = e.changedTouches[0].clientX - touchStart.x;
    const deltaY = e.changedTouches[0].clientY - touchStart.y;
    const threshold = 50;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > threshold && activeCategory > 0) {
        setActiveCategory(activeCategory - 1);
        setActiveItem(null);
        setEnlargedVideo(null);
      } else if (deltaX < -threshold && activeCategory < categories.length - 1) {
        setActiveCategory(activeCategory + 1);
        setActiveItem(null);
        setEnlargedVideo(null);
      }
    } else {
      if (deltaY > threshold) {
        if (activeItem !== null && activeItem > 0) {
          setActiveItem(activeItem - 1);
        } else if (activeItem === 0) {
          setActiveItem(null);
        }
      } else if (deltaY < -threshold) {
        if (activeItem === null) {
          setActiveItem(0);
        } else if (activeItem < currentCategory.items.length - 1) {
          setActiveItem(activeItem + 1);
        }

      }
      setEnlargedVideo(null);
    }
    setTouchStart(null);
  };

  const handleItemHover = (catIdx: number, itemIdx: number, hasVideo: boolean) => {
    if (!hasVideo) return;

    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }

    hoverTimerRef.current = setTimeout(() => {
      const item = categories[catIdx].items[itemIdx];
      if (item.video) {
        setEnlargedVideo(item.video);
      }
    }, 3000);
  };

  const handleItemLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
    };
  }, []);

  const handleDPad = (direction: 'up' | 'down' | 'left' | 'right') => {
    if (direction === 'up') {
      if (activeItem !== null && activeItem > 0) {
        setActiveItem(activeItem - 1);
      } else if (activeItem === 0) {
        setActiveItem(null);
      }
      setEnlargedVideo(null);
    } else if (direction === 'down') {
      if (activeItem === null) {
        setActiveItem(0);
      } else if (activeItem < currentCategory.items.length - 1) {
        setActiveItem(activeItem + 1);
      }
      setEnlargedVideo(null);
    } else if (direction === 'left') {
      if (activeCategory > 0) {
        setActiveCategory(activeCategory - 1);
        setActiveItem(null);
        setEnlargedVideo(null);
      }
    } else if (direction === 'right') {
      if (activeCategory < categories.length - 1) {
        setActiveCategory(activeCategory + 1);
        setActiveItem(null);
        setEnlargedVideo(null);
      }
    }
  };

  const handleAction = (button: 'triangle' | 'circle' | 'x' | 'square') => {
    if (button === 'x' && activeItem !== null) {
      const item = currentCategory.items[activeItem];
      if (item.video) {
        if (enlargedVideo === item.video) {
          setEnlargedVideo(null);
        } else {
          setEnlargedVideo(item.video);
        }
      }
    }
  };

  const CATEGORY_Y = 180; // Fixed position for category icon
  const ITEM_START_Y = 270; // Items start below the category (90px below)
  const ITEM_HEIGHT = 90;

  return (
    <div className="relative w-full h-screen overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <LandscapePrompt />
      <XMBBackground />

      <MobileControls onDPadPress={handleDPad} onActionPress={handleAction} />

      <div className="relative z-10 h-screen w-full">
        {/* Horizontal scrolling categories (each category is a vertical column) */}
        <motion.div
          className="absolute top-0 left-0 flex"
          animate={{ x: `calc(120px + 15vw - ${activeCategory * 200}px)` }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        >
          {categories.map((cat, catIdx) => {
            const isActiveCategory = catIdx === activeCategory;
            const categoryDistance = Math.abs(catIdx - activeCategory);
            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.id}
                className="w-[200px] flex-shrink-0"
                animate={{
                  opacity: enlargedVideo && !isActiveCategory ? 0 : categoryDistance > 3 ? 0.2 : 1
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Category Icon - FIXED POSITION (doesn't move) */}
                <div
                  className="absolute w-full flex items-center px-8"
                  style={{
                    height: `${ITEM_HEIGHT}px`,
                    top: `${CATEGORY_Y}px`
                  }}
                >
                  <button
                    onClick={() => {
                      setActiveCategory(catIdx);
                      setActiveItem(null);
                    }}
                    className="w-full"
                  >
                    <motion.div
                      className="flex items-center gap-3"
                      style={{ transformOrigin: 'left center' }}
                      animate={{
                        scale: isActiveCategory && activeItem === null ? 1.3 : isActiveCategory ? 1 : 0.6,
                        opacity: enlargedVideo ? 0 : categoryDistance > 3 ? 0.2 : isActiveCategory ? 1 : 0.5
                      }}
                      transition={{ duration: 0.15 }}
                    >
                      <Icon
                        size={isActiveCategory && activeItem === null ? 56 : 40}
                        className="text-white flex-shrink-0"
                        strokeWidth={1.5}
                        style={{
                          filter: isActiveCategory && activeItem === null
                            ? 'drop-shadow(0 0 20px rgba(255,255,255,1))'
                            : 'none'
                        }}
                      />
                      <span className="text-white text-sm font-light tracking-wide">
                        {cat.title}
                      </span>
                    </motion.div>
                  </button>
                </div>

                {/* Items - Split into above and below category */}
                {isActiveCategory && (
                  <>
                    {cat.items.map((item, itemIdx) => {
                      const isActiveItem = itemIdx === activeItem;
                      const itemDistance = activeItem !== null ? Math.abs(itemIdx - activeItem) : 999;
                      const isPlayingVideo = enlargedVideo === item.video && isActiveItem;
                      const thumbSrc = item.thumbnail ?? (item.video ? item.video.replace(/\.mp4$/i, '.jpg') : null);

                      // Determine if this item should be above or below the category
                      let itemPosition;
                      if (activeItem === null) {
                        // No selection - hide items (they appear on first scroll down)
                        itemPosition = ITEM_START_Y + (itemIdx * ITEM_HEIGHT);
                      } else if (itemIdx < activeItem) {
                        // Items before active go above category (in reverse order)
                        const distanceFromActive = activeItem - itemIdx;
                        itemPosition = CATEGORY_Y - (distanceFromActive * ITEM_HEIGHT);
                      } else if (itemIdx === activeItem) {
                        // Active item below category
                        itemPosition = ITEM_START_Y;
                      } else {
                        // Items after active go below active item
                        const distanceFromActive = itemIdx - activeItem;
                        itemPosition = ITEM_START_Y + (distanceFromActive * ITEM_HEIGHT);
                      }

                      return (
                        <motion.button
                          key={`${catIdx}-${itemIdx}`}
                          onClick={() => {
                            setActiveItem(itemIdx);
                            if (item.video && isActiveItem) {
                              // Toggle video on click if already selected
                              if (enlargedVideo === item.video) {
                                setEnlargedVideo(null);
                              } else {
                                setEnlargedVideo(item.video);
                              }
                            }
                          }}
                          onMouseEnter={() => handleItemHover(catIdx, itemIdx, !!item.video)}
                          onMouseLeave={handleItemLeave}
                          className="absolute w-full flex items-center px-8"
                          style={{ height: `${ITEM_HEIGHT}px` }}
                          initial={{ y: `${ITEM_START_Y + (itemIdx * ITEM_HEIGHT)}px`, opacity: 0 }}
                          animate={{
                            y: `${itemPosition}px`,
                            opacity: enlargedVideo && !isActiveItem ? 0 : activeItem === null ? 0.4 : 1
                          }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                          <motion.div
                            className="flex items-center gap-3"
                            style={{ transformOrigin: 'left center' }}
                            animate={{
                              scale: isActiveItem && !isPlayingVideo ? 1.1 : 0.8,
                              opacity: activeItem === null ? 0.4 : itemDistance > 2 ? 0 : isActiveItem ? 1 : 0.4
                            }}
                            transition={{ duration: 0.15 }}
                          >
                            {!isPlayingVideo && (
                              <>
                                <div
                                  ref={(el) => {
                                    thumbnailRefs.current[`${catIdx}-${itemIdx}`] = el;
                                  }}
                                  className="w-10 h-10 flex-shrink-0"
                                >
                                  {thumbSrc ? (
                                    <img
                                      src={thumbSrc}
                                      alt={item.title}
                                      className="w-10 h-10 object-cover rounded"
                                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                                    />
                                  ) : (
                                    <Icon size={24} className="text-white" strokeWidth={1.5} />
                                  )}
                                </div>
                                <span
                                  className="text-white font-light text-lg whitespace-nowrap"
                                  style={{ textShadow: isActiveItem ? '0 0 16px rgba(255,255,255,0.9)' : 'none' }}
                                >
                                  {item.title}
                                </span>
                              </>
                            )}
                          </motion.div>
                        </motion.button>
                      );
                    })}
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enlarged Video - Fixed on Left Side */}
        {enlargedVideo && (
          <motion.div
            className="absolute left-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <video
              src={enlargedVideo}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover rounded-lg shadow-2xl video-player w-[36vw] max-w-[640px] h-auto"
            />
          </motion.div>
        )}

        {/* Center Content Text - ALWAYS shows when an item is selected */}
        {currentItem && (
          <div className="absolute content-panel z-20">
            <motion.div
              key={`${activeCategory}-${activeItem}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="content-card"
            >
              <h1 className="text-white content-title font-light mb-4 md:mb-6" style={{ textShadow: '0 0 24px rgba(255,255,255,0.4)' }}>
                {currentItem.title}
              </h1>
              <p className="text-white/90 content-text leading-relaxed whitespace-pre-line" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                {currentItem.content}
              </p>
            </motion.div>
          </div>
        )}

        {/* Instructions */}
        <div className="fixed bottom-6 right-6 z-50 text-white/30 text-xs font-light hidden lg:block">
          <div>Arrow Keys or WASD to navigate</div>
          <div>Mouse scroll supported</div>
          <div>Hover 3s OR press X/Enter to play video</div>
          <div>Click again or scroll to stop</div>
          {enlargedVideo && (
            <div className="text-green-400 mt-2">VIDEO PLAYING ✓</div>
          )}
        </div>
      </div>
    </div>
  );
}
