import './Project.css';

function Project({ title, link, bottomLine }) {
  return (
    <li className='project'>
      <a className='project__link' href={link} target='_blank' rel='noreferrer'>
        <h3 className='project__title'>{title}</h3>
        <p className='project__link-symbol'>↗</p>
      </a>
      {bottomLine ? <div className='project__line'></div> : ''}
    </li>
  );
}

export default Project;
