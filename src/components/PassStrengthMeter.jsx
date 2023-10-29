'use client';
import React from "react";
import zxcvbn from "zxcvbn";

function PassStrengthMeter({ password }) {
  const testResult = zxcvbn(password);
  const strength = (testResult.score * 100) / 4;
  // console.log(strength);
  const CreatePasswordLabel = () =>  {
    switch (testResult.score) {
      case 1:
        return "Weak";
      case 2:
        return "Fair";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
  }
  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#828282";
      case 1:
        return "#EA1111";
      case 2:
        return "#FFAD00";
      case 3:
        return "9bc158";
      case 4:
        return "#00b500";
      default:
        return "none";
    }
  };
  const changePasswordColor = () => ({
    width: `${strength}%`,
    background: funcProgressColor(),
    height: "7px",
  });
  return (
    <>
      
    <div className="w-3/5 h-2 mt-1">
      <div className="rounded-full"  style={changePasswordColor()}></div>
    </div>
    <p className="w-3/5 text-end" style={{color : funcProgressColor()}}>{ CreatePasswordLabel() }</p>
    </>
  );
}

export default PassStrengthMeter;
