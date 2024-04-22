import React from 'react';
import TeamMember from './TeamMember';
import "./TeamMember.scss"

const teamData = [
    { id: 1, name: 'Константин Петров', role: 'Дизайнер', bio: 'В начале своей карьеры провел исследование пользовательского интерфейса в ООО', imageUrl: 'path/to/image' },
    { id: 2, name: 'Константин Петров', role: 'Разработчик', bio: 'В начале своей карьеры разработал собственное ПО', imageUrl: 'path/to/image' },
      { id: 3, name: 'Константин Петров', role: 'Разработчик', bio: 'В начале своей карьеры разработал собственное ПО', imageUrl: 'path/to/image' },
      { id: 4, name: 'Константин Петров', role: 'Разработчик', bio: 'В начале своей карьеры разработал собственное ПО', imageUrl: 'path/to/image' },
        { id: 5, name: 'Константин Петров', role: 'Разработчик', bio: 'В начале своей карьеры разработал собственное ПО', imageUrl: 'path/to/image' },
        { id: 6, name: 'Константин Петров', role: 'Разработчик', bio: 'В начале своей карьеры разработал собственное ПО', imageUrl: 'path/to/image' },
    // Добавьте остальные данные аналогично
];

function TeamPage() {
    return (
        <div className="team-container">
            <h1>Наша команда</h1>
            <div className="team-grid">
                {teamData.map(member => (
                    <TeamMember key={member.id} {...member} />
                ))}
            </div>
        </div>
    );
}

export default TeamPage;
