import Header from "./components/Header";
import Content from "./components/Content";
import Total from './components/Total'

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <Header course={course.name} />
    
      {course.parts.map((part) => (
        <Content key={part.id} part={part.name} exercises={part.exercises} />
      ))}
    <Total sum={totalExercises} />
    </div>
  );
};

export default App;
