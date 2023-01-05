import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This magic brain will try to guess your age. Give it a try by inserting the link address of a face image.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input 
                        className='f4 pa2 w-70 center ba b--silver br1' 
                        type='text' 
                        onChange={onInputChange}
                    />
                    <button 
                        className='w-30 grow f4 link ph3 ba b--silver br1 pv2 dib white bg-light-purple' 
                        onClick={onPictureSubmit}
                    >
                        Detect
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageLinkForm;