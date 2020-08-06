import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

function GenderDropdown ({genderSelected}) {
    return (
        <Dropdown>
            
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                Please select gender
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onSelect={() => genderSelected("men")}>Men</Dropdown.Item>
                <Dropdown.Item onSelect={() => genderSelected("women")}>Women</Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>
    );
}

export default GenderDropdown;
