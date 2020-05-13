import React, { Component } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { putRequest, postRequest, getRequest } from "../../requests/requests";
import { Alert } from "reactstrap";
import {
  ErrorOutline as Error,
  CheckCircleOutline as Success,
  ErrorRounded,
} from "@material-ui/icons";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

class TermsAndConditions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderMedicalTC = () => {
    return (
      <div>
        <ul>
          <li>
            General waiting period of 30 days for new entrants on illness
            claims. No waiting period for accident related treatment.
          </li>
          <li>Cancer treatment will be subject to 2 years waiting period.</li>
          <li>
            Eligible for the main member and his/her dependents from birth
            (provided it is a term baby of 38 weeks) to 65 years. Existing
            members can continue on cover up to age of 70 years. Children above
            18 years will enjoy their own cover as principal members.
          </li>
          <li>
            New applicants aged 50 years and over will be required to undergo a
            medical examination at specific providers, before membership and
            eligibility of cover can be confirmed. Please note that this will be
            at applicants cost.
          </li>
          <li>
            All applications are subject to medical underwriting and acceptance.
            Terms may vary.
          </li>
          <li>
            Cover must be confirmed in writing and premiums paid in advance and
            in full to Jubilee Insurance for the benefits to be effective.
          </li>
          <li>
            The micro panel list of providers will apply for all medical
            services.
          </li>
          <li>
            All scheduled admissions must be pre authorized at least 48 hours
            prior to admission.
          </li>
          <li>
            For emergency admissions, the hospital will contact Jubilee
            Insurance within 48 hours of admission.
          </li>
          <li>
            All inpatient hospital bills shall be paid net of all National
            Hospital Insurance Fund (NHIF) rebates.
          </li>
          <li>
            Medical cards must be run at the accredited panel of providers and
            identification provided for access to service. Each member will also
            be required to complete and sign a claim form. Members must confirm
            access to correct services by signing the provider’s invoice.
          </li>
        </ul>
        <h3>Policy details</h3>
        <ul>
          <li>
            The applicant and the spouse should be between 18 and 65 years at
            entry.
          </li>
          <li>
            The applicant’s child (ren) should be between 1 month and 18 years
            at entry.
          </li>
          <li>
            The policy is renewable annually but has an expiry age of 70 years.
            Jubilee however reserves the rights to renew cover or not before
            expiry.
          </li>
        </ul>
        <h3>Waiting Periods</h3>
        <ul>
          <li>
            1 month for all illnesses but treatment as a result of accidental
            causes are covered from commencement date.
          </li>
          <li>
            1 month waiting period on death as a result of natural causes. Death
            as a result of any accident is covered from commencement date.
          </li>
          <li>
            12 months’ waiting period for maternity and pregnancy related
            treatments.
          </li>
          <li>
            1 year waiting period for surgical treatment unless surgery is as a
            result of an accident
          </li>
        </ul>
      </div>
    );
  };
  renderMotorTC = () => {
    return (
      <div>
        <h3>What is covered</h3>
        <ul>
          <li style={{ fontWeight: "600" }}>Loss or damage</li>
          <li style={{ fontWeight: "600" }}>Financier’s Interest</li>
          <li style={{ fontWeight: "600" }}>
            Protection, Recovery and Removal after accident
          </li>
          <li style={{ fontWeight: "600" }}>
            Authority to Repair
            <h4>
              You may authorize the repair of the Vehicle necessitated by damage
              for which we may be liable under this Policy provided that:
            </h4>
            <ul>
              <li style={{ fontWeight: "normal" }}>
                The cost of such repair does not exceed the Authorized Repair
                Limit as shown in the Schedule.
              </li>
              <li style={{ fontWeight: "normal" }}>
                A detailed cost of such repair is forwarded to us without delay.
              </li>
            </ul>
          </li>
          <li style={{ fontWeight: "600" }}>
            Indemnity to you or your authorized driver or any person in or
            getting into or out of the vehicle
          </li>
          <li style={{ fontWeight: "600" }}>
            Indemnity to Legal Representatives
          </li>
          <li style={{ fontWeight: "600" }}>
            Application of Limits of Liability
            <h4>
              In the event of an accident involving indemnity under this Section
              to more than one person the Limits of Liability will apply to the
              total amount of indemnity to all persons indemnified and such
              indemnity will apply in priority to you.
            </h4>
          </li>
          <li style={{ fontWeight: "600" }}>
            EMERGENCY MEDICAL EXPENSES
            <h4>
              We will, subject to the Limits of Liability, pay or reimburse you
              the reasonable medical expenses incurred in connection with any
              bodily injury by violent, accidental, external and visible means
              sustained by you or your Authorised Driver or any other person as
              the direct and immediate result of an accident involving the
              Vehicle.
            </h4>
          </li>
          <li style={{ fontWeight: "600" }}>Claims</li>
          <li style={{ fontWeight: "600" }}>
            Complaints
            <h4>
              We are committed to providing you with the highest standard of
              service at all times. However, if you are dissatisfied with our
              service, you have the right to complain through the channels
              stated below:
            </h4>
            <ul>
              <li style={{ fontWeight: "normal" }}>
                If you are not satisfied at your usual level of contact, send
                your written complaints to our Principal Officer who will
                respond within reasonable time upon receipt of your complaint.
              </li>
              <li style={{ fontWeight: "normal" }}>
                If you are still not satisfied you can send your written
                concerns to the Insurance Regulatory Authority (IRA).
              </li>
            </ul>
          </li>
          <li style={{ fontWeight: "600" }}>
            Disputes between You and Us
            <h4>
              If any dispute arises between you and us on any matter relating to
              this policy such dispute will be referred to:
            </h4>
            <ul>
              <li style={{ fontWeight: "normal" }}>
                A single mediator to be agreed between you and us within thirty
                (30) days of the dispute arising and the mediation process to be
                finalized not later than thirty (30) days thereafter or
              </li>
              <li style={{ fontWeight: "normal" }}>
                A single arbitrator agreed between us, to be appointed within
                thirty (30) days of the dispute arising. If we cannot agree,
                either party will refer the dispute to the Chairman of the
                Chartered Institute of Arbitrators (Kenya Branch) whose decision
                will be binding on you and us. The arbitral award will be final.
                If the dispute is not referred to the arbitration process within
                twelve (12) months we will assume you have abandoned the claim.
              </li>
            </ul>
          </li>
          <li style={{ fontWeight: "600" }}>
            Cancellation
            <ul>
              <li style={{ fontWeight: "normal" }}>
                You may cancel this policy at any time by informing us and
                returning the original and duplicate certificate of insurance,
                or if these certificates are misplaced, lost or destroyed, by
                availing a statutory declaration duly signed by a commissioner
                for oaths. We will refund you the premium for the remaining
                period of insurance based on the applicable rates.
              </li>
              <li style={{ fontWeight: "normal" }}>
                We may cancel the policy by issuing fourteen (14) days written
                notice to your last known address. We will refund your premium
                for any remaining Period of Insurance based on the applicable
                rates. You must return to us immediately the original and
                duplicate certificate of insurance.
              </li>
              Provided the refund is subject to no claim or loss having arisen
              during the current period of insurance.
            </ul>
          </li>
        </ul>
        <h3>CLAUSES</h3>
        <ol>
          <li style={{ fontWeight: "600" }}>
            Young and/or inexperienced drivers excess
            <br />
            <p style={{ fontWeight: "normal" }}>
              We will not be liable under Sections I and II of this Policy for
              the first “As shown in the schedule” of any amount otherwise
              payable in respect of loss or damage to the Vehicle (other than by
              fire, external explosion, self ignition or lightning or theft)
              occurring whilst the Vehicle is being driven by or is in the
              charge of an Authorized Driver who:-
            </p>
            <ol type="a">
              <li style={{ fontWeight: "normal" }}>
                is under twenty one (21) years of age; and/or,
              </li>
              <li style={{ fontWeight: "normal" }}>
                has not held for a period of one (1) year a licence other than a
                provisional licence to drive a vehicle of the same class as your
                Vehicle.
              </li>
            </ol>
            The amount (s) payable will be in addition to any other for which
            you may be responsible within the terms of the Policy.
          </li>
          <li style={{ fontWeight: "600" }}>
            Replacement Parts Clause <br />
            <p style={{ fontWeight: "normal" }}>
              In the event of loss or damage to the Vehicle or its accessories
              or spare parts necessitating the supply of a part not obtainable
              from stocks held in the country in which the Vehicle is held for
              repair or in the event we exercise the option under Section I-1 to
              pay in cash the amount of the loss or damage, our liability in
              respect of any such part will be limited to:-
            </p>
            <ol type="a">
              <li style={{ fontWeight: "normal" }}>
                <ol type="i">
                  <li style={{ fontWeight: "normal" }}>
                    the price quoted in the latest catalogue or price list
                    issued by the Manufacturer or his Agents for the country in
                    which the Vehicle is held for repair; or
                  </li>
                  <li style={{ fontWeight: "normal" }}>
                    if no such catalogue or price list exists the price list
                    obtained at the Manufacturer’s factory plus the reasonable
                    cost of transport otherwise than by air to the country in
                    which the Vehicle is held for repair; and
                  </li>
                  <li style={{ fontWeight: "normal" }}>
                    the reasonable cost of fitting such part.
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li style={{ fontWeight: "600" }}>
            Windscreen And Window Glass
            <p style={{ fontWeight: "normal" }}>
              In consideration of the payment of an additional premium it is
              hereby understood and agreed that any claim for the cost of
              reinstating any windscreen or window glass forming part of the
              vehicle, as a result of breakage will be made within the terms of
              the policy without deduction of any amount for which you are
              responsible in the terms of any Excess endorsement attaching to
              the policy.
            </p>
            <p style={{ fontWeight: "normal" }}>
              Any payment under this endorsement will not constitute a claim
              within the meaning of the No-Claim Discount provisions of the
              Policy.
            </p>
            <p style={{ fontWeight: "normal" }}>
              The maximum indemnity provided by this extension is limited to the
              amount shown in the Schedule and in the event of a claim arising
              under this endorsement notwithstanding that the payment may be
              less than the indemnity provided by the extension, cover under the
              extension will be forfeited and may be reinstated at our
              discretion and on payment of an additional premium.
            </p>
            <p style={{ fontWeight: "normal" }}>
              Provided that this endorsement will not apply to the breakage of
              glass arising from an occurrence in which other damage is
              sustained by your vehicle.
            </p>
          </li>
          <li style={{ fontWeight: "600" }}>
            Premium Finance
            <p style={{ fontWeight: "normal" }}>
              Where the premium or any part thereof was paid with the benefit of
              finance agreement and there remains sums outstanding (whether or
              not the date for payment of the said sums or any part thereof has
              fallen due) by you to the financier we may at our option deduct
              all or any part of the sums outstanding between you and the
              financier from any claims settlement due in respect of a loss
              under this Policy, provided the sum thereby deducted is paid
              directly by us to the financier.
            </p>
          </li>
        </ol>
      </div>
    );
  };
  renderLastExpenseTC = () => {
    return (
      <div>
        <ul>
          <li>
            Cover commences once the premium is paid in full. Premium for any
            extra dependant and for any parents should be paid up front. Payment
            to be made annually in advance through SPIRE. Premiums may be
            reviewed annually at the discretion of the underwriter.
          </li>
          <li>
            For a cover of Ksh 500,000 the benefit will be capped at a maximum
            of Ksh 250,000 in the first year of cover for the individuals with
            any of the above conditions, other members will enjoy full sum
            assured.
          </li>
          <li>
            For a cover amount of Ksh 500,000 only Ksh 250,000 will be processed
            within 48 hours upon submission of the relevant documents as
            specified in the terms and conditions. The balance will be paid upon
            submission of the original death certificate. This applies to the
            first year of cover.
          </li>
          <li>
            The maximum sum assured payable on any one applicant is Ksh. 500,000
            under the Last Expense plan regardless of how many policies an
            applicant has taken up.
          </li>
          <li>
            The maximum amount payable on death of a child below the age of 10
            years shall be Ksh 100,000 as provided by Insurance Act Cap 487 –
            Sec 96.
          </li>
        </ul>
      </div>
    );
  };
  render() {
    return (
      <Modal isOpen={this.props.open} toggle={this.props.toggle}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <span style={{ fontWeight: "600" }}>
            Please read and accept the terms and conditions before continuing
          </span>
        </div>
        <ModalBody>
          {this.props.policy === "medical"
            ? this.renderMedicalTC()
            : this.props.policy === "lastExpense"
            ? this.renderLastExpenseTC()
            : this.props.policy === "motor"
            ? this.renderMotorTC()
            : null}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>
            Cancel
          </Button>
          <Button onClick={this.props.continue} color="primary">
            Accept & Continue
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default TermsAndConditions;
