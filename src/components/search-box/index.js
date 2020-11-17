import React from 'react';
import './search-box.scss';

const SearchBox = () => {
    return (
        <>
            <span id="search-container">
                <img id="search-box"
                    data-toggle="modal" data-target="#exampleModal"
                />

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog  modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="col-12 col-md-12 col-lg-10 form-wrapper">
                                    <form >
                                        <div className="inner-form">
                                            <div className="input-field first-wrap">
                                                <div className="svg-wrapper">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                                    </svg>
                                                </div>
                                                <input id="search" type="text" placeholder="What are you looking for?" />
</div>
                                                <div className="input-field second-wrap">
                                                    <button className="btn-search" type="button">SEARCH</button>
                                                </div>
                                            </div>
                                        <p className="info">ex. Insurance, Loan, Fintech, ...</p>
                                    </form>
                            
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </span>
        </>
    )
}


export default SearchBox;
