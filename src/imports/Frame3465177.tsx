import imgImage437 from "figma:asset/035f616d1efa06d4657fa63a0e739decbf60f1ed.png";
import imgImage445 from "figma:asset/597981600c26243de56b615582f112500328f872.png";
import imgVector from "figma:asset/a62b9f9ef7257c612bb8133a2cabb925087fad8f.png";
import imgImage from "figma:asset/a387fbe921a65dbef16af07dc1bdb09361da6a31.png";

export default function Frame3465177() {
  return (
    <div className="w-full">
      <h3 className="text-[#ed964f] font-semibold mb-4" style={{ fontFamily: 'MuseoModerno, sans-serif' }}>
        What's New Updates
      </h3>
      
      <div className="mb-4">
        <p className="text-[#ed964f] text-[10px] font-semibold mb-3" style={{ fontFamily: 'MuseoModerno, sans-serif' }}>
          "What's New" Updates:
        </p>
        <div className="w-full bg-white rounded-lg overflow-hidden mb-3">
          <img 
            alt="What's New updates screen" 
            className="w-full h-auto object-contain" 
            src={imgImage} 
          />
        </div>
        <p className="text-white text-xs leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
          Introducing the Height-Based World Tweak and Adjustable DanceFit Experience. These updates allow users of all heights and mobility levels to interact comfortably with the VR system.
        </p>
      </div>
      
      <div className="mb-4">
        <p className="text-[#ed964f] text-[10px] font-semibold mb-3" style={{ fontFamily: 'MuseoModerno, sans-serif' }}>
          Calibration setting
        </p>
        <div className="w-full bg-white rounded-lg overflow-hidden mb-6">
          <img 
            alt="Calibration settings screen" 
            className="w-full h-auto object-contain" 
            src={imgVector} 
          />
        </div>
      </div>
      
      <div>
        <p className="text-[#ed964f] text-[10px] font-semibold mb-3" style={{ fontFamily: 'MuseoModerno, sans-serif' }}>
          Personal calibration system
        </p>
        <div className="w-full bg-white rounded-lg overflow-hidden">
          <img 
            alt="Personal calibration demo" 
            className="w-full h-auto object-contain" 
            src={imgImage445} 
          />
        </div>
      </div>
    </div>
  );
}
