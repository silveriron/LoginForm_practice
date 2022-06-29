import { Container } from "react-bootstrap";
import style from "./People.module.css"
import PeopleItem from "./PeopleItem";

const People = ({people}) => {
    return(
        <Container className={style.peopleContainer}>
            {people.map(person => {
                return <PeopleItem person={person} key={person.id} />
            })}
        </Container>
    )
}

export default People;