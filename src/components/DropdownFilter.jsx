// DropdownFilter.js

import React, { useState } from 'react';

const DropdownFilter = ({ types, onChangeFilter }) => {
    const [filter, setFilter] = useState('');

    const handleChangeFilter = event => {
        const selectedFilter = event.target.value;
        setFilter(selectedFilter);
        onChangeFilter(selectedFilter);
    };

    return (
        <div>
            <label htmlFor="filter">Project: </label>
            <select
                name="filter"
                value={filter}
                onChange={handleChangeFilter}
            >
                <option value="all">All</option>
                {types.map(type => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropdownFilter;
