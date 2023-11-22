// import React from 'react';

function Contactus() {
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const cellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  const Profile = ({ names, email, phone, children }) => {
    return (
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td style={cellStyle}><strong>Bio</strong></td>
            <td style={cellStyle}>{children}</td>
          </tr>
          <tr>
            <td style={cellStyle}><strong>Name</strong></td>
            <td style={cellStyle}>{names}</td>
          </tr>
          <tr>
            <td style={cellStyle}><strong>Email</strong></td>
            <td style={cellStyle}>{email}</td>
          </tr>
          <tr>
            <td style={cellStyle}><strong>Phone</strong></td>
            <td style={cellStyle}>{phone}</td>
          </tr>
          <tr>
            <td style={cellStyle}><strong>Bio</strong></td>
            <td style={cellStyle}>{children}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <>
      <h2>Contact Us</h2>
      <Profile names="Travel every-where" email="Great.name@kink.com" phone="879877">
        The travel page that is your vision board and also your one-stop diary for all your travel explorations!
      </Profile>
    </>
  );
}

export default Contactus;
