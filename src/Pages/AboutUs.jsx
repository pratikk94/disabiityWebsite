import Heading from "../components/heading";
import Strip from "../components/strip";

export default function AboutUs() {
  return (
    <div style={{ height: "100vh" }}>
      <Strip />
      <center>
        <Heading title="About us" />
        <div
          style={{ marginLeft: "20%", marginRight: "20%", marginBottom: "10%" }}
        >
          <p
            style={{
              float: "left",

              display: "block",
              marginLeft: "0%",
              textAlign: "left",
              fontSize: "24px",
            }}
          >
            <strong>
              The Delhi Commission for Protection of Child Rights (DCPCR)
            </strong>
            has been constituted under the Commission for Protection of Child
            Rights (CPCR) Act, 2005. It is the statutory watchdog of the
            Government of Delhi on matters of child rights. Some of the child
            rights the Commission works are:
            <ol style={{ marginLeft: "5%" }}>
              <li>
                Protection of children from exploitation, abuse,
                labour,trafficking, and violence.
              </li>
              <li>Protection of children from sexual offences</li>
              <li>Protection of children from child marriage; </li>
              <li>Right to Education;</li>
              <li>
                Right to Health with emphasis on pregnancy care, infant
                care,nutritional standards, immunisation, protection against
                malnutrition, etc
              </li>
              <li>Protection of rights of children with special needs;</li>
              <li>Protection of children from substance abuse</li>
              <li>
                Enforcement of legal protections for children in case they
                commit offences and the necessary safeguards associated therein
              </li>
              <li>Right to play</li>
            </ol>
            There are different divisions within the Commission for monitoring
            the implementation of these rights, reviewing safeguards, inquiring
            into violations and advise the government on policy formulation and
            amendments. Each of these divisions is mapped to corresponding
            departments of the government and is headed by a Member, a State
            Government Secretary level position. There are 5 Members who all
            report to the Chairperson.
          </p>
          <p style={{ textAlign: "left", fontSize: "24px" }}>
            For terms and conditions :
            <a
              style={{}}
              href="https://drive.google.com/file/d/103BnW7WBnUBSPMMD41fg1pug5_KyEz1Q/view?usp=sharing"
            >
              click here
            </a>
          </p>
        </div>
      </center>
    </div>
  );
}
