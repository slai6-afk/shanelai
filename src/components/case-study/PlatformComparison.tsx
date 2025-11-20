import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface PlatformComparisonProps {
  caregiverImageUrl: string;
  doctorImageUrl: string;
  title?: string;
  subtitle?: string;
  caregiverCaption?: string;
  doctorCaption?: string;
}

export function PlatformComparison({
  caregiverImageUrl,
  doctorImageUrl,
  title = "Caregiver Platform & Doctor Platform",
  subtitle = "Two connected interfaces were developed to synchronize data between caregivers and healthcare professionals, ensuring early cognitive intervention.",
  caregiverCaption = "Caregiver app enables progress tracking and daily reports.",
  doctorCaption = "Doctor dashboard supports analysis and treatment plan updates."
}: PlatformComparisonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ 
        marginTop: '80px', 
        marginBottom: '64px' 
      }}
    >
      {/* Section Title */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '48px' 
      }}>
        <h3 style={{
          color: '#000000',
          fontSize: '28px',
          marginBottom: '16px'
        }}>
          {title}
        </h3>
        <p style={{
          color: '#666666',
          fontSize: '15px',
          lineHeight: '1.8',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          {subtitle}
        </p>
      </div>

      {/* Two-Column Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '48px',
        alignItems: 'start',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* Caregiver Platform Column */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <ImageWithFallback
              src={caregiverImageUrl}
              alt="Caregiver Platform mobile interface showing patient schedules and progress tracking"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxWidth: '500px',
                filter: 'drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.06))'
              }}
            />
          </div>
          <p style={{
            color: '#666666',
            fontSize: '13px',
            lineHeight: '1.6',
            marginTop: '16px',
            textAlign: 'center',
            maxWidth: '400px'
          }}>
            {caregiverCaption}
          </p>
        </div>

        {/* Doctor Platform Column */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <ImageWithFallback
              src={doctorImageUrl}
              alt="Doctor Platform desktop interface showing patient analytics and treatment plans"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxWidth: '500px',
                filter: 'drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.06))'
              }}
            />
          </div>
          <p style={{
            color: '#666666',
            fontSize: '13px',
            lineHeight: '1.6',
            marginTop: '16px',
            textAlign: 'center',
            maxWidth: '400px'
          }}>
            {doctorCaption}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
