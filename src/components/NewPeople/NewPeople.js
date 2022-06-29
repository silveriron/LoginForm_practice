import { Container } from "react-bootstrap";
import NewPeopleForm from "./NewPeopleForm";
import style from "./NewPeople.module.css"

const NewPeople = ({addPeople, setEmptyName, setEmptyAge}) => {
    return(
        <Container className={style.NewPeopleContainer}>
            <NewPeopleForm addPeople={addPeople} setEmptyName={setEmptyName} setEmptyAge={setEmptyAge}/>
        </Container>
    )
}

export default NewPeople;