import React from "react";
import FAQ from "../components/faq";
import Heading from "../components/heading";
import Strip from "../components/strip";

function EssentialDocs() {
  return (
    <div style={{ height: "100vh" }}>
      <Strip />
      <center>
        <Heading title="Essential Docs" />
        <h1
          style={{
            float: "left",
            width: "100vw",
            display: "block",
            marginLeft: "13%",
            textAlign: "left",
          }}
        >
          <strong>Essential Documents for a Person with Disability</strong>
        </h1>
        <div style={{ width: "100vw", height: "24vh" }}>
          <p
            style={{
              float: "left",
              width: "72vw",
              display: "block",
              marginLeft: "13%",
              textAlign: "left",
              fontSize: "24px",
            }}
          >
            A person with a benchmark disability as defined above will require a
            Disability Certificate & Unique Disability ID to avail benefits
            under various schemes and entitlements.
            <ul>
              <li>
                Disability Certificate: Disability Certificate or Handicap
                Certificate (as it may alternatively be called) is a document
                that certifies the type and degree of disability that has
                affected the person.
              </li>
              <li>
                {" "}
                Unique Disability ID: Unique Disability ID is a single source
                document for identification, and verification of the disabled
                for availing benefits that they are eligible for under the
                various schemes and acts.
              </li>
            </ul>
          </p>
        </div>
        <div style={{ float: "left", marginLeft: "13%" }}>
          <FAQ
            question="What is the process to avail a Disability Certificate?"
            answer="Stepwise process of obtaining a disability certificate is as follows<ul><li>The disabled person must visit a Medical Hospital for the specific disability (List attached here)</li><li>The doctor will prescribe tests depending on disability.</li><li>Duly filled form the form attached here along with documents and test reports need to be submitted to the concerned Doctor in the Medical Hospital.</li></ul>"
          />
          <FAQ
            question="What are the documents required to be submitted by a disabled person to obtain a Disability Certificate?"
            answer="<ul><li>Two recent coloured personal photos of the person with disability</li><li>Copy of the I.D. proof (Aadhar Card is best)</li><li>Copy of the address proof (Aadhar Card is best)</li><li>Copies of available medical reports</li><li>Copy of the previous Disability Certificate (in case it is being renewed)</li><ul>"
          />
          <FAQ
            question="How long is the disability certificate valid for?"
            answer="For children below the age of 18, the validity is for 5 years, whereas for those over 18, the validity is lifelong."
          />
          <FAQ
            question="What is the process to avail a Unique Disability ID (UDID) ?"
            answer="Persons with disability to use <a href = 'https://www.swavlambancard.gov.in/'>website</a> or register with the UDID web portal <a href = 'https://www.swavlambancard.gov.in/pwd/application.'>here</a><br/>Using Enrolment Number / UDID Number and Date of Birth, log into the system and click “Apply online for Disability Certificate”. Read instructions and fill out the online application.<br/>To apply offline, fill out the form as placed inAnnexure 2. It can also be downloaded from <a href = 'https://www.swavlambancard.gov.in/'>here</a>. After filling the application form with personal details, address details, disability details, employment details and identity details, it should be submitted at the District Disability Rehabilitation Centres (DDRC) along with the required documents as mentioned in point 5 below."
          />
          <FAQ
            question="Is it mandatory to get a UDID?"
            answer="UDID certificate is not mandatory for availing any direct benefits for PwDs whereas Disability Certificate is."
          />

          <FAQ
            question="What are the documents required to be submitted by a disabled person to obtain a UDID??"
            answer="<ul><li>Scanned copy of recent colour photo.</li><li>Scanned image of signature (Optional)</li><li>Scanned copy of Address Proof (Aadhar/Driving Licence/State Domicile etc.)</li><li>Scanned copy of Identity Proof (Aadhar Card/PAN Card/Driving Licence etc.)</li><li>Scanned copy of Disability Certificate (Only for those Persons with Disability who have been issued Disability Certificates by the respective Medical boards constituted at a State or District level. Disability wise list of medical authorities is placed here)</li>"
          />

          <FAQ
            question="Why is the Government encouraging Disabled Persons to get the UDID card?"
            answer="The UDID Card will help in streamlining the tracking of the physical and financial progress of beneficiaries at all levels of hierarchy of implementation - from village level, block level, district level, state level right upto the national level."
          />
        </div>
      </center>
      <div style={{ height: "24%" }}></div>
    </div>
  );
}

export default EssentialDocs;
