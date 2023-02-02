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
            Government of Delhi on matters of child rights. The different
            divisions within the Commission monitor the implementation of
            rights, review safeguards, inquire into violations and advise the
            government on policy formulation and amendments. The broad areas of
            work include:
            <ol>
              <li>
                Protection of children from exploitation, abuse,
                labor,trafficking, and violence.{" "}
              </li>
              <li>Protection of children from sexual offenses </li>
              <li>Protection of children from child marriage;</li>
              <li>Right to Education;</li>{" "}
              <li>
                Right to Health with emphasis on pregnancy care, infant
                care,nutritional standards, immunization, protection against
                malnutrition, etc
              </li>
              <li>Protection of rights of children with special needs;</li>
              <li>Protection of children from substance abuse </li>
              <li>
                Enforcement of legal protections for children in case they
                commit offenses and the necessary safeguards associated therein
              </li>{" "}
              <li>Right to play</li>
            </ol>
            For the present initiative, the Commission has collaborated with the
            Ashoka University and the British Asian Trust as knowledge and
            resource partners, specifically for working on information
            dissemination and protection of rights of children with special
            needs.
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
