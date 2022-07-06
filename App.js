import React from "react";

export default class SignIn extends React.Component {
state = {
  user:'',
  remember:false
};

handleChange = (event) => {
  const input = event.target;
  const value = input.type === 'checkbox' ? input.checked : input.value;

  this.setState({[input.name]:value});
};

handleSubmitForm = () => {
const {user,remember} = this.state;
localStorage.setItem('remember',remember);
localStorage.setItem('user',remember?user:'');


};

componentDidMount(){
  const remMe = localStorage.getItem('remember') === 'true';
  const user = remMe?localStorage.getItem('user'):'';
  this.setState({user,remMe});
}

 render()
{ return (  
<form onSubmit={this.handleSubmitForm}>
<label>User - <input name="user" value={this.state.user} onChange={this.handleChange} /></label>

<label><input name="remember" checked={this.state.remember} onChange={this.handleChange} type="checkbox" />Remember Me </label>

<button type="submit">Sign IN</button>

  </form>
);
}

}