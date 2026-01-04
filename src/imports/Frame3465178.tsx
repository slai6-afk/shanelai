import imgImage454 from "figma:asset/8b0d898755f565dc30fb79154b9a947b5a8e983d.png";
import imgScreenshot20240827At1022381 from "figma:asset/2247b96fc9bb32d75ff8e52319fc6be6e0eed3b2.png";
import imgImage455 from "figma:asset/bb48f32ac813628b1eb160aae6bafc2cab18b177.png";
import imgImage427 from "figma:asset/126265cdf6c31c7f36196ad844a5f086c805d089.png";

export default function Frame3465178() {
  return (
    <div className="w-full space-y-8">
      {/* Experiment 1 */}
      <div className="border-l-4 border-[#ed964f] pl-6">
        <h4 className="font-bold text-white mb-2">EXP 1:</h4>
        <p className="text-[#ed964f] text-xs font-semibold mb-3" style={{ fontFamily: 'Apple SD Gothic Neo, sans-serif' }}>
          Can Users Really touch It?
        </p>
        <div className="bg-white rounded-lg overflow-hidden mb-3 max-w-sm">
          <img 
            alt="Experiment 1 user testing" 
            className="w-full h-auto object-contain" 
            src={imgScreenshot20240827At1022381} 
          />
        </div>
        <p className="text-[#ed964f] text-[10px] font-semibold mb-2" style={{ fontFamily: 'MuseoModerno, sans-serif' }}>
          Some can't, but not fully due to height
        </p>
      </div>
      
      {/* Experiment 2 */}
      <div className="border-l-4 border-[#ed964f] pl-6">
        <h4 className="font-bold text-white mb-2">EXP 2:</h4>
        <p className="text-[#ed964f] text-xs font-semibold mb-3" style={{ fontFamily: 'Apple SD Gothic Neo, sans-serif' }}>
          Different feeling?
        </p>
        <div className="bg-white rounded-lg overflow-hidden mb-3 max-w-sm">
          <img 
            alt="Experiment 2 results" 
            className="w-full h-auto object-contain" 
            src={imgImage427} 
          />
        </div>
        <p className="text-[#ed964f] text-[10px] font-semibold mb-2" style={{ fontFamily: 'MuseoModerno, sans-serif' }}>
          Not significant
        </p>
        <p className="text-[rgba(255,255,255,0.8)] text-xs leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          Rhythm perception varies among individuals, which can affect their ability to hit targets on time.
        </p>
      </div>
      
      {/* Experiment 3 */}
      <div className="border-l-4 border-[#ed964f] pl-6">
        <h4 className="font-bold text-white mb-2">EXP 3:</h4>
        <p className="text-[#ed964f] text-xs font-semibold mb-3" style={{ fontFamily: 'Apple SD Gothic Neo, sans-serif' }}>
          Because of mobility?
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-lg overflow-hidden">
            <img 
              alt="Experiment 3 mobility testing" 
              className="w-full h-auto object-contain" 
              src={imgImage454} 
            />
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <img 
              alt="Experiment 3 data visualization" 
              className="w-full h-auto object-contain" 
              src={imgImage455} 
            />
          </div>
        </div>
        
        <p className="text-[#ed964f] text-[10px] font-semibold mb-2" style={{ fontFamily: 'MuseoModerno, sans-serif' }}>
          Most Close Answer
        </p>
        <p className="text-[rgba(255,255,255,0.8)] text-xs leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          To investigate, we measured the mobility of 32 participants with different mobility by having them follow a custom workout video, <span className="text-[#ed964f]">pushing their movements to their maximum range</span>.
        </p>
      </div>
    </div>
  );
}
