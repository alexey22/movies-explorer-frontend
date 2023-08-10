import './SectionHeader.css';

function SectionHeader(props) {
  const style = {
    paddingTop: props.padding_top,
  };

  return (
    <>
      <h2 style={style} className='section-header__h2'>
        {props.text}
      </h2>
      <div className='section-header__horizontal-line'></div>
    </>
  );
}

export default SectionHeader;
