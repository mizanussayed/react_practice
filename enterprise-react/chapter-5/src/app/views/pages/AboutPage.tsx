import { DragIndicator } from '@mui/icons-material';
import { Suspense } from 'react';

const AboutPage = () => {
  return (
    <Suspense fallback={<DragIndicator />}>
      <div>
        <h1>This is About Page</h1>
      </div>
    </Suspense>
  );
};

export default AboutPage;
