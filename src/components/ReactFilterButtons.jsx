import React, { useState } from "react";

const styles = {
    columnsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '8px',
    },
    column: {
        flex: '1',
        padding: '0 8px',
    },
    columnHeader: {
        fontWeight: 'bold',
        marginBottom: '6px',
        fontSize: '1rem',
        textAlign: 'center',
    },
    ul: {
        listStyleType: 'none',
        padding: 0,
    },
    li: {
        borderRadius: '6px',
        background: 'var(--main-4)',
        color: 'var(--main-1)',
        fontSize: '0.8rem',
        fontWeight: '500',
        padding: '0.2rem 0.6rem',
        marginBottom: '4px',
    },
    row: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "8px",
    },
    label: {
        fontWeight: "bold",
        marginBottom: "6px",
        fontSize: "0.9rem",
    },
    buttonContainer: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
    },
    button: {
        background: "transparent",
        border: "1px solid #f2f2f2",
        borderRadius: "4px",
        color: "var(--main-1)",
        cursor: "pointer",
        fontSize: "0.9rem",
        fontWeight: "500",
        margin: "0 4px 4px 0",
        padding: "6px 6px",
        transition: "all 0.3s ease",
    },
    buttonActive: {
        outline: "none", 
        boxShadow: "0 0 0 2px var(--contrast-shadow)", 
    },
};



export default function ReactFilterButtons({ skills }) {

    const [filter, setFilter] = useState('');
    const [expanded, setExpanded] = useState({ Advanced: false, Intermediate: false, Basic: false });
    const levels = ['Advanced', 'Intermediate', 'Basic'];
  
    const getButtonStyle = (categoryOrLevel) => {
      return filter === categoryOrLevel
        ? { ...styles.button, ...styles.buttonActive }
        : styles.button;
    };
  
    const filterSkillsByLevelAndCategory = (level) => {
        let filteredSkills = skills.filter(skill => skill.level === level && (filter === '' || skill.category === filter));
        // Limit the number of skills shown if not expanded
        if (!expanded[level] && filteredSkills.length > 8) {
            filteredSkills = filteredSkills.slice(0, 8);
        }
        return filteredSkills;
    };

    const toggleExpanded = (level) => {
        setExpanded(prevState => ({ ...prevState, [level]: !prevState[level] }));
    };

    return (
        <div>
          
            <div style={styles.row}>
            
                <div style={styles.buttonContainer}>
                <button style={getButtonStyle('')} onClick={() => setFilter('')}>
                All
            </button>
                    {[...new Set(skills.map(skill => skill.category))].map(category => (
                        <button key={category} style={getButtonStyle(category)} onClick={() => setFilter(category)}>
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            <div style={styles.columnsContainer}>
                {levels.map(level => (
                    <div key={level} style={styles.column}>
                        <h2 style={styles.columnHeader}>{level}</h2>
                        <ul style={styles.ul}>
                            {filterSkillsByLevelAndCategory(level).map(skill => (
                                <li key={skill.name} style={styles.li}>{skill.name}</li>
                            ))}
                        </ul>
                        {skills.filter(skill => skill.level === level && (filter === '' || skill.category === filter)).length > 8 && (
                            <button onClick={() => toggleExpanded(level)} style={styles.button}>
                                Show {expanded[level] ? 'Less' : 'More'}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
