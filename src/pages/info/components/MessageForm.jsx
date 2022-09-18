import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  CButton,
  CForm,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
} from "@coreui/react";

import TextField from "../../../shared-components/TextField";
import { useMessage } from "../../../hooks";
import { sendSms } from "../../../db-services/sendSms";
import { submitHandler } from "../../../utils/formHandler";
import { toast } from "react-toastify";
import { notifySettings } from "../../../utils/config";

const MessageForm = ({ visible, setVisible, phoneNo, name, picture }) => {
  const { messageState, messageDispatch } = useMessage();
  const [otp, setOtp] = useState(Math.floor(100000 + Math.random() * 900000));
  const [formData, setFormData] = useState({
    sms: `Hi, your OTP is ${otp}\n`,
  });

  const validator = Yup.object({
    sms: Yup.string()
      .min(3, "Must be 3 to 50 characters")
      .max(50, "Must be 3 to 50 characters")
      .required("Required"),
  });

  const handleSubmit = async (form) => {
    try {
      const res = await sendSms({ phoneNo: phoneNo, message: form.data.sms });
      if (res.data.status) {
        submitHandler({
          messageDispatch,
          setVisible,
          setOtp: setOtp,
          otp,
          formData,
          setFormData: setFormData,
          picture,
          name,
          toast,
        });
      }
    } catch (error) {
      toast.error("Somethig went wrong while sending sms!", notifySettings);
    }
  };

  return (
    <>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}></CModalHeader>
        <CModalBody onClose={() => setVisible(false)}>
          <Formik
            enableReinitialize={true}
            initialValues={formData}
            validationSchema={validator}
            onSubmit={(values, { setErrors, setStatus, resetForm }) =>
              handleSubmit({
                data: values,
                setErrors,
                setStatus,
                resetForm,
              })
            }
          >
            {(formik) => (
              <CForm onSubmit={formik.handleSubmit}>
                <TextField
                  id="sms"
                  label="Message"
                  placeholder="type message"
                  aria-describedby="exampleFormControlInputHelpInline"
                  type="text"
                  name="sms"
                />
                <CButton
                  color="dark"
                  shape="outline"
                  className="m-1"
                  type="submit"
                >
                  Send
                </CButton>
              </CForm>
            )}
          </Formik>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="dark"
            variant="outline"
            onClick={() => setVisible(false)}
          >
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export { MessageForm };
