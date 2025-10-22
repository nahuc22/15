import React, { useState, useEffect, useRef } from 'react';

export default function QuinceInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    new URL('./assets/drive-download-20251022T211739Z-1-001/DSC03279.JPG', import.meta.url).href,
    new URL('./assets/drive-download-20251022T211739Z-1-001/DSC03296.JPG', import.meta.url).href,
    new URL('./assets/drive-download-20251022T211739Z-1-001/DSC03365.JPG', import.meta.url).href
  ];

  const galleryImages = [
    new URL('./assets/drive-download-20251022T211739Z-1-001/DSC03305.JPG', import.meta.url).href,
    new URL('./assets/drive-download-20251022T211739Z-1-001/DSC03277.JPG', import.meta.url).href,
    new URL('./assets/drive-download-20251022T211739Z-1-001/DSC03385-2.JPG', import.meta.url).href,
    new URL('./assets/drive-download-20251022T211739Z-1-001/DSC03315.JPG', import.meta.url).href,
    new URL('./assets/drive-download-20251022T211739Z-1-001/DSC03338.JPG', import.meta.url).href,
    new URL('./assets/drive-download-20251022T211739Z-1-001/DSC03355.JPG', import.meta.url).href,
    new URL('./assets/drive-download-20251022T211739Z-1-001/DSC03372.JPG', import.meta.url).href,
    new URL('./assets/drive-download-20251022T211739Z-1-001/DSC03395.JPG', import.meta.url).href,
    new URL('./assets/drive-download-20251022T211739Z-1-001/DSC03413.JPG', import.meta.url).href,
    new URL('./assets/drive-download-20251022T211739Z-1-001/DSC03364.JPG', import.meta.url).href
  ];

  // Background images
  const bgMobile = new URL('./assets/drive-download-20251022T211739Z-1-001/DSC03333.JPG', import.meta.url).href;
  const bgDesktop = new URL('./assets/drive-download-20251022T211739Z-1-001/DSC03404.JPG', import.meta.url).href;
  const bgCover = new URL('./assets/drive-download-20251022T211739Z-1-001/DSC03294.JPG', import.meta.url).href;
  const bgParallax = new URL('./assets/drive-download-20251022T211739Z-1-001/DSC03362.JPG', import.meta.url).href;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 400);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const GRID_SIZE = isMobile ? 10 : 9;
  const gridItems = Array.from({ length: GRID_SIZE }, (_, i) => galleryImages[i] ?? null);

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isOpen, carouselImages.length]);


  const styles = {
    container: {
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    },
    containerOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(249, 250, 251, 0.75), rgba(229, 231, 235, 0.75))',
      zIndex: 1
    },
    floralDecoration: {
      position: 'absolute',
      width: '250px',
      height: '250px',
      opacity: 0.1,
      pointerEvents: 'none',
      zIndex: 2
    },
    floralTopLeft: {
      top: 0,
      left: 0,
      background: 'radial-gradient(circle, #d4a5a5 20%, transparent 60%), radial-gradient(circle at 30% 30%, #c9b1d4 15%, transparent 50%), radial-gradient(circle at 70% 30%, #c9b1d4 15%, transparent 50%)'
    },
    floralBottomRight: {
      bottom: 0,
      right: 0,
      background: 'radial-gradient(circle, #d4a5a5 20%, transparent 60%), radial-gradient(circle at 30% 70%, #c9b1d4 15%, transparent 50%)'
    },
    coverContainer: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      transition: 'all 1s ease-in-out',
      pointerEvents: isOpen ? 'none' : 'auto'
    },
    coverHalf: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: '50%',
      backgroundImage: `url(${bgCover})`,
      backgroundSize: 'cover',
      transition: 'transform 1s ease-in-out'
    },
    coverTop: {
      top: 0,
      backgroundPosition: 'center bottom',
      transform: isOpen ? 'translateY(-100%)' : 'translateY(0)'
    },
    coverBottom: {
      bottom: 0,
      backgroundPosition: 'center top',
      transform: isOpen ? 'translateY(100%)' : 'translateY(0)'
    },
    coverOverlayTop: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.4), rgba(255,255,255,0.9))'
    },
    coverOverlayBottom: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, transparent, rgba(255,255,255,0.4), rgba(255,255,255,0.9))'
    },
    coverContent: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      zIndex: 10
    },
    coverCard: {
      background: 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(10px)',
      padding: '64px 80px',
      borderRadius: '16px',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
      textAlign: 'center',
      maxWidth: '700px',
      width: '90%'
    },
    heartIcon: {
      width: '48px',
      height: '48px',
      color: '#f9a8d4',
      margin: '0 auto 16px'
    },
    coverTitle: {
      fontSize: '64px',
      fontFamily: 'Georgia, serif',
      color: '#1f2937',
      marginBottom: '8px'
    },
    divider: {
      width: '96px',
      height: '4px',
      background: 'linear-gradient(to right, #f9a8d4, #d8b4fe, #f9a8d4)',
      margin: '16px auto'
    },
    coverName: {
      fontSize: '32px',
      color: '#4b5563',
      marginBottom: '8px'
    },
    coverSubtitle: {
      fontSize: '18px',
      color: '#6b7280',
      marginBottom: '32px'
    },
    openButton: {
      background: 'linear-gradient(to right, #f472b6, #c084fc)',
      color: 'white',
      padding: '12px 32px',
      borderRadius: '50px',
      border: 'none',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    mainContent: {
      position: 'relative',
      zIndex: 20,
      animation: 'fadeIn 1s ease-in'
    },
    header: {
      textAlign: 'center',
      padding: '48px 24px 32px'
    },
    mainTitle: {
      fontSize: '72px',
      fontFamily: 'Georgia, serif',
      color: '#1f2937',
      marginBottom: '8px'
    },
    mainSubtitle: {
      fontSize: '28px',
      color: '#4b5563'
    },
    headerDivider: {
      width: '128px',
      height: '4px',
      background: 'linear-gradient(to right, #f9a8d4, #c084fc, #f9a8d4)',
      margin: '16px auto 0'
    },
    carouselSection: {
      width: '100%',
      margin: '0 0 64px 0',
      padding: '0'
    },
    carouselContainer: {
      position: 'relative',
      height: '500px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      borderRadius: '15px'
    },
    carouselImage: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      imageRendering: 'auto',
      transition: 'opacity 0.7s',
      transform: 'scale(0.85)'
    },
    carouselDots: {
      position: 'absolute',
      bottom: '3px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '2px'
    },
    carouselDot: {
      width: '2px',
      height: '2px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.4)',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    carouselDotActive: {
      width: '6px',
      height: '6px',
      background: 'rgba(245, 245, 245, 0.8)'
    },
    infoSection: {
      maxWidth: '768px',
      margin: '0 auto 64px',
      padding: '0 16px',
      position: 'relative',
      zIndex: 20
    },
    infoCard: {
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      padding: '48px'
    },
    infoIntro: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    introText: {
      fontSize: '18px',
      color: '#4b5563',
      lineHeight: '1.8'
    },
    eventGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '32px',
      marginBottom: '32px'
    },
    eventCard: {
      textAlign: 'center',
      padding: '24px',
      borderRadius: '12px'
    },
    eventCeremony: {
      background: 'linear-gradient(135deg, #fce7f3, #f3e8ff)'
    },
    eventParty: {
      background: 'linear-gradient(135deg, #f3e8ff, #fce7f3)'
    },
    eventTitle: {
      fontSize: '20px',
      color: '#1f2937',
      marginBottom: '8px'
    },
    eventText: {
      color: '#4b5563',
      marginBottom: '4px'
    },
    eventLocation: {
      marginTop: '8px',
      fontWeight: '500',
      color: '#4b5563'
    },
    dressCode: {
      textAlign: 'center',
      padding: '24px',
      background: '#f9fafb',
      borderRadius: '12px'
    },
    dressCodeTitle: {
      fontSize: '20px',
      color: '#1f2937',
      marginBottom: '12px'
    },
    dressCodeText: {
      color: '#4b5563'
    },
    dressCodeNote: {
      fontSize: '14px',
      color: '#6b7280',
      marginTop: '8px'
    },
    quoteSection: {
      maxWidth: '640px',
      margin: '0 auto 64px',
      padding: '0 16px',
      textAlign: 'center'
    },
    quoteText: {
      fontSize: '18px',
      color: '#374151',
      fontStyle: 'italic',
      lineHeight: '1.8'
    },
    gallerySection: {
      maxWidth: '1200px',
      margin: '0 auto 64px',
      padding: '0 16px',
      position: 'relative',
      zIndex: 20
    },
    galleryTitle: {
      fontSize: '36px',
      fontFamily: 'Georgia, serif',
      textAlign: 'center',
      color: '#1f2937',
      marginBottom: '32px'
    },
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gridTemplateRows: isMobile ? 'repeat(5, 1fr)' : 'repeat(3, 1fr)',
      gap: '16px'
    },
    galleryItem: {
      aspectRatio: '1',
      overflow: 'hidden',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.3s'
    },
    galleryImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      imageRendering: 'auto'
    },
    confirmationSection: {
      maxWidth: '640px',
      margin: '0 auto 64px',
      padding: '0 16px',
      position: 'relative',
      zIndex: 20
    },
    confirmationCard: {
      background: 'linear-gradient(to right, #fce7f3, #f3e8ff)',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      padding: '32px',
      textAlign: 'center'
    },
    confirmationTitle: {
      fontSize: '28px',
      fontFamily: 'Georgia, serif',
      color: '#1f2937',
      marginBottom: '16px'
    },
    confirmationText: {
      color: '#4b5563',
      marginBottom: '24px'
    },
    whatsappButton: {
      display: 'inline-block',
      background: 'linear-gradient(to right, #ec4899, #a855f7)',
      color: 'white',
      padding: '12px 32px',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'all 0.3s'
    },
    footer: {
      textAlign: 'center',
      paddingBottom: '32px'
    },
    heartIconSmall: {
      width: '32px',
      height: '32px',
      color: '#f9a8d4',
      margin: '0 auto 8px'
    },
    footerText: {
      color: '#6b7280'
    }
  };

  const galleryRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return; // Wait until main content (gallery) is rendered

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    });

    if (galleryRef.current) {
      const targets = galleryRef.current.querySelectorAll('.reveal-item');
      targets.forEach((el) => {
        // initial check: if already in viewport, mark visible now
        const rect = el.getBoundingClientRect();
        const viewportH = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < viewportH * 0.9 && rect.bottom > 0) {
          el.classList.add('visible');
        }
        observer.observe(el);
      });
    }

    return () => {
      if (galleryRef.current) {
        const targets = galleryRef.current.querySelectorAll('.reveal-item');
        targets.forEach((el) => observer.unobserve(el));
      }
    };
  }, [isOpen]);

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .reveal-item { opacity: 0; transform: translateY(30px); transition: transform 0.6s ease, opacity 0.6s ease; }
        .reveal-item.visible { opacity: 1; transform: translateY(0); }
        .backdrop-image { opacity: 0; transition: opacity 0.8s ease, transform 1s ease; transform: scale(1.02); }
        .backdrop-image.visible { opacity: 1; transform: scale(1.06); }
        @media (max-width: 768px) {
          .main-title { font-size: 40px !important; }
          .main-subtitle { font-size: 22px !important; }
          .carousel-container { height: 300px !important; }
          .cover-title { font-size: 36px !important; }
        }
        @media (max-width: 400px) {
          .gallery-grid { 
            grid-template-columns: repeat(2, 1fr) !important; 
            grid-template-rows: repeat(5, 1fr) !important; 
          }
        }
      `}</style>

      {/* Overlay del fondo con parallax */}
      <div style={styles.containerOverlay}></div>

      {/* Decoraciones florales */}
      <div style={{...styles.floralDecoration, ...styles.floralTopLeft}}></div>
      <div style={{...styles.floralDecoration, ...styles.floralBottomRight}}></div>

      {/* Portada con animación */}
      <div style={styles.coverContainer}>
        {/* Mitad superior */}
        <div style={{...styles.coverHalf, ...styles.coverTop}}>
          <div style={styles.coverOverlayTop}></div>
        </div>

        {/* Mitad inferior */}
        <div style={{...styles.coverHalf, ...styles.coverBottom}}>
          <div style={styles.coverOverlayBottom}></div>
        </div>

        {/* Contenido de la portada */}
        {!isOpen && (
          <div style={styles.coverContent}>
            <div style={styles.coverCard}>
              <svg style={styles.heartIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <h1 style={styles.coverTitle} className="cover-title">Mis XV Años</h1>
              <div style={styles.divider}></div>
              <p style={styles.coverName}>Vicky Jimenez</p>
              <p style={styles.coverSubtitle}>Te invito a celebrar conmigo</p>
              <button 
                onClick={() => setIsOpen(true)} 
                style={styles.openButton}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >
                Abrir Invitación
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Contenido principal */}
      {isOpen && (
        <div style={styles.mainContent}>
          {/* Header */}
          <div style={styles.header}>
            <h1 style={styles.mainTitle} className="main-title">Vicky Jimenez</h1>
            <p style={styles.mainSubtitle} className="main-subtitle">Mis Quince Años</p>
            <div style={styles.headerDivider}></div>
          </div>

          {/* Carrusel */}
          <div style={styles.carouselSection}>
            <div style={styles.carouselContainer} className="carousel-container">
              {carouselImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  style={{
                    ...styles.carouselImage,
                    opacity: index === currentSlide ? 1 : 0
                  }}
                />
              ))}

              <div style={styles.carouselDots}>
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    style={{
                      ...styles.carouselDot,
                      ...(index === currentSlide ? styles.carouselDotActive : {})
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Información */}
          <div style={styles.infoSection}>
            <div style={styles.infoCard}>
              <div style={styles.infoIntro}>
                {/* <p style={styles.introText}>
                  Con la bendición de Dios y el amor de mis padres, llegó el momento de celebrar mis quince años. 
                  Será un honor compartir este día tan especial contigo.
                </p> */}
              </div>

              <div style={styles.eventGrid}>
                {/* <div style={{...styles.eventCard, ...styles.eventCeremony}}>
                  <h3 style={styles.eventTitle}>Ceremonia Religiosa</h3>
                  <p style={styles.eventText}>Sábado 15 de Noviembre</p>
                  <p style={styles.eventText}>18:00 hrs</p>
                  <p style={styles.eventLocation}>Parroquia San José</p>
                </div> */}

                <div style={{...styles.eventCard, ...styles.eventParty}}>
                  <h3 style={styles.eventTitle}>Fiesta</h3>
                  <p style={styles.eventText}>Sábado 7 de Noviembre</p>
                  <p style={styles.eventText}>20:00 hrs</p>
                  <p style={styles.eventLocation}>Salón de Eventos "El Jardín"</p>
                </div>
              </div>

              <div style={styles.dressCode}>
                <h3 style={styles.dressCodeTitle}>Código de Vestimenta</h3>
                <p style={styles.dressCodeText}>Formal / Elegante</p>
                <p style={styles.dressCodeNote}>Por favor evitar el color blanco</p>
              </div>
            </div>
          </div>

          {/* Texto emotivo */}
          <div style={styles.quoteSection}>
            <p style={styles.quoteText}>
              "Quince años de sueños, risas y amor. Hoy celebro no solo mi crecimiento, 
              sino también a todas las personas que han sido parte de mi camino. 
              Tu presencia hará este momento aún más especial."
            </p>
          </div>

          {/* Galería */}
          <div style={styles.gallerySection} ref={galleryRef}>
            <h2 style={styles.galleryTitle}>Momentos Especiales</h2>
            <div style={styles.galleryGrid} className="gallery-grid">
              {gridItems.map((img, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.galleryItem,
                    ...(img ? {} : { background: '#f3f4f6' }),
                    transitionDelay: `${index * 80}ms`
                  }}
                  className="reveal-item gallery-item"
                  onMouseOver={img ? (e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.25)';
                  } : undefined}
                  onMouseOut={img ? (e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
                  } : undefined}
                >
                  {img && (
                    <img src={img} alt={`Galería ${index + 1}`} style={styles.galleryImage} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Ventana al fondo - contenido se desplaza sobre imagen fija */}
          <div
            ref={backdropRef}
            style={{
              position: 'relative',
              width: '100vw',
              margin: '0 0 64px',
              height: '70vh',
              marginLeft: 'calc(50% - 50vw)',
              marginRight: 'calc(50% - 50vw)',
              backgroundImage: `url(${bgParallax})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              backgroundRepeat: 'no-repeat'
            }}
          >
          </div>

          {/* Confirmación */}
          <div style={styles.confirmationSection}>
            <div style={styles.confirmationCard}>
              <h3 style={styles.confirmationTitle}>Confirmar Asistencia</h3>
              <p style={styles.confirmationText}>Por favor confirma tu asistencia antes del 1 de Noviembre</p>
              <a
                href="https://wa.me/5491112345678?text=Hola!%20Confirmo%20mi%20asistencia%20a%20los%2015%20de%20Sofía"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.whatsappButton}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 10px 25px rgba(236, 72, 153, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Confirmar por WhatsApp
              </a>
            </div>
          </div>

          {/* Footer */}
          <div style={styles.footer}>
            <svg style={styles.heartIconSmall} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <p style={styles.footerText}>¡Espero verte ahí!</p>
          </div>
        </div>
      )}
    </div>
  );
}