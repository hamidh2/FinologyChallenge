import React, { Component, createRef, useContext, useEffect, useRef, useState } from 'react';
import { PeopleContext } from '../../../../context/people-context';
import './important-people-form.scss';
const profilePic = require('../../../../assets/4-people/avatar.png');

const ImportantPeopleForm = (props) => {
    const { selectedPerson, addPerson, editPerson } = useContext(PeopleContext);
    const [title, setTitle] = useState("Add People");
    const [deleteSectionDisplay, setDeleteSectionDisplay] = useState("none");
    const [state, setState] = useState({
        id: 0,
        image: profilePic,
        name: '',
        position: '',
        description: ''
    });

    useEffect(() => {
        if (selectedPerson != null && selectedPerson.id != 0) {
            setState({
                id: selectedPerson.id,
                image: selectedPerson.image,
                name: selectedPerson.name,
                position: selectedPerson.position,
                description: selectedPerson.description
            });
           
            setTitle("Edit People");
            setDeleteSectionDisplay("block");
        } else {
            setState({
                id: 0,
                image: profilePic,
                name: '',
                position: '',
                description: ''
            })
            setTitle("Add People");
            setDeleteSectionDisplay("none");
        }
    }, [selectedPerson])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const btnCancel = useRef();
    const avatar = useRef();
    const fielUploader = useRef();

    const validateForm = () => {
        if (state.image.trim() == "") {
            alert("image is required!");
            return false;
        }
        if (state.name.trim() == "") {
            alert("name is required!");
            return false;
        }
        if (state.position.trim() == "") {
            alert("position is required!");
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            if (selectedPerson.id == 0) {
                addPerson(state);
            }
            else if (selectedPerson.id != 0) {
                editPerson(state);
            }
            btnCancel.current.click();
        }
    }

    const deletePicture = () => {
        setState({
            image: profilePic
        });
        setTitle("Edit People");
    }

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setState({
                image: URL.createObjectURL(img)
            });
        }
    };

    const avatarClickHandler = () => {
        fielUploader.current.click();
    }

    return (
        <div className="modal fade" id="peopleModal" tabIndex="-1" role="dialog" aria-labelledby="peopleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title heading-small " id="peopleModalLabel">{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" value={state.id} />
                            <div id="user-profile">
                                <img ref={avatar} src={state.image} onClick={avatarClickHandler} />
                                <input type="file" ref={fielUploader} onChange={onImageChange} />
                            </div>
                            <div id="delete-section" style={{ display: deleteSectionDisplay }}>
                                <span onClick={deletePicture}><i></i></span>Delete Picture
                                </div>
                            <div>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input className="form-control" placeholder="Enter name" onChange={handleChange} name="name" value={state.name} />
                                </div>
                                <div className="form-group">
                                    <label>position</label>
                                    <input className="form-control" placeholder="Enter position" onChange={handleChange} name="position" value={state.position} />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea rows="5" placeholder="Enter description" className="form-control"
                                        name="description"
                                        onChange={handleChange} value={state.description}></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn text-muted" data-dismiss="modal" ref={btnCancel}>Cancel</button>
                                <button type="submit" className="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default ImportantPeopleForm;