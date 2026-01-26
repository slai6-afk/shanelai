# NYC Tourism Asset Compression Report

## Summary
**Total space saved: ~190MB (89% reduction)**

## Videos Compressed

| File | Before | After | Savings |
|------|--------|-------|---------|
| mobilevideo.mov | 51M | 3.4M | 93% ⬇️ |
| Screen Recording...mov | 38M | 1.1M | 97% ⬇️ |
| mapvideo.mov | 9.3M | 541K | 94% ⬇️ |

**Video total: 98.3M → 5M (95% reduction)**

## Images Compressed

| File | Before | After | Savings |
|------|--------|-------|---------|
| annotation2.png | 17M | 1.6M | 91% ⬇️ |
| annotation1.png | 6.7M | 977K | 85% ⬇️ |
| annotation3.png | 8M | 1.0M | 87% ⬇️ |
| 3maps.png | 9.6M | 2.7M | 72% ⬇️ |
| desktop_homepage_map_full.png | 7.1M | 2.1M | 70% ⬇️ |
| 11e209bc...png | 14M | 3.5M | 75% ⬇️ |
| 0d0337d0...png | 14M | 3.4M | 76% ⬇️ |
| 6e7cca7d...png | 13M | 3.3M | 75% ⬇️ |
| cover.png | 4.3M | 1.4M | 67% ⬇️ |
| tlnrbg.png | 4.3M | 3.2M | 26% ⬇️ |

**Image total: ~98M → ~23M (77% reduction)**

## Optimizations Applied

### Videos
- Codec: H.264 (libx264)
- CRF: 28 (balanced quality/size)
- Max resolution: 1080p
- Removed audio tracks (not needed for UI demos)
- Added fast-start flag for web streaming

### Images
- Quality: 85% (imperceptible quality loss)
- Max dimensions: 2000x2000px
- Stripped metadata
- Format: Optimized PNG

## Backup
Original files backed up to: `src/assets/compressed_backup/`

## Result
NYC Tourism case study should now load **much faster** with these optimizations! 🚀

## Next Steps (Optional)
- Consider converting PNGs to WebP format for even better compression
- Implement lazy loading for images below the fold
- Add responsive image srcsets for different screen sizes


