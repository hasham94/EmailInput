import React, { useState } from "react";
import {
  addEmailToList,
  removeEmailByIndex,
  createRandomEmail,
  getValidEmailCount,
  checkIsValidEmail,
} from "./utils";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  flex-direction: column;
  border: 1px solid #c3c2cf;
  padding: 8px 18px;
  height: 96px;
  overflow: auto;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 150px;
`;
const ValidEmail = styled.div`
  color: #050038;
  padding: 1px;
  border-radius: 11px;
  background: #e0ebff;
  display: inline-block;
  width: fit-content;
  margin-right: 8px;
  padding: 0px 8px;
`;
const InValidEmail = styled.div`
  color: #050038;
  padding: 1px;
  border-bottom: 1px dashed #d92929;
  display: inline-block;
  width: fit-content;
  margin-right: 8px;
`;
const EmailLabel = styled.span`
  font-size: 12px;
`;
const RemoveButton = styled.button`
  font-size: 12px;
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
`;
const ButtonWrapper = styled.div`
  margin-top: 32px;
`;
const Button = styled.button`
  background: #4262ff;
  color: white;
  border: none;
  padding: 9px;
  border-radius: 6px;
  margin-right: 13px;
  outline: none;
  cursor: pointer;
`;

const EmailInput = () => {
  const [emails, setEmails] = useState([]);
  const [fieldValue, setFieldValue] = useState("");
  const [totalEmail, setTotalEmail] = useState("");

  const addNewEmail = (value) => {
    const newEmailList = addEmailToList(emails, value);
    setEmails(() => {
      return [...newEmailList];
    });
    setFieldValue("");
    setTotalEmail("");
  };

  const removeEmail = (index) => {
    setEmails(() => removeEmailByIndex(emails, index));
  };

  const addRandomEmail = () => {
    const email = createRandomEmail();
    addNewEmail(email);
  };

  const getEmailCount = () => {
    setTotalEmail(getValidEmailCount(emails));
  };

  const addPastedEmails = (e) => {
    const pastedEmails = e.target.value.split(",");
    const mailsList = pastedEmails.map((item) => {
      return {
        email: item,
        isValid: checkIsValidEmail(item),
      };
    });
    setEmails([...emails, ...mailsList]);
    setFieldValue("");
  };

  const EmailContent = (value, index) => {
    return (
      <EmailLabel>
        {value}
        <RemoveButton onClick={() => removeEmail(index)}>x</RemoveButton>
      </EmailLabel>
    );
  };
  return (
    <>
      <Wrapper>
        {emails.map((item, index) =>
          item.isValid ? (
            <ValidEmail key={index}>
              {EmailContent(item.email, index)}
            </ValidEmail>
          ) : (
            <InValidEmail key={index}>
              {EmailContent(item.email, index)}
            </InValidEmail>
          )
        )}
        <Input
          type="text"
          placeholder="add more people…"
          value={fieldValue}
          onKeyDown={(e) => {
            if (e.keyCode === 13 || e.which === 188) {
              addNewEmail(e.target.value);
            }
          }}
          onPaste={(e) => {
            setTimeout(() => {
              addPastedEmails(e);
            }, 4);
          }}
          onChange={(e) => setFieldValue(e.target.value)}
        />
      </Wrapper>
      <ButtonWrapper>
        <Button onClick={addRandomEmail}>Add email</Button>
        <Button onClick={getEmailCount}>Get emails count</Button>
        {totalEmail && <p>Valid Emails : {totalEmail}</p>}
      </ButtonWrapper>
    </>
  );
};

export default EmailInput;
