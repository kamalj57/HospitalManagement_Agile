import "./adm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faCapsules } from '@fortawesome/free-solid-svg-icons';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { faFileCheck } from '@fortawesome/free-regular-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Nav from "./components/Nav";
import { Link } from "react-router-dom";
function Adminpage() {
    return (
        <>
            <Nav />
            <h1 className="admin">Admin's Page</h1>
            <div className="outer-ui">
                <div className="inner-ui"><h3>Inpatient Form</h3><p className="icon-ui">  <FontAwesomeIcon icon={faFile} /></p>
                <Link class="btn-ui" to='/PatientForm'> Fill
                </Link></div>
                <div className="inner-ui"><h3>Medicine Details</h3><p className="icon-ui"><FontAwesomeIcon icon={faCapsules} /></p><button class="btn-ui"> View
                </button></div>
                <div className="inner-ui"><h3>Doctor Addendance</h3><p className="icon-ui"><FontAwesomeIcon icon={faStethoscope} /></p><Link class="btn-ui" to='/doctor-attendance'> Fill
                </Link></div>
                {/* <div className="inner-ui"><h3>Form Response</h3><p className="icon-ui"><FontAwesomeIcon icon={faFilePen} /></p><button class="btn-ui"> View
</button></div> */}
                <div className="inner-ui"><h3>Appointment Res.</h3><p className="icon-ui"><FontAwesomeIcon icon={faFilePen} /></p><button class="btn-ui"> View
                </button></div>
               

            </div>
        </>
    )

}
export default Adminpage;
