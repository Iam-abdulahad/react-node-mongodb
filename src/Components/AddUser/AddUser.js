import React from 'react';

const AddUser = () => {
          return (
                    <div>
                              <h1>Please Register as a new user</h1>
                              <form action="">
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