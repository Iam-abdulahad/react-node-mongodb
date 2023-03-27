import React from 'react';

const AddUser = () => {
          const handleAddUser = event => {
                    event.preventDefault();
                    const name = event.target.name.value;
                    const email = event.target.email.value;

                    const user = { name, email };

                    fetch('', {
                              method: 'POST',
                              headers: {
                                        'content-type': 'application/json'
                              },
                              body: JSON.stringify(user)
                    })

                    .then(res => res.json())
                    .then(data => console.log("success:", data))
          }
          return (
                    <div>
                              <h1>Please Register as a new user</h1>
                              <form onSubmit={handleAddUser}>
                                        <input type="text" name='name' placeholder='Name' required />
                                        <br />
                                        <input type="email" name='email' placeholder='Email' required />
                                        <br />
                                        <input type="submit" value="submit" />
                              </form>
                    </div>
          );
};

export default AddUser;