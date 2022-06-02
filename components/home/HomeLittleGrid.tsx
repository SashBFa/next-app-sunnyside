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
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6">
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
    </section>
  );
};

export default HomeLittleGrid;
