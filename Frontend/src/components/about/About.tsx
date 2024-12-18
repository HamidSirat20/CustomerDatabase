const About = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-8 mx-auto">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3 className="card-title">
                About the Customer Database Management Application
              </h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                Welcome to the Customer Database Management application! This
                app is designed to help you manage customer data efficiently by
                allowing you to perform essential operations such as adding,
                updating, deleting, and searching customers.
              </p>
              <h5>Key Features:</h5>
              <ul>
                <li>
                  <strong>Add:</strong> Add new customer records with essential
                  details like Name, Email, Phone, and Address.
                </li>
                <li>
                  <strong>Update:</strong> Modify existing customer data based
                  on unique identifiers like Customer ID or Email.
                </li>
                <li>
                  <strong>Delete:</strong> Remove a customer's information from
                  the database when necessary.
                </li>
                <li>
                  <strong>Search:</strong> Search customers based on various
                  criteria, such as ID or Name.
                </li>
                <li>
                  <strong>Email Uniqueness:</strong> The app ensures that each
                  customer has a unique email address.
                </li>
                <li>
                  <strong>Undo & Redo:</strong> Easily undo or redo any action
                  you performed, such as adding or deleting customers.
                </li>
              </ul>
              <h5>Database Persistence:</h5>
              <p>
                All customer data is stored in a <code>sqlite database</code>,
                which is read and updated whenever you modify the database. This
                ensures that data is persistent across application restarts.
              </p>
            </div>
            <div className="card-footer text-muted">
              <small>Version 1.0.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
