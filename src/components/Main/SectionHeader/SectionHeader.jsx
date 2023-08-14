import './SectionHeader.css';

function SectionHeader(props) {
  return (
    <div className='section-header'>
      <h2 className='section-header__h2'>{props.text}</h2>
      <div className='section-header__horizontal-line'></div>
    </div>
  );
}

export default SectionHeader;
