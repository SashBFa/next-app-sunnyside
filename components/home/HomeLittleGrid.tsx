import { Box, Grid, Paper } from "@mui/material";

const imgData = [
  {
    id: 1,
    pictureMob: "./images/mobile/image-gallery-milkbottles.jpg",
    pictureDesk: "./images/desktop/image-gallery-milkbottles.jpg",
  },
  {
    id: 2,
    pictureMob: "./images/mobile/image-gallery-orange.jpg",
    pictureDesk: "./images/desktop/image-gallery-orange.jpg",
  },
  {
    id: 3,
    pictureMob: "./images/mobile/image-gallery-cone.jpg",
    pictureDesk: "./images/desktop/image-gallery-cone.jpg",
  },
  {
    id: 4,
    pictureMob: "./images/mobile/image-gallery-sugar-cubes.jpg",
    pictureDesk: "./images/desktop/image-gallery-sugar-cubes.jpg",
  },
];
const HomeLittleGrid = () => {
  return (
    <Grid container component="section" className="mt-6 z-10">
      <Grid item xs={12} component={Paper} elevation={6}>
        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {imgData.map((img) => {
            return (
              <div key={img.id}>
                <div
                  className="block sm:hidden w-full h-80"
                  style={{
                    background: `url(${img.pictureMob}) center/cover`,
                  }}
                />
                <div
                  className="hidden sm:block w-full h-80 2xl:h-96"
                  style={{
                    background: `url(${img.pictureDesk}) center/cover`,
                  }}
                />
              </div>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomeLittleGrid;
