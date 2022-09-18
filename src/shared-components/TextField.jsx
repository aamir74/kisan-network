import React, { memo } from "react";
import {
  CFormLabel,
  CRow,
  CCol,
  CFormTextarea,
} from "@coreui/react";
import { ErrorMessage, useField } from "formik";

const TextField = memo(({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <CFormLabel htmlFor={field.name} className="fw-semibold">
        {label}
      </CFormLabel>
      <CRow className="d-flex align-items-center">
        <CCol xs={12}>
          <CFormTextarea
            {...field}
            {...props}
            className={`${meta.touched && meta.error && "is-invalid"}`}
          />
        </CCol>
      </CRow>
      <ErrorMessage
        name={field.name}
        component="div"
        className="fw-normal text-danger"
      />
      <br />
    </div>
  );
});

export default TextField;
