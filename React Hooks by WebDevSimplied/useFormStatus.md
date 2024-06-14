#   This New React Hook Changes How You Use Forms

>   VideoLink: https://www.youtube.com/watch?v=_tUdtt6H5CE

again, we may need the experimental react as per (august 2023)

useFormStatus is a Hook that gives you status information of the last form submission.

const { pending, data, method, action } = useFormStatus();

#   Reference 
useFormStatus() 
The useFormStatus Hook provides status information of the last form submission.

import { useFormStatus } from "react-dom";
import action from './actions';

function Submit() {
  const status = useFormStatus();
  return <button disabled={status.pending}>Submit</button>
}

export default function App() {
  return (
    <form action={action}>
      <Submit />
    </form>
  );
}

To get status information, the Submit component must be rendered within a <form>. The Hook returns information like the pending property which tells you if the form is actively submitting.

In the above example, Submit uses this information to disable <button> presses while the form is submitting.

> Parameters 
useFormStatus does not take any parameters.

> Returns 

A status object with the following properties:

- pending: A boolean. If true, this means the parent <form> is pending submission. Otherwise, false.
- data: An object implementing the FormData interface that contains the data the parent <form> is submitting. If there is no active submission or no parent <form>, it will be null.
- method: A string value of either 'get' or 'post'. This represents whether the parent <form> is submitting with either a GET or POST HTTP method. By default, a <form> will use the GET method and can be specified by the method property.
- action: A reference to the function passed to the action prop on the parent <form>. If there is no parent <form>, the property is null. If there is a URI value provided to the action prop, or no action prop specified, status.action will be null.

> Caveats 
- The useFormStatus Hook must be called from a component that is rendered inside a <form>.
- useFormStatus will only return status information for a parent <form>. It will not return status information for any <form> rendered in that same component or children components.
