import React from 'react';

interface MediaBoxProps {
  src: string;
  type: 'video' | 'image';
  alt?: string;
  videoProps?: {
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    controls?: boolean;
    playsInline?: boolean;
  };
}

export function MediaBox({ 
  src, 
  type, 
  alt = 'Media content',
  videoProps = {
    autoPlay: true,
    muted: true,
    loop: true,
    controls: false,
    playsInline: true
  }
}: MediaBoxProps) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    }}>
      <div style={{
        width: '80%',
        position: 'relative'
      }}>
        {type === 'video' ? (
          <div style={{ position: 'relative' }}>
            <video
              autoPlay={videoProps.autoPlay}
              muted={videoProps.muted}
              controls={videoProps.controls}
              playsInline={videoProps.playsInline}
              loop={videoProps.loop}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '8px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '60px',
                minWidth: '20px',
              }}
            >
              <source
                type="video/mp4"
                src={src}
              />
            </video>
            <div style={{
              width: '100%',
              paddingTop: '31%',
              pointerEvents: 'none',
              fontSize: '0'
            }} />
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              display: 'block'
            }}
          />
        )}
      </div>
    </div>
  );
}
