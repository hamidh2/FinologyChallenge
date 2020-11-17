import React, { useState } from "react";
import Testimonial from "./testimonial/index";
import ImportantPeopleList from "./important-people-list/index";
import { PeopleContext } from "../../../context/people-context";
import PeopleMock from "../../../mock/people";
const profilePic = require('../../../assets/4-people/avatar.png');

const People = () => {
    const [peopleList, setPeopleList] = useState(PeopleMock);
    const [selectedPerson, setSelectedPerson] = useState(null);

    const setPerson = (selectedPerson) => {
        if (selectedPerson == null) {
            setSelectedPerson({
                id: 0,
                name: '',
                image: profilePic,
                position: '',
                description: ''
            });
        }
        else if (selectedPerson != null) {
            setSelectedPerson({
                id: selectedPerson.id,
                name: selectedPerson.name,
                image: selectedPerson.image,
                position: selectedPerson.position,
                description: selectedPerson.description
            });
        }
    }

    const addPerson = (person) => {
        person.id = peopleList[peopleList.length - 1].id++;
        peopleList.push(person);
        setPeopleList([...peopleList]);
    }

    const editPerson = (person) => {
        var index = peopleList.findIndex(x => x.id == person.id);
        console.log("matchedItemIndex", index);
        if (peopleList[index] != null) {
            peopleList[index].name = person.name;
            peopleList[index].image = person.image;
            peopleList[index].position = person.position;
            peopleList[index].description = person.description;
        }
        setPeopleList([ ...peopleList ]);
    }

    return (<>
        <PeopleContext.Provider value={{ peopleList, selectedPerson, setPerson, addPerson, editPerson }}>
            <Testimonial />
            <ImportantPeopleList />
        </PeopleContext.Provider>

    </>)
}

export default People;