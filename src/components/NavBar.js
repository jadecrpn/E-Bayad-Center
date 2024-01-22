import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const buttonStyle = {
    backgroundColor: 'transparent',
    color: '#000000',
    border: '1px solid rgb(0, 0, 0)',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
  };

    const navigate = useNavigate();

    const isLoginPage = window.location.pathname === '/login';

    const handleButtonClick = () => {
      if (isLoginPage) {
          navigate('/signup');

  
      } else {
        
          // Handle logout logic or navigate to another page
          navigate('/login');
      }
  };



  return (
    <nav>
        <div className="title">E-BILLING APP</div>
        <button style={buttonStyle} onClick={handleButtonClick}>
            {isLoginPage ? 'SIGN UP' : 'LOG IN'}
        </button>
    </nav>
  );

};


export default Navigation;