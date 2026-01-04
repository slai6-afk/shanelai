import { motion } from 'motion/react';

interface FilterTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function FilterTabs({ categories, activeCategory, onCategoryChange }: FilterTabsProps) {
  return (
    <div className="flex justify-center gap-8 mb-20">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        
        return (
          <motion.button
            key={category}
            onClick={() => onCategoryChange(category)}
            className="relative pb-2"
            whileHover={{ opacity: 0.6 }}
            whileTap={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{
              color: '#000000',
              fontSize: '16px',
              fontWeight: isActive ? 500 : 400
            }}
          >
            {category}
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-black"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
