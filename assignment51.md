```js
// Main.jsx
import React from "react";
import LoginStatus from "./LoginStatus";

const LoginParent = () => {
const user = { name: "Manu", isLoggedIn: true };

return (
<div>
<LoginStatus user={user} />
</div>
);
};

export default LoginParent;


// LoginStatus.jsx
import React from "react";

const LoginStatus = (props) => {
const { isLoggedIn } = props.user;

return (
<div>
<h3>{isLoggedIn ? "Welcome back!" : "Please login"}</h3>
</div>
);
};

export default LoginStatus;
```
