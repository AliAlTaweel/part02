import Parts from "./Parts";
const Content = (props) => {
  return (
    <>
      <Parts part={props.part} exercises={props.exercises} />
    </>
  );
};
export default Content;
