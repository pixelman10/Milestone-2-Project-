import Footer from "../component/footer";

export default function About() {
    return (
        <div>
      <div className="card">
        <div className="card1">
          <div className="card-content">
            <h1>Education</h1>
            <ul>
              <li>
                <span className="education-title">Matric:</span> <span className="just-show">Shamsi Society Model School</span>
              </li>
              <li>
                <span className="education-title">Intermediate:</span><span className="just-show"> Adamjee Govt. Degree College</span>
              </li>
              <li>
                <span className="education-title">Certification:</span> <span className="just-show">Graphic Designing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
  