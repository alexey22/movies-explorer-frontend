import './Project.css';

function Project({ title, link }) {
  return (
    <li className='project'>
      <a className='project__link' href={link}>
        <h3 className='project__title'>{title}</h3>
        <p className='project__link-symbol'>↗</p>
      </a>
    </li>
  );
}

export default Project;
