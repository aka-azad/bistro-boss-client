import PropTypes from "prop-types";
const SectionHeading = ({ text }) => {
  const { heading, message } = text;
  return (
    <div className="py-12">
      <p className="text-[#D99904] text-center pb-4 italic text-xl">---{message}---</p>
      <h2 className="text-4xl py-6 px-16 uppercase font-semibold w-fit mx-auto border-y-4">{heading}</h2>
    </div>
  );
};

SectionHeading.propTypes = {
  text: PropTypes.object.isRequired,
};
export default SectionHeading;
