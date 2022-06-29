import {Row, Col} from "react-bootstrap"

const PeopleItem = ({person}) => {
    return(
        <Row>
            <Col xs={2}>{person.name}</Col>
            <Col xs={4}>{person.age}세</Col>
        </Row>
    )
}

export default PeopleItem;