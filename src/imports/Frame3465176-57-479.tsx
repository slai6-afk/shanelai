import imgImage452 from "figma:asset/e08ac9d96f4ab225e350ab31a03a92663887f365.png";
import imgScreenshot20250106At021806 from "figma:asset/a672b43739c45ea0135eb6167fea43b8a0084267.png";
import imgScreenshot20250106At021811 from "figma:asset/52fa7b0eec6a86ab15ae54e14ea0ae2fb3e415c1.png";
import imgScreenshot20250106At0222271 from "figma:asset/1c8f78cebe8e96a24b2fd05589454b12672f5299.png";

export default function Frame3465176() {
  return (
    <div className="w-full">
      <h3 className="text-[#ed964f] font-semibold mb-6" style={{ fontFamily: 'MuseoModerno, sans-serif' }}>
        Calibration Experience Design
      </h3>
      
      {/* Three images in a row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="flex flex-col">
          <p className="text-[#ed964f] text-[10px] font-semibold mb-2" style={{ fontFamily: 'MuseoModerno, sans-serif' }}>
            Comfort Reach
          </p>
          <div className="w-full bg-white rounded-lg overflow-hidden">
            <img 
              alt="Comfort Reach calibration screen" 
              className="w-full h-auto object-contain" 
              src={imgScreenshot20250106At021806} 
            />
          </div>
        </div>
        
        <div className="flex flex-col">
          <p className="text-[#ed964f] text-[10px] font-semibold mb-2" style={{ fontFamily: 'MuseoModerno, sans-serif' }}>
            Mid Stretch
          </p>
          <div className="w-full bg-white rounded-lg overflow-hidden">
            <img 
              alt="Mid Stretch calibration screen" 
              className="w-full h-auto object-contain" 
              src={imgScreenshot20250106At0222271} 
            />
          </div>
        </div>
        
        <div className="flex flex-col">
          <p className="text-[#ed964f] text-[10px] font-semibold mb-2" style={{ fontFamily: 'MuseoModerno, sans-serif' }}>
            Max Stretch
          </p>
          <div className="w-full bg-white rounded-lg overflow-hidden">
            <img 
              alt="Max Stretch calibration screen" 
              className="w-full h-auto object-contain" 
              src={imgScreenshot20250106At021811} 
            />
          </div>
        </div>
      </div>
      
      {/* Full width background image */}
      <div className="w-full mb-4 rounded-lg overflow-hidden">
        <img 
          alt="Calibration design overview" 
          className="w-full h-auto object-contain" 
          src={imgImage452} 
        />
      </div>
      
      {/* Description text */}
      <p className="text-white text-xs leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
        Through our experiments, we measured the hand movement range at different mobility levels, primarily influenced by age. We then fitted this data to determine the relationship between stretch levels, movement range, and height. This allows us to customize the target placement for each user based on their specific mobility, ensuring an optimal and accessible experience.
      </p>
    </div>
  );
}
