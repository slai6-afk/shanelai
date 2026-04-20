import React from 'react';

/** White strips on top of the video to mask baked-in letterboxing / export artifacts */
export function VideoWhiteEdgeMask({
  topPx = 10,
  sidePx = 10,
  bottomPx = 10,
}: {
  topPx?: number;
  sidePx?: number;
  bottomPx?: number;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden>
      <div className="absolute left-0 right-0 top-0 bg-white" style={{ height: topPx }} />
      <div className="absolute left-0 right-0 bottom-0 bg-white" style={{ height: bottomPx }} />
      <div className="absolute left-0 top-0 bottom-0 bg-white" style={{ width: sidePx }} />
      <div className="absolute right-0 top-0 bottom-0 bg-white" style={{ width: sidePx }} />
    </div>
  );
}

interface MediaBoxProps {
  src: string;
  type: 'video' | 'image';
  alt?: string;
  poster?: string;
  videoCaption?: string;
  showVideoCaption?: boolean;
  /** Overlay white strips on the video surface (masks thin black bars from export) */
  videoSurfaceMask?: boolean;
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
  videoSurfaceMask = false,
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
            {videoSurfaceMask ? (
              <div className="media-box-video-frame media-box-video-frame--surface-mask relative w-full overflow-hidden rounded-[8px]">
                <video
                  className="media-box-video media-box-video--surface-mask relative z-[1]"
                  src={src}
                  poster={poster}
                  autoPlay={videoProps.autoPlay}
                  muted={videoProps.muted}
                  controls={videoProps.controls}
                  playsInline={videoProps.playsInline}
                  loop={videoProps.loop}
                  preload="metadata"
                />
                <VideoWhiteEdgeMask />
              </div>
            ) : (
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
            )}
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
