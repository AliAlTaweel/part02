import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
const Course = (props) => {
      return (
        <div>
          {props.course.map((ele) => (
            <div key={ele.id}>
              <Header course={ele.name} />
              {ele.parts.map((part) => (
                <Content key={part.id} part={part.name} exercises={part.exercises} />
              ))}
              {
                <Total sum={ele.parts.reduce((subSum, part) => subSum + part.exercises, 0)}/>
              }
            </div>
          ))}
        </div>
      );
  }
  export default Course