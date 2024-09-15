import React, { Suspense } from 'react';
import NumberPlateList from './numberPlateList'; // Import the client-side component

// Parent Component (either in layout.tsx or page.tsx)
const ListPageWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NumberPlateList /> {/* Wrapped in Suspense for client-side rendering */}
    </Suspense>
  );
};

export default ListPageWrapper;
