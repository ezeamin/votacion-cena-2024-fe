import { useState } from 'react';

import { motion } from 'framer-motion';

// Define the type for an item
interface ListItem {
  id: string;
  content: string;
}

// Initial list data
const initialItems: ListItem[] = [
  { id: '1', content: 'Option 1' },
  { id: '2', content: 'Option 2' },
  { id: '3', content: 'Option 3' },
  { id: '4', content: 'Option 4' },
];

const App = () => {
  const [items, setItems] = useState<ListItem[]>(initialItems);


  // Function to reorder items
  const reorderItems = () => {
    setItems(
      (prevItems) => [...prevItems].sort(() => Math.random() - 0.5) // Example random sort
    );
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 p-6">
      <button
        onClick={reorderItems}
        className="btn btn-primary mb-4 text-white"
      >
        Reorder Items
      </button>
      <div className="w-full max-w-md space-y-2">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            className="rounded-lg bg-white p-4 text-gray-800 shadow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            {item.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default App;
