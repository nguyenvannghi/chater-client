import React from 'react';
import { useImmer } from 'use-immer';

const About = () => {
    const [person, updatePerson] = useImmer({
        name: 'Michel',
        age: 33,
    });

    function updateName(name) {
        updatePerson(draft => {
            draft.name = name;
        });
    }

    function becomeOlder() {
        updatePerson(draft => {
            // eslint-disable-next-line no-plusplus
            draft.age++;
        });
    }

    return (
        <div className="App">
            <h1>
                Hello {person.name} ({person.age})
            </h1>
            <input
                onChange={e => {
                    updateName(e.target.value);
                }}
                value={person.name}
            />
            <br />
            <button onClick={becomeOlder}>Older</button>
        </div>
    );
};

export default About;
