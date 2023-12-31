function Contactus() {
  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
  };

  const cellStyle = {
    border: "1px solid #000000",
    padding: "8px",
    textAlign: "left",
  };

  const Profile = ({ names, email, phone, children }) => {
    return (
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td style={cellStyle}>
              <strong>Disclaimer</strong>
            </td>
            <td style={cellStyle}>{children}</td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Name</strong>
            </td>
            <td style={cellStyle}>{names}</td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Email</strong>
            </td>
            <td style={cellStyle}>{email}</td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Phone</strong>
            </td>
            <td style={cellStyle}>{phone}</td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Disclaimer</strong>
            </td>
            <td style={cellStyle}>{}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <>
      <div style={{ backgroundColor: "#000000", color: "white" }}>
        <h2>Contact Us</h2>
        <Profile names="Travel every-where" email="lightkr@gmail.com">
          All information on this website is provided for quick reference
          purposes only. It is the users responsibility to ensure the accuracy
          of the information while using it. The website owners do not assume
          any responsibility for the accuracy of the information.
        </Profile>
      </div>
    </>
  );
}

export default Contactus;
