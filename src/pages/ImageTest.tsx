import React, { useRef } from 'react';
import { Grid } from '@mui/material';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

interface ImageGridProps {
  imageUrl: string;
  rows: number;
  columns: number;
}

export const ImageTest: React.FC<ImageGridProps> = ({ imageUrl, rows, columns }) => {
  const containerRef = useRef(null);

  const gridItems = [];


  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const x = (col / columns) * 100;
      const y = (row / rows) * 100;
      const width = (1 / columns) * 100;
      const height = (1 / rows) * 100;

      const gridItemStyle = {
        position: 'absolute',
        top: `${y}%`,
        left: `${x}%`,
        width: `${width}%`,
        height: `${height}%`,
        cursor: 'pointer',
        border: '1px solid transparent', // Initial border style
      };

      gridItems.push(
        <Grid
          key={`${row}-${col}`}
          item
          xs={Math.round(width / 10)} // Adjust based on your grid size
          style={gridItemStyle}
          onClick={() => handleRegionClick(row, col)}
        >
          {/* Content for each grid item */}
          {/* You can customize this based on your needs */}
        </Grid>
      );
    }
  }

  const handleRegionClick = (row: number, col: number) => {
    // Handle click event for the specific region
    console.log("Coordinates are: " + row + " " + col);
  };

  return (
    <TransformWrapper>
      <TransformComponent>
        <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%', overflow: 'auto' }}>
          {/* Your image */}
          <img
            ref={containerRef}
            src={imageUrl}
            alt="Your Image"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          {/* Overlay grid */}
          <Grid container style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            {gridItems}
          </Grid>
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
};

