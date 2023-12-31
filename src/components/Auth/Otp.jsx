import { styled } from "styled-components";

const Otp = () => {
  return (
    <Div>
      <div className="verification-section">
        <h1 className="page-title">Verify Your Account</h1>

        <p className="instructions">
          We have sent you a One Time Password <br /> to your phone number
        </p>

        <p className="instruction-question">
          Did you receive your verification?
        </p>
        <h3 className="request-again">Request Again</h3>

        <div className="input-container">
          <label htmlFor="otp">Enter OTP</label> <br />
          <input type="text" id="otp" placeholder="123456"  className="my-input"/>
        </div>

        <button className="verify-button" type="submit">
          Verify
        </button>
      </div>

      <div className="image-section">
        <img src="assets/otp.png" alt="OTP Image" />
      </div>
    </Div>
  );
};

export default Otp;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  height: 550px;
  box-shadow: 0px 106px 42px rgba(0, 0, 0, 0.01),
    0px 59px 36px rgba(0, 0, 0, 0.05), 0px 26px 26px rgba(0, 0, 0, 0.09),
    0px 7px 15px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 11px;
  max-width: 1000px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  .page-title {
    color: #000;
    text-align: center;
    font-family: "Josefin sans", sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: normal;
    margin-top: 10px;
    margin-bottom: 8px;
  }

  .instructions {
    margin-top: 30px;
    text-align: center;
    color: #000;
    font-family: "Josefin sans", sans-serif;
    font-size: 1.5625rem;
    font-weight: 400;
  }

  .instruction-question {
    text-align: center;
    color: #313030;
    font-family: "josefin sans", sans-serif;
    font-size: 1.3125;
    font-weight: 300;
    margin-top: 30px;
  }

  .request-again {
    text-align: center;
    color: #313030;
    font-family: "josefin sans", sans-serif;
    font-size: 1.3125;
    font-weight: 600;
    margin-top: 0px;
  }

  h3 {
    text-align: center;
    color: #000;
    font-family: rubik;
    font-size: 1.3125;
    font-weight: 600;
  }

  label {
    color: #000;
    text-align: center;
    font-family: "Josefin sans", sans-serif;
    font-size: 21px;
    font-weight: 400;
    line-height: normal;
  }

  .input-container {
    margin-top: 70px;
    margin-left: 10px;
    text-align: center;
  }

  .my-input {
    display: inline-flex;
    padding: 10px 300px 10px 10px;
    align-items: flex-start;
    gap: 10px;
    border: 1px solid #c7db00;
    border-radius: 8px;
    max-width: 378px;
  }


  .verification-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
  }

  .verify-button {
    max-width: 378px;
    padding: 10px 40px;
    text-align: center;
    border-radius: 8px;
    background: #c7db00;
    border: none;
    color: #000;
    text-align: center;
    font-family: "Josefin Sans", sans-serif;
    font-size: 25px;
    font-weight: 700;
    line-height: normal;
    align-self: center;
    cursor: pointer;
  }

  .image-section {
    width: 50%;
  }



  @media (max-width:765px){
    margin:0 auto;
    height: 700px;
    width:100%;
  
    .image-section {
      width: 0%;
      display:none;
    }
    .verification-section{
      margin:0 auto;
      height: auto;
    }
  .my-input{
   
    padding: 20px 40px 10px 40px;
    align-items: flex-start;
    gap: 10px;
    border: 1px solid #c7db00;
    border-radius: 8px;
    max-width: 208px;
    margin:20px;
    }

 

  }
`;
