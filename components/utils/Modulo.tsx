interface moduloProps {
  children: any;
  color: boolean;
}
const Modulo = (props: moduloProps) => {
  const bgColor = props.color
    ? "bg-neutral-900 text-white"
    : "bg-white text-neutral-900";

  return (
    <article
      className={`${bgColor}  px-6 py-12 sm:px-12 sm:py-16 lg:py-20 2xl:px-0`}
    >
      <div className=" max-w-screen-xl m-auto">{props.children}</div>
    </article>
  );
};

export default Modulo;
