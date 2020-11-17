
import React, { useContext } from "react";
import "./important-people-item.scss";
import { PeopleContext } from "../../../../context/people-context";

const ImportantPeopleItem = (props) => {
    const { setPerson } = useContext(PeopleContext); 
    const showEditForm = () =>{
        setPerson({
            id:props.id,
            image:props.image,
            name:props.name,
            position:props.position,
            description : props.description
        });
    }
  
    return (
        <article>
            <span style={{ display: 'none' }}>{props.id}</span>
            <img src={props.image} />
            <span id="edit-button"
                  data-toggle="modal"
                  data-target="#peopleModal"
                  onClick={showEditForm}></span>
            <footer>
                <b>{props.name}</b>
                <p>{props.position}</p>
            </footer>
        </article>
    );
}
export default ImportantPeopleItem;