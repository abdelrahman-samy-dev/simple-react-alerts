import { Ban, Bell, CheckCheck, Info, TriangleAlert } from 'lucide-react';
import Alert from "./components/ui/Alert/Alert";

const App = () => {
  return (
    <div>
      <Alert type={"alert-default"} icon={<Bell />} title={"Upgrade your plan"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit dicta numquam minima? {" "} <a href="/">Distinctio</a> consequatur ab blanditiis nesciunt. Molestiae, quam.
        </p>
      </Alert>
      <Alert type={"alert-info"} icon={<Info />} title={"Note"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit dicta numquam minima? Distinctio consequatur ab blanditiis nesciunt. Molestiae, quam."}/>
      <Alert type={"alert-success"} icon={<CheckCheck />} title={"Your order has been processed"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit dicta numquam minima? Distinctio consequatur ab blanditiis nesciunt. Molestiae, quam."}/>
      <Alert type={"alert-error"} icon={<Ban/>} title={"Something went wrong"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit dicta numquam minima? Distinctio consequatur ab blanditiis nesciunt. Molestiae, quam."}/>
      <Alert type={"alert-warning"} icon={<TriangleAlert />} title={"Tips & Tricks"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit dicta numquam minima? Distinctio consequatur ab blanditiis nesciunt. Molestiae, quam."}/>
    </div>
  );
};

export default App;
