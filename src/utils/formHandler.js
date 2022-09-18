import { notifySettings } from "./config";

export const submitHandler = async ({
  messageDispatch,
  setVisible,
  setOtp,
  otp,
  formData,
  setFormData,
  picture,
  name,
  toast,
}) => {
  messageDispatch({
    type: "ADD_TO_MESSAGE",
    payload: {
      name,
      message: formData.sms,
      otp: otp,
      date: new Date(),
      picture: picture,
    },
  });

  setVisible(false);
  const newOtp = Math.floor(100000 + Math.random() * 900000);
  setFormData({
    sms: `Hi, your OTP is ${newOtp}\n`,
  });
  setOtp(newOtp);
  toast.success("Sms sent successfully!", notifySettings);
};
