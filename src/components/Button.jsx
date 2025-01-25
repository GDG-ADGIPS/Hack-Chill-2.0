import PropTypes from 'prop-types';

const Button = ({ href, className, target, rel, logo, alt }) => {
  return (
    <a href={href} className={className} target={target} rel={rel}>
      <img src={logo} alt={alt} className="partner-logo" />
    </a>
  );
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Button.defaultProps = {
  target: '_self',
  rel: 'noopener noreferrer',
};

export default Button;
