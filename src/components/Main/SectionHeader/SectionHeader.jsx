import './SectionHeader.css';

function SectionHeader(props) {
  return (
    <header className='section-header'>
      <h2 className='section-header__h2'>{props.text}</h2>
      <div className='section-header__horizontal-line'></div>
    </header>
  );
}

export default SectionHeader;
