
const Heading = ({ heading, subHeading, primaryContent, secondaryContent }) => {
  return (
    <>
      <h3 className="section-heading">{heading} </h3>
      <p className="section-subheading">{subHeading}</p>

      <p className="section-paragraph">{primaryContent}</p>
      <p className="section-paragraph">{secondaryContent}</p>
    </>
  );
};

export default Heading;
