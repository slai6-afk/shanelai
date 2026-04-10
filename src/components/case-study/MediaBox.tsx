import React from 'react';

interface MediaBoxProps {
  src: string;
  type: 'video' | 'image';
  alt?: string;
  poster?: string;
  videoCaption?: string;
  showVideoCaption?: boolean;
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
  poster,
  videoCaption = "Gameplay capture from FunFitLand's DanceFit mode, showing target reach calibration in action.",
  showVideoCaption = true,
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
              src={src}
              poster={poster}
              autoPlay={videoProps.autoPlay}
              muted={videoProps.muted}
              controls={videoProps.controls}
              playsInline={videoProps.playsInline}
              loop={videoProps.loop}
              preload="metadata"
            />
            {showVideoCaption && videoCaption ? (
              <p className="media-box-caption">{videoCaption}</p>
            ) : null}
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

export const MediaBox = MediaBoxResponsive;
