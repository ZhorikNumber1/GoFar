import React, { useState } from 'react';
import './TeamMember.scss'; // Импортируем стили

function TeamMember({ name, role, location, bio, facts }) {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="team-member">
            <div className="team-member-image" onMouseEnter={e => {}}>
                {/* Предполагается добавление изображения в стилях через CSS */}
            </div>
            <h3>{name}</h3>
            <p>{role}, {location}</p>
            <button onClick={() => setShowPopup(true)}>Узнать больше</button>
            {showPopup && (
                <div className="popup" onClick={() => setShowPopup(false)}>
                    <div className="popup-content" onClick={e => e.stopPropagation()}>
                        <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
                        <h3>{name}</h3>
                        <h4>{role}, {location}</h4>
                        <p>{bio}</p>
                        <p>{facts}</p>
                    </div>
                </div>
            )}
        </div>
    );

}

export default TeamMember;
