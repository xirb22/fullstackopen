import Header from "./Header"
import Content from "./Content"

const Course = ({ course }) => {


    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <p>
                Total exercises: {
                    course.parts.reduce(
                        (acc, current) => acc = acc + current.exercises,
                        course.parts[0].exercises)
                }
            </p>
        </div>
    )
}

export default Course