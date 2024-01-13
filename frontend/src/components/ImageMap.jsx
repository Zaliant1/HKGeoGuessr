import React, { useRef, useMemo } from "react";
import { Grid } from "@mui/material";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { isCorrectWithinLeniency } from "../utils";
import mapImage from "../assets/map.png";

export const ImageMap = () => {
  const rows = 150;
  const columns = rows * 1.6;
  const containerRef = useRef(null);

  const handleRegionClick = (row, col) => {
    console.log(isCorrectWithinLeniency(row, col, { x: 2, y: 4 }));
    console.log(row, col);
  };

  const gridItems = useMemo(() => {
    let output = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const x = (col / columns) * 100;
        const y = (row / rows) * 100;
        const width = (1 / columns) * 100;
        const height = (1 / rows) * 100;

        const gridItemStyle = {
          position: "absolute",
          top: `${y}%`,
          left: `${x}%`,
          width: `${width}%`,
          height: `${height}%`,
          cursor: "pointer",
        };

        output.push(
          <Grid
            key={`${row}-${col}`}
            item
            xs={Math.round(width / 10)} // Adjust based on your grid size
            style={gridItemStyle}
            onClick={() => handleRegionClick(row, col)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.border = "1px solid white")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.border = "1px solid transparent")
            }
          >
            {/* Content for each grid item */}
            {/* You can customize this based on your needs */}
          </Grid>
        );
      }
    }
    return output;
  });

  return (
    <TransformWrapper>
      <TransformComponent>
        <div
          ref={containerRef}
          style={{
            position: "relative",
            width: "90%",
            height: "90%",
            overflow: "auto",
          }}
        >
          {/* Your image */}
          <img
            ref={containerRef}
            src={mapImage}
            alt="Your Image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          {/* Overlay grid */}
          <Grid
            container
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            {gridItems}
          </Grid>
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
};
