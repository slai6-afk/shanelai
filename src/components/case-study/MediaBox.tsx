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

export function MediaBoxResponsive({ 
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
    <div className="media-box-container">
      <div className="media-box-inner video-wrapper">
        {type === 'video' ? (
          <div className="media-box-video-wrapper">
            <video
              className="media-box-video"
              autoPlay={videoProps.autoPlay}
              muted={videoProps.muted}
              controls={videoProps.controls}
              playsInline={videoProps.playsInline}
              loop={videoProps.loop}
            >
              <source
                type="video/mp4"
                src={src}
              />
            </video>
            <div className="media-box-aspect-spacer" />
          </div>
        ) : (
          <img
            className="media-box-image"
            src={src}
            alt={alt}
          />
        )}
      </div>
    </div>
  );
}
