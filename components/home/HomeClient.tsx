const clientData = [
  {
    id: 1,
    picture: "./images/people/image-emily.jpg",
    comment:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    function: "Marketing Director",
  },
  {
    id: 2,
    picture: "./images/people/image-thomas.jpg",
    comment:
      "Sunnyside is enthusiasm coupled with their keen interest in our brand is success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    function: "Chief Operating Officer",
  },
  {
    id: 3,
    picture: "./images/people/image-jennie.jpg",
    comment:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    function: "Business Owner",
  },
];

const HomeClient = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <h2 className="my-8 uppercase font-medium text-gray-400 text-center text-2xl sm:text-3xl sm:my-12 lg:my-16">
        client testimonials
      </h2>
      <div className="flex flex-col lg:flex-row ">
        {clientData.map((client) => {
          return (
            <article
              key={client.id}
              className="flex flex-col items-center p-3 m-6 sm:max-w-xl sm:mx-auto shadow lg:mx-6 lg:justify-between"
            >
              <div
                className="rounded-full w-28 h-28"
                style={{
                  background: `url(${client.picture}) center/cover`,
                }}
              />
              <p className="text-center my-8 text-gray-800 font-medium text-lg sm:text-2xl">
                {client.comment}
              </p>
              <div className="flex flex-col items-center">
                <h3 className="font-bold text-2xl">{client.name}</h3>
                <h4 className="font-medium text-gray-400 text-lg sm:text-xl">
                  {client.function}
                </h4>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default HomeClient;
