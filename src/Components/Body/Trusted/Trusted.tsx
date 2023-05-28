import { single_page_details } from "../../../Data/FieldsMenuData";
import "./Trusted.scss";

function Trusted() {
    const {companies_logo_section} = single_page_details;
  return (
    <section id="trusted-by-section">
      
      <h1 className="fs-md-3">Trusted by over 13,400 great teams</h1>
      <p className="fs-sm-4">Leading companies use the same courses to help employees keep their skills fresh.</p>

      <div className="logos-container">

        {
            companies_logo_section.map((logo,i)=>{
                return (
                    <img src={logo} alt={logo} className="logo" key={i} />
                )
            })
        }
      </div>

    </section>
  )
}

export default Trusted
