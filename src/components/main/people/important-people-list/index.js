import React, { useContext } from 'react';
import './important-people-list.scss';
import ImportantPeopleItem from './important-people-item';
import ImportantPeopleForm from './important-people-form';
import { PeopleContext } from '../../../../context/people-context';

const ImportantPeopleList = () => {
    const { peopleList, setPerson } = useContext(PeopleContext);
    const handleAddPerson = () => setPerson(null);

    return (
        <div id="important-people-list">
            <div className="row">
                <div className="col-md-6 col-xs-12 d-flex">
                    <span id="icon-holder">
                        <img />
                    </span>
                    <p className="heading">Our important People is listed here</p>
                </div>
                <div className="col-md-6 col-xs-12 d-flex justify-content-end">
                    <div id="actions-wrapper">
                        <button className="btn btn-orange">Edit</button>
                        <button className="btn btn-gray ml-3" data-toggle="modal" data-target="#peopleModal" onClick={handleAddPerson}>Add</button>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-3">
                {
                    peopleList.map(p =>
                        <div className="col-md-2 col-xs-6" key={p.id}>
                            <ImportantPeopleItem
                                id={p.id}
                                name={p.name}
                                image={p.image}
                                position={p.position}
                            />
                        </div>
                    )
                }
            </div>
            <ImportantPeopleForm />
        </div>)
}

export default ImportantPeopleList;