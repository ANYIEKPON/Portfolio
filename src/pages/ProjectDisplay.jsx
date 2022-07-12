import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../context/ProjectList';
import { GitHub } from '@mui/icons-material';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    
  return (
    <div className='project'>
            <h1>{project.name}</h1>

            <img src={project.image} />
            <GitHub />

            {/* Add the skill aspect */}
    </div>
  )
}

export default ProjectDisplay;